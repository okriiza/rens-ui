<script setup>
const { fullPath } = useRoute()

if (fullPath) {
  umTrackView(fullPath, document.referrer)
}

useHead({
  title: 'Rens UI Tailwind CSS Component Library With Modern UI'
})
</script>

<template>
  <div class="flex flex-col h-screen justify-between">
    <Navbar />
    <Header />
    <Featured />
    <Footer />
  </div>
</template>
