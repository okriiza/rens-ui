<script setup lang="ts">
const { toc, prev, next, navigation, page } = useContent()
const { path, fullPath } = useRoute()
const activeTocId: Ref<null | string> = ref(null)
const nuxtContent = ref(null)

const observer: Ref<IntersectionObserver | null | undefined> = ref(null)
const observerOptions = reactive({
  root: nuxtContent.value,
  threshold: 0.5
})

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id')
      if (entry.isIntersecting) {
        activeTocId.value = id
      }
    })
  }, observerOptions)

  document.querySelectorAll('.nuxt-content h2[id]').forEach((section) => {
    observer.value?.observe(section)
  })

  umTrackView(fullPath, document.referrer)
})

onUnmounted(() => {
  observer.value?.disconnect()
})
definePageMeta({
  layout: 'docs'
})
</script>

<template>
  <main>
    <DocsNav />
    <div class="container mx-auto pt-20 px-6 xl:px-28">
      <!-- <pre>{{ page }}</pre> -->
      <div
        class="items-center flex px-4 py-3 border-b border-gray-border/50 xl:hidden"
      >
        <label
          for="sidebar-mobile-fixed"
          class="border border-gray-border inline-block px-3 py-2 rounded-md hover:bg-gray-background"
        >
          <IconMenu class="h-4 w-4" />
        </label>
        <div class="divider divider-vertical h-6"></div>

        <div class="breadcrumbs text-sm capitalize">
          <ul>
            <li>
              <NuxtLink to="/">
                <span>Docs</span>
              </NuxtLink>
            </li>
            <li>
              <a>
                <span>{{ page?._dir?.title ?? page?._dir }}</span>
              </a>
            </li>
            <!-- <pre>{{ page }}</pre> -->
            <li>{{ page?.title }}</li>
          </ul>
        </div>
      </div>
      <div class="accordion-group accordion-group-hover md:hidden mt-3">
        <div class="accordion">
          <input type="checkbox" id="toggle-toc" class="accordion-toggle" />
          <div class="accordion-header">
            <label for="toggle-toc" class="accordion-title"
              >Table Of Contents</label
            >
            <span class="accordion-icon">
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
          </div>
          <div class="accordion-content text-content2">
            <div class="min-h-0">
              <ul v-if="toc && toc?.links">
                <li
                  v-for="link in toc?.links"
                  :key="link.text"
                  class="ml-0.5 space-y-1 border-l border-gray-border/50 text-sm"
                >
                  <NuxtLink
                    :href="`#${link.id}`"
                    class="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-content2 hover:border-content3 hover:text-content3"
                  >
                    {{ link.text }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 grid grid-cols-4 xl:grid-cols-12 gap-4">
        <div
          class="sticky top-24 h-[calc(100vh-theme(spacing.16))] col-span-2 overflow-y-auto hidden xl:block"
        >
          <ul>
            <li v-for="link of navigation" :key="link._path">
              <h3 class="font-bold" :to="link._path">{{ link.title }}</h3>
              <ul class="my-3">
                <li
                  v-for="child of link.children"
                  class="ml-0.5 space-y-1 border-l border-gray-border/50 text-sm"
                >
                  <template v-if="path == child._path">
                    <NuxtLink
                      :to="child._path"
                      class="-ml-px block font-medium border-l border-blue-base py-1 pl-4 text-sm text-blue-base hover:border-blue-pressed hover:text-blue-pressed"
                      >{{ child.title }}</NuxtLink
                    >
                  </template>
                  <template v-else>
                    <NuxtLink
                      :to="child._path"
                      class="-ml-px block border-l font-medium border-transparent py-1 pl-4 text-sm text-content1 hover:border-content3 hover:text-content3"
                      >{{ child.title }}</NuxtLink
                    >
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          class="col-span-4 md:col-span-3 xl:col-span-8 md:pr-6 xl:px-6 mb-36"
        >
          <div
            class="prose max-w-full dark:prose-invert prose-a:no-underline prose-thead:bg-gray-background prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-thead:rounded-t-lg prose-headings:scroll-mt-24"
          >
            <ContentDoc>
              <template #default="{ doc }">
                <div class="nuxt-content">
                  <ContentRenderer ref="nuxtContent" :value="doc" />
                </div>
              </template>
              <template #not-found>
                <div class="text-center not-proese">
                  <NotFoundPage />
                </div>
              </template>
            </ContentDoc>
          </div>
          <div class="divider"></div>
          <div class="mt-4 flex justify-between">
            <NuxtLink
              v-if="prev"
              :to="prev._path"
              class="w-36 md:w-52 xl:w-64 rounded-lg border border-border px-4 py-3 hover:bg-gray-background hover:text-content1 dark:bg-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-700"
            >
              <div class="text-start">
                <p class="text-[10px] capitalize text-content2">Previous</p>
                <p class="font-semibold">{{ prev.title }}</p>
              </div>
            </NuxtLink>
            <NuxtLink
              v-if="next"
              :to="next._path"
              class="w-36 md:w-52 xl:w-64 rounded-lg border border-border px-4 py-3 hover:bg-gray-background hover:text-content1 dark:bg-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-700"
            >
              <div class="text-end">
                <p class="text-[10px] capitalize text-content2">Next</p>
                <p class="font-semibold">{{ next.title }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-span-1 xl:col-span-2 hidden md:block">
          <div class="sticky top-24">
            <TableOfContents :activeTocId="activeTocId" />
          </div>
        </div>
      </div>
    </div>
    <!-- sidebar -->
    <input type="checkbox" id="sidebar-mobile-fixed" class="sidebar-state" />
    <label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
    <aside
      class="sidebar h-full sidebar-fixed-left sidebar-mobile justify-start fixed -translate-x-full"
    >
      <section
        class="sidebar-content px-8 h-fit min-h-[20rem] overflow-visible overflow-y-auto"
      >
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <h3 class="font-bold" :to="link._path">{{ link.title }}</h3>
            <ul class="my-3">
              <li
                v-for="child of link.children"
                class="ml-0.5 space-y-1 border-l border-gray-border/50 text-sm"
              >
                <template v-if="path == child._path">
                  <NuxtLink
                    :to="child._path"
                    class="-ml-px block font-medium border-l border-blue-base py-1 pl-4 text-sm text-blue-base hover:border-blue-pressed hover:text-blue-pressed"
                    >{{ child.title }}</NuxtLink
                  >
                </template>
                <template v-else>
                  <NuxtLink
                    :to="child._path"
                    class="-ml-px block border-l font-medium border-transparent py-1 pl-4 text-sm text-content1 hover:border-content3 hover:text-content3"
                    >{{ child.title }}</NuxtLink
                  >
                </template>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>

    <Footer />
  </main>
</template>
