<template>
  <div class="Game" :class="[`theme-${colorTheme}`]">
    <app-header :theme="colorTheme" title="2048" />
    <main class="Main">
      <grid />
    </main>
    <app-footer :score="score" />
  </div>
</template>

<script lang="ts">
import AppFooter from '@/components/organisms/Footer.vue'
import AppHeader from 'delp-ui/components/organisms/Header/Header.vue'
import { computed, defineComponent, onMounted, onUnmounted, watch } from 'vue'
import Grid from '@/components/organisms/Grid.vue'
import { handleKeyUp, handleTouchMove, handleTouchStart } from '@/services/moves-input'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Game',

  components: { AppFooter, AppHeader, Grid },

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

    watch(lose, (state) => {
      if (state) router.push({ name: 'Fail' })
    })

    watch(win, (state) => {
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
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden auto;
}
</style>
