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
  hover: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: false
  },
  underlineHover: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose space-x-2">
    <template v-if="basic">
      <a class="link">Click Me</a>
    </template>
    <template v-else-if="colors">
      <a class="link">Click Me</a>
      <a class="link link-primary">Click Me</a>
      <a class="link link-secondary">Click Me</a>
      <a class="link link-success">Click Me</a>
      <a class="link link-error">Click Me</a>
      <a class="link link-warning">Click Me</a>
    </template>
    <template v-else-if="hover">
      <a class="link link-ghost">Click Me</a>
      <a class="link link-primary link-ghost-primary">Click Me</a>
      <a class="link link-secondary link-ghost-secondary">Click Me</a>
      <a class="link link-success link-ghost-success">Click Me</a>
      <a class="link link-error link-ghost-error">Click Me</a>
      <a class="link link-warning link-ghost-warning">Click Me</a>
    </template>
    <template v-else-if="underline">
      <a class="link link-underline">Click Me</a>
      <a class="link link-primary link-underline">Click Me</a>
      <a class="link link-secondary link-underline">Click Me</a>
      <a class="link link-success link-underline">Click Me</a>
      <a class="link link-error link-underline">Click Me</a>
      <a class="link link-warning link-underline">Click Me</a>
    </template>
    <template v-else-if="underlineHover">
      <a class="link link-underline-hover">Click Me</a>
      <a class="link link-primary link-underline-hover">Click Me</a>
      <a class="link link-secondary link-underline-hover">Click Me</a>
      <a class="link link-success link-underline-hover">Click Me</a>
      <a class="link link-error link-underline-hover">Click Me</a>
      <a class="link link-warning link-underline-hover">Click Me</a>
    </template>
  </div>
</template>
