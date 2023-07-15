<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  tbf: {
    type: Boolean,
    default: false
  },
  tbfit: {
    type: Boolean,
    default: false
  },
  tbfib: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="card not-prose" v-if="basic">
    <div class="card-body">Hello World</div>
  </div>
  <div class="card not-prose" v-else-if="tbf">
    <div class="card-body">
      <h2 class="card-header">Penatibus etiam nam congue hendrerit</h2>
      <p class="text-content2">
        Penatibus ornare facilisi nostra proin quis consectetuer dis
        pellentesque
      </p>
      <div class="card-footer">
        <button class="btn-primary btn">Learn More</button>
      </div>
    </div>
  </div>
  <div class="card card-image-cover not-prose" v-else-if="tbfit">
    <img src="https://source.unsplash.com/random/300x200" alt="" />
    <div class="card-body">
      <h2 class="card-header">Penatibus etiam nam congue hendrerit</h2>
      <p class="text-content2">
        Penatibus ornare facilisi nostra proin quis consectetuer dis
        pellentesque
      </p>
      <div class="card-footer">
        <button class="btn-primary btn">Learn More</button>
      </div>
    </div>
  </div>
  <div class="card card-image-cover not-prose" v-else>
    <div class="card-body">
      <h2 class="card-header">Penatibus etiam nam congue hendrerit</h2>
      <p class="text-content2">
        Penatibus ornare facilisi nostra proin quis consectetuer dis
        pellentesque
      </p>
      <div class="card-footer">
        <button class="btn-primary btn">Learn More</button>
      </div>
    </div>
    <img src="https://source.unsplash.com/random/300x200" alt="" />
  </div>
</template>
