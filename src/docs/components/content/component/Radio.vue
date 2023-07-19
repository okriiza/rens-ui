<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  sizes: {
    type: Boolean,
    default: false
  },
  colors: {
    type: Boolean,
    default: false
  },
  solid: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose flex space-x-2">
    <template v-if="basic">
      <label class="flex cursor-pointer gap-2">
        <input type="radio" class="radio" />
        <span>Remember me?</span>
      </label>
    </template>
    <template v-else-if="sizes">
      <input type="radio" class="radio radio-xs" checked />
      <input type="radio" class="radio radio-sm" checked />
      <input type="radio" class="radio radio-md" checked />
      <input type="radio" class="radio radio-lg" checked />
      <input type="radio" class="radio radio-xl" checked />
    </template>
    <template v-else-if="colors">
      <input type="radio" class="radio-primary radio" checked />
      <input type="radio" class="radio-secondary radio" checked />
      <input type="radio" class="radio-success radio" checked />
      <input type="radio" class="radio-warning radio" checked />
      <input type="radio" class="radio-error radio" checked />
    </template>
    <template v-else-if="solid">
      <input type="radio" class="radio-solid radio" />
      <input type="radio" class="radio-solid-secondary radio" />
      <input type="radio" class="radio-solid-success radio" />
      <input type="radio" class="radio-solid-warning radio" />
      <input type="radio" class="radio-solid-error radio" />
    </template>
    <template v-else-if="bordered">
      <input type="radio" class="radio radio-bordered-primary" />
      <input type="radio" class="radio radio-bordered-secondary" />
      <input type="radio" class="radio radio-bordered-success" />
      <input type="radio" class="radio radio-bordered-warning" />
      <input type="radio" class="radio radio-bordered-error" />
    </template>
    <template v-else-if="group">
      <div id="group1" class="flex flex-row gap-3">
        <input type="radio" class="radio" name="group1" />
        <input type="radio" class="radio" name="group1" />
        <input type="radio" class="radio" name="group1" />
      </div>
    </template>
    <template v-else>
      <input type="radio" class="radio" disabled />
      <input type="radio" class="radio" disabled checked />
    </template>
  </div>
</template>
