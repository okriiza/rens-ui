<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  withTitle: {
    type: Boolean,
    default: false
  },
  withDivider: {
    type: Boolean,
    default: false
  },
  withIconStart: {
    type: Boolean,
    default: false
  },
  withIconEnd: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <nav class="menu bg-backgroundSecondary shadow p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="active">
      <nav class="menu bg-backgroundSecondary shadow p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item menu-active">Item Active</li>
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="disabled">
      <nav class="menu bg-backgroundSecondary shadow p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item menu-item-disabled">Item Disable</li>
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withTitle">
      <nav class="menu bg-backgroundSecondary shadow p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withDivider">
      <nav class="menu bg-backgroundSecondary shadow p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
        <div class="divider my-0"></div>
        <section class="menu-section">
          <span class="menu-title">Second Menu</span>
          <ul class="menu-items">
            <li class="menu-item">Item 1</li>
            <li class="menu-item">Item 2</li>
            <li class="menu-item">Item 3</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withIconStart">
      <nav class="menu bg-backgroundSecondary shadow p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              <span>Item 1</span>
            </li>
            <li class="menu-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              <span>Item 2</span>
            </li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withIconEnd">
      <nav class="menu bg-backgroundSecondary shadow p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item justify-between">
              <span>Item 1</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
            </li>
            <li class="menu-item justify-between">
              <span>Item 2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
            </li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else>
      <nav class="menu p-4 bg-backgroundSecondary shadow rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li>
              <input type="checkbox" id="menu-1" class="menu-toggle" />
              <label class="menu-item justify-between" for="menu-1">
                <span>Parent Item</span>
                <span class="menu-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    class="w-4 h-4 stroke-content3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </label>

              <div class="menu-item-collapse">
                <div class="min-h-0">
                  <label class="menu-item-disabled menu-item ml-6"
                    >Child Disable</label
                  >
                  <label class="menu-item ml-6">Child Item 1</label>
                  <label class="menu-item ml-6">Child Item 2</label>
                </div>
              </div>
            </li>
            <li>
              <label class="menu-item" tabindex="0" role="button">Item 1</label>
            </li>
            <li class="menu-item">Item 2</li>
          </ul>
        </section>
      </nav>
    </template>
  </div>
</template>
