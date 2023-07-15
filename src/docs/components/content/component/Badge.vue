<script setup>
defineProps({
  styleClass: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <span class="badge ml-2" :class="styleClass">{{ text }}</span>
</template>
