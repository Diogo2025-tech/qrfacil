import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodeWhatsapp() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>QR Code WhatsApp Grátis: Cliente Fala com Você Sem Salvar o Número | QR Codes Fácil</title>
      <meta name="description" content="Crie QR Code WhatsApp grátis. Cliente escaneia e já abre conversa com você no WhatsApp — sem precisar salvar o número. Ideal para lojas, salões e restaurantes. Apenas R$2." />
      <link rel="canonical" href="https://qrcodesfacil.com.br/qr-code-whatsapp" />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://qrcodesfacil.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "QR Code WhatsApp", "item": "https://qrcodesfacil.com.br/qr-code-whatsapp" }
        ]
      })}</script>

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como criar QR Code WhatsApp",
        "description": "Crie QR Code do WhatsApp em segundos no QR Codes Fácil",
        "totalTime": "PT1M",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "BRL", "value": "2" },
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Clique na aba WhatsApp", "text": "Acesse qrcodesfacil.com.br e selecione a aba WhatsApp." },
          { "@type": "HowToStep", "position": 2, "name": "Digite seu número", "text": "Coloque seu número com DDD e DDI (+55) e uma mensagem opcional." },
          { "@type": "HowToStep", "position": 3, "name": "Gere e baixe", "text": "Clique em Gerar QR Code, pague R$2 e baixe em PNG." }
        ]
      })}</script>

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Precisa ter WhatsApp Business?", "acceptedAnswer": { "@type": "Answer", "text": "Não. Funciona com qualquer número de WhatsApp, pessoal ou Business." } },
          { "@type": "Question", "name": "O cliente precisa ter meu número salvo?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O cliente escaneia o QR Code e já abre a conversa diretamente — sem salvar o número." } },
          { "@type": "Question", "name": "Posso colocar uma mensagem automática?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. No campo Mensagem, escreva o texto que já vai aparecer preenchido para o cliente." } },
          { "@type": "Question", "name": "Funciona em iPhone?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Funciona em iPhone, Android e qualquer dispositivo com câmera e WhatsApp instalado." } }
        ]
      })}</script>

      <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--border)", backdropFilter: "blur(16px)", background: "var(--card)" }}>
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-lg"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontFamily: "'Space Grotesk', sans-serif" }}>
              QR
            </div>
            <span className="text-lg font-black" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>QR Codes Fácil</span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-10">

        <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1">
          <Link href="/" className="hover:underline">Início</Link>
          <span>›</span>
          <span>QR Code WhatsApp</span>
        </nav>

        <div className="glass-card rounded-2xl p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            QR Code WhatsApp Grátis:{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Cliente Fala com Você Sem Salvar o Número
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crie um QR Code do WhatsApp em segundos. O cliente escaneia e já abre conversa com você direto — sem precisar salvar o número nem digitar nada.
          </p>
        </div>

        <div className="space-y-6">

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code do WhatsApp?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              O <strong>QR Code do WhatsApp</strong> é uma imagem que, ao ser escaneada, abre diretamente uma conversa no WhatsApp com o seu número. O cliente não precisa digitar nem salvar o contato.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Você ainda pode configurar uma <strong>mensagem automática</strong> que já aparece preenchida — ideal para pedidos, orçamentos e atendimento ao cliente.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar QR Code WhatsApp em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Clique na aba WhatsApp", desc: "Acesse qrcodesfacil.com.br e selecione a aba WhatsApp no gerador." },
                { n: "2", title: "Digite seu número e mensagem", desc: "Coloque seu número com DDD e DDI (+55) e uma mensagem opcional que já aparece preenchida pro cliente." },
                { n: "3", title: "Gere e baixe em PNG", desc: "Clique em Gerar QR Code, pague R$2 via PIX e baixe para imprimir ou usar digitalmente." },
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
                "Cardápio de restaurante — pedidos direto pelo WhatsApp",
                "Panfletos e flyers de divulgação",
                "Perfil do Instagram e redes sociais",
                "Embalagens e produtos — suporte pós-venda",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span style={{ color: "var(--primary)" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Perguntas frequentes sobre QR Code WhatsApp
            </h2>
            <div className="space-y-5">
              {[
                { q: "Precisa ter WhatsApp Business?", a: "Não. Funciona com qualquer número de WhatsApp, pessoal ou Business." },
                { q: "O cliente precisa ter meu número salvo?", a: "Não! O cliente escaneia o QR Code e já abre a conversa diretamente — sem salvar o número nem digitar nada." },
                { q: "Posso colocar uma mensagem automática?", a: "Sim! No campo Mensagem, escreva o texto que já vai aparecer preenchido para o cliente enviar." },
                { q: "Funciona em iPhone?", a: "Sim. Funciona em iPhone, Android e qualquer celular com câmera e WhatsApp instalado." },
                { q: "Qual a diferença para o QR Code PIX?", a: "O QR Code WhatsApp abre uma conversa. O QR Code PIX serve para receber pagamentos. Você pode criar os dois — veja também como criar QR Code PIX." },
              ].map(item => (
                <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: "var(--border)" }}>
                  <p className="font-bold text-sm mb-1">{item.q}</p>
                  <p className="text-xs text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Links internos */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Outros QR Codes que você pode criar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/qr-code-pix">
                <div className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <p className="font-bold text-sm">QR Code PIX</p>
                  <p className="text-xs text-muted-foreground mt-1">Receba pagamentos de qualquer banco</p>
                </div>
              </Link>
              <Link href="/qr-code-wifi">
                <div className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <p className="font-bold text-sm">QR Code WiFi</p>
                  <p className="text-xs text-muted-foreground mt-1">Conecta no WiFi sem digitar senha</p>
                </div>
              </Link>
            </div>
          </div>

          <Link href="/">
            <div className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "var(--qr-glow)" }}>
              <p className="font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary-foreground)" }}>
                Criar meu QR Code WhatsApp agora
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--primary-foreground)", opacity: 0.8 }}>
                Rápido, fácil e por apenas R$2
              </p>
            </div>
          </Link>
        </div>
      </div>

      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 QR Codes Fácil ·{" "}
          <Link href="/" className="underline">Início</Link> ·{" "}
          <Link href="/qr-code-pix" className="underline">QR PIX</Link> ·{" "}
          <Link href="/qr-code-wifi" className="underline">QR WiFi</Link>
        </p>
      </footer>
    </div>
  );
}
