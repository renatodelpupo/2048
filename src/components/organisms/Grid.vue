<template>
  <div class="Grid">
    <square v-for="(square, index) in squares" :key="index" :number="square" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Square from '../atoms/Square.vue'

@Component({
  components: {
    Square
  },

  props: {
    squares: {
      type: Array
    }
  }
})
export default class Grid extends Vue {}
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
