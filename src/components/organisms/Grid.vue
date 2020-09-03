<template>
  <div class="Grid">
    <square v-for="(square, index) in squares" :key="index" :number="square" />
  </div>
</template>

<script lang="ts">
import Square from '../atoms/Square.vue'

export default {
  name: 'Grid',

  components: { Square },

  props: {
    squares: {
      required: true,
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
.Grid {
  display: flex;
  flex-wrap: wrap;
  height: 456px;
  margin: 20px auto;
  width: 456px;
}
</style>
