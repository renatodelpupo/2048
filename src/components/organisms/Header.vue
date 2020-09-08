<template>
  <div class="Header">
    <h1>2048</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style lang="scss" scoped>
.Header {
  font-size: 18px;
  padding: 10px 20px;

  h1 {
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
}

.theme-dark .Header {
  background-color: #383838;
  color: #ccc;
}

.theme-light .Header {
  background-color: #788791;
  color: #ffffff;
}
</style>
