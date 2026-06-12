import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070d",
        surface: "#0b0f17",
        primary: "#4f46e5",
        muted: "rgba(255,255,255,0.6)",
        border: "rgba(255,255,255,0.08)",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(79,70,229,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;