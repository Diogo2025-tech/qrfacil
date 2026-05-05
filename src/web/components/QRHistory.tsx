import { useHistory } from "@/hooks/useHistory";

const TYPE_ICONS: Record<string, string> = {
  url: "🔗",
  whatsapp: "💬",
  pix: "⚡",
  phone: "📞",
  wifi: "📶",
};

export default function QRHistory() {
  const { history, removeFromHistory, clearHistory } = useHistory();

  if (history.length === 0) return null;

  const downloadItem = (dataUrl: string, type: string) => {
    const link = document.createElement("a");
    link.download = `qrfacil-${type}-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
  };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-bold">
            Histórico
          </h2>
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            {history.length}
          </span>
        </div>
        <button
          onClick={clearHistory}
          className="text-xs text-muted-foreground hover:text-destructive transition-colors px-3 py-1 rounded-lg"
          style={{ border: "1px solid var(--border)" }}
        >
          Limpar tudo
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {history.map((item, i) => (
          <div
            key={item.id}
            className="history-in glass-card rounded-xl p-3 flex flex-col items-center gap-2 group relative cursor-default transition-all duration-200 hover:-translate-y-1"
            style={{
              animationDelay: `${i * 40}ms`,
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            {/* Remove button */}
            <button
              onClick={() => removeFromHistory(item.id)}
              className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "var(--destructive)", color: "white" }}
            >
              ×
            </button>

            {/* QR thumbnail */}
            <div
              className="rounded-lg overflow-hidden"
              style={{ background: item.bgColor }}
            >
              <img
                src={item.dataUrl}
                alt={item.label}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Info */}
            <div className="text-center w-full">
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <span className="text-xs">{TYPE_ICONS[item.type] || "⬛"}</span>
                <span className="text-xs font-semibold capitalize">{item.type}</span>
              </div>
              <p className="text-xs text-muted-foreground truncate w-full text-center">
                {item.label}
              </p>
              <p className="text-xs text-muted-foreground" style={{ fontSize: "10px" }}>
                {formatDate(item.createdAt)}
              </p>
            </div>

            {/* Download */}
            <button
              onClick={() => downloadItem(item.dataUrl, item.type)}
              className="w-full text-xs py-1 rounded-lg font-semibold transition-all duration-200 opacity-0 group-hover:opacity-100"
              style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              Baixar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
