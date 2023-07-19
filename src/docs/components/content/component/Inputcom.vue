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
  <div class="not-prose space-y-2">
    <template v-if="basic">
      <input class="input" placeholder="input" />
    </template>
    <template v-else-if="colors">
      <input class="input input-primary mr-2" placeholder="Primary" />
      <input class="input input-secondary mr-2" placeholder="Secondary" />
      <input class="input input-success mr-2" placeholder="Success" />
      <input class="input input-warning mr-2" placeholder="Warning" />
      <input class="input input-error mr-2" placeholder="Error" />
    </template>
    <template v-else-if="sizes">
      <div class="flex">
        <input class="input-sm input mr-2" placeholder="Small" />
        <input class="input mr-2" placeholder="Default" />
        <input class="input-lg input mr-2" placeholder="Large" />
      </div>
    </template>
    <template v-else-if="solid">
      <input class="input input-solid mr-2" placeholder="Primary" />
      <input class="input input-solid-secondary mr-2" placeholder="Secondary" />
      <input class="input input-solid-success mr-2" placeholder="Success" />
      <input class="input input-solid-error mr-2" placeholder="Error" />
      <input class="input input-solid-warning" placeholder="Warning" />
    </template>
    <template v-else-if="ghost">
      <input class="input-ghost input mr-2" placeholder="Ghost" />
      <input class="input-ghost-primary input mr-2" placeholder="Primary" />
      <input class="input-ghost-secondary input mr-2" placeholder="Secondary" />
      <input class="input-ghost-success input mr-2" placeholder="Success" />
      <input class="input-ghost-warning input mr-2" placeholder="Warning" />
      <input class="input-ghost-error input mr-2" placeholder="Error" />
    </template>
    <template v-else-if="rounded">
      <input class="input-rounded input" placeholder="Rounded" />
    </template>
    <template v-else-if="block">
      <input class="input-block input" placeholder="Block" />
    </template>
    <template v-else>
      <input class="input" placeholder="Disabled" disabled />
    </template>
  </div>
</template>
