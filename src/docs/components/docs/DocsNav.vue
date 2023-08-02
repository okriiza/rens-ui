<script setup>
const colorMode = useColorMode()
const onClick = () =>
  (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')
</script>

<template>
  <div class="navbar-sticky navbar-glass navbar">
    <div class="container mx-auto flex xl:px-28">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          <IconLogo class="h-11 w-auto" />
        </NuxtLink>
      </div>
      <div class="navbar-end">
        <div class="hidden lg:flex lg:items-center">
          <NuxtLink to="/getting-started" class="navbar-item">Docs</NuxtLink>
          <NuxtLink to="/elements/accordion" class="navbar-item"
            >Elements</NuxtLink
          >
          <div class="divider divider-vertical mx-0 h-6"></div>
        </div>
        <a class="navbar-item px-2" @click="onClick">
          <!-- <ColorScheme placeholder="..."> -->
          <IconSun v-if="$colorMode.preference === 'dark'" class="h-5" />
          <IconMoon v-else class="h-5" />
          <!-- </ColorScheme> -->
        </a>
        <a class="navbar-item px-2"><IconTwitter class="h-5" /></a>
        <a class="navbar-item px-2"><IconGithub class="h-5" /></a>

        <div class="dropdown xl:hidden">
          <label class="btn btn-primary btn-sm my-2" tabindex="1">
            <IconMenu class="h-5 w-5" />
          </label>
          <div class="dropdown-menu border border-gray-border">
            <NuxtLink to="/getting-started" class="dropdown-item text-sm"
              >Docs</NuxtLink
            >
            <NuxtLink to="/elements/accordion" class="dropdown-item text-sm"
              >Elements</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
