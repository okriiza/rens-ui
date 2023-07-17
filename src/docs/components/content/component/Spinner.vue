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
  },
  circle: {
    type: Boolean,
    default: false
  },
  dot: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <div class="spinner-simple"></div>
    </template>
    <template v-else-if="colors">
      <div class="flex flex-row gap-5">
        <svg
          class="spinner-ring spinner-primary"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-secondary"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-success"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-error"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-warning"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </template>
    <template v-else-if="sizes">
      <div class="flex flex-row gap-5">
        <svg
          class="spinner-ring spinner-primary spinner-xl"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-primary spinner-lg"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-primary spinner-md"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>

        <svg
          class="spinner-ring spinner-primary spinner-sm"
          viewBox="25 25 50 50"
          stroke-width="5"
        >
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </template>
    <template v-else-if="circle">
      <div class="flex flex-row gap-10">
        <!-- circle spiner -->
        <div class="spinner-circle"></div>

        <!-- Ring -->
        <svg class="spinner-ring" viewBox="25 25 50 50" stroke-width="5">
          <circle cx="50" cy="50" r="20" />
        </svg>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row gap-24 justify-center items-center">
        <!-- Dot Intermitten  -->
        <div class="spinner-dot-intermittent"></div>

        <!-- Dot Pulse -->
        <div class="spinner-dot-pulse">
          <div class="spinner-pulse-dot"></div>
        </div>

        <!-- Dot Wave  -->
        <div class="spinner-wave">
          <div class="spinner-wave-dot"></div>
          <div class="spinner-wave-dot"></div>
          <div class="spinner-wave-dot"></div>
          <div class="spinner-wave-dot"></div>
        </div>

        <!-- Dot Circle  -->
        <div class="spinner-dot-circle">
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
          <div class="spinner-dot"></div>
        </div>
      </div>
    </template>
  </div>
</template>
