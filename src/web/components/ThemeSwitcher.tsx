import { useTheme, type Theme } from "@/hooks/useTheme";

const THEMES: { id: Theme; label: string; preview: string }[] = [
  {
    id: "neon",
    label: "Neon Dark",
    preview: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 100%)",
  },
  {
    id: "light",
    label: "Claro",
    preview: "linear-gradient(135deg, #f8f9fb 0%, #eef0f8 100%)",
  },
  {
    id: "gradient",
    label: "Gradiente",
    preview: "linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #0f2040 100%)",
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground font-semibold uppercase tracking-widest hidden sm:block">
        Tema
      </span>
      <div className="flex gap-1.5 p-1 rounded-xl" style={{ background: "var(--secondary)" }}>
        {THEMES.map((t) => (
          <button
            key={t.id}
            title={t.label}
            onClick={() => setTheme(t.id)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
            style={{
              background: theme === t.id ? "var(--primary)" : "transparent",
              color: theme === t.id ? "var(--primary-foreground)" : "var(--muted-foreground)",
            }}
          >
            <span
              className="w-3 h-3 rounded-full flex-shrink-0"
              style={{ background: t.preview, border: "1.5px solid var(--border)" }}
            />
            <span className="hidden sm:block">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
