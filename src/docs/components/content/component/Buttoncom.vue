<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  classStyle: {
    type: String,
    default: ''
  },
  icon: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose inline-flex">
    <template v-if="disabled">
      <button :class="classStyle" disabled>
        <template v-if="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </template>
        {{ text }}
      </button>
    </template>
    <template v-else>
      <button :class="classStyle">
        <template v-if="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </template>
        {{ text }}
      </button>
    </template>
  </div>
</template>
