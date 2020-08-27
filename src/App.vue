<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
import Home from './components/pages/Home.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    Home
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  background-color: #1e1e1e;
  color: #cccccc;
  font-family: sans-serif;
  font-size: 14px;
  margin: 0;
  padding: 0;
}
</style>
