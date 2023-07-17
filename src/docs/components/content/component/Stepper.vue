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
  vertical: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  withIcon: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <ol class="steps">
        <li class="step overflow-hidden">
          <div class="step-circle">1</div>
          <h3>Done</h3>
        </li>
        <li class="step overflow-hidden">
          <div class="step-circle">2</div>
          <h3>In progress</h3>
        </li>
        <li class="step overflow-hidden">
          <div class="step-circle">3</div>
          <h3>Waiting</h3>
        </li>
      </ol>
    </template>

    <template v-else-if="vertical">
      <ol class="steps steps-vertical">
        <li class="step">
          <div class="step-circle">1</div>
          <h3>Done</h3>
        </li>
        <li class="step">
          <div class="step-circle">2</div>
          <h3>In progress</h3>
        </li>
        <li class="step">
          <div class="step-circle">3</div>
          <h3>Waiting</h3>
        </li>
      </ol>
    </template>

    <template v-else-if="colors">
      <div class="flex flex-col gap-2">
        <ol class="steps">
          <li class="step step-primary step-done overflow-hidden">
            <div class="step-circle">1</div>
            <h3>Done</h3>
          </li>
          <li class="step step-primary step-done overflow-hidden">
            <div class="step-circle">2</div>
            <h3>In progress</h3>
          </li>
          <li class="step step-primary step-done overflow-hidden">
            <div class="step-circle">3</div>
            <h3>Waiting</h3>
          </li>
        </ol>

        <ol class="steps">
          <li class="step step-secondary step-done overflow-hidden">
            <div class="step-circle">1</div>
            <h3>Done</h3>
          </li>
          <li class="step step-secondary step-done overflow-hidden">
            <div class="step-circle">2</div>
            <h3>In progress</h3>
          </li>
          <li class="step step-secondary step-done overflow-hidden">
            <div class="step-circle">3</div>
            <h3>Waiting</h3>
          </li>
        </ol>

        <ol class="steps">
          <li class="step step-success step-done overflow-hidden">
            <div class="step-circle">1</div>
            <h3>Done</h3>
          </li>
          <li class="step step-success step-done overflow-hidden">
            <div class="step-circle">2</div>
            <h3>In progress</h3>
          </li>
          <li class="step step-success step-done overflow-hidden">
            <div class="step-circle">3</div>
            <h3>Waiting</h3>
          </li>
        </ol>

        <ol class="steps">
          <li class="step step-error step-done overflow-hidden">
            <div class="step-circle">1</div>
            <h3>Done</h3>
          </li>
          <li class="step step-error step-done overflow-hidden">
            <div class="step-circle">2</div>
            <h3>In progress</h3>
          </li>
          <li class="step step-error step-done overflow-hidden">
            <div class="step-circle">3</div>
            <h3>Waiting</h3>
          </li>
        </ol>

        <ol class="steps">
          <li class="step step-warning step-done overflow-hidden">
            <div class="step-circle">1</div>
            <h3>Done</h3>
          </li>
          <li class="step step-warning step-done overflow-hidden">
            <div class="step-circle">2</div>
            <h3>In progress</h3>
          </li>
          <li class="step step-warning step-done overflow-hidden">
            <div class="step-circle">3</div>
            <h3>Waiting</h3>
          </li>
        </ol>
      </div>
    </template>

    <template v-else-if="active">
      <ol class="steps">
        <li class="step step-primary step-done overflow-hidden">
          <div class="step-circle">1</div>
          <h3>Done</h3>
        </li>
        <li class="step step-primary step-done overflow-hidden">
          <div class="step-circle">2</div>
          <h3>In progress</h3>
        </li>
        <li class="step step-primary step-active overflow-hidden">
          <div class="step-circle">3</div>
          <h3>Waiting</h3>
        </li>
      </ol>
    </template>

    <template v-else-if="withIcon">
      <ol class="steps">
        <li class="step step-primary step-done overflow-hidden">
          <div class="step-circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z"
                class="fill-primary"
              />
            </svg>
          </div>
          <h3>Done</h3>
        </li>
        <li class="step step-primary step-done overflow-hidden">
          <div class="step-circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z"
                class="fill-primary"
              />
            </svg>
          </div>
          <h3>In progress</h3>
        </li>
        <li class="step step-primary step-done overflow-hidden">
          <div class="step-circle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49987 13.475L4.6082 10.5833C4.2832 10.2583 3.7582 10.2583 3.4332 10.5833C3.1082 10.9083 3.1082 11.4333 3.4332 11.7583L6.91654 15.2416C7.24154 15.5666 7.76654 15.5666 8.09154 15.2416L16.9082 6.42498C17.2332 6.09998 17.2332 5.57498 16.9082 5.24998C16.5832 4.92498 16.0582 4.92498 15.7332 5.24998L7.49987 13.475Z"
                class="fill-primary"
              />
            </svg>
          </div>
          <h3>Waiting</h3>
        </li>
      </ol>
    </template>

    <template v-else>
      <ol class="steps steps-vertical lg:steps-horizontal">
        <li class="step">
          <div class="step-circle">1</div>
          <h3>Done</h3>
        </li>
        <li class="step">
          <div class="step-circle">2</div>
          <h3>In progress</h3>
        </li>
        <li class="step">
          <div class="step-circle">3</div>
          <h3>Waiting</h3>
        </li>
      </ol>
    </template>
  </div>
</template>
