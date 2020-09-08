<template>
  <div class="Grid">
    <square v-for="(square, index) in squares" :key="index" :number="square" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Square from '@/components/atoms/Square.vue'

export default defineComponent({
  name: 'Grid',

  components: { Square },

  props: {
    squares: {
      required: true,
      type: Array
    }
  }
})
</script>

<style lang="scss" scoped>
.Grid {
  display: flex;
  flex-wrap: wrap;
  height: 340px;
  margin: 20px auto;
  width: 340px;
}
</style>
