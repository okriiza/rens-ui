<template>
  <div class="grid grid-cols-2 xl:grid-cols-3 gap-4">
    <NuxtLink
      to="https://codesandbox.io/p/sandbox/dark-mode-example-ky8y9c"
      class="border border-gray-border rounded-lg flex items-center justify-center bg-backgroundSecondary py-6 px-4"
    >
      <div class="text-center">
        <IconHtml5 class="w-20" />
        <span class="text-sm font-bold mt-3">HTML</span>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://codesandbox.io/p/sandbox/vue-js-3-with-rens-ui-7ml5hw"
      class="border border-gray-border rounded-lg flex items-center justify-center bg-backgroundSecondary py-6 px-4"
    >
      <div class="text-center">
        <img
          class="w-20 m-0"
          src="https://vuejs.org/images/logo.png"
          alt="vuejs"
        />
        <span class="text-sm font-bold mt-3">VueJs 3</span>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://codesandbox.io/p/sandbox/nuxt-3-with-rens-ui-z53wxs"
      class="border border-gray-border rounded-lg flex items-center justify-center bg-backgroundSecondary py-6 px-4"
    >
      <div class="text-center">
        <IconNuxt class="w-20" />
        <span class="text-sm font-bold mt-3">Nuxt 3</span>
      </div>
    </NuxtLink>
  </div>
</template>
