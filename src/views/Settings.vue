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
    :style="style"
    @go-to-game="goToGame"
    @restart-game="restartGame"
    @toggle-theme="toggleTheme"
  />
</template>

<script lang="ts">
import router from '@/router'
import { computed, defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'
import store from '@/store'

export default defineComponent({
  name: 'Settings',

  components: { GenericScreen },

  setup() {
    const goToGame = () => {
      router.push({ name: 'Home' })
    }

    const style = computed(() => {
      const dark = {
        backgroundColor: '#1e1e1e',
        button: {
          backgroundColor: '#383838',
          textColor: '#ffffff'
        },
        textColor: '#ffffff'
      }
      const light = {
        backgroundColor: '#fffeef',
        button: {
          backgroundColor: '#7d95a9',
          textColor: '#fffeef'
        },
        textColor: '#65839b'
      }

      return store.state.darkTheme ? dark : light
    })

    const restartGame = () => {
      store.dispatch('resetCurrentGame')
      goToGame()
    }

    const toggleTheme = () => {
      store.commit('setDarkTheme', !store.state.darkTheme)
    }

    return { goToGame, restartGame, style, toggleTheme }
  }
})
</script>
