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
  withText: {
    type: Boolean,
    default: false
  },
  funcKeys: {
    type: Boolean,
    default: false
  },
  arrowKeys: {
    type: Boolean,
    default: false
  },
  fullKeyboard: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <kbd class="kbd">R</kbd>
    </template>
    <template v-else-if="sizes">
      <kbd class="kbd kbd-xl mr-2">Shift</kbd>
      <kbd class="kbd kbd-lg mr-2">Shift</kbd>
      <kbd class="kbd kbd-md mr-2">Shift</kbd>
      <kbd class="kbd kbd-sm mr-2">Shift</kbd>
      <kbd class="kbd kbd-xs">Shift</kbd>
    </template>
    <template v-else-if="withText">
      Press
      <kbd class="kbd">Space</kbd>
      +
      <kbd class="kbd">Shift</kbd>
      +
      <kbd class="kbd">Alt</kbd>
      +
      <kbd class="kbd">A</kbd>
      to open the application.
    </template>
    <template v-else-if="funcKeys">
      <kbd class="kbd mr-2">⌘</kbd>
      <kbd class="kbd mr-2">⌥</kbd>
      <kbd class="kbd mr-2">⇧</kbd>
      <kbd class="kbd">⌃</kbd>
    </template>
    <template v-else-if="arrowKeys">
      <div class="flex justify-center w-full">
        <kbd class="kbd">▲</kbd>
      </div>
      <div class="flex justify-center gap-12 w-full">
        <kbd class="kbd">◀︎</kbd>
        <kbd class="kbd">▶︎</kbd>
      </div>
      <div class="flex justify-center w-full">
        <kbd class="kbd">▼</kbd>
      </div>
    </template>
    <template v-else="fullKeyboard">
      <div class="flex justify-center gap-1 my-1 w-full">
        <kbd class="kbd">q</kbd>
        <kbd class="kbd">w</kbd>
        <kbd class="kbd">e</kbd>
        <kbd class="kbd">r</kbd>
        <kbd class="kbd">t</kbd>
        <kbd class="kbd">y</kbd>
        <kbd class="kbd">u</kbd>
        <kbd class="kbd">i</kbd>
        <kbd class="kbd">o</kbd>
        <kbd class="kbd">p</kbd>
      </div>
      <div class="flex justify-center gap-1 my-1 w-full">
        <kbd class="kbd">a</kbd>
        <kbd class="kbd">s</kbd>
        <kbd class="kbd">d</kbd>
        <kbd class="kbd">f</kbd>
        <kbd class="kbd">g</kbd>
        <kbd class="kbd">h</kbd>
        <kbd class="kbd">j</kbd>
        <kbd class="kbd">k</kbd>
        <kbd class="kbd">l</kbd>
      </div>
      <div class="flex justify-center gap-1 my-1 w-full">
        <kbd class="kbd">z</kbd>
        <kbd class="kbd">x</kbd>
        <kbd class="kbd">c</kbd>
        <kbd class="kbd">v</kbd>
        <kbd class="kbd">b</kbd>
        <kbd class="kbd">n</kbd>
        <kbd class="kbd">m</kbd>
        <kbd class="kbd">/</kbd>
      </div>
    </template>
  </div>
</template>
