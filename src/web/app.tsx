import { Route, Switch } from "wouter";
import Home from "@/pages/Home";
import "@/styles.css";
import { useTheme } from "@/hooks/useTheme";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  useTheme(); // initializes theme from localStorage
  return <>{children}</>;
}

function App() {
  return (
    <ThemeProvider>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
