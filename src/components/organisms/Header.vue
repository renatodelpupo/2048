<template>
  <div class="Header">
    <h1>2048</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
.Header {
  background-color: #383838;
  color: #ccc;
  font-size: 18px;
  padding: 10px 20px;

  h1 {
    font-size: 18px;
    margin: 0;
    text-align: center;
  }
}
</style>
