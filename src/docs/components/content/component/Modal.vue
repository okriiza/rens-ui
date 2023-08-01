<script setup>
defineProps({
  basic: {
    type: String,
    default: false
  },
  sizes: {
    type: String,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <label class="btn btn-primary" for="modal-1">Open Modal</label>
      <input class="modal-state" id="modal-1" type="checkbox" />
      <div class="modal">
        <label class="modal-overlay" for="modal-1"></label>
        <div class="modal-content flex flex-col gap-5">
          <label
            for="modal-1"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <h2 class="text-xl">Modal title 1</h2>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!</span
          >
          <div class="flex gap-3">
            <button class="btn btn-error btn-block">Delete</button>

            <button class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="sizes">
      <label class="btn btn-primary" for="modal-2">Open Modal</label>

      <input class="modal-state" id="modal-2" type="checkbox" />
      <div class="modal w-screen">
        <label class="modal-overlay" for="modal-2"></label>
        <div class="modal-content flex flex-col gap-5 max-w-3xl">
          <label
            for="modal-2"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <h2 class="text-xl">Modal title 2</h2>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!</span
          >
          <div class="flex gap-3">
            <button class="btn btn-error btn-block">Delete</button>
            <button class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <label class="btn btn-primary" for="modal-3">Open Modal</label>

      <input class="modal-state" id="modal-3" type="checkbox" />
      <div class="modal">
        <label class="modal-overlay"></label>
        <div class="modal-content flex flex-col gap-5">
          <label
            for="modal-3"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >✕</label
          >
          <h2 class="text-xl">Modal title 3</h2>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            dolorum voluptate ratione dicta. Maxime cupiditate, est commodi
            consectetur earum iure, optio, obcaecati in nulla saepe maiores
            nobis iste quasi alias!</span
          >
          <div class="flex gap-3">
            <button class="btn btn-error btn-block">Delete</button>
            <button class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
