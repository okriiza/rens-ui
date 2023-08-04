// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/devtools'
  ],
  extends: ['nuxt-umami'],
  colorMode: {
    classSuffix: '',
    dataValue: 'theme'
  },
  devtools: {
    // Enable devtools (default: true)
    enabled: true
  },
  content: {
    documentDriven: true,
    // markdown: {
    //   remarkPlugins: ['remark-reading-time'],
    // },
    highlight: {
      // Theme used in all color schemes.
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'one-dark-pro',
      preload: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'diff',
        'shell',
        'markdown',
        'yaml',
        'bash',
        'ini'
      ]
    }
  }
})
