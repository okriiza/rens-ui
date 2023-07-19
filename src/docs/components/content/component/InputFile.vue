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
  sizes: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose space-y-3">
    <template v-if="basic">
      <input type="file" class="input-file" />
    </template>
    <template v-else-if="colors">
      <input type="file" class="input-file input-file-primary mr-2" />
      <input type="file" class="input-file input-file-secondary mr-2" />
      <input type="file" class="input-file input-file-success mr-2" />
      <input type="file" class="input-file input-file-error mr-2" />
      <input type="file" class="input-file input-file-warning"
    /></template>
    <template v-else-if="sizes">
      <div class="flex flex-col space-y-3">
        <input type="file" class="input-file input-file-lg" />
        <input type="file" class="input-file" />
        <input type="file" class="input-file input-file-sm" />
      </div>
    </template>
    <template v-else>
      <input
        type="file"
        class="input-file file:bg-green-600 border-green-500 file:text-white"
      />
    </template>
  </div>
</template>
