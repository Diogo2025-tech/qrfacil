import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodeWhatsapp() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>Como Criar QR Code do WhatsApp Grátis — QRFácil</title>
      <meta name="description" content="Crie QR Code do WhatsApp grátis. Cliente escaneia e já abre conversa com você no WhatsApp. Ideal para lojas, restaurantes e prestadores de serviço." />

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
              WhatsApp Grátis
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Cliente escaneia o QR Code e já abre uma conversa com você no WhatsApp — sem precisar salvar o número.
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code do WhatsApp?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O QR Code do WhatsApp é uma imagem que, ao ser escaneada, abre diretamente uma conversa no WhatsApp com o seu número — sem o cliente precisar digitar ou salvar o contato. Você ainda pode configurar uma mensagem automática para já aparecer escrita.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Clique na aba WhatsApp", desc: "No QRFácil, selecione a aba WhatsApp no gerador." },
                { n: "2", title: "Digite seu número e mensagem", desc: "Coloque seu número com DDD e DDI (+55) e uma mensagem opcional que já aparece preenchida pro cliente." },
                { n: "3", title: "Gere e baixe", desc: "Clique em Gerar QR Code, pague R$2 e baixe em PNG para imprimir ou compartilhar." },
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
              Onde usar o QR Code do WhatsApp?
            </h2>
            <ul className="space-y-2">
              {[
                "Cartão de visita — cliente escaneia e já fala com você",
                "Vitrine da loja — facilita o contato de clientes",
                "Cardápio de restaurante — pedidos pelo WhatsApp",
                "Panfletos e flyers de divulgação",
                "Perfil do Instagram e redes sociais",
                "Embalagens e produtos",
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
                { q: "Precisa ter WhatsApp Business?", a: "Não. Funciona com qualquer número de WhatsApp, pessoal ou Business." },
                { q: "O cliente precisa ter meu número salvo?", a: "Não! Essa é a grande vantagem. O cliente escaneia e já abre a conversa direto." },
                { q: "Posso colocar uma mensagem automática?", a: "Sim! No campo 'Mensagem', escreva o texto que já vai aparecer preenchido para o cliente." },
              ].map(item => (
                <div key={item.q}>
                  <p className="font-bold text-sm">{item.q}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/">
            <div className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "var(--qr-glow)" }}>
              <p className="font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary-foreground)" }}>
                ✨ Criar meu QR Code do WhatsApp agora
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
