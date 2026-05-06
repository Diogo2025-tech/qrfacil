import { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";

interface PixModalProps {
  customerId: string;
  onPaid: () => void;
  onClose: () => void;
}

type Step = "loading" | "waiting" | "checking" | "paid" | "error";

export default function PixModal({ customerId, onPaid, onClose }: PixModalProps) {
  const [step, setStep]           = useState<Step>("loading");
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [qrCode, setQrCode]       = useState("");
  const [qrImg, setQrImg]         = useState("");
  const [copied, setCopied]       = useState(false);
  const [manualMsg, setManualMsg] = useState("");
  const pollRef                   = useRef<ReturnType<typeof setInterval> | null>(null);
  const attemptsRef               = useRef(0);

  useEffect(() => {
    createPayment();
    return () => stopPolling();
  }, []);

  const stopPolling = () => {
    if (pollRef.current) { clearInterval(pollRef.current); pollRef.current = null; }
  };

  const createPayment = async () => {
    setStep("loading");
    attemptsRef.current = 0;
    try {
      const res  = await fetch("/api/qr/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId }),
      });
      const data = await res.json();
      if (!data.paymentId) { setStep("error"); return; }

      setPaymentId(data.paymentId);
      const pixCode = data.qrCode || "";
      setQrCode(pixCode);

      // Usa base64 do MP ou gera localmente como fallback
      if (data.qrCodeBase64) {
        setQrImg(`data:image/png;base64,${data.qrCodeBase64}`);
      } else if (pixCode) {
        try {
          const localImg = await QRCode.toDataURL(pixCode, { width: 256, margin: 2 });
          setQrImg(localImg);
        } catch {}
      }
      setStep("waiting");

      // Polling a cada 3s
      pollRef.current = setInterval(() => pollStatus(data.paymentId), 3000);
    } catch {
      setStep("error");
    }
  };

  const pollStatus = async (pid: string) => {
    attemptsRef.current++;
    try {
      const res  = await fetch(`/api/qr/status/${pid}`);
      const data = await res.json();
      if (data.paid) {
        stopPolling();
        setStep("paid");
        setTimeout(() => onPaid(), 1500);
      }
      // Para de fazer polling depois de 10 min (200 tentativas × 3s)
      if (attemptsRef.current > 200) stopPolling();
    } catch {}
  };

  // Botão "Já paguei" — força verificação imediata
  const checkNow = async () => {
    if (!paymentId) return;
    setStep("checking");
    setManualMsg("");
    try {
      const res  = await fetch(`/api/qr/status/${paymentId}`);
      const data = await res.json();
      if (data.paid) {
        stopPolling();
        setStep("paid");
        setTimeout(() => onPaid(), 1500);
      } else {
        setStep("waiting");
        setManualMsg("Pagamento ainda não confirmado. Aguarde alguns segundos e tente novamente.");
        // Reinicia polling se tinha parado
        if (!pollRef.current) {
          pollRef.current = setInterval(() => pollStatus(paymentId), 3000);
        }
      }
    } catch {
      setStep("waiting");
      setManualMsg("Erro ao verificar. Tente novamente.");
    }
  };

  const copy = () => {
    if (!qrCode) return;
    navigator.clipboard.writeText(qrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(10px)" }}>
      <div className="glass-card rounded-3xl p-7 w-full max-w-sm text-center relative"
        style={{ border: "1px solid var(--border)", boxShadow: "0 0 60px oklch(0.6 0.26 300 / 0.25)" }}>

        {/* Fechar */}
        {step !== "paid" && (
          <button onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}>
            ✕
          </button>
        )}

        {/* LOADING */}
        {step === "loading" && (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-12 h-12 rounded-full border-4 animate-spin"
              style={{ borderColor: "var(--primary)", borderTopColor: "transparent" }} />
            <p className="text-sm text-muted-foreground">Gerando QR PIX...</p>
          </div>
        )}

        {/* CHECKING */}
        {step === "checking" && (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="w-12 h-12 rounded-full border-4 animate-spin"
              style={{ borderColor: "var(--accent)", borderTopColor: "transparent" }} />
            <p className="text-sm text-muted-foreground">Verificando pagamento...</p>
          </div>
        )}

        {/* WAITING */}
        {step === "waiting" && (
          <>
            <div className="flex items-center gap-2 justify-center mb-1">
              <span className="text-xl">⚡</span>
              <h2 className="text-xl font-black" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Pague com PIX
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Funciona em qualquer banco — sem conta no Mercado Pago
            </p>

            {/* Valor */}
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-black"
                style={{ fontFamily: "'Space Grotesk',sans-serif", color: "var(--primary)" }}>2</span>
              <span className="text-sm text-muted-foreground">,00</span>
            </div>

            {/* QR Image */}
            {qrImg && (
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-white inline-block">
                  <img src={qrImg} alt="QR Code PIX" className="w-44 h-44" />
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground mb-2">Ou copie o código:</p>

            {/* Copia e Cola */}
            <div className="flex gap-2 mb-2">
              <div className="flex-1 px-3 py-2 rounded-xl text-xs font-mono truncate text-left"
                style={{ background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--muted-foreground)" }}>
                {qrCode.slice(0, 36)}...
              </div>
              <button onClick={copy}
                className="px-4 py-2 rounded-xl text-xs font-bold flex-shrink-0 transition-all"
                style={{ background: copied ? "var(--accent)" : "var(--primary)", color: "var(--primary-foreground)" }}>
                {copied ? "✓ Copiado" : "Copiar"}
              </button>
            </div>

            {/* Mensagem de erro manual */}
            {manualMsg && (
              <p className="text-xs mb-3 px-2 py-2 rounded-lg"
                style={{ background: "var(--destructive)", color: "white", opacity: 0.9 }}>
                {manualMsg}
              </p>
            )}

            {/* Botão JÁ PAGUEI */}
            <button onClick={checkNow}
              className="w-full py-3 rounded-xl font-bold text-sm mb-3 transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}>
              ✅ Já paguei — verificar agora
            </button>

            {/* Status automático */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
              Verificando automaticamente...
            </div>

            <p className="text-xs mt-2" style={{ color: "var(--muted-foreground)", fontSize: "10px" }}>
              QR PIX expira em 24h · Liberado assim que o pagamento for confirmado
            </p>
          </>
        )}

        {/* PAID */}
        {step === "paid" && (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--accent)", boxShadow: "0 0 30px var(--accent)" }}>
              ✅
            </div>
            <div>
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Pagamento confirmado!
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Liberando seu QR Code...</p>
            </div>
          </div>
        )}

        {/* ERROR */}
        {step === "error" && (
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="text-4xl">😕</div>
            <p className="text-sm text-muted-foreground">Erro ao gerar PIX. Tente novamente.</p>
            <button onClick={createPayment}
              className="px-6 py-2 rounded-xl font-bold text-sm"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>
              Tentar novamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
