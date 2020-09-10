<template>
  <div class="Grid">
    <square v-for="(square, index) in squares" :key="index" :number="square" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Square from '@/components/atoms/Square.vue'
import store from '@/store'

export default defineComponent({
  name: 'Grid',

  components: { Square },

  setup() {
    const squares = computed(() => {
      return store.state.currentGame
    })

    return { squares }
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
