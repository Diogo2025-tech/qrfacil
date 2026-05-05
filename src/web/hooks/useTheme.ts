import { useState, useEffect } from "react";

export type Theme = "neon" | "light" | "gradient";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem("qrfacil-theme") as Theme) || "neon";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("qrfacil-theme", theme);
  }, [theme]);

  return { theme, setTheme };
}
