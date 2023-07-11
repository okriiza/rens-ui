<script setup lang="ts">
import type { PropType } from 'vue'
import { ref } from 'vue'
import type { Lang } from 'shiki-es'

defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String as PropType<Lang>,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
})

const hovered = ref(false)
</script>

<template>
  <div
    :class="[`highlight-${language}`]"
    class="prose-code overflow-x-auto"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />

    <ProseCodeCopyButton :show="hovered" :content="code" class="copy-button" />
  </div>
</template>

<style>
.prose-code {
  position: relative;
  width: 100%;
  font-size: 16px;
  border-radius: 0.5rem;
  border-style: solid;
  border-color: #474646;
  border-width: 1px;
  backdrop-filter: contrast(1);
  background-color: #374151;
}

.prose-code :deep(code) {
  width: 100%;
}
.prose-code pre {
  margin-top: 0;
  margin-bottom: 0;
}

.prose-code.highlight-zsh :deep(code),
.prose-code.highlight-sh :deep(code),
.prose-code.highlight-bash :deep(code),
.prose-code.highlight-shell :deep(code),
.prose-code.highlight-shellscript :deep(code) {
  .line {
    position: relative;
    padding-inline-start: 1rem;
  }

  .line::before {
    content: '>';
    position: absolute;
    top: 0;
    inset-inline-start: -0.1rem;
    display: block;
    user-select: none;
    font-weight: 700;
    color: #1a62ff;
  }
}

.copy-button {
  position: absolute;
  inset-inline-end: 0;
  bottom: 0;
}

:deep(code) {
  display: flex;
  flex-direction: column;
}

:deep(.line) {
  display: inline-table;
  min-height: 1rem;
}

.filename {
  position: absolute;
  top: 0;
  inset-inline-end: 0;
  padding: 0.5rem 0.75rem;
  color: #e4e4e7;
  border-radius: 0.75rem;
  font-size: 0.75rem;
  line-height: 1.5;
  transition: opacity 200ms;
  backdrop-filter: blur(4px);
}

.prose-code:hover .filename {
  opacity: 0;
}

.prose-code:hover .filename:hover {
  opacity: 1;
}

:deep(pre) {
  display: flex;
  flex: 1;
  overflow-x: auto;
  margin: 0;
  padding: 16px;
  line-height: 1.625;
}

:deep(pre code) {
  padding-inline-end: 30px;
}

:deep(.line.highlight) {
  background-color: #27272a;
}
</style>
