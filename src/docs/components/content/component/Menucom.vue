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
      <nav class="menu bg-slate-3 p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item">General</li>
            <li class="menu-item">Teams</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Calendar</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="active">
      <nav class="menu bg-slate-3 p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item menu-active">General</li>
            <li class="menu-item">Teams</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Calendar</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="disabled">
      <nav class="menu bg-slate-3 p-2 rounded-lg">
        <section class="menu-section">
          <ul class="menu-items">
            <li class="menu-item menu-item-disabled">General</li>
            <li class="menu-item">Teams</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Calendar</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withTitle">
      <nav class="menu bg-slate-3 p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">General</li>
            <li class="menu-item">Teams</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Calendar</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withDivider">
      <nav class="menu bg-slate-3 p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">General</li>
            <li class="menu-item">Teams</li>
            <li class="menu-item">Projects</li>
            <li class="menu-item">Calendar</li>
          </ul>
        </section>
        <div class="divider my-0"></div>
        <section class="menu-section">
          <span class="menu-title">Settings</span>
          <ul class="menu-items">
            <li class="menu-item">Profile</li>
            <li class="menu-item">Payments</li>
            <li class="menu-item">Email</li>
            <li class="menu-item">Invoices</li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withIconStart">
      <nav class="menu bg-slate-3 p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-content3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
                ></path>
              </svg>
              <span>General</span>
            </li>
            <li class="menu-item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-content3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
                ></path>
              </svg>
              <span>Payments</span>
            </li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else-if="withIconEnd">
      <nav class="menu bg-slate-3 p-4 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li class="menu-item justify-between">
              <span>General</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-content3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
                ></path>
              </svg>
            </li>
            <li class="menu-item justify-between">
              <span>Payments</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-content3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
                ></path>
              </svg>
            </li>
          </ul>
        </section>
      </nav>
    </template>

    <template v-else>
      <nav class="menu p-4 bg-slate-3 rounded-lg">
        <section class="menu-section">
          <span class="menu-title">Main menu</span>
          <ul class="menu-items">
            <li>
              <input type="checkbox" id="menu-1" class="menu-toggle" />
              <label class="menu-item justify-between" for="menu-1">
                <span>General</span>
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
                    >Accounts</label
                  >
                  <label class="menu-item ml-6">Billing</label>
                  <label class="menu-item ml-6">Security</label>
                </div>
              </div>
            </li>
            <li>
              <label class="menu-item" tabindex="0" role="button"
                >Settings</label
              >
            </li>
            <li class="menu-item">Profile</li>
          </ul>
        </section>
      </nav>
    </template>
  </div>
</template>
