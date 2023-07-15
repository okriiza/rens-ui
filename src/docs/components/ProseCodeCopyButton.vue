<script setup lang="ts">
import { ref } from 'vue'
import { useClipboard, onClickOutside } from '@vueuse/core'

const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  show: {
    type: Boolean,
    default: false
  }
})

const copyButtonRef = ref<HTMLElement>()

const { copy: copyToClipboard } = useClipboard()
onClickOutside(copyButtonRef, () => {
  if (state.value === 'copied') {
    state.value = 'init'
  }
})

const state = ref('init')

const copy = (_e: MouseEvent) => {
  copyToClipboard(props.content)
    .then(() => {
      state.value = 'copied'
    })
    .catch((err) => {
      console.warn("Couldn't copy to clipboard!", err)
    })
}
</script>

<template>
  <button
    class="btn-copy"
    ref="copyButtonRef"
    :class="[(show || state === 'copied') && 'show']"
    @click="copy"
  >
    <span class="sr-only">Copy to clipboard</span>
    <span class="icon-wrapper">
      <Transition name="fade">
        <IconCheck v-if="state === 'copied'" class="copied" />
        <IconCopy v-else />
      </Transition>
    </span>
  </button>
</template>

<style>
.btn-copy {
  padding: 4px;
  margin: 4px;
  border-radius: 3px;
  transition: all 200ms;
  transform: scale(0.75);
  opacity: 0;
  background-color: #27272a;
}

.btn-copy:hover {
  background-color: #424244;
}

.btn-copy:focus {
  opacity: 1;
  outline: none;
  box-shadow: 0 0 0 2px #1a62ff;
}

.btn-copy.show {
  transform: scale(1);
  opacity: 1;
}

.btn-copy .icon-wrapper {
  display: block;
  position: relative;
  width: 18px;
  height: 18px;
}

.btn-copy .icon {
  display: block;
  position: absolute;
}

.btn-copy .fade-enter-active,
.btn-copy .fade-leave-active {
  transition: opacity 200ms;
}

.btn-copy .fade-enter-from,
.btn-copy .fade-leave-to {
  opacity: 0;
}
</style>
