<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  pulse: {
    type: Boolean,
    default: false
  },
  static: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose space-y-2">
    <template v-if="basic">
      <div class="skeleton h-5 rounded-full"></div>
    </template>
    <template v-else-if="pulse">
      <div class="skeleton-pulse h-5 rounded-full"></div>
    </template>
    <template v-else-if="static">
      <div class="skeleton-static h-5 rounded-full"></div>
    </template>
    <template v-else>
      <div class="card">
        <div class="card-body">
          <div
            class="flex items-center justify-center h-48 mb-4  rounded  skeleton-pulse"
          >
            <svg
              class="w-10 h-10 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path
                d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
              />
              <path
                d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
              />
            </svg>
          </div>
          <h2 class="card-header">
            <div class="skeleton-pulse h-3 w-52 rounded-full"></div>
          </h2>
          <p class="text-content2">
            <div class="skeleton-pulse h-3 rounded-full"></div>
            <div class="skeleton-pulse h-3 rounded-full"></div>
            <div class="skeleton-pulse h-3 rounded-full"></div>

          </p>
          <div class="card-footer">
            <div class="skeleton-pulse h-8 w-24 rounded-lg"></div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
