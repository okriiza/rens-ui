<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <aside class="sidebar h-full justify-start">
        <section class="sidebar-title items-center p-4">
          <svg
            fill="none"
            height="42"
            viewBox="0 0 32 32"
            width="42"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="100%" rx="16" width="100%"></rect>
            <path
              clip-rule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
          <div class="flex flex-col">
            <span>Acme</span>
            <span class="text-xs font-normal text-content2">Team Plan</span>
          </div>
        </section>
        <section class="sidebar-content h-fit min-h-[20rem] overflow-visible">
          <nav class="menu rounded-md">
            <section class="menu-section px-4">
              <span class="menu-title">Main menu</span>
              <ul class="menu-items">
                <li class="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>General</span>
                </li>

                <li class="menu-item menu-active">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>Teams</span>
                </li>
                <li class="menu-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span>Billing</span>
                </li>
                <li>
                  <input type="checkbox" id="menu-1" class="menu-toggle" />
                  <label class="menu-item justify-between" for="menu-1">
                    <div class="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Account</span>
                    </div>

                    <span class="menu-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
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
                      <label class="menu-item ml-6">Notifications</label>
                      <label class="menu-item ml-6">Integrations</label>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </nav>
        </section>
        <section class="sidebar-footer h-full justify-end bg-slate-3 pt-2">
          <div class="divider my-0"></div>
          <div
            class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4"
          >
            <label
              class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
              tabindex="0"
            >
              <div class="flex flex-row gap-4 p-4">
                <div class="avatar avatar-md">
                  <img src="https://i.pravatar.cc/150?img=5" alt="avatar" />
                </div>

                <div class="flex flex-col">
                  <span>Alexandria</span>
                  <span class="text-xs font-normal text-content2">alex</span>
                </div>
              </div>
            </label>
            <div class="dropdown-menu dropdown-menu-right-top ml-2">
              <a class="dropdown-item text-sm">Profile</a>
              <a tabindex="-1" class="dropdown-item text-sm"
                >Account settings</a
              >
              <a tabindex="-1" class="dropdown-item text-sm">Change email</a>
              <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
              <a tabindex="-1" class="dropdown-item text-sm">Change password</a>
              <a tabindex="-1" class="dropdown-item text-sm">Refer a friend</a>
              <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
            </div>
          </div>
        </section>
      </aside>
    </template>
    <template v-else-if="sticky">
      <div
        class="sticky flex h-screen flex-row gap-4 overflow-y-auto rounded-lg sm:overflow-x-hidden"
      >
        <aside class="sidebar-sticky sidebar justify-start">
          <section class="sidebar-title items-center p-4">
            <svg
              fill="none"
              height="42"
              viewBox="0 0 32 32"
              width="42"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="100%" rx="16" width="100%"></rect>
              <path
                clip-rule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
            <div class="flex flex-col">
              <span>Acme</span>
              <span class="text-xs font-normal text-content2">Team Plan</span>
            </div>
          </section>
          <section class="sidebar-content min-h-[20rem]">
            <nav class="menu rounded-md">
              <section class="menu-section px-4">
                <span class="menu-title">Main menu</span>
                <ul class="menu-items">
                  <li class="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>General</span>
                  </li>

                  <li class="menu-item menu-active">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>Teams</span>
                  </li>
                  <li class="menu-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Billing</span>
                  </li>
                  <li>
                    <input type="checkbox" id="menu-2" class="menu-toggle" />
                    <label class="menu-item justify-between" for="menu-2">
                      <div class="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 opacity-75"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        <span>Account</span>
                      </div>

                      <span class="menu-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </label>

                    <div class="menu-item-collapse">
                      <div class="min-h-0">
                        <label class="menu-item menu-item-disabled ml-6"
                          >Accounts</label
                        >
                        <label class="menu-item ml-6">Billing</label>
                        <label class="menu-item ml-6">Security</label>
                        <label class="menu-item ml-6">Notifications</label>
                        <label class="menu-item ml-6">Integrations</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </nav>
          </section>
          <section class="sidebar-footer bg-slate-3 pt-2">
            <div class="divider my-0"></div>
            <div
              class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4"
            >
              <label
                class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                tabindex="0"
              >
                <div class="flex flex-row gap-4 p-4">
                  <div class="avatar avatar-md">
                    <img src="https://i.pravatar.cc/150?img=5" alt="avatar" />
                  </div>

                  <div class="flex flex-col">
                    <span>Alexandria</span>
                    <span class="text-xs font-normal text-content2">alex</span>
                  </div>
                </div>
              </label>
              <div class="dropdown-menu-right-top dropdown-menu ml-2">
                <a class="dropdown-item text-sm">Profile</a>
                <a tabindex="-1" class="dropdown-item text-sm"
                  >Account settings</a
                >
                <a tabindex="-1" class="dropdown-item text-sm">Change email</a>
                <a tabindex="-1" class="dropdown-item text-sm">Subscriptions</a>
                <a tabindex="-1" class="dropdown-item text-sm"
                  >Change password</a
                >
                <a tabindex="-1" class="dropdown-item text-sm"
                  >Refer a friend</a
                >
                <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
              </div>
            </div>
          </section>
        </aside>
        <div class="flex w-full flex-row flex-wrap gap-4 p-6">
          <div class="my-4 grid w-full grid-cols-2 gap-4">
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="fixed">
      <div class="flex flex-row gap-10 max-h-[40rem]">
        <div class="basis-1/3 w-full">
          <aside class="sidebar h-full justify-start">
            <section class="sidebar-title items-center p-4">
              <svg
                fill="none"
                height="42"
                viewBox="0 0 32 32"
                width="42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect height="100%" rx="16" width="100%"></rect>
                <path
                  clip-rule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <div class="flex flex-col">
                <span>Acme</span>
                <span class="text-xs font-normal text-content2">Team Plan</span>
              </div>
            </section>
            <section
              class="sidebar-content h-fit min-h-[20rem] overflow-visible"
            >
              <nav class="menu rounded-md">
                <section class="menu-section px-4">
                  <span class="menu-title">Main menu</span>
                  <ul class="menu-items">
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>General</span>
                    </li>

                    <li class="menu-item menu-active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>Teams</span>
                    </li>
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      <span>Billing</span>
                    </li>
                    <li>
                      <input type="checkbox" id="menu-12" class="menu-toggle" />
                      <label class="menu-item justify-between" for="menu-12">
                        <div class="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Account</span>
                        </div>

                        <span class="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
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
                          <label class="menu-item ml-6">Notifications</label>
                          <label class="menu-item ml-6">Integrations</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </nav>
            </section>
            <section class="sidebar-footer h-full justify-end bg-slate-3 pt-2">
              <div class="divider my-0"></div>
              <div
                class="dropdown z-50 flex h-fit w-full cursor-pointer hover:bg-gray-4"
              >
                <label
                  class="whites mx-2 flex h-fit w-full cursor-pointer p-0 hover:bg-gray-4"
                  tabindex="0"
                >
                  <div class="flex flex-row gap-4 p-4">
                    <div class="avatar avatar-md">
                      <img src="https://i.pravatar.cc/150?img=5" alt="avatar" />
                    </div>

                    <div class="flex flex-col">
                      <span>Alexandria</span>
                      <span class="text-xs font-normal text-content2"
                        >alex</span
                      >
                    </div>
                  </div>
                </label>
                <div class="dropdown-menu dropdown-menu-right-top ml-2">
                  <a class="dropdown-item text-sm">Profile</a>
                  <a tabindex="-1" class="dropdown-item text-sm"
                    >Account settings</a
                  >
                  <a tabindex="-1" class="dropdown-item text-sm"
                    >Change email</a
                  >
                  <a tabindex="-1" class="dropdown-item text-sm"
                    >Subscriptions</a
                  >
                  <a tabindex="-1" class="dropdown-item text-sm"
                    >Change password</a
                  >
                  <a tabindex="-1" class="dropdown-item text-sm"
                    >Refer a friend</a
                  >
                  <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
                </div>
              </div>
            </section>
          </aside>
        </div>
        <div class="basis-2/3 overflow-y-auto">
          <div class="w-fit">
            <label for="sidebar-mobile-fixed" class="btn btn-primary sm:hidden"
              >Open Sidebar</label
            >
          </div>

          <div class="grid grid-cols-2 gap-4 my-4">
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>

            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
            <div
              class="h-40 w-full border-dashed border-2 border-border bg-gray-1 flex justify-center items-center"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="flex flex-row sm:gap-10">
        <div class="sm:w-full sm:max-w-[18rem]">
          <input
            type="checkbox"
            id="sidebar-mobile-fixed"
            class="sidebar-state"
          />
          <label for="sidebar-mobile-fixed" class="sidebar-overlay"></label>
          <aside
            class="sidebar sidebar-mobile h-full justify-start max-sm:fixed max-sm:-translate-x-full"
          >
            <section class="sidebar-title items-center p-4">
              Title Sidebar
            </section>
            <section class="sidebar-content">
              <nav class="menu rounded-md">
                <section class="menu-section px-4">
                  <span class="menu-title">Main menu</span>
                  <ul class="menu-items">
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Item 1</span>
                    </li>
                    <li class="menu-item menu-active">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Item 2</span>
                    </li>
                    <li>
                      <input type="checkbox" id="menu-11" class="menu-toggle" />
                      <label class="menu-item justify-between" for="menu-11">
                        <div class="flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                          <span>Parent Item</span>
                        </div>

                        <span class="menu-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </label>

                      <div class="menu-item-collapse">
                        <div class="min-h-0">
                          <label class="menu-item menu-item-disabled ml-6"
                            >Chiled Disable</label
                          >
                          <label class="menu-item ml-6">Child Item 1</label>
                          <label class="menu-item ml-6">Child Item 2</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
                <div class="divider my-0"></div>
                <section class="menu-section px-4">
                  <span class="menu-title">Second Menu</span>
                  <ul class="menu-items">
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Item 1</span>
                    </li>
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Item 2</span>
                    </li>
                    <li class="menu-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                      <span>Item 3</span>
                    </li>
                  </ul>
                </section>
              </nav>
            </section>
            <section class="sidebar-footer justify-end bg-slate-3 pt-2">
              <div class="divider my-0"></div>
              <div class="p-5">Footer Sidebar</div>
            </section>
          </aside>
        </div>
        <div class="flex w-full flex-col p-4">
          <div class="w-fit">
            <label for="sidebar-mobile-fixed" class="btn-primary btn sm:hidden"
              >Open Sidebar</label
            >
          </div>

          <div class="my-4 grid grid-cols-2 gap-4">
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>

            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
            <div
              class="flex h-40 w-full items-center justify-center border-2 border-dashed border-border bg-gray-1"
            >
              +
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
