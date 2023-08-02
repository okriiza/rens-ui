<script setup lang="ts">
import { watchDebounced } from '@vueuse/core'
const props = withDefaults(defineProps<{ activeTocId: string | null }>(), {})

const router = useRouter()

const { toc } = useContent()

const sliderHeight = useState('sliderHeight', () => 0)
const sliderTop = useState('sliderTop', () => 0)
const tocLinksH2: Ref<Array<HTMLElement>> = ref([])
const tocLinksH3: Ref<Array<HTMLElement>> = ref([])

const onClick = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    router.push({ hash: `#${id}` })
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

watchDebounced(
  () => props.activeTocId,
  (newActiveTocId) => {
    const h2Link = tocLinksH2.value.find(
      (el: HTMLElement) => el.id === `toc-${newActiveTocId}`
    )
    const h3Link = tocLinksH3.value.find(
      (el: HTMLElement) => el.id === `toc-${newActiveTocId}`
    )
    if (h2Link) {
      console.log(h2Link.offsetTop)
      sliderHeight.value = h2Link.offsetHeight
      sliderTop.value = h2Link.offsetTop - 100
    } else if (h3Link) {
      sliderHeight.value = h3Link.offsetHeight
      sliderTop.value = h3Link.offsetTop - 100
    }
  },
  { debounce: 200, immediate: true }
)
</script>

<template>
  <div class="max-h-82 overflow-auto">
    <h2 class="text-md font-bold">Table Of Contents</h2>
    <nav class="mt-4 flex">
      <ul>
        <div class="relative w-0.5 overflow-hidden rounded bg-secondary">
          <div
            class="absolute left-0 w-full rounded bg-red-500 transition-all duration-200"
            :style="{ height: `${sliderHeight}px`, top: `${sliderTop}px` }"
          ></div>
        </div>
        <li
          v-for="{ id, text, children } in toc?.links"
          :id="`toc-${id}`"
          :key="id"
          class="ml-0.5 space-y-1 border-l border-gray-border text-sm"
          @click="onClick(id)"
        >
          <template v-if="id == activeTocId">
            <NuxtLink
              :to="`#${id}`"
              class="-ml-px block border-l border-blue-base py-1 pl-4 text-sm text-blue-base hover:border-blue-pressed hover:text-blue-pressed"
              >{{ text }}</NuxtLink
            >
          </template>
          <template v-else>
            <NuxtLink
              :to="`#${id}`"
              class="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-content1 hover:border-content3 hover:text-content3"
              >{{ text }}</NuxtLink
            >
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>
