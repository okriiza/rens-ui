<script setup>
const colorMode = useColorMode()
const onClick = () =>
  (colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light')
</script>

<template>
  <div class="container mx-auto">
    <div class="navbar-glass navbar rounded-b-2xl">
      <div class="navbar-start">
        <NuxtLink to="/" class="navbar-item">
          <IconLogo class="h-11 w-auto" />
        </NuxtLink>
      </div>
      <!-- <div class="navbar-center font-semibold">
        <a class="navbar-item">Docs</a>
        <a class="navbar-item">Components</a>
      </div> -->
      <div class="navbar-end">
        <div class="hidden lg:flex lg:items-center">
          <NuxtLink to="/getting-started" class="navbar-item">Docs</NuxtLink>
          <NuxtLink to="/components/accordion" class="navbar-item"
            >Components</NuxtLink
          >
          <div class="divider divider-vertical mx-0 h-6"></div>
          <a class="navbar-item px-1" @click="onClick">
            <ColorScheme placeholder="...">
              <IconSun v-if="$colorMode.preference === 'dark'" class="h-5" />
              <IconMoon v-else class="h-5" />
            </ColorScheme>
          </a>
          <a class="navbar-item px-2"><IconGithub class="h-5" /></a>
          <a class="navbar-item px-2"><IconTwitter class="h-5" /></a>
        </div>
        <div class="dropdown">
          <label class="btn-primary btn lg:hidden" tabindex="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </label>
          <div class="dropdown-menu">
            <a tabindex="-1" class="dropdown-item text-sm"> Docs </a>
            <a tabindex="-1" class="dropdown-item text-sm"> Components </a>
            <a tabindex="-1" class="dropdown-item text-sm" @click="onClick">
              <ColorScheme placeholder="...">
                <IconSun v-if="$colorMode.preference === 'dark'" class="h-5" />
                <IconMoon v-else class="h-5" />
              </ColorScheme>
            </a>
            <a tabindex="-1" class="dropdown-item text-sm">
              <IconGithub class="h-5" />
            </a>
            <a tabindex="-1" class="dropdown-item text-sm">
              <IconTwitter class="h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
