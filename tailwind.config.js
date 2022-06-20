module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      colors: {
        blue: '#1DA1F2',
        darkblue: '#2795D9',
        lightblue: '#EFF9FF',
        dark: '#657786',
        light: '#AAB8C2',
        lighter: '#f0f3f5',
        lightest: '#F5F8FA',
        red: '#E74C3C',
        green: '#2ECC71',
        yellow: '#F1C40F'
      }
    }
  }
}
