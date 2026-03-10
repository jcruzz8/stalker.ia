/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // A TUA NOVA PALETA DE CORES
        stalker: {
          bg: '#1c1612',     // <-- Mudámos para um castanho escuro mais suave e rico
          gold: '#cba363',
          light: '#f2d8a7',
          dark: '#73542a',
        }
      },
    },
  },
  plugins: [],
}