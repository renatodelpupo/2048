<template>
  <div class="Header" :class="[darkTheme ? 'theme-dark' : 'theme-light']">
    <h1>2048</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',

  props: {
    darkTheme: {
      default: true,
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
.Header {
  font-size: 18px;
  padding: 10px 20px;

  &.theme-dark {
    background-color: #383838;
    color: #ccc;
  }

  &.theme-light {
    background-color: #65839b;
    color: #edf4f8;
  }

  h1 {
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
}
</style>
