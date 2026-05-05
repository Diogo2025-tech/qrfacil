import { useState } from "react";
import { useCustomerId } from "@/hooks/useCustomerId";

interface PaywallModalProps {
  onClose: () => void;
}

export default function PaywallModal({ onClose }: PaywallModalProps) {
  const customerId = useCustomerId();
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/qr/checkout", {
        method: "POST",
        headers: {
          "x-customer-id": customerId,
          "x-success-url": window.location.href,
        },
      });
      const data = await res.json();
      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else if (data.success) {
        window.location.reload();
      } else {
        alert("Erro ao iniciar checkout. Tente novamente.");
      }
    } catch {
      alert("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="glass-card rounded-3xl p-8 max-w-sm w-full text-center relative"
        style={{ border: "1px solid var(--primary)", boxShadow: "0 0 60px oklch(0.6 0.26 300 / 0.35)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-opacity hover:opacity-70"
          style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
        >
          ✕
        </button>

        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
          style={{ background: "var(--primary)", boxShadow: "0 0 30px var(--primary)" }}
        >
          ⚡
        </div>

        <h2
          className="text-2xl font-black mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Créditos esgotados
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Compre mais créditos para continuar gerando QR Codes instantâneos.
        </p>

        {/* Pricing card */}
        <div
          className="rounded-2xl p-5 mb-6 text-left"
          style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-baseline justify-center gap-1 mb-1">
            <span className="text-base text-muted-foreground font-semibold">R$</span>
            <span
              className="text-5xl font-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary)" }}
            >
              20
            </span>
          </div>
          <p className="text-sm font-semibold text-center mb-1">Pacote com 10 gerações</p>
          <p className="text-xs text-muted-foreground text-center mb-4">R$ 2,00 por QR Code</p>

          <div className="flex flex-col gap-2">
            {[
              "URL, WhatsApp, PIX, Telefone e WiFi",
              "Personalização completa de cores",
              "Download em PNG",
              "Histórico salvo no navegador",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="text-sm" style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleBuy}
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 disabled:opacity-60"
          style={{
            background: "var(--primary)",
            color: "var(--primary-foreground)",
            boxShadow: "0 0 30px var(--primary)",
          }}
        >
          {loading ? "Aguarde..." : "Comprar 10 gerações — R$20"}
        </button>

        <p className="text-xs text-muted-foreground mt-3">
          Pagamento seguro via Stripe · Sem assinatura
        </p>
      </div>
    </div>
  );
}
