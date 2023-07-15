<script setup>
defineProps({
  btnStyle: {
    type: String,
    default: ''
  },
  styleClass: {
    type: String,
    default: ''
  },
  btn: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="btn-group btn-group-scrollable not-prose" :class="styleClass">
    <template v-if="btn">
      <button class="btn">Primary</button>
      <button class="btn" :class="btnStyle">Primary</button>
      <button class="btn">Primary</button>
      <button class="btn">Primary</button>
    </template>
    <template v-else>
      <input type="radio" name="options" data-content="1" class="btn" />
      <input type="radio" name="options" data-content="2" class="btn" />
      <input type="radio" name="options" data-content="3" class="btn" />
      <input type="radio" name="options" data-content="4" class="btn" />
    </template>
  </div>
</template>
