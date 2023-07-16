<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  vertical: {
    type: Boolean,
    default: false
  },
  horizontal: {
    type: Boolean,
    default: false
  },
  textStart: {
    type: Boolean,
    default: false
  },
  textEnd: {
    type: Boolean,
    default: false
  },
  withContainer: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <div class="divider"></div>
    </template>

    <template v-else-if="vertical">
      <div class="divider divider-vertical h-44">OR</div>
    </template>

    <template v-else-if="horizontal">
      <div class="divider divider-horizontal">OR</div>
    </template>

    <template v-else-if="textStart">
      <div class="flex items-center gap-1">
        OR
        <div class="divider divider-horizontal w-full"></div>
      </div>
    </template>

    <template v-else-if="textEnd">
      <div class="flex items-center gap-1">
        <div class="divider divider-horizontal w-full"></div>
        OR
      </div>
    </template>

    <template v-else>
      <div class="flex w-full justify-center gap-4">
        <div class="card max-w-full items-center justify-center">Default</div>
        <div class="divider divider-vertical mx-0 h-44"></div>
        <div class="card max-w-full items-center justify-center">Default</div>
      </div>
    </template>
  </div>
</template>
