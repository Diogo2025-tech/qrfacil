import { useState, useEffect } from "react";

export interface QRHistoryItem {
  id: string;
  type: string;
  label: string;
  dataUrl: string;
  fgColor: string;
  bgColor: string;
  createdAt: number;
}

const MAX_HISTORY = 20;
const STORAGE_KEY = "qrfacil-history";

export function useHistory() {
  const [history, setHistory] = useState<QRHistoryItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = (item: Omit<QRHistoryItem, "id" | "createdAt">) => {
    const newItem: QRHistoryItem = {
      ...item,
      id: Math.random().toString(36).slice(2),
      createdAt: Date.now(),
    };
    setHistory((prev) => [newItem, ...prev].slice(0, MAX_HISTORY));
  };

  const removeFromHistory = (id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  };

  const clearHistory = () => setHistory([]);

  return { history, addToHistory, removeFromHistory, clearHistory };
}
