<script setup>
defineProps({
  basic: {
    type: Boolean,
    default: false
  },
  zebra: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="not-prose">
    <template v-if="basic">
      <div class="flex w-full overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>5</th>
              <td>Amy Shaw</td>
              <td>(586) 461-4374</td>
              <td>sem@aol.com</td>
            </tr>
            <tr>
              <th>17</th>
              <td>Kiara Rice</td>
              <td>(416) 793-3865</td>
              <td>integer.sem@hotmail.com</td>
            </tr>
            <tr>
              <th>19</th>
              <td>Ryan Carlson</td>
              <td>(341) 536-4865</td>
              <td>ipsum.donec@yahoo.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-else-if="zebra">
      <div class="flex w-full overflow-x-auto">
        <table class="table-zebra table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kasper Pollard</td>
              <td>(683) 593-2687</td>
              <td>lorem.sit.amet@protonmail.edu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abra Buck</td>
              <td>(825) 419-2084</td>
              <td>vitae@outlook.ca</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Leilani Preston</td>
              <td>1-835-660-8911</td>
              <td>vitae.mauris.sit@yahoo.edu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-else-if="hover">
      <div class="flex w-full overflow-x-auto">
        <table class="table-hover table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kasper Pollard</td>
              <td>(683) 593-2687</td>
              <td>lorem.sit.amet@protonmail.edu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abra Buck</td>
              <td>(825) 419-2084</td>
              <td>vitae@outlook.ca</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Leilani Preston</td>
              <td>1-835-660-8911</td>
              <td>vitae.mauris.sit@yahoo.edu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <template v-else>
      <div class="flex w-full overflow-x-auto">
        <table class="table-compact table max-w-4xl">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kasper Pollard</td>
              <td>(683) 593-2687</td>
              <td>lorem.sit.amet@protonmail.edu</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Abra Buck</td>
              <td>(825) 419-2084</td>
              <td>vitae@outlook.ca</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Leilani Preston</td>
              <td>1-835-660-8911</td>
              <td>vitae.mauris.sit@yahoo.edu</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </div>
</template>
