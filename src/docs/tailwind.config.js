export default {
  // Defaults options
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    viewer: true
  },
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'header-section': 'url(/svg/headerBg.svg)'
      },
      backgroundSize: {
        '50%': '50%',
        'size-50': '50rem',
        'size-72': '72rem'
      }
    }
  },
  plugins: [require('../../dist/js'), require('@tailwindcss/typography')]
}
