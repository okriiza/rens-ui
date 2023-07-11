<script setup>
defineProps({
  styleClass: { type: String, default: '' },
  title: { type: String, default: '' }
})
</script>

<template>
  <div>
    <button :class="[type]">
      {{ title }}
    </button>
  </div>
</template>
