import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import QRCodePix from "@/pages/QRCodePix";
import QRCodeWhatsapp from "@/pages/QRCodeWhatsapp";
import QRCodeWifi from "@/pages/QRCodeWifi";
import "@/styles.css";
import { useTheme } from "@/hooks/useTheme";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  useTheme();
  return <>{children}</>;
}

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/qr-code-pix" component={QRCodePix} />
        <Route path="/qr-code-whatsapp" component={QRCodeWhatsapp} />
        <Route path="/qr-code-wifi" component={QRCodeWifi} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
