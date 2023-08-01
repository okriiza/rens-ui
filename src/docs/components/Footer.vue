<template>
  <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
-->

  <footer class="bg-backgroundSecondary border-t border-gray-border">
    <div
      class="mx-auto max-w-screen-xl px-4 pb-6 pt-14 sm:px-6 lg:px-8 lg:pt-18"
    >
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
          <div class="flex justify-center sm:justify-start mb-4">
            <NuxtLink to="/">
              <IconLogo class="h-11 w-auto" />
            </NuxtLink>
          </div>
        </div>

        <div class="grid gap-8 grid-cols-2 md:grid-cols-3 lg:col-span-2">
          <div class="text-center sm:text-left">
            <p class="text-lg font-bold">Ressources</p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <NuxtLink
                  class="transition hover:text-content3"
                  to="/getting-started"
                >
                  Get Started
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition hover:text-content3"
                  to="/elements/accordion"
                >
                  Elements
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition hover:text-content3"
                  to="/forms/checkbox"
                >
                  Forms
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="transition hover:text-content3"
                  to="/navigations/breadcrumb"
                >
                  Navigations
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-bold">Community</p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="transition hover:text-content3" href="/"> Github </a>
              </li>

              <li>
                <a class="transition hover:text-content3" href="/"> Twitter </a>
              </li>
            </ul>
          </div>

          <div class="text-center sm:text-left">
            <p class="text-lg font-bold">Links</p>

            <ul class="mt-8 space-y-4 text-sm">
              <li>
                <a class="transition hover:text-content3" href="/">
                  Report Issue
                </a>
              </li>
              <li>
                <a class="transition hover:text-content3" href="/"> License </a>
              </li>
              <li>
                <a class="transition hover:text-content3" href="/">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="divider pt-14"></div>

      <div class="mt-10">
        <div class="text-center">
          <p class="mt-4 text-sm text-content1 sm:order-first sm:mt-0">
            &copy; 2023 RensUI. Made with ❤️ for Developers.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
