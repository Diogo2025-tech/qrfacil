import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodePix() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      {/* SEO — meta por página */}
      <title>QR Code PIX Grátis: Como Criar em Segundos | QR Codes Fácil</title>
      <meta name="description" content="Crie QR Code PIX grátis em segundos. Cole no balcão, no cardápio ou no cartão de visita. Cliente escaneia e paga na hora. Qualquer banco. Apenas R$2." />
      <link rel="canonical" href="https://qrcodesfacil.com.br/qr-code-pix" />

      {/* Schema BreadcrumbList */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://qrcodesfacil.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "QR Code PIX", "item": "https://qrcodesfacil.com.br/qr-code-pix" }
        ]
      })}</script>

      {/* Schema HowTo */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como criar QR Code PIX grátis",
        "description": "Passo a passo para criar QR Code do PIX em segundos no QR Codes Fácil",
        "totalTime": "PT1M",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "BRL", "value": "2" },
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Acesse o gerador", "text": "Acesse qrcodesfacil.com.br e clique na aba PIX." },
          { "@type": "HowToStep", "position": 2, "name": "Digite sua chave PIX", "text": "Insira sua chave PIX: CPF, CNPJ, telefone, e-mail ou chave aleatória." },
          { "@type": "HowToStep", "position": 3, "name": "Gere e baixe", "text": "Clique em Gerar QR Code, pague R$2 via PIX e baixe seu QR em PNG." }
        ]
      })}</script>

      {/* Schema FAQPage */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "QR Code PIX funciona em qualquer banco?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O QR Code PIX funciona em todos os bancos e fintechs do Brasil que suportam PIX." } },
          { "@type": "Question", "name": "Preciso ter conta no Mercado Pago?", "acceptedAnswer": { "@type": "Answer", "text": "Não. O QR Code PIX usa sua chave cadastrada no seu banco. Qualquer banco funciona." } },
          { "@type": "Question", "name": "Posso imprimir o QR Code PIX?", "acceptedAnswer": { "@type": "Answer", "text": "Sim! Baixe em PNG e imprima em qualquer tamanho — balcão, cardápio, cartão de visita, etc." } },
          { "@type": "Question", "name": "O QR Code PIX expira?", "acceptedAnswer": { "@type": "Answer", "text": "O QR Code estático que geramos não expira. Uma vez gerado, funciona para sempre." } }
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

        {/* Breadcrumb visual */}
        <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1">
          <Link href="/" className="hover:underline">Início</Link>
          <span>›</span>
          <span>QR Code PIX</span>
        </nav>

        <div className="glass-card rounded-2xl p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            QR Code PIX Grátis:{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Crie em Segundos
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Gere seu QR Code PIX e comece a receber pagamentos de qualquer banco do Brasil — sem precisar digitar a chave. Cole no balcão, no cardápio ou no cartão de visita.
          </p>
        </div>

        <div className="space-y-6">

          {/* O que é */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code PIX?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              O <strong>QR Code PIX</strong> é uma imagem que, ao ser escaneada pelo celular, preenche automaticamente os dados do destinatário para pagamento via PIX. Ideal para lojas, restaurantes, prestadores de serviço e autônomos que querem receber de forma rápida e prática.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Com o <strong>gerador de QR Code PIX</strong> do QR Codes Fácil, você cria o seu em menos de 1 minuto, personaliza as cores da sua marca e baixa em PNG para imprimir onde quiser.
            </p>
          </div>

          {/* Como criar */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar QR Code PIX em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Acesse o gerador de QR Code PIX", desc: "No QR Codes Fácil, clique na aba PIX no topo do gerador." },
                { n: "2", title: "Digite sua chave PIX", desc: "Insira sua chave PIX: pode ser CPF, CNPJ, telefone, e-mail ou chave aleatória." },
                { n: "3", title: "Gere e baixe em PNG", desc: "Clique em Gerar QR Code, pague R$2 via PIX e baixe para usar onde quiser." },
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

          {/* Onde usar */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Onde usar o QR Code PIX?
            </h2>
            <ul className="space-y-2">
              {[
                "Balcão da loja ou restaurante — cliente escaneia e paga na hora",
                "Cardápio físico ou delivery — facilita o pagamento",
                "Cartão de visita — profissional e moderno",
                "Panfletos e flyers — divulgação com pagamento fácil",
                "Feiras e eventos — receba sem maquininha",
                "Prestadores de serviço — pedreiro, eletricista, faxineira",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span style={{ color: "var(--primary)" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Perguntas frequentes sobre QR Code PIX
            </h2>
            <div className="space-y-5">
              {[
                { q: "QR Code PIX funciona em qualquer banco?", a: "Sim. Funciona em todos os bancos e fintechs do Brasil que suportam PIX: Nubank, Itaú, Bradesco, Caixa, BTG, Inter e muito mais." },
                { q: "Preciso ter conta no Mercado Pago?", a: "Não. O QR Code PIX usa sua chave cadastrada no seu banco. Qualquer banco funciona." },
                { q: "Posso imprimir o QR Code PIX?", a: "Sim! Baixe em PNG e imprima em qualquer tamanho — balcão, cardápio, cartão de visita, etc." },
                { q: "O QR Code PIX expira?", a: "O QR Code estático gerado aqui não expira. Uma vez criado, funciona para sempre." },
                { q: "É diferente de criar QR Code WhatsApp?", a: "Sim. O QR Code PIX serve para receber pagamentos. Já o QR Code WhatsApp abre uma conversa. Temos os dois — confira também como criar QR Code WhatsApp." },
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
              <Link href="/qr-code-whatsapp">
                <div className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <p className="font-bold text-sm">QR Code WhatsApp</p>
                  <p className="text-xs text-muted-foreground mt-1">Cliente escaneia e já fala com você</p>
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

          {/* CTA */}
          <Link href="/">
            <div className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "var(--qr-glow)" }}>
              <p className="font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary-foreground)" }}>
                Criar meu QR Code PIX agora
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
          <Link href="/qr-code-whatsapp" className="underline">QR WhatsApp</Link> ·{" "}
          <Link href="/qr-code-wifi" className="underline">QR WiFi</Link>
        </p>
      </footer>
    </div>
  );
}
