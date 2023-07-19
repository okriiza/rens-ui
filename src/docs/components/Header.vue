<script setup></script>

<template>
  <section
    class="absolute -z-10 h-[24rem] w-full bg-header-section bg-size-50 bg-center bg-no-repeat xl:h-[34rem] xl:bg-size-72"
  ></section>
  <div class="container mx-auto mb-auto h-full">
    <div class="mx-auto w-3/4 pt-16 text-center md:w-2/4 xl:pt-24">
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
      <div class="mt-6 space-x-2 space-y-2">
        <NuxtLink to="/getting-started" class="btn-primary btn font-semibold"
          >Get Started</NuxtLink
        >
        <NuxtLink to="/elements/button" class="btn font-semibold"
          >Elements</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
