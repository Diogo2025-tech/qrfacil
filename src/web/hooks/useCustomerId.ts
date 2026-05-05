import { useState } from "react";

// Generates and persists an anonymous customer ID per browser
export function useCustomerId(): string {
  const [id] = useState<string>(() => {
    const stored = localStorage.getItem("qrfacil-customer-id");
    if (stored) return stored;
    const newId = "anon_" + Math.random().toString(36).slice(2) + Date.now().toString(36);
    localStorage.setItem("qrfacil-customer-id", newId);
    return newId;
  });
  return id;
}
