<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  descTitle: {
    type: String,
    default: ''
  },
  styleClass: {
    type: String,
    default: ''
  },
  id: {
    type: Number,
    default: null
  },
  id2: {
    type: Number,
    default: null
  },
  tabIndex: {
    type: [String, Number],
    default: null
  },
  icon: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose accordion-group" :class="styleClass">
    <div class="accordion" v-for="ids in [id, id2]" :tabindex="tabIndex">
      <template v-if="ids">
        <input
          type="checkbox"
          :id="`accordion-${ids}`"
          class="accordion-toggle"
        />
        <label :for="`accordion-${ids}`" class="accordion-title"
          ><span>{{ title }} {{ ids }}</span>
          <span v-if="descTitle" class="text-sm font-normal">{{
            descTitle
          }}</span></label
        >
      </template>

      <template v-else>
        <input type="checkbox" class="accordion-toggle" />
        <label class="accordion-title"
          ><span>{{ title }} {{ ids }}</span
          ><span v-if="descTitle" class="text-sm font-normal">{{
            descTitle
          }}</span></label
        >
      </template>
      <span class="accordion-icon" v-if="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
          ></path>
        </svg>
      </span>
      <div class="accordion-content">
        <div class="min-h-0">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
