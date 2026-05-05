import { useState, useEffect, useRef } from "react";

interface PixModalProps {
  customerId: string;
  onPaid: () => void;
  onClose: () => void;
}

type Step = "loading" | "waiting" | "paid" | "error";

export default function PixModal({ customerId, onPaid, onClose }: PixModalProps) {
  const [step, setStep]             = useState<Step>("loading");
  const [paymentId, setPaymentId]   = useState<string | null>(null);
  const [qrCode, setQrCode]         = useState<string>("");
  const [qrImg, setQrImg]           = useState<string>("");
  const [copied, setCopied]         = useState(false);
  const pollRef                     = useRef<ReturnType<typeof setInterval> | null>(null);

  // Cria pagamento ao abrir
  useEffect(() => {
    createPayment();
    return () => { if (pollRef.current) clearInterval(pollRef.current); };
  }, []);

  const createPayment = async () => {
    setStep("loading");
    try {
      const res = await fetch("/api/qr/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customerId }),
      });
      const data = await res.json();
      if (!data.paymentId) { setStep("error"); return; }

      setPaymentId(data.paymentId);
      setQrCode(data.qrCode || "");
      setQrImg(data.qrCodeBase64 ? `data:image/png;base64,${data.qrCodeBase64}` : "");
      setStep("waiting");

      // Polling a cada 4s para verificar pagamento
      pollRef.current = setInterval(() => checkStatus(data.paymentId), 4000);
    } catch {
      setStep("error");
    }
  };

  const checkStatus = async (pid: string) => {
    try {
      const res  = await fetch(`/api/qr/status/${pid}`);
      const data = await res.json();
      if (data.status === "approved") {
        if (pollRef.current) clearInterval(pollRef.current);
        setStep("paid");
        setTimeout(() => onPaid(), 1800);
      }
    } catch {}
  };

  const copy = () => {
    if (!qrCode) return;
    navigator.clipboard.writeText(qrCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.82)", backdropFilter: "blur(10px)" }}
    >
      <div
        className="glass-card rounded-3xl p-7 w-full max-w-sm text-center relative"
        style={{ border: "1px solid var(--border)", boxShadow: "0 0 60px oklch(0.6 0.26 300 / 0.25)" }}
      >
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
          <div className="flex flex-col items-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
              style={{ borderColor: "var(--primary)", borderTopColor: "transparent" }} />
            <p className="text-sm text-muted-foreground">Gerando QR PIX...</p>
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
              Sem conta no Mercado Pago — use qualquer banco
            </p>

            {/* Valor */}
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-sm text-muted-foreground">R$</span>
              <span className="text-5xl font-black" style={{ fontFamily: "'Space Grotesk',sans-serif", color: "var(--primary)" }}>2</span>
              <span className="text-sm text-muted-foreground">,00</span>
            </div>

            {/* QR Image */}
            {qrImg && (
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-white inline-block">
                  <img src={qrImg} alt="QR PIX" className="w-44 h-44" />
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground mb-2">
              Ou copie o código PIX:
            </p>

            {/* Copia e Cola */}
            <div className="flex gap-2 mb-5">
              <div
                className="flex-1 px-3 py-2 rounded-xl text-xs font-mono truncate text-left"
                style={{ background: "var(--secondary)", border: "1px solid var(--border)", color: "var(--muted-foreground)" }}
              >
                {qrCode.slice(0, 36)}...
              </div>
              <button
                onClick={copy}
                className="px-4 py-2 rounded-xl text-xs font-bold flex-shrink-0 transition-all"
                style={{
                  background: copied ? "var(--accent)" : "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                {copied ? "✓ Copiado" : "Copiar"}
              </button>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--primary)" }} />
              Aguardando pagamento...
            </div>

            <p className="text-xs mt-3" style={{ color: "var(--muted-foreground)", fontSize: "10px" }}>
              QR Code expira em 24h · Liberado automaticamente ao pagar
            </p>
          </>
        )}

        {/* PAID */}
        {step === "paid" && (
          <div className="flex flex-col items-center gap-4 py-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
              style={{ background: "var(--accent)", boxShadow: "0 0 30px var(--accent)" }}
            >
              ✅
            </div>
            <div>
              <h2 className="text-2xl font-black" style={{ fontFamily: "'Space Grotesk',sans-serif" }}>
                Pago!
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Desbloqueando seu QR Code...
              </p>
            </div>
          </div>
        )}

        {/* ERROR */}
        {step === "error" && (
          <div className="flex flex-col items-center gap-4 py-4">
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
