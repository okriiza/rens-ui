<script setup>
defineProps({
  basic: {
    type: String,
    default: false
  },
  colors: {
    type: String,
    default: false
  },
  flat: {
    type: String,
    default: false
  }
})
</script>

<template>
  <div class="not-prose grid grid-rows-1 gap-2">
    <template v-if="basic">
      <progress class="progress" value="50" max="100"></progress>
    </template>
    <template v-else-if="colors">
      <progress
        class="progress progress-primary"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-secondary"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-success"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-warning"
        value="50"
        max="100"
      ></progress>
      <progress class="progress progress-error" value="50" max="100"></progress>
    </template>
    <template v-else-if="flat">
      <progress
        class="progress progress-flat-primary"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-flat-secondary"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-flat-success"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-flat-warning"
        value="50"
        max="100"
      ></progress>
      <progress
        class="progress progress-flat-error"
        value="50"
        max="100"
      ></progress>
    </template>
    <template v-else>
      <!-- This will work on Edge or Chrome -->
      <progress class="progress"></progress>
      <progress class="progress progress-flat-success"></progress>
      <progress class="progress progress-flat-error"></progress>

      <!-- For Safari, Firefox or Any other browser -->
      <div class="progress progress-indeterminate"></div>
    </template>
  </div>
</template>
