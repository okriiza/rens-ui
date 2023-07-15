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
  solid: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  sizes: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <template v-if="basic">
      <label class="flex cursor-pointer gap-2 not-prose">
        <input type="checkbox" class="checkbox" />
        <span>Remember me?</span>
      </label>
    </template>
    <template v-else-if="disable">
      <input type="checkbox" class="checkbox mr-2" disabled />
      <input type="checkbox" class="checkbox" disabled checked
    /></template>
    <template v-else-if="colors">
      <input type="checkbox" class="checkbox-primary checkbox mr-2" checked />
      <input type="checkbox" class="checkbox-secondary checkbox mr-2" checked />
      <input type="checkbox" class="checkbox-success checkbox mr-2" checked />
      <input type="checkbox" class="checkbox-warning checkbox mr-2" checked />
      <input type="checkbox" class="checkbox-error checkbox" checked />
    </template>
    <template v-else-if="bordered">
      <input type="checkbox" class="checkbox checkbox-bordered-primary mr-2" />
      <input
        type="checkbox"
        class="checkbox checkbox-bordered-secondary mr-2"
      />
      <input type="checkbox" class="checkbox checkbox-bordered-success mr-2" />
      <input type="checkbox" class="checkbox checkbox-bordered-warning mr-2" />
      <input type="checkbox" class="checkbox checkbox-bordered-error" />
    </template>
    <template v-else>
      <input type="checkbox" class="checkbox checkbox-xs mr-2" checked />
      <input type="checkbox" class="checkbox checkbox-sm mr-2" checked />
      <input type="checkbox" class="checkbox checkbox-md mr-2" checked />
      <input type="checkbox" class="checkbox checkbox-lg mr-2" checked />
      <input type="checkbox" class="checkbox checkbox-xl" checked />
    </template>
  </div>
</template>
