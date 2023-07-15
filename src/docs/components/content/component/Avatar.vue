<script setup>
defineProps({
  styleClass: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  avatarGroup: {
    type: Boolean,
    default: false
  },
  avatarWithDropdown: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <template v-if="avatarGroup">
    <div class="not-prose avatar-group">
      <div class="avatar">
        <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
      </div>
      <div class="avatar avatar-ring-warning">
        <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
      </div>
      <div class="avatar avatar-ring-success">
        <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
      </div>
      <div class="avatar avatar-ring-error">
        <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
      </div>
      <div class="avatar avatar-ring-primary">
        <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
      </div>
      <div class="avatar">
        <div>+99</div>
      </div>
    </div>
  </template>
  <template v-else-if="avatarWithDropdown">
    <div class="not-prose avatar avatar-ring avatar-md">
      <div class="dropdown-container">
        <div class="dropdown">
          <label
            class="btn-ghost btn flex cursor-pointer px-0 hover:bg-inherit"
            tabindex="0"
          >
            <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
          </label>
          <div class="dropdown-menu-bottom-right dropdown-menu">
            <a class="dropdown-item text-sm">Profile</a>
            <a tabindex="-1" class="dropdown-item text-sm">Account settings</a>
            <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <div class="not-prose avatar" :class="styleClass">
      <img src="https://ui-avatars.com/api/?name=Rens+UI" alt="avatar" />
    </div>
  </template>
</template>
