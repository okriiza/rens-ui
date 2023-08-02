<script setup lang="ts">
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <NotFoundPage />
  <!-- <button @click="handleError" class="btn btn-primary">Back To Home</button> -->
</template>
