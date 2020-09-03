<template>
  <div class="Home">
    <app-header />
    <main class="Main">
      <grid :squares="squares" />
    </main>
    <app-footer :score="score" />
  </div>
</template>

<script lang="ts">
import AppFooter from '../organisms/Footer.vue'
import AppHeader from '../organisms/Header.vue'
import { onMounted, ref } from 'vue'
import Grid from '../organisms/Grid.vue'

export default {
  name: 'Home',

  components: { AppFooter, AppHeader, Grid },

  setup() {
    const squares = ref(Array(16).fill(0))

    const generate = () => {
      const randomNumber = Math.floor(Math.random() * squares.value.length)

      if (squares.value[randomNumber] === 0) {
        squares.value[randomNumber] = 2
      } else {
        generate()
      }
    }

    onMounted(generate)

    return {
      squares
    }
  }
}
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.Main {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden auto;
}
</style>
