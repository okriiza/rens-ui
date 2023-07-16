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
  withText: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <span class="dot"></span>
    </template>
    <template v-else-if="colors">
      <span class="dot mr-2"></span>
      <span class="dot dot-primary mr-2"></span>
      <span class="dot dot-secondary mr-2"></span>
      <span class="dot dot-success mr-2"></span>
      <span class="dot dot-warning mr-2"></span>
      <span class="dot dot-error"></span>
    </template>
    <template v-else>
      <span class="flex items-center gap-2">
        <span class="dot"></span>
        <span>Cancelled</span>
      </span>
      <span class="flex items-center gap-2">
        <span class="dot dot-primary"></span>
        <span>Ready</span>
      </span>
      <span class="flex items-center gap-2">
        <span class="dot dot-secondary"></span>
        <span>Waiting</span>
      </span>
      <span class="flex items-center gap-2">
        <span class="dot dot-success"></span>
        <span>Success</span>
      </span>
      <span class="flex items-center gap-2">
        <span class="dot dot-warning"></span>
        <span>Warning</span>
      </span>
      <span class="flex items-center gap-2">
        <span class="dot dot-error"></span>
        <span>Cancelled</span>
      </span>
    </template>
  </div>
</template>
