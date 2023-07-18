<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  directions: {
    type: Boolean,
    default: false
  },
  colors: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose space-x-2">
    <template v-if="basic">
      <span class="tooltip tooltip-right" data-tooltip="Basic">
        <button class="btn">Basic</button>
      </span>
    </template>
    <template v-else-if="directions">
      <span class="tooltip tooltip-top" data-tooltip="Top">
        <button class="btn">top</button>
      </span>

      <span class="tooltip tooltip-bottom" data-tooltip="Bottom">
        <button class="btn">bottom</button>
      </span>

      <span class="tooltip tooltip-left" data-tooltip="Left">
        <button class="btn">left</button>
      </span>
      <span class="tooltip tooltip-right" data-tooltip="Right">
        <button class="btn">right</button>
      </span>
    </template>
    <template v-else-if="colors">
      <span class="tooltip tooltip-left tooltip-primary" data-tooltip="left">
        <button class="btn">primary</button>
      </span>

      <span
        class="tooltip tooltip-bottom tooltip-secondary"
        data-tooltip="Bottom"
      >
        <button class="btn">secondary</button>
      </span>

      <span class="tooltip tooltip-top tooltip-success" data-tooltip="Top">
        <button class="btn">success</button>
      </span>

      <span
        class="tooltip tooltip-bottom tooltip-warning"
        data-tooltip="Bottom"
      >
        <button class="btn">warning</button>
      </span>

      <span class="tooltip tooltip-right tooltip-error" data-tooltip="Right">
        <button class="btn">error</button>
      </span>
    </template>
    <template v-else-if="open">
      <span
        class="tooltip tooltip-top tooltip-success tooltip-open"
        data-tooltip="Top"
      >
        <button class="btn">Basic</button>
      </span>
    </template>
    <template v-else>
      <span class="tooltip-click tooltip-top" data-tooltip="On Click">
        <button class="btn">On Click</button>
      </span>
    </template>
  </div>
</template>
