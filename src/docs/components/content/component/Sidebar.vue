<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <aside class="sidebar h-full justify-start">
        <section class="sidebar-title items-center p-4">Title Sidebar</section>
        <section class="sidebar-content h-fit min-h-[20rem] overflow-visible">
          <nav class="menu rounded-md">
            <section class="menu-section px-4">
              <span class="menu-title">Main menu</span>
              <ul class="menu-items">
                <li class="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Item 1</span>
                </li>
                <li class="menu-item menu-active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Item 2</span>
                </li>
                <li>
                  <input type="checkbox" id="menu-11" class="menu-toggle" />
                  <label class="menu-item justify-between" for="menu-11">
                    <div class="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Parent Item</span>
                    </div>

                    <span class="menu-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </label>

                  <div class="menu-item-collapse">
                    <div class="min-h-0">
                      <label class="menu-item menu-item-disabled ml-6"
                        >Chiled Disable</label
                      >
                      <label class="menu-item ml-6">Child Item 1</label>
                      <label class="menu-item ml-6">Child Item 2</label>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </nav>
        </section>
        <section class="sidebar-footer h-full justify-end bg-slate-3 pt-2">
          <div class="divider my-0"></div>
          <div class="p-5">Footer Sidebar</div>
        </section>
      </aside>
    </template>
    <template v-else-if="sticky">
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px"
        width="800"
        height="450"
        src="https://codesandbox.io/p/sandbox/example-sidebar-j5p9cy?file=%2Fsticky.html%3A11%2C5-127%2C11&embed=1"
        allowfullscreen
      ></iframe>
    </template>
    <template v-else-if="fixed">
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px"
        width="800"
        height="450"
        src="https://codesandbox.io/p/sandbox/example-sidebar-j5p9cy?file=%2Ffixed.html%3A11%2C5-140%2C11&embed=1"
        allowfullscreen
      ></iframe>
    </template>
    <template v-else>
      <iframe
        style="border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 2px"
        width="800"
        height="450"
        src="https://codesandbox.io/p/sandbox/example-sidebar-j5p9cy?file=%2Findex.html%3A241%2C8&embed=1"
        allowfullscreen
      ></iframe>
    </template>
  </div>
</template>
