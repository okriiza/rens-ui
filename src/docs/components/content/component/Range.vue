<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  colors: {
    type: Boolean,
    default: false
  },
  flated: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <input type="range" class="range" />
    </template>
    <template v-else-if="colors">
      <input type="range" class="range range-primary mr-2" />
      <input type="range" class="range range-secondary mr-2" />
      <input type="range" class="range range-success mr-2" />
      <input type="range" class="range range-warning mr-2" />
      <input type="range" class="range range-error" />
    </template>
    <template v-else-if="flated">
      <input type="range" class="range range-flat-primary mr-2" />
      <input type="range" class="range range-flat-secondary mr-2" />
      <input type="range" class="range range-flat-success mr-2" />
      <input type="range" class="range range-flat-warning mr-2" />
      <input type="range" class="range range-flat-error" />
    </template>
    <template v-else>
      <input type="range" class="range range-vertical my-12" />
    </template>
  </div>
</template>
