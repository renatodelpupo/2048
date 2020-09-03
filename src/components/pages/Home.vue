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
import Grid from '../organisms/Grid.vue'

export default {
  name: 'Home',

  components: { AppFooter, AppHeader, Grid },

  data: () => ({
    score: 0,
    squares: Array(16).fill(0) as Array<number>
  }),

  mounted() {
    this.generate()
  },

  methods: {
    generate() {
      const randomNumber = Math.floor(Math.random() * this.squares.length)
      if (this.squares[randomNumber] === 0) {
        this.squares[randomNumber] = 2
      } else {
        this.generate()
      }
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
