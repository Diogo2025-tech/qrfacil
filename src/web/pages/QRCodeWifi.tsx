import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodeWifi() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>QR Code WiFi Grátis: Cliente Conecta Sem Digitar Senha | QR Codes Fácil</title>
      <meta name="description" content="Crie QR Code WiFi grátis. Cliente escaneia e conecta automaticamente na sua rede sem digitar a senha. Ideal para restaurantes, hotéis, salões e lojas. Apenas R$2." />
      <link rel="canonical" href="https://qrcodesfacil.com.br/qr-code-wifi" />

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://qrcodesfacil.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "QR Code WiFi", "item": "https://qrcodesfacil.com.br/qr-code-wifi" }
        ]
      })}</script>

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "Como criar QR Code WiFi",
        "description": "Crie QR Code WiFi em segundos no QR Codes Fácil",
        "totalTime": "PT1M",
        "estimatedCost": { "@type": "MonetaryAmount", "currency": "BRL", "value": "2" },
        "step": [
          { "@type": "HowToStep", "position": 1, "name": "Clique na aba WiFi", "text": "Acesse qrcodesfacil.com.br e selecione a aba WiFi." },
          { "@type": "HowToStep", "position": 2, "name": "Preencha os dados da rede", "text": "Digite o nome da rede (SSID), a senha e o tipo de segurança." },
          { "@type": "HowToStep", "position": 3, "name": "Gere e imprima", "text": "Clique em Gerar QR Code, pague R$2 e baixe em PNG para imprimir." }
        ]
      })}</script>

      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "QR Code WiFi funciona em iPhone e Android?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os celulares modernos (iOS 11+ e Android 10+) conseguem escanear e conectar automaticamente." } },
          { "@type": "Question", "name": "É seguro colocar a senha do WiFi no QR Code?", "acceptedAnswer": { "@type": "Answer", "text": "A senha fica codificada no QR Code. Recomendamos usar uma rede separada para visitantes." } },
          { "@type": "Question", "name": "Se eu mudar a senha do WiFi preciso gerar um novo QR?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se a senha mudar, gere um novo QR Code com a senha atualizada." } },
          { "@type": "Question", "name": "Qual o tipo de segurança devo escolher?", "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos roteadores usa WPA2. Se não souber, verifique nas configurações do seu roteador." } }
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
          <span>QR Code WiFi</span>
        </nav>

        <div className="glass-card rounded-2xl p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            QR Code WiFi Grátis:{" "}
            <span style={{ background: "linear-gradient(135deg, var(--primary), var(--accent))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Cliente Conecta Sem Digitar a Senha
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Crie um QR Code para o seu WiFi em segundos. O cliente escaneia com o celular e já conecta automaticamente — sem precisar pedir a senha.
          </p>
        </div>

        <div className="space-y-6">

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code WiFi?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              O <strong>QR Code WiFi</strong> é uma imagem que, ao ser escaneada pelo celular, conecta automaticamente na rede WiFi indicada — sem o visitante precisar digitar a senha nem pedir pra alguém.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              É muito usado em estabelecimentos que oferecem WiFi para clientes: restaurantes, lanchonetes, salões de beleza, hotéis e escritórios. Cole na parede, no cardápio ou na recepção.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar QR Code WiFi em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Clique na aba WiFi", desc: "Acesse qrcodesfacil.com.br e selecione a aba WiFi no gerador." },
                { n: "2", title: "Preencha os dados da rede", desc: "Digite o nome da rede (SSID), a senha e o tipo de segurança (WPA2 na maioria dos roteadores)." },
                { n: "3", title: "Gere e imprima", desc: "Clique em Gerar QR Code, pague R$2 via PIX e baixe em PNG para imprimir e colocar no balcão." },
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
              Quem usa QR Code de WiFi?
            </h2>
            <ul className="space-y-2">
              {[
                "Restaurantes e lanchonetes — WiFi para clientes sem precisar falar a senha",
                "Hotéis e pousadas — fácil acesso para hóspedes na chegada",
                "Salões de beleza e barbearias — WiFi enquanto espera",
                "Escritórios e coworkings — rede para visitantes e parceiros",
                "Clínicas e consultórios — sala de espera mais confortável",
                "Casas e apartamentos — facilita para visitas e família",
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span style={{ color: "var(--primary)" }}>▸</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Perguntas frequentes sobre QR Code WiFi
            </h2>
            <div className="space-y-5">
              {[
                { q: "QR Code WiFi funciona em iPhone e Android?", a: "Sim. Todos os celulares modernos (iOS 11+ e Android 10+) conseguem escanear e conectar automaticamente." },
                { q: "É seguro colocar a senha do WiFi no QR Code?", a: "A senha fica codificada no QR Code. Recomendamos criar uma rede separada para visitantes — assim você protege sua rede principal." },
                { q: "Se eu mudar a senha do WiFi preciso gerar um novo QR?", a: "Sim. Se a senha mudar, gere um novo QR Code com a senha atualizada. Por isso recomendamos não trocar a senha da rede de visitantes com frequência." },
                { q: "Qual o tipo de segurança devo escolher?", a: "A maioria dos roteadores usa WPA2. Se não souber, verifique nas configurações do seu roteador ou deixe WPA2 que funciona na maioria dos casos." },
                { q: "Posso imprimir e plastificar?", a: "Sim! Baixe em PNG, imprima no tamanho que quiser e plastifique para durar mais. Ideal para colocar na parede ou no balcão." },
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
              <Link href="/qr-code-whatsapp">
                <div className="rounded-xl p-4 cursor-pointer hover:opacity-80 transition-opacity" style={{ background: "var(--secondary)", border: "1px solid var(--border)" }}>
                  <p className="font-bold text-sm">QR Code WhatsApp</p>
                  <p className="text-xs text-muted-foreground mt-1">Cliente fala com você sem salvar o número</p>
                </div>
              </Link>
            </div>
          </div>

          <Link href="/">
            <div className="rounded-2xl p-6 text-center cursor-pointer transition-all hover:opacity-90"
              style={{ background: "var(--primary)", boxShadow: "var(--qr-glow)" }}>
              <p className="font-black text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--primary-foreground)" }}>
                Criar meu QR Code WiFi agora
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
          <Link href="/qr-code-whatsapp" className="underline">QR WhatsApp</Link>
        </p>
      </footer>
    </div>
  );
}
