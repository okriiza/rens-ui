<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  colors: {
    type: Boolean,
    default: false
  },
  solid: {
    type: Boolean,
    default: false
  },
  ghost: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <textarea class="textarea" placeholder="Textarea" />
    </template>
    <template v-else-if="colors">
      <div class="space-y-2">
        <textarea
          class="textarea textarea-primary mr-2"
          placeholder="Primary"
        />
        <textarea
          class="textarea textarea-secondary mr-2"
          placeholder="Secondary"
        />
        <textarea
          class="textarea textarea-success mr-2"
          placeholder="Success"
        />
        <textarea
          class="textarea textarea-warning mr-2"
          placeholder="Warning"
        />
        <textarea class="textarea textarea-error" placeholder="Error" />
      </div>
    </template>
    <template v-else-if="solid">
      <div class="space-y-2">
        <textarea class="textarea textarea-solid mr-2" placeholder="Primary" />
        <textarea
          class="textarea textarea-solid-secondary mr-2"
          placeholder="Secondary"
        />
        <textarea
          class="textarea textarea-solid-success mr-2"
          placeholder="Success"
        />
        <textarea
          class="textarea textarea-solid-warning mr-2"
          placeholder="Warning"
        />
        <textarea class="textarea textarea-solid-error" placeholder="Error" />
      </div>
    </template>
    <template v-else-if="ghost">
      <div class="space-y-2">
        <textarea
          class="textarea-ghost-primary textarea mr-2"
          placeholder="Primary"
        />
        <textarea
          class="textarea-ghost-secondary textarea mr-2"
          placeholder="Secondary"
        />
        <textarea
          class="textarea-ghost-success textarea mr-2"
          placeholder="Success"
        />
        <textarea
          class="textarea-ghost-warning textarea mr-2"
          placeholder="Warning"
        />
        <textarea class="textarea-ghost-error textarea" placeholder="Error" />
      </div>
    </template>
    <template v-else-if="block">
      <textarea class="textarea-block textarea" placeholder="Block" />
    </template>
    <template v-else>
      <textarea class="textarea" placeholder="Disabled" disabled />
    </template>
  </div>
</template>
