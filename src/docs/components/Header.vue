<script setup>
const source = ref('npm install -D rens-ui')
const { text, copy, copied, isSupported } = useClipboard({ source })
</script>

<template>
  <section
    class="absolute -z-10 h-[24rem] w-full bg-header-section bg-size-50 bg-center bg-no-repeat xl:h-[34rem] xl:bg-size-72"
  ></section>
  <div class="container mx-auto mb-auto h-full">
    <div class="mx-auto w-3/4 xl:w-2/4 pt-16 text-center xl:pt-24">
      <h1 class="text-4xl font-bold capitalize xl:text-6xl">
        Create with
        <span
          class="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent underline underline-offset-4"
          >modern design</span
        >
        and
        <span
          class="bg-gradient-to-r from-secondary to-warning bg-clip-text text-transparent underline underline-offset-4"
          >stunning visuals</span
        >.
      </h1>
      <p class="mt-3 text-sm xl:text-lg">
        Rens UI is a CSS component library built using Tailwind CSS, providing
        you with access to a collection of ready-to-use components for
        developing captivating user interfaces With semantic class names.
      </p>
      <div class="mt-6 space-y-3 space-x-3">
        <NuxtLink
          to="/getting-started"
          class="btn-primary btn font-semibold mb-3"
          >Get Started</NuxtLink
        >
        <span
          class="tooltip tooltip-right tooltip-primary"
          :data-tooltip="copied ? 'Copied!' : 'Copy'"
        >
          <button
            class="duration-150 will-change-transform font-mono border border-gray-border text-content2 text-sm rounded-lg py-2 px-4 bg-gray-background active:scale-[0.97]"
            @click="copy(source)"
          >
            <div class="flex items-center">
              <span class="mr-3">$ npm install -D rens-ui </span> |
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ml-3 h-5 w-5"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"
                ></path>
                <path
                  d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"
                ></path>
              </svg>
            </div>
          </button>
        </span>
      </div>
    </div>
  </div>
</template>
