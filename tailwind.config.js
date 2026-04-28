export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#23286b',
        gold: '#f1b503',
        'blue-accent': '#428cfb',
        'dark-bg': '#080808',
        'dark-card': '#0f0f0f',
        'dark-border': '#1a1a1a',
        'dim': '#666666',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Times New Roman"', 'Times', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
