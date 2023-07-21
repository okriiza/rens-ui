<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  startEnd: {
    type: Boolean,
    default: false
  },
  startCenterEnd: {
    type: Boolean,
    default: false
  },
  withDrop: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  glass: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <div class="navbar">
        <div class="navbar-start">
          <a class="navbar-item">Rens UI</a>
        </div>
      </div>
    </template>

    <template v-else-if="startEnd">
      <div class="navbar">
        <div class="navbar-start">
          <a class="navbar-item">Rens UI</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item">Contact</a>
        </div>
      </div>
    </template>

    <template v-else-if="withDrop">
      <div class="navbar rounded-lg">
        <div class="navbar-start">
          <a class="navbar-item">Rens UI</a>
        </div>
        <div class="navbar-end">
          <div class="avatar avatar-ring avatar-md">
            <div class="dropdown-container">
              <div class="dropdown">
                <label class="flex cursor-pointer px-0" tabindex="0">
                  <img
                    src="https://ui-avatars.com/api/?name=Rens+UI"
                    alt="avatar"
                  />
                </label>
                <div class="dropdown-menu dropdown-menu-bottom-left">
                  <a class="dropdown-item text-sm">Profile</a>
                  <a tabindex="-1" class="dropdown-item text-sm">Settings</a>
                  <a tabindex="-1" class="dropdown-item text-sm">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else-if="startCenterEnd">
      <div class="navbar">
        <div class="navbar-start">
          <a class="navbar-item">Rens UI</a>
        </div>
        <div class="navbar-center">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">About</a>
          <a class="navbar-item">Contact</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
        </div>
      </div>
    </template>

    <template v-else-if="sticky">
      <div class="sticky max-h-96 overflow-y-auto rounded-lg bg-slate-4 p-4">
        <div class="navbar navbar-sticky sticky">
          <div class="navbar-start">
            <a class="navbar-item">Rens UI</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">Home</a>
          </div>
        </div>
        <p class="pb-3 text-base leading-7 text-content1">
          Consectetur scelerisque dui dictum fusce posuere class sit curabitur.
          Massa lorem id tortor rutrum posuere nisl. Enim sapien dictumst semper
          tristique faucibus fringilla pulvinar curae egestas velit montes.
          Curae pretium ornare himenaeos eros pede tempus risus sagittis quam
          odio. Magnis nisl consectetur est felis sem dictum semper finibus.
          Erat dis elementum rhoncus morbi malesuada. Et sagittis senectus erat
          accumsan inceptos sem turpis. Metus dis mauris diam tristique torquent
          rutrum convallis viverra suspendisse maximus. Mattis diam nostra
          litora gravida dui cras euismod rhoncus sodales suscipit quis. Lacus
          ligula letius class vehicula egestas accumsan ridiculus erat faucibus
          venenatis lobortis. Rutrum nibh neque ullamcorper auctor cras
          consectetuer integer porttitor phasellus. Fermentum parturient duis
          nam sapien primis curabitur nostra. Ex nunc purus ultrices
          consectetuer tellus. Tincidunt si tempus sit feugiat odio lacinia
          ridiculus quis egestas eros. Semper metus eget praesent turpis amet
          mattis vehicula etiam. Feugiat sollicitudin imperdiet vitae tellus
          tortor accumsan. Justo dictumst nisl finibus ut neque taciti. Donec
          efficitur dui semper parturient interdum ultricies mauris est
          suspendisse. Bibendum et pharetra non cubilia tempor tincidunt nullam
          dictum. Ullamcorper neque sapien magnis class per dis. Sociosqu nulla
          dolor mauris tincidunt taciti scelerisque ultrices duis etiam dis.
          Semper si ipsum nibh a ac penatibus nisl dui nisi taciti.
        </p>
      </div>
    </template>

    <template v-else-if="glass">
      <div class="navbar navbar-glass">
        <div class="navbar-start">
          <a class="navbar-item">Rens UI</a>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Home</a>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="sticky max-h-96 overflow-y-auto rounded-lg bg-slate-4 p-4">
        <div class="navbar navbar-floating sticky">
          <div class="navbar-start">
            <a class="navbar-item">Rens UI</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item">Home</a>
          </div>
        </div>
        <p class="pb-3 text-base leading-7 text-content1">
          Consectetur scelerisque dui dictum fusce posuere class sit curabitur.
          Massa lorem id tortor rutrum posuere nisl. Enim sapien dictumst semper
          tristique faucibus fringilla pulvinar curae egestas velit montes.
          Curae pretium ornare himenaeos eros pede tempus risus sagittis quam
          odio. Magnis nisl consectetur est felis sem dictum semper finibus.
          Erat dis elementum rhoncus morbi malesuada. Et sagittis senectus erat
          accumsan inceptos sem turpis. Metus dis mauris diam tristique torquent
          rutrum convallis viverra suspendisse maximus. Mattis diam nostra
          litora gravida dui cras euismod rhoncus sodales suscipit quis. Lacus
          ligula letius class vehicula egestas accumsan ridiculus erat faucibus
          venenatis lobortis. Rutrum nibh neque ullamcorper auctor cras
          consectetuer integer porttitor phasellus. Fermentum parturient duis
          nam sapien primis curabitur nostra. Ex nunc purus ultrices
          consectetuer tellus. Tincidunt si tempus sit feugiat odio lacinia
          ridiculus quis egestas eros. Semper metus eget praesent turpis amet
          mattis vehicula etiam. Feugiat sollicitudin imperdiet vitae tellus
          tortor accumsan. Justo dictumst nisl finibus ut neque taciti. Donec
          efficitur dui semper parturient interdum ultricies mauris est
          suspendisse. Bibendum et pharetra non cubilia tempor tincidunt nullam
          dictum. Ullamcorper neque sapien magnis class per dis. Sociosqu nulla
          dolor mauris tincidunt taciti scelerisque ultrices duis etiam dis.
          Semper si ipsum nibh a ac penatibus nisl dui nisi taciti.
        </p>
      </div>
    </template>
  </div>
</template>
