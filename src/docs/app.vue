<script setup>
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ],
  charset: 'utf-8',
  title: 'Rens UI Tailwind CSS Component Library With Modern UI',
  titleTemplate: (title) =>
    title !== 'Rens UI ' ? `${title} · Rens UI` : title,
  meta: [
    {
      name: 'google-site-verification',
      content: 'j2xpmaZIckqVgPeYO-zHI-iVHDQACsl-d4uDZfjsbZE'
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: 'Rens UI'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'Rens UI - Tailwind CSS Component Library With Modern UI.'
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: 'Rens UI - Tailwind CSS Component Library With Modern UI.'
    },
    {
      hid: 'og:url',
      name: 'og:url',
      content: 'https://rens-ui.okriiza.my.id'
    },
    { property: 'og:site_name', content: 'Rens UI' },
    { hid: 'og:type', property: 'og:type', content: 'website' },

    {
      name: 'keywords',
      content:
        'component, library, modern ui, tailwind ui library, tailwindcss ui,'
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: 'https://rens-ui.okriiza.my.id/image/social-card.png'
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: 'social card image'
    },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: '@okriiza' },
    {
      hid: 'twitter:url',
      name: 'twitter:url',
      content: 'https://okriiza.my.id'
    },
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: 'Rens UI'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: 'Rens UI - Tailwind CSS Component Library With Modern UI.'
    },
    {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: 'https://rens-ui.okriiza.my.id/image/social-card.png'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#1C85FF 0%,#339DFF 50%,#25BA33 100%)"
    />
    <NuxtPage />
  </div>
</template>
