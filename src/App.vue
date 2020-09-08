<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>
