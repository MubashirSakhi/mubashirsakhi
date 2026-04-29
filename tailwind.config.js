export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:         '#84CC16',
        'primary-dark':  '#65A30D',
        'site-bg':       '#FFFEF9',
        'site-text':     '#0F172A',
        'muted':         '#64748B',
        'muted-light':   '#94A3B8',
        'border-subtle': '#E2E8F0',
        'border-mid':    '#CBD5E1',
      },
      fontFamily: {
        sans:    ['"Space Grotesk"', 'sans-serif'],
        heading: ['Archivo', 'sans-serif'],
        hand:    ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
