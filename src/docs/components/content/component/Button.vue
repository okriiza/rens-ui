<script setup>
defineProps(['type'])
</script>

<template>
  <button :class="[type]">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </button>
</template>
