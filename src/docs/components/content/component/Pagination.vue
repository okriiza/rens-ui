<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  withIcon: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  radio: {
    type: Boolean,
    default: false
  },
  compact: {
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
  <div class="not-prose">
    <template v-if="basic">
      <div class="pagination">
        <button class="btn">0</button>
        <button class="btn btn-active">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
      </div>
    </template>
    <template v-else-if="withIcon">
      <div class="pagination">
        <button class="btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button class="btn btn-active">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </template>
    <template v-else-if="disabled">
      <div class="pagination">
        <button disabled class="btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <button class="btn btn-active">1</button>
        <button class="btn">2</button>
        <button class="btn">...</button>
        <button class="btn">
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </template>
    <template v-else-if="radio">
      <div class="pagination">
        <input type="radio" name="pagination-1" id="pgn-1" />
        <label for="pgn-1" class="btn">1</label>
        <input type="radio" name="pagination-1" id="pgn-2" />
        <label for="pgn-2" class="btn">2</label>
        <input type="radio" name="pagination-1" id="pgn-3" />
        <label for="pgn-3" class="btn">3</label>
        <input type="radio" name="pagination-1" id="paginacao4" />
      </div>
    </template>
    <template v-else-if="compact">
      <div class="pagination pagination-compact">
        <input type="radio" name="pagination-2" id="pgn-4" />
        <label for="pgn-4" class="btn">1</label>
        <input type="radio" name="pagination-2" id="pgn-5" />
        <label for="pgn-5" class="btn">2</label>
        <input type="radio" name="pagination-2" id="pgn-6" />
        <label for="pgn-6" class="btn">3</label>
      </div>
    </template>
    <template v-else-if="bordered">
      <div class="pagination pagination-compact pagination-bordered mb-3">
        <input type="radio" name="pagination-3" id="pgn-7" />
        <label for="pgn-7" class="btn">1</label>
        <input type="radio" name="pagination-3" id="pgn-8" />
        <label for="pgn-8" class="btn">2</label>
        <input type="radio" name="pagination-3" id="pgn-9" />
        <label for="pgn-9" class="btn">3</label>
        <input type="radio" name="pagination-3" id="pgn-10" />
        <label for="pgn-10" class="btn">3</label>
        <input type="radio" name="pagination-3" id="pgn-9" />
        <label for="pgn-9" class="btn">4</label>
      </div>

      <div class="pagination pagination-bordered">
        <input type="radio" name="pagination-4" id="pgn-10" />
        <label for="pgn-10" class="btn">1</label>
        <input type="radio" name="pagination-4" id="pgn-11" />
        <label for="pgn-11" class="btn">2</label>
        <input type="radio" name="pagination-4" id="pgn-12" />
        <label for="pgn-12" class="btn">3</label>
      </div>
    </template>
    <template v-else>
      <div class="pagination pagination-rounded">
        <input type="radio" name="pagination-5" id="pgn-13" />
        <label for="pgn-13" class="btn">1</label>
        <input type="radio" name="pagination-5" id="pgn-14" />
        <label for="pgn-14" class="btn">2</label>
        <input type="radio" name="pagination-5" id="pgn-15" />
        <label for="pgn-15" class="btn">3</label>
      </div>
    </template>
  </div>
</template>
