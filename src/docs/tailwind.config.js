export default {
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    viewer: true
  },
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-section': 'url(/svg/headerBg.svg)',
        blob: 'url(/svg/blob.svg)'
      },
      backgroundSize: {
        '50%': '50%',
        'size-50': '50rem',
        'size-72': '72rem'
      }
    }
  },
  // plugins: [require('rens-ui'), require('@tailwindcss/typography')]
  plugins: [require('../../dist/js'), require('@tailwindcss/typography')]
}
