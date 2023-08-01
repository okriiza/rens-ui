<script setup>
defineProps({
  one: {
    type: Boolean,
    default: false
  },
  two: {
    type: Boolean,
    default: false
  },
  three: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="mb-6">
    <template v-if="one">
      <button
        class="inline-flex cursor-pointer select-none items-center justify-center rounded-lg bg-gray-background px-3 py-2 gap-x-2 text-center text-sm font-semibold text-content1 duration-150 will-change-transform focus:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-pressed active:scale-[0.97]"
      >
        Basic
      </button>
    </template>
    <template v-else-if="two">
      <button class="btn">Basic</button>
    </template>
    <template v-else-if="three">
      <button class="btn btn-secondary">Basic</button>
    </template>
    <template v-else>
      <button class="btn btn-secondary rounded-full">Basic</button>
    </template>
  </div>
</template>
