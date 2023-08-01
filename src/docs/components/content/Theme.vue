<script setup>
defineProps({
  base: {
    type: Boolean,
    default: false
  },
  bg: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div>
    <template v-if="base">
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-primary text-white p-3 rounded-lg">primary</div>
        <div class="bg-secondary text-white p-3 rounded-lg">secondary</div>
        <div class="bg-success text-white p-3 rounded-lg">success</div>
        <div class="bg-warning text-white p-3 rounded-lg">warning</div>
        <div class="bg-error text-white p-3 rounded-lg">error</div>
      </div>
    </template>

    <template v-else-if="bg">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 space-y-3">
          <h3>Background</h3>
          <div class="bg-backgroundPrimary text-content1 p-3 rounded-lg">
            backgroundPrimary
          </div>
          <div class="bg-backgroundSecondary text-content1 p-3 rounded-lg">
            backgroundSecondary
          </div>
          <div class="bg-border text-content1 p-3 rounded-lg">border</div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Content</h3>
          <div class="bg-content1 text-white dark:text-black p-3 rounded-lg">
            content1
          </div>
          <div class="bg-content2 text-white dark:text-black p-3 rounded-lg">
            content2
          </div>
          <div class="bg-content3 text-white dark:text-black p-3 rounded-lg">
            content3
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-6 space-y-3">
          <h3>Blue</h3>
          <div class="bg-blue-base text-white p-3 rounded-lg">blue-base</div>
          <div class="bg-blue-hover text-white p-3 rounded-lg">blue-hover</div>
          <div class="bg-blue-pressed text-white p-3 rounded-lg">
            blue-pressed
          </div>
          <div class="bg-blue-border text-white p-3 rounded-lg">
            blue-border
          </div>
          <div class="bg-blue-background text-white p-3 rounded-lg">
            blue-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Pink</h3>
          <div class="bg-pink-base text-white p-3 rounded-lg">pink-base</div>
          <div class="bg-pink-hover text-white p-3 rounded-lg">pink-hover</div>
          <div class="bg-pink-pressed text-white p-3 rounded-lg">
            pink-pressed
          </div>
          <div class="bg-pink-border text-white p-3 rounded-lg">
            pink-border
          </div>
          <div class="bg-pink-background text-white p-3 rounded-lg">
            pink-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Green</h3>
          <div class="bg-green-base text-white p-3 rounded-lg">green-base</div>
          <div class="bg-green-hover text-white p-3 rounded-lg">
            green-hover
          </div>
          <div class="bg-green-pressed text-white p-3 rounded-lg">
            green-pressed
          </div>
          <div class="bg-green-border text-white p-3 rounded-lg">
            green-border
          </div>
          <div class="bg-green-background text-white p-3 rounded-lg">
            green-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Orange</h3>
          <div class="bg-orange-base text-white p-3 rounded-lg">
            orange-base
          </div>
          <div class="bg-orange-hover text-white p-3 rounded-lg">
            orange-hover
          </div>
          <div class="bg-orange-pressed text-white p-3 rounded-lg">
            orange-pressed
          </div>
          <div class="bg-orange-border text-white p-3 rounded-lg">
            orange-border
          </div>
          <div class="bg-orange-background text-white p-3 rounded-lg">
            orange-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Red</h3>
          <div class="bg-red-base text-white p-3 rounded-lg">red-base</div>
          <div class="bg-red-hover text-white p-3 rounded-lg">red-hover</div>
          <div class="bg-red-pressed text-white p-3 rounded-lg">
            red-pressed
          </div>
          <div class="bg-red-border text-white p-3 rounded-lg">red-border</div>
          <div class="bg-red-background text-white p-3 rounded-lg">
            red-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Purple</h3>
          <div class="bg-purple-base text-white p-3 rounded-lg">
            purple-base
          </div>
          <div class="bg-purple-hover text-white p-3 rounded-lg">
            purple-hover
          </div>
          <div class="bg-purple-pressed text-white p-3 rounded-lg">
            purple-pressed
          </div>
          <div class="bg-purple-border text-white p-3 rounded-lg">
            purple-border
          </div>
          <div class="bg-purple-background text-white p-3 rounded-lg">
            purple-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Yellow</h3>
          <div class="bg-yellow-base text-white p-3 rounded-lg">
            yellow-base
          </div>
          <div class="bg-yellow-hover text-white p-3 rounded-lg">
            yellow-hover
          </div>
          <div class="bg-yellow-pressed text-white p-3 rounded-lg">
            yellow-pressed
          </div>
          <div class="bg-yellow-border text-white p-3 rounded-lg">
            yellow-border
          </div>
          <div class="bg-yellow-background text-white p-3 rounded-lg">
            yellow-background
          </div>
        </div>
        <div class="col-span-6 space-y-3">
          <h3>Gray</h3>
          <div class="bg-gray-base text-white p-3 rounded-lg">gray-base</div>
          <div class="bg-gray-hover text-white p-3 rounded-lg">gray-hover</div>
          <div class="bg-gray-pressed text-white p-3 rounded-lg">
            gray-pressed
          </div>
          <div class="bg-gray-border text-white p-3 rounded-lg">
            gray-border
          </div>
          <div class="bg-gray-background text-white p-3 rounded-lg">
            gray-background
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
