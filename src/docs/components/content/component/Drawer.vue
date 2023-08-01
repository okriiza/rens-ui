<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  top: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  notClose: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <input type="checkbox" id="drawer-left" class="drawer-toggle" />

      <label for="drawer-left" class="btn btn-primary">Open Left</label>
      <label class="overlay" for="drawer-left"></label>
      <div class="drawer">
        <div class="drawer-content pt-10 flex flex-col h-full">
          <label
            for="drawer-left"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
            >✕</label
          >
          <div>
            <nav class="menu">
              <section class="menu-section">
                <span class="menu-title">Main menu</span>
                <ul class="menu-items">
                  <li class="menu-item">Item 1</li>
                  <li class="menu-item">Item 2</li>
                  <li class="menu-item">Item 3</li>
                </ul>
              </section>
            </nav>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="right">
      <input type="checkbox" id="drawer-right" class="drawer-toggle" />

      <label for="drawer-right" class="btn btn-primary">Open Right</label>
      <label class="overlay" for="drawer-right"></label>
      <div class="drawer drawer-right">
        <div class="drawer-content pt-10 flex flex-col h-full">
          <label
            for="drawer-right"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
            >✕</label
          >
          <div>
            <nav class="menu">
              <section class="menu-section">
                <span class="menu-title">Main menu</span>
                <ul class="menu-items">
                  <li class="menu-item">Item 1</li>
                  <li class="menu-item">Item 2</li>
                  <li class="menu-item">Item 3</li>
                </ul>
              </section>
            </nav>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="top">
      <input type="checkbox" id="drawer-top" class="drawer-toggle" />

      <label for="drawer-top" class="btn btn-primary">Open Top</label>
      <label class="overlay" for="drawer-top"></label>
      <div class="drawer drawer-top h-24">
        <div class="drawer-content">
          <label
            for="drawer-top"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
            >✕</label
          >
          <p class="max-w-xl mx-auto">
            Semper quam senectus aliquet ad litora pede hac. Torquent conubia
            lobortis inceptos habitasse suscipit tristique pede porta fringilla
            hac. Ad nullam sagittis nec porttitor cras at elit eros vel
            himenaeos phasellus. Luctus inceptos nascetur ullamcorper morbi
            tempus nec. Dapibus inceptos lobortis sollicitudin in blandit
            consequat ridiculus congue. Lacinia nullam facilisi class montes
            vulputate interdum. Suspendisse sed aptent vehicula donec litora
            volutpat accumsan sodales. Per lorem nullam bibendum curabitur
            suscipit velit.
          </p>
        </div>
      </div>
    </template>
    <template v-else-if="bottom">
      <input type="checkbox" id="drawer-bottom" class="drawer-toggle" />

      <label for="drawer-bottom" class="btn btn-primary">
        <p>Open Bottom</p>
      </label>
      <label class="overlay" for="drawer-bottom"></label>
      <div class="drawer drawer-bottom">
        <div class="drawer-content">
          <label
            for="drawer-bottom"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
            >✕</label
          >
          <p class="max-w-xl mx-auto">
            Semper quam senectus aliquet ad litora pede hac. Torquent conubia
            lobortis inceptos habitasse suscipit tristique pede porta fringilla
            hac. Ad nullam sagittis nec porttitor cras at elit eros vel
            himenaeos phasellus. Luctus inceptos nascetur ullamcorper morbi
            tempus nec. Dapibus inceptos lobortis sollicitudin in blandit
            consequat ridiculus congue. Lacinia nullam facilisi class montes
            vulputate interdum. Suspendisse sed aptent vehicula donec litora
            volutpat accumsan sodales. Per lorem nullam bibendum curabitur
            suscipit velit.
          </p>
        </div>
      </div>
    </template>
    <template v-else="notClose">
      <input type="checkbox" id="drawer-overlay" class="drawer-toggle" />

      <label for="drawer-overlay" class="btn btn-primary">Open</label>
      <label class="overlay"></label>
      <div class="drawer">
        <div class="drawer-content">
          <label
            for="drawer-overlay"
            class="btn btn-sm btn-circle absolute right-2 top-2 btn-ghost"
            >✕</label
          >
        </div>
      </div>
    </template>
  </div>
</template>
