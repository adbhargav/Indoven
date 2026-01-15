export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#0ea5e9", // Sky blue
        accent: "#22c55e", // Green
        text: "#1f2937",
        background: "#f3f4f6", // Light gray
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    keyframes: {
      bounceSlow: {
        '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
        '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
      }
    },
    animation: {
      'bounce-slow': 'bounceSlow 2s infinite',
    },
  },
  plugins: [],
}
