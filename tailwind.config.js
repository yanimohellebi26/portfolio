/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        display: ["'Space Grotesk'", "'Manrope'", "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#0f0b22",
          surface: "#18132f",
          surfaceAlt: "#211a3f",
          accent: "#c770f0",
          accentSoft: "#a580ff",
          text: "#f4f4ff",
          muted: "#a3a6c6",
        },
      },
      boxShadow: {
        glass: "0 16px 40px rgba(17, 12, 28, 0.45)",
        glow: "0 0 45px rgba(199, 112, 240, 0.45)",
      },
      backgroundImage: {
        'noise-soft': "radial-gradient(circle at 15% 20%, rgba(199, 112, 240, 0.35), transparent 40%), radial-gradient(circle at 85% 30%, rgba(68, 33, 139, 0.45), transparent 55%), radial-gradient(circle at 10% 80%, rgba(40, 198, 255, 0.35), transparent 50%)",
      },
      animation: {
        wave: "wave 2.1s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
