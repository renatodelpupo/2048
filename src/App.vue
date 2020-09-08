<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/Home.vue'

export default defineComponent({
  name: 'App',

  components: { Home }
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
