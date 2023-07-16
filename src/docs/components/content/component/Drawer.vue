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
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <div>
            <h2 class="text-xl font-medium">Create your account</h2>
            <input class="input py-1.5 my-3" placeholder="Type here..." />
          </div>
          <div class="h-full flex flex-row justify-end items-end gap-2">
            <button class="btn btn-ghost">Cancel</button>
            <button class="btn btn-primary">Create</button>
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
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <div>
            <h2 class="text-xl font-medium">Create your account</h2>
            <input class="input py-1.5 my-3" placeholder="Type here..." />
          </div>
          <div class="h-full flex flex-row justify-end items-end gap-2">
            <button class="btn btn-ghost">Cancel</button>
            <button class="btn btn-primary">Create</button>
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
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <p class="max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
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
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <p class="max-w-xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
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
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
        </div>
      </div>
    </template>
  </div>
</template>
