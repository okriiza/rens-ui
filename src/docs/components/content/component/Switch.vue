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
  bordered: {
    type: Boolean,
    default: false
  },
  ghost: {
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
  <div class="not-prose">
    <template v-if="basic">
      <input type="checkbox" class="switch" />
    </template>

    <template v-else-if="colors">
      <div class="space-x-2">
        <input type="checkbox" class="switch switch-primary" checked />
        <input type="checkbox" class="switch switch-secondary" checked />
        <input type="checkbox" class="switch switch-success" checked />
        <input type="checkbox" class="switch switch-error" checked />
        <input type="checkbox" class="switch switch-warning" checked />
      </div>
    </template>

    <template v-else-if="bordered">
      <div class="space-x-2">
        <input type="checkbox" class="switch switch-bordered-primary" />
        <input type="checkbox" class="switch switch-bordered-secondary" />
        <input type="checkbox" class="switch switch-bordered-success" />
        <input type="checkbox" class="switch switch-bordered-error" />
        <input type="checkbox" class="switch switch-bordered-warning" />
      </div>
    </template>

    <template v-else-if="ghost">
      <div class="space-x-2">
        <input type="checkbox" class="switch switch-ghost-primary" />
        <input type="checkbox" class="switch switch-ghost-secondary" />
        <input type="checkbox" class="switch switch-ghost-success" />
        <input type="checkbox" class="switch switch-ghost-error" />
        <input type="checkbox" class="switch switch-ghost-warning" />
      </div>
    </template>

    <template v-else-if="sizes">
      <div class="space-x-2">
        <input type="checkbox" class="switch switch-xl" />
        <input type="checkbox" class="switch switch-lg" />
        <input type="checkbox" class="switch switch-md" />
        <input type="checkbox" class="switch switch-sm" />
        <input type="checkbox" class="switch switch-xs" />
      </div>
    </template>

    <template v-else>
      <input type="checkbox" class="switch" disabled checked />
    </template>
  </div>
</template>
