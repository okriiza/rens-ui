<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  underline: {
    type: Boolean,
    default: false
  },
  pill: {
    type: Boolean,
    default: false
  },
  boxed: {
    type: Boolean,
    default: false
  },
  responsive: {
    type: Boolean,
    default: false
  },
  radioBasic: {
    type: Boolean,
    default: false
  },
  radioBordered: {
    type: Boolean,
    default: false
  },
  radioUnderline: {
    type: Boolean,
    default: false
  },
  radioPill: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <div class="tabs">
        <div class="tab p-4">Tab 1</div>
        <div class="tab p-4">Tab 2</div>
        <div class="tab tab-active p-4">Tab 3</div>
      </div>
    </template>
    <template v-else-if="bordered">
      <div class="tabs">
        <div class="tab tab-bordered px-6">Tab 1</div>
        <div class="tab tab-bordered px-6 tab-active">Tab 3</div>
        <div class="tab tab-bordered px-6">Tab 3</div>
      </div>
    </template>
    <template v-else-if="underline">
      <div class="tabs">
        <div class="tab px-6">Tab 1</div>
        <div class="tab tab-underline tab-active px-6">Tab 2</div>
        <div class="tab px-6">Tab 3</div>
      </div>
    </template>
    <template v-else-if="pill">
      <div class="tabs gap-1">
        <div class="tab tab-pill">Tab 1</div>
        <div class="tab tab-pill tab-active">Tab 2</div>
        <div class="tab tab-pill tab-disabled">Tab 3</div>
      </div>
    </template>
    <template v-else-if="boxed">
      <div class="w-full">
        <div class="tabs tabs-boxed flex-nowrap gap-1">
          <div class="tab">Tab 1</div>
          <div class="tab tab-active">Tab 2</div>
          <div class="tab">Tab 3</div>
          <div class="tab">Tab 4</div>
          <div class="tab">Tab 5</div>
          <div class="tab">Tab 6</div>
        </div>
      </div>
    </template>
    <template v-else-if="responsive">
      <div class="w-full max-w-xs overflow-auto">
        <div class="tabs w-full flex-nowrap">
          <div class="tab">Tab 1</div>
          <div class="tab tab-underline tab-active">Tab 3</div>
          <div class="tab">Tab 3</div>
          <div class="tab">Tab 4</div>
          <div class="tab">Tab 5</div>
          <div class="tab">Tab 6</div>
        </div>
      </div>
    </template>
    <template v-else-if="radioBasic">
      <div class="tabs">
        <input
          type="radio"
          id="tab-1"
          name="tab-1"
          class="tab-toggle tab"
          checked
        />
        <label for="tab-1" class="tab">Tab 1</label>

        <input type="radio" id="tab-2" name="tab-1" class="tab-toggle" />
        <label for="tab-2" class="tab">Tab 2</label>

        <input type="radio" id="tab-3" name="tab-1" class="tab-toggle" />
        <label for="tab-3" class="tab">Tab 3</label>
      </div>
    </template>
    <template v-else-if="radioBordered">
      <div class="tabs">
        <input
          type="radio"
          id="tab-4"
          name="tab-2"
          class="tab-toggle"
          checked
        />
        <label for="tab-4" class="tab tab-bordered px-6">Tab 1</label>

        <input type="radio" id="tab-5" name="tab-2" class="tab-toggle" />
        <label for="tab-5" class="tab tab-bordered px-6">Tab 2</label>

        <input type="radio" id="tab-6" name="tab-2" class="tab-toggle" />
        <label for="tab-6" class="tab tab-bordered px-6">Tab 3</label>
      </div>
    </template>
    <template v-else-if="radioUnderline">
      <div class="tabs tabs-underline">
        <input
          type="radio"
          id="tab-7"
          name="tab-3"
          class="tab-toggle"
          checked
        />
        <label for="tab-7" class="tab px-6">Tab 1</label>

        <input type="radio" id="tab-8" name="tab-3" class="tab-toggle" />
        <label for="tab-8" class="tab px-6">Tab 2</label>

        <input type="radio" id="tab-9" name="tab-3" class="tab-toggle" />
        <label for="tab-9" class="tab px-6">Tab 3</label>
      </div>
    </template>
    <template v-else-if="radioPill">
      <div class="tabs gap-1">
        <input
          type="radio"
          id="tab-10"
          name="tab-4"
          class="tab-toggle"
          checked
        />
        <label for="tab-10" class="tab tab-pill">Tab 1</label>

        <input type="radio" id="tab-11" name="tab-4" class="tab-toggle" />
        <label for="tab-11" class="tab tab-pill">Tab 2</label>

        <input type="radio" id="tab-12" name="tab-4" class="tab-toggle" />
        <label for="tab-12" class="tab tab-pill">Tab 3</label>
      </div>
    </template>
    <template v-else>
      <div class="tabs tabs-boxed gap-1">
        <input
          type="radio"
          id="tab-13"
          name="tab-5"
          class="tab-toggle"
          checked
        />
        <label for="tab-13" class="tab">Tab 1</label>

        <input type="radio" id="tab-14" name="tab-5" class="tab-toggle" />
        <label for="tab-14" class="tab">Tab 2</label>

        <input type="radio" id="tab-15" name="tab-5" class="tab-toggle" />
        <label for="tab-15" class="tab">Tab 3</label>
      </div>
    </template>
  </div>
</template>
