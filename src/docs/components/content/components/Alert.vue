<script setup>
// defineProps(['type'])
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconText: {
    type: String,
    default: ''
  },
  textDefault: {
    type: String,
    default: ''
  },
  styleClass: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div :class="styleClass" class="not-prose alert mb-3">
    <component v-if="icon" :is="icon" class="h-6 w-6" />
    <span>{{ textDefault }}</span>
    <component v-if="iconText" :is="iconText" class="h-10 w-10" />
    <div class="alert-content ml-2">
      <span>{{ title }}</span>
      <span class="text-sm font-light text-content2">{{ description }}</span>
    </div>
  </div>
</template>
