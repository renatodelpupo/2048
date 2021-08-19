<template>
  <div class="Game" :class="[`theme-${colorTheme}`]">
    <Header :theme="colorTheme" title="2048" />
    <main class="Main">
      <grid />
    </main>
    <app-footer :score="score" />
  </div>
</template>

<script lang="ts">
import AppFooter from '@/components/organisms/Footer.vue'
import { computed, defineComponent, onMounted, onUnmounted, watch } from 'vue'
import Grid from '@/components/organisms/Grid.vue'
import { handleKeyUp, handleTouchMove, handleTouchStart } from '@/services/moves-input'
import { Header } from 'delp-ui'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Game',

  components: { AppFooter, Grid, Header },

  setup() {
    const addEventListeners = () => {
      window.document.addEventListener('keyup', handleKeyUp)
      window.document.addEventListener('touchmove', handleTouchMove)
      window.document.addEventListener('touchstart', handleTouchStart)
    }

    const removeEventListeners = () => {
      window.document.removeEventListener('keyup', handleKeyUp)
      window.document.removeEventListener('touchmove', handleTouchMove)
      window.document.removeEventListener('touchstart', handleTouchStart)
    }

    const colorTheme = computed(() => {
      return store.state.darkTheme ? 'dark' : 'light'
    })

    const lose = computed(() => {
      return Boolean(!store.state.currentGame.includes(0))
    })

    const score = computed(() => {
      return store.state.score
    })

    const win = computed(() => {
      return Boolean(store.state.currentGame.includes(2048))
    })

    watch(lose, (state: boolean) => {
      if (state) router.push({ name: 'Fail' })
    })

    watch(win, (state: boolean) => {
      if (state && !store.state.continueAfterCompletion) router.push({ name: 'Success' })
    })

    onMounted(() => {
      addEventListeners()
    })

    onUnmounted(() => {
      removeEventListeners()
    })

    return {
      colorTheme,
      score
    }
  }
})
</script>

<style lang="scss" scoped>
.Game {
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  overflow: hidden;

  &.theme-dark {
    background-color: #1e1e1e;
  }

  &.theme-light {
    background-color: #fffeef;
  }
}

.Main {
  display: grid;
  justify-content: center;
  overflow: hidden auto;
  padding: 20px;
}
</style>
