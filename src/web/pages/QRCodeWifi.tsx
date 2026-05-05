import { Link } from "wouter";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function QRCodeWifi() {
  return (
    <div className="min-h-screen" style={{ background: "var(--theme-gradient)" }}>
      <title>Como Criar QR Code do WiFi Grátis — QRFácil</title>
      <meta name="description" content="Crie QR Code do WiFi grátis. Cliente escaneia e conecta automaticamente na sua rede sem precisar digitar a senha. Ideal para restaurantes, hotéis e lojas." />

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
              WiFi Grátis
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Cliente escaneia e conecta automaticamente no seu WiFi — sem precisar digitar senha.
          </p>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              O que é o QR Code do WiFi?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O QR Code do WiFi permite que qualquer pessoa se conecte na sua rede sem fio escaneando um QR Code com o celular — sem precisar digitar a senha. É muito prático para estabelecimentos que oferecem WiFi para clientes.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-black mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Como criar em 3 passos
            </h2>
            <div className="space-y-4">
              {[
                { n: "1", title: "Clique na aba WiFi", desc: "No QRFácil, selecione a aba WiFi no gerador." },
                { n: "2", title: "Preencha os dados da rede", desc: "Digite o nome da rede (SSID), a senha e o tipo de segurança (WPA2 na maioria dos roteadores)." },
                { n: "3", title: "Gere e imprima", desc: "Clique em Gerar QR Code, pague R$2 e baixe em PNG para imprimir e colocar no balcão." },
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
              Quem mais usa QR Code de WiFi?
            </h2>
            <ul className="space-y-2">
              {[
                "Restaurantes e lanchonetes — WiFi para clientes",
                "Hotéis e pousadas — fácil acesso para hóspedes",
                "Salões de beleza e barbearias — enquanto espera",
                "Escritórios e coworkings — rede para visitantes",
                "Clínicas e consultórios — sala de espera",
                "Casa própria — facilita para visitas e família",
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
                { q: "Funciona em iPhone e Android?", a: "Sim! Todos os celulares modernos (iOS 11+ e Android 10+) conseguem escanear e conectar automaticamente." },
                { q: "É seguro compartilhar a senha no QR Code?", a: "A senha fica codificada no QR Code. Só quem escanear terá acesso. Recomendamos usar uma rede separada para visitantes." },
                { q: "Se eu mudar a senha do WiFi, preciso gerar um novo QR?", a: "Sim. Se a senha mudar, gere um novo QR Code com a senha atualizada." },
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
                ✨ Criar meu QR Code do WiFi agora
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
