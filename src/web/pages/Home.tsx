import QRGenerator from "@/components/QRGenerator";
import QRHistory from "@/components/QRHistory";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
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
              <h1
                className="text-lg font-black leading-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--foreground)" }}
              >
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

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-10 pb-4">
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl font-black mb-2 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            QR Codes{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              instantâneos
            </span>
          </h2>
          <p className="text-muted-foreground text-base">
            Crie QR Codes personalizados em segundos — sem conta, sem limites, sem complicação.
          </p>
        </div>

        {/* Generator */}
        <QRGenerator />

        {/* How it works */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          {[
            { step: "1", icon: "✍️", title: "Preencha", desc: "Escolha o tipo e insira os dados" },
            { step: "2", icon: "🎨", title: "Personalize", desc: "Ajuste as cores do seu QR" },
            { step: "3", icon: "⬇️", title: "Baixe", desc: "Salve em PNG e use onde quiser" },
          ].map((item) => (
            <div
              key={item.step}
              className="glass-card rounded-2xl p-5 text-center"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl mx-auto mb-3"
                style={{ background: "var(--primary)", boxShadow: "0 0 16px var(--primary)" }}
              >
                {item.icon}
              </div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <QRHistory />
      </div>

      {/* Footer */}
      <footer className="mt-12 pb-6 text-center">
        <p className="text-xs text-muted-foreground">
          QRFácil — gratuito, sem cadastro, 100% no seu navegador.
        </p>
      </footer>
    </div>
  );
}
