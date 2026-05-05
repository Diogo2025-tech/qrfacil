import { useState, useRef, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import { useHistory } from "@/hooks/useHistory";
import { useCustomerId } from "@/hooks/useCustomerId";
import PixModal from "@/components/PixModal";

export type QRType = "url" | "whatsapp" | "pix" | "phone" | "wifi";

const TABS = [
  { id: "url" as QRType,       label: "URL",       icon: "🔗" },
  { id: "whatsapp" as QRType,  label: "WhatsApp",  icon: "whatsapp" },
  { id: "pix" as QRType,       label: "PIX",       icon: "pix" },
  { id: "phone" as QRType,     label: "Telefone",  icon: "📞" },
  { id: "wifi" as QRType,      label: "WiFi",       icon: "📶" },
];

function buildQRData(type: QRType, fields: Record<string, string>): string {
  switch (type) {
    case "url":      return fields.url || "";
    case "whatsapp": {
      const num = fields.phone?.replace(/\D/g, "") || "";
      const msg = encodeURIComponent(fields.message || "");
      return `https://wa.me/${num}${msg ? `?text=${msg}` : ""}`;
    }
    case "pix":   return fields.pixKey || "";
    case "phone": return `tel:${fields.phone || ""}`;
    case "wifi":  return `WIFI:T:${fields.security || "WPA"};S:${fields.ssid || ""};P:${fields.password || ""};;`;
    default:      return "";
  }
}

// States: idle → previewing (blurred, locked) → paying → unlocked
type Stage = "idle" | "previewing" | "paying" | "unlocked";

export default function QRGenerator() {
  const [activeTab, setActiveTab] = useState<QRType>("url");
  const [fields, setFields]       = useState<Record<string, string>>({});
  const [fgColor, setFgColor]     = useState("#7C3AED");
  const [bgColor, setBgColor]     = useState("#0a0a0f");
  const QR_SIZE = 256;

  const [stage, setStage]             = useState<Stage>("idle");
  const [isGenerating, setGenerating] = useState(false);
  const [payLoading, setPayLoading]   = useState(false);
  const [showPix, setShowPix]         = useState(false);

  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const { addToHistory } = useHistory();
  const customerId  = useCustomerId();

  const setField = (k: string, v: string) => {
    setFields(p => ({ ...p, [k]: v }));
    // reset to idle if user edits after generating
    if (stage === "unlocked") setStage("idle");
  };

  const getLabel = useCallback((): string => {
    switch (activeTab) {
      case "url":       return fields.url || "URL";
      case "whatsapp":  return `WhatsApp +${fields.phone || ""}`;
      case "pix":       return `PIX: ${fields.pixKey || ""}`;
      case "phone":     return `Tel: ${fields.phone || ""}`;
      case "wifi":      return `WiFi: ${fields.ssid || ""}`;
      default:          return "QR Code";
    }
  }, [activeTab, fields]);

  // Paint QR onto canvas
  const paintQR = useCallback(async () => {
    const data = buildQRData(activeTab, fields);
    if (!data || !canvasRef.current) return false;
    await QRCode.toCanvas(canvasRef.current, data, {
      width: QR_SIZE,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
      errorCorrectionLevel: "H",
    });
    return true;
  }, [activeTab, fields, fgColor, bgColor]);

  // Step 1: generate preview (blurred)
  const handleGenerate = async () => {
    const data = buildQRData(activeTab, fields);
    if (!data) return;
    setGenerating(true);
    try {
      const ok = await paintQR();
      if (ok) setStage("previewing");
    } catch (e) { console.error(e); }
    finally { setGenerating(false); }
  };

  // Step 2: pay R$2
  const handlePay = () => {
    setShowPix(true);
  };

  const handlePixPaid = async () => {
    setShowPix(false);
    // Regera o QR e desbloqueia
    await paintQR();
    setStage("unlocked");
    if (canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL("image/png");
      addToHistory({ type: activeTab, label: getLabel(), dataUrl, fgColor, bgColor });
    }
  };

  const downloadPNG = () => {
    if (!canvasRef.current || stage !== "unlocked") return;
    const link = document.createElement("a");
    link.download = `qrfacil-${activeTab}-${Date.now()}.png`;
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };



  // Reset on tab change
  useEffect(() => {
    setFields({});
    setStage("idle");
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx?.clearRect(0, 0, QR_SIZE, QR_SIZE);
    }
  }, [activeTab]);

  const hasData   = buildQRData(activeTab, fields).length > 0;
  const isPreviewing = stage === "previewing";
  const isUnlocked   = stage === "unlocked";

  const inputSt = { background: "var(--input)", border: "1px solid var(--border)", color: "var(--foreground)" };
  const inputCl = "w-full px-4 py-3 rounded-xl text-sm font-medium outline-none border transition-all duration-200 placeholder:text-muted-foreground";

  const renderFields = () => {
    switch (activeTab) {
      case "url":
        return <>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Endereço URL</label>
          <input style={inputSt} className={inputCl} type="url" placeholder="https://seusite.com.br"
            value={fields.url||""} onChange={e=>setField("url",e.target.value)} />
        </>;
      case "whatsapp":
        return <>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Número (com DDD + DDI)</label>
          <input style={inputSt} className={inputCl} type="tel" placeholder="+55 11 99999-9999"
            value={fields.phone||""} onChange={e=>setField("phone",e.target.value)} />
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">Mensagem (opcional)</label>
          <textarea style={{...inputSt,resize:"none"}} className={`${inputCl} h-16`}
            placeholder="Olá! Vi seu QR Code..." value={fields.message||""} onChange={e=>setField("message",e.target.value)} />
        </>;
      case "pix":
        return <>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Chave PIX</label>
          <input style={inputSt} className={inputCl} placeholder="CPF, telefone, email ou chave aleatória"
            value={fields.pixKey||""} onChange={e=>setField("pixKey",e.target.value)} />
        </>;
      case "phone":
        return <>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Número de Telefone</label>
          <input style={inputSt} className={inputCl} type="tel" placeholder="+55 11 99999-9999"
            value={fields.phone||""} onChange={e=>setField("phone",e.target.value)} />
        </>;
      case "wifi":
        return <>
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Nome da Rede (SSID)</label>
          <input style={inputSt} className={inputCl} placeholder="MinhaRedeCasa"
            value={fields.ssid||""} onChange={e=>setField("ssid",e.target.value)} />
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">Senha</label>
          <input style={inputSt} className={inputCl} type="password" placeholder="Senha do WiFi"
            value={fields.password||""} onChange={e=>setField("password",e.target.value)} />
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mt-2">Segurança</label>
          <select style={inputSt} className={inputCl} value={fields.security||"WPA"} onChange={e=>setField("security",e.target.value)}>
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">Sem senha</option>
          </select>
        </>;
    }
  };

  return (
    <>
      {showPix && (
        <PixModal
          customerId={customerId}
          onPaid={handlePixPaid}
          onClose={() => setShowPix(false)}
        />
      )}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT — form */}
      <div className="glass-card rounded-2xl p-6 space-y-5">
        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl" style={{background:"var(--secondary)"}}>
          {TABS.map(tab => (
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)}
              className="flex-1 flex flex-col items-center gap-0.5 py-2 px-1 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{
                background: activeTab===tab.id ? "var(--primary)" : "transparent",
                color:      activeTab===tab.id ? "var(--primary-foreground)" : "var(--muted-foreground)",
                boxShadow:  activeTab===tab.id ? "0 2px 8px var(--primary)" : "none",
              }}>
              {tab.icon === "whatsapp" ? (
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              ) : tab.icon === "pix" ? (
                <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C357.9 387.9 380.4 396.1 403.3 396.1C406 396.1 408.7 396 411.3 395.8L336.5 470.6C319.5 487.6 294.9 496 270.3 496C245.7 496 221 487.6 204.1 470.6L128.7 395.2C133.1 395.7 137.5 396.1 142 396.1C164.9 396.1 187.4 387.9 205.8 369.5L242.4 292.5zM411.3 116.2C408.7 116 406 115.9 403.3 115.9C380.4 115.9 357.9 124.1 339.5 142.5L262.5 219.5C257.1 224.9 247.8 224.9 242.4 219.5L205.8 142.5C187.4 124.1 164.9 115.9 142 115.9C137.5 115.9 133.1 116.3 128.7 116.8L204.1 41.37C221 24.35 245.7 16 270.3 16C294.9 16 319.5 24.35 336.5 41.37L411.3 116.2zM100.8 144.5C118.3 144.5 135 151.2 147.4 163.6L184 200.2C192.3 208.5 192.3 221.5 184 229.8L147.4 266.4C135 278.8 118.3 285.5 100.8 285.5H16V144.5H100.8zM395.2 144.5H480V285.5H395.2C377.7 285.5 361 278.8 348.6 266.4L312 229.8C303.7 221.5 303.7 208.5 312 200.2L348.6 163.6C361 151.2 377.7 144.5 395.2 144.5z"/>
                </svg>
              ) : (
                <span className="text-base">{tab.icon}</span>
              )}
              <span className="hidden sm:block">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Fields */}
        <div className="flex flex-col gap-2">{renderFields()}</div>

        {/* Color pickers */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Personalizar Cores</p>
          <div className="flex gap-4 mb-3">
            <label className="flex items-center gap-3 cursor-pointer flex-1">
              <input type="color" value={fgColor} onChange={e=>{setFgColor(e.target.value);if(stage!=="idle")setStage("idle");}} className="w-10 h-10 cursor-pointer" />
              <div><p className="text-sm font-semibold">QR Code</p><p className="text-xs text-muted-foreground">{fgColor}</p></div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer flex-1">
              <input type="color" value={bgColor} onChange={e=>{setBgColor(e.target.value);if(stage!=="idle")setStage("idle");}} className="w-10 h-10 cursor-pointer" />
              <div><p className="text-sm font-semibold">Fundo</p><p className="text-xs text-muted-foreground">{bgColor}</p></div>
            </label>
          </div>
          <div className="flex gap-2 flex-wrap">
            {[
              {fg:"#7C3AED",bg:"#0a0a0f"},{fg:"#06B6D4",bg:"#0a0a0f"},
              {fg:"#10B981",bg:"#0a0a0f"},{fg:"#F59E0B",bg:"#0a0a0f"},
              {fg:"#000000",bg:"#FFFFFF"},{fg:"#FFFFFF",bg:"#1e1b4b"},
            ].map((p,i)=>(
              <button key={i} onClick={()=>{setFgColor(p.fg);setBgColor(p.bg);if(stage!=="idle")setStage("idle");}}
                className="w-7 h-7 rounded-full border-2 transition-transform hover:scale-110"
                style={{background:`linear-gradient(135deg,${p.fg} 50%,${p.bg} 50%)`,borderColor:fgColor===p.fg&&bgColor===p.bg?"var(--primary)":"var(--border)"}}/>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <button onClick={handleGenerate} disabled={!hasData||isGenerating||isUnlocked}
          className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{
            background: hasData&&!isUnlocked ? "var(--primary)" : "var(--muted)",
            color:       hasData&&!isUnlocked ? "var(--primary-foreground)" : "var(--muted-foreground)",
            boxShadow:   hasData&&!isUnlocked ? "var(--qr-glow)" : "none",
          }}>
          {isGenerating ? "Gerando prévia..." : isUnlocked ? "✅ QR Liberado!" : "✨ Gerar QR Code"}
        </button>
      </div>

      {/* RIGHT — preview + paywall overlay */}
      <div className="glass-card rounded-2xl p-6 flex flex-col items-center gap-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground self-start">Prévia</p>

        {/* QR area */}
        <div className="relative flex items-center justify-center" style={{width: QR_SIZE+32, height: QR_SIZE+32}}>
          {/* Canvas — always rendered, shown blurred or clear */}
          <div
            className="relative rounded-2xl p-4 transition-all duration-500"
            style={{
              background: bgColor,
              boxShadow: isUnlocked ? "var(--qr-glow)" : "0 0 0 1px var(--border)",
            }}
          >
            {/* Placeholder shown when idle */}
            {stage === "idle" && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl z-10"
                style={{background:"var(--card)"}}>
                <div className="text-5xl opacity-20">⬛</div>
                <p className="text-xs text-muted-foreground text-center px-4">
                  Preencha e clique em<br/><strong>Gerar QR Code</strong>
                </p>
              </div>
            )}
            {/* Canvas always in DOM */}
            <canvas
              ref={canvasRef}
              width={QR_SIZE}
              height={QR_SIZE}
              style={{
                borderRadius: "8px",
                display: "block",
                filter: isPreviewing ? "blur(8px) brightness(0.6)" : "none",
                transition: "filter 0.4s ease",
                userSelect: "none",
                pointerEvents: isPreviewing ? "none" : "auto",
                opacity: stage === "idle" ? 0 : 1,
              }}
            />
          </div>

          {/* PAYWALL OVERLAY — shown when previewing */}
          {isPreviewing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
              style={{backdropFilter:"blur(2px)"}}>
              <div className="flex flex-col items-center gap-4 px-4 text-center">
                {/* lock icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{background:"var(--primary)",boxShadow:"0 0 30px var(--primary)"}}>
                  🔒
                </div>

                <div>
                  <p className="font-black text-lg leading-tight" style={{fontFamily:"'Space Grotesk',sans-serif"}}>
                    QR gerado!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Pague R$2 para desbloquear<br/>e baixar em PNG
                  </p>
                </div>

                {/* Price badge */}
                <div
                  className="px-4 py-2 rounded-xl flex items-baseline gap-1"
                  style={{background:"var(--secondary)",border:"1px solid var(--border)"}}>
                  <span className="text-xs text-muted-foreground font-medium">R$</span>
                  <span className="text-3xl font-black" style={{fontFamily:"'Space Grotesk',sans-serif",color:"var(--primary)"}}>2</span>
                  <span className="text-xs text-muted-foreground">,00</span>
                </div>

                <button
                  onClick={handlePay}
                  disabled={payLoading}
                  className="w-full py-3 px-6 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60"
                  style={{
                    background:"var(--primary)",
                    color:"var(--primary-foreground)",
                    boxShadow:"0 0 20px var(--primary)",
                    minWidth:"180px",
                  }}>
                  {payLoading ? "Abrindo checkout..." : "🔓 Pagar R$2 e baixar"}
                </button>

                <p className="text-xs text-muted-foreground" style={{fontSize:"10px"}}>
                  Mercado Pago · Cartão, PIX ou boleto · Seguro
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Download button — only active when unlocked */}
        <button
          onClick={downloadPNG}
          disabled={!isUnlocked}
          className="w-full py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: isUnlocked ? "var(--accent)" : "var(--muted)",
            color:       isUnlocked ? "var(--accent-foreground)" : "var(--muted-foreground)",
          }}>
          ⬇️ {isUnlocked ? "Baixar PNG" : "Disponível após pagamento"}
        </button>
      </div>
    </div>
    </>
  );
}
