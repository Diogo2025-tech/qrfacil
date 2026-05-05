# QRFácil — Design System

## Brand
- Name: QRFácil
- Tagline: "Gere. Personalize. Compartilhe."
- Feel: premium tool, clean, sharp, moderno brasileiro

## Themes (user can switch in real time)
1. **Neon Dark** (default) — fundo #0a0a0f, card #111118, accent neon violeta #7C3AED + cyan #06B6D4
2. **Claro Minimal** — fundo #f8f9fb, card #ffffff, accent #7C3AED
3. **Gradiente Tech** — fundo degradê azul-roxo escuro, glassmorphism cards

## Typography
- Display: "Space Grotesk" (headings, logo)
- Body: "DM Sans" (inputs, labels, buttons)
- Import from Google Fonts

## Colors (CSS vars per theme)
- --qr-bg, --qr-surface, --qr-border, --qr-accent, --qr-accent2, --qr-text, --qr-muted

## Layout
- Single page app, centered container max-w-5xl
- Left: form inputs + customizer
- Right: QR preview + download + color pickers
- Bottom: history grid

## Spacing
- Generous padding, cards with visible border, pill buttons
- Border radius: 12px cards, 8px inputs

## Animations
- Tab switch: fade + slide
- QR generate: scale pulse on canvas
- History item hover: lift shadow
