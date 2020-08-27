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
import { Component, Vue } from 'vue-property-decorator'
import Grid from '../organisms/Grid.vue'

@Component({
  components: {
    AppFooter,
    AppHeader,
    Grid
  }
})
export default class Home extends Vue {
  private score = 0
  private squares: Array<number> = Array(16).fill(0)

  mounted() {
    this.generate()
  }

  private generate(): void {
    const randomNumber = Math.floor(Math.random() * this.squares.length)
    if (this.squares[randomNumber] === 0) {
      Vue.set(this.squares, randomNumber, 2)
    } else {
      this.generate()
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
