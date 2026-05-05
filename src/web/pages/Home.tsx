import QRGenerator from "@/components/QRGenerator";
import QRHistory from "@/components/QRHistory";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>QRFácil — Gerador de QR Code Grátis para PIX, WhatsApp e WiFi</title>
      <meta name="description" content="Gere QR Codes grátis em segundos. QR Code para PIX, WhatsApp, WiFi, URL e Telefone. Personalize as cores e baixe em PNG. Sem cadastro." />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", backdropFilter: "blur(16px)", background: "var(--card)" }}>
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              QR
            </div>
            <div>
              <h1 className="text-lg font-black leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--foreground)" }}>
                QRFácil
              </h1>
              <p className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                Gere. Personalize. Compartilhe.
              </p>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 pt-10 pb-4">
        {/* Hero */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-black mb-3 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Gerador de QR Code{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              grátis
            </span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Crie QR Code para <strong>PIX</strong>, <strong>WhatsApp</strong>, <strong>WiFi</strong>, links e telefone em segundos.
            Personalize as cores, baixe em PNG. Sem cadastro, sem complicação.
          </p>
        </div>

        {/* Generator */}
        <QRGenerator />

        {/* How it works */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { icon: "✍️", title: "Preencha", desc: "Escolha o tipo e insira os dados" },
            { icon: "🎨", title: "Personalize", desc: "Ajuste as cores do seu QR Code" },
            { icon: "⬇️", title: "Baixe", desc: "Salve em PNG e use onde quiser" },
          ].map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-5 text-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl mx-auto mb-3"
                style={{ background: "var(--primary)", boxShadow: "0 0 16px var(--primary)" }}>
                {item.icon}
              </div>
              <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* SEO content block */}
        <div className="mt-10 glass-card rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h2 className="font-black text-base mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Para que serve o QR Code?
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "QR Code do PIX para receber pagamentos",
                "QR Code do WhatsApp para atendimento",
                "QR Code de WiFi para clientes e hóspedes",
                "QR Code de link para redes sociais",
                "QR Code de telefone para facilitar ligações",
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "var(--primary)" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-black text-base mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Por que usar o QRFácil?
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "Gerador de QR Code rápido e fácil",
                "Personalização de cores completa",
                "Download em PNG de alta qualidade",
                "Funciona em qualquer dispositivo",
                "Sem cadastro ou assinatura necessária",
              ].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: "var(--accent)" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <QRHistory />
      </div>

      {/* Footer */}
      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 QRFácil · Gerador de QR Code grátis · <a href="/sitemap.xml" className="underline opacity-50">Sitemap</a>
        </p>
      </footer>
    </div>
  );
}
