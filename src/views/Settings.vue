<template>
  <generic-screen
    :buttons="[
      {
        event: 'go-to-game',
        text: 'Back to game'
      },
      {
        event: 'restart-game',
        text: 'Restart'
      },
      {
        event: 'toggle-theme',
        text: 'Toggle theme'
      }
    ]"
    title="Settings"
    @go-to-game="goToGame"
    @restart-game="restartGame"
    @toggle-theme="toggleTheme"
  />
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'
import store from '@/store'

export default defineComponent({
  name: 'Settings',

  components: { GenericScreen },

  setup() {
    const goToGame = () => {
      router.push({ name: 'Game' })
    }

    const restartGame = () => {
      store.dispatch('resetCurrentGame')
      goToGame()
    }

    const toggleTheme = () => {
      store.commit('setDarkTheme', !store.state.darkTheme)
    }

    return { goToGame, restartGame, toggleTheme }
  }
})
</script>
