<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  top: {
    type: Boolean,
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  alert: {
    type: Boolean,
    default: false
  },
  bottom: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  },
  divider: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose mb-5">
    <template v-if="basic">
      <div class="dropdown">
        <label class="btn btn-primary my-2" tabindex="1">Click Me</label>
        <div class="dropdown-menu">
          <a class="dropdown-item text-sm">Item 1</a>
          <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
          <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
        </div>
      </div>
    </template>
    <template v-else-if="alert">
      <div class="alert alert-info">
        <svg
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 34C22.9 34 22 33.1 22 32V24C22 22.9 22.9 22 24 22C25.1 22 26 22.9 26 24V32C26 33.1 25.1 34 24 34ZM26 18H22V14H26V18Z"
            fill="currentColor"
          />
        </svg>
        <span class="alert-content ml-3 text-content2"
          >Add `tabIndex=-1` on item for close the dropdown when click Me on
          item.</span
        >
      </div>
    </template>
    <template v-else-if="top">
      <div class="flex space-x-2 items-center justify-center">
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Top Left</label>
          <div class="dropdown-menu dropdown-menu-top-left">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Top Center</label>
          <div class="dropdown-menu dropdown-menu-top-center">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Top Right</label>
          <div class="dropdown-menu dropdown-menu-top-right">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="left">
      <div class="flex space-x-2 items-center justify-center">
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">left Top</label>
          <div class="dropdown-menu dropdown-menu-left-top">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Left Center</label>
          <div class="dropdown-menu dropdown-menu-left">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Left Bottom</label>
          <div class="dropdown-menu dropdown-menu-left-bottom">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="right">
      <div class="flex space-x-2 items-center justify-center">
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Right Top</label>
          <div class="dropdown-menu dropdown-menu-right-top">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Right Center</label>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Right Bottom</label>
          <div class="dropdown-menu dropdown-menu-right-bottom">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="bottom">
      <div class="flex space-x-2 items-center justify-center">
        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Bottom Left</label>
          <div class="dropdown-menu dropdown-menu-bottom-left">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>

        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Bottom Center</label>
          <div class="dropdown-menu dropdown-menu-bottom-center">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>

        <div class="dropdown">
          <label class="btn btn-primary my-2" tabindex="0">Buttom Right</label>
          <div class="dropdown-menu dropdown-menu-bottom-right">
            <a class="dropdown-item text-sm">Item 1</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 2</a>
            <a tabindex="-1" class="dropdown-item text-sm">Item 3</a>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="open">
      <div class="dropdown dropdown-open mb-32">
        <label class="btn btn-primary my-2" tabindex="0">Click Me</label>
        <div class="dropdown-menu dropdown-menu-bottom-right shadow-lg">
          <a class="dropdown-item text-sm">Profile</a>
          <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
          <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
        </div>
      </div>
    </template>
    <template v-else-if="hover">
      <div class="dropdown dropdown-hover">
        <label class="btn btn-primary my-2" tabindex="0">Click Me</label>
        <div class="dropdown-menu dropdown-menu-bottom-right">
          <a class="dropdown-item text-sm">Profile</a>
          <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
          <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
        </div>
      </div>
    </template>
    <template v-else-if="divider">
      <div class="dropdown">
        <label class="btn btn-primary my-2" tabindex="0">Click Me</label>
        <div class="dropdown-menu dropdown-menu-bottom-right gap-1">
          <a class="dropdown-item text-sm">Profile</a>
          <div class="dropdown-divider" role="separator"></div>
          <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
          <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
        </div>
      </div>
    </template>
    <template v-else-if="bordered">
      <div class="dropdown">
        <label class="btn btn-primary my-2" tabindex="0">Click Me</label>
        <div
          class="dropdown-menu dropdown-menu-bottom-right border border-gray-border"
        >
          <a class="dropdown-item text-sm">Profile</a>
          <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
          <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="dropdown">
        <label class="btn btn-primary my-2" tabindex="0">Click Me</label>
        <div class="dropdown-menu dropdown-menu-bottom-right gap-1">
          <a class="dropdown-item text-sm">Profile</a>
          <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
          <a tabindex="-1" class="dropdown-item text-sm dropdown-active"
            >Logout</a
          >
        </div>
      </div>
    </template>
  </div>
</template>
