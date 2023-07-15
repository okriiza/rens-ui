<script setup>
const { toc, prev, next, navigation } = useContent()
const { path } = useRoute()

definePageMeta({
  layout: 'docs'
})
</script>

<template>
  <main>
    <DocsNav />
    <div class="container mx-auto mt-6 flex flex-row space-x-8 px-28 pt-20">
      <div
        class="sticky top-16 h-[calc(100vh-theme(spacing.16))] w-1/6 overflow-y-auto"
      >
        <ul>
          <li v-for="link of navigation" :key="link._path">
            <h3 class="font-bold" :to="link._path">{{ link.title }}</h3>
            <ul class="my-3">
              <li
                v-for="child of link.children"
                class="ml-0.5 space-y-1 border-l border-gray-3 text-sm"
              >
                <template v-if="path == child._path">
                  <NuxtLink
                    :to="child._path"
                    class="path == child._path -ml-px block border-l border-blue-4 py-1 pl-4 text-sm text-blue-4 hover:border-blue-4 hover:text-blue-4"
                    >{{ child.title }}</NuxtLink
                  >
                </template>
                <template v-else>
                  <NuxtLink
                    :to="child._path"
                    class="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-slate-8 hover:border-blue-4 hover:text-blue-4"
                    >{{ child.title }}</NuxtLink
                  >
                </template>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="w-4/6 px-6">
        <div
          class="prose max-w-full dark:prose-invert prose-a:no-underline prose-thead:bg-gray-3 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-thead:rounded-t-lg"
        >
          <ContentDoc>
            <template #not-found>
              <h1>Document not found</h1>
            </template>
          </ContentDoc>
        </div>
        <div class="divider"></div>
        <div class="mt-4 flex justify-between">
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="w-64 rounded-lg border border-border px-4 py-3 hover:bg-gray-2 dark:bg-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-700 shadow-lg"
          >
            <div class="text-start">
              <p class="text-[10px] capitalize text-content2">Previous</p>
              <p class="font-semibold">{{ prev.title }}</p>
            </div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="next._path"
            class="w-64 rounded-lg border border-border px-4 py-3 hover:bg-gray-2 dark:bg-slate-800 dark:hover:border-slate-600 dark:hover:bg-slate-700 shadow-lg"
          >
            <div class="text-end">
              <p class="text-[10px] capitalize text-content2">Next</p>
              <p class="font-semibold">{{ next.title }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="w-1/6">
        <h2 class="text-lg font-bold">Table Of Contents</h2>
        <ul v-if="toc && toc.links" class="mt-3">
          <li
            v-for="link in toc.links"
            :key="link.text"
            class="ml-0.5 space-y-1 border-l border-gray-3 text-sm"
          >
            <a
              :href="`#${link.id}`"
              class="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-slate-8 hover:border-blue-4 hover:text-blue-4"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </main>
</template>
