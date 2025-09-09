export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin 50s linear reverse infinite",
      },
    },
  },
  plugins: [],
}
