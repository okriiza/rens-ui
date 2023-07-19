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
  ghost: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <select class="select">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </template>
    <template v-else-if="rounded">
      <select class="select select-rounded">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </template>
    <template v-else-if="block">
      <select class="select select-block">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </template>
    <template v-else-if="sizes">
      <div class="space-y-2">
        <select class="select select-sm mr-2">
          <option>Small</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select mr-2">
          <option>Default</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-lg mr-2">
          <option>Large</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </template>
    <template v-else-if="colors">
      <div class="space-y-2">
        <select class="select mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-primary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-secondary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-success mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-warning mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-error">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </template>
    <template v-else-if="solid">
      <div class="space-y-2">
        <select class="select select-solid mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-solid-primary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-solid-secondary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-solid-success mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-solid-warning mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <select class="select select-solid-error">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </template>
    <template v-else-if="ghost">
      <div class="space-y-2">
        <select class="select select-ghost-primary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>

        <select class="select select-ghost-secondary mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>

        <select class="select select-ghost-success mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>

        <select class="select select-ghost-warning mr-2">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>

        <select class="select select-ghost-error">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </template>
    <template v-else>
      <select class="select" disabled>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
    </template>
  </div>
</template>
