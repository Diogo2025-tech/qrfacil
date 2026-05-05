import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodePix() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>Como Criar QR Code do PIX Grátis — QRFácil</title>
      <meta name="description" content="Aprenda como criar QR Code do PIX grátis em segundos. Gere QR Code PIX para receber pagamentos de qualquer banco. Sem cadastro, sem aplicativo." />

      <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", backdropFilter: "blur(16px)", background: "var(--card)" }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "'Space Grotesk', sans-serif" }}>
              QR
            </div>
            <span className="text-lg font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>QRFácil</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="glass-card rounded-2xl p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Como Criar QR Code do{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              PIX Grátis
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Gere seu QR Code PIX em segundos e comece a receber pagamentos de qualquer banco do Brasil.
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code PIX?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O QR Code PIX é uma imagem que, ao ser escaneada pelo celular, já preenche automaticamente os dados do destinatário para receber um pagamento via PIX. É ideal para lojas, restaurantes, prestadores de serviço e qualquer pessoa que queira receber dinheiro de forma rápida e prática.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar QR Code PIX em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Escolha a aba PIX", desc: "No QRFácil, clique na aba PIX no topo do gerador." },
                { n: "2", title: "Digite sua chave PIX", desc: "Insira sua chave PIX: pode ser CPF, CNPJ, telefone, e-mail ou chave aleatória." },
                { n: "3", title: "Gere e baixe", desc: "Clique em Gerar QR Code, pague R$2 e baixe seu QR em PNG para usar onde quiser." },
              ].map(item => (
                <div key={item.n} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                    style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}>
                    {item.n}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Para que serve o QR Code PIX?
            </h2>
            <ul className="space-y-2">
              {[
                "Receber pagamentos na sua loja física ou online",
                "Colocar no cardápio do restaurante para pagamento rápido",
                "Enviar pelo WhatsApp para clientes pagarem na hora",
                "Imprimir e colar no balcão ou vitrine",
                "Usar em feiras, eventos e mercados",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span style={{ color: "var(--primary)" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Perguntas frequentes
            </h2>
            <div className="space-y-4">
              {[
                { q: "Precisa de conta no Mercado Pago?", a: "Não. O QR Code PIX funciona com qualquer banco — Nubank, Inter, Itaú, Bradesco, BB e todos os outros." },
                { q: "O QR Code PIX tem validade?", a: "O QR Code gerado pelo QRFácil é estático e não expira. Você pode usar para sempre." },
                { q: "Posso usar no celular e computador?", a: "Sim! O QRFácil funciona em qualquer dispositivo com internet, sem precisar instalar nada." },
              ].map(item => (
                <div key={item.q}>
                  <p className="font-bold text-sm">{item.q}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link href="/">
            <div className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "var(--qr-glow)" }}>
              <p className="font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary-foreground)" }}>
                ✨ Criar meu QR Code PIX agora
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--primary-foreground)", opacity: 0.8 }}>
                Rápido, fácil e por apenas R$2
              </p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-muted-foreground">© 2026 QRFácil · <Link href="/" className="underline">Voltar ao início</Link></p>
      </footer>
    </div>
  );
}
