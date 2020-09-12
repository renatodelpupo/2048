<template>
  <generic-screen
    :buttons="[
      {
        event: 'continue-game',
        text: 'Continue'
      },
      {
        event: 'restart-game',
        text: 'Restart'
      }
    ]"
    message="You reached 2048!"
    title="Congratulations!!"
    titleEmoji="🎉"
    :style="{
      backgroundColor: '#73c991',
      button: {
        backgroundColor: '#4c8761',
        textColor: '#ffffff'
      },
      textColor: '#ffffff'
    }"
    @continue-game="continueGame"
    @restart-game="restartGame"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Success',

  components: { GenericScreen },

  setup() {
    const goToGame = () => {
      router.push({ path: '/' })
    }

    const continueGame = () => {
      store.commit('setContinueAfterCompletion', true)
      goToGame()
    }

    const restartGame = () => {
      store.dispatch('resetCurrentGame')
      goToGame()
    }

    return { continueGame, restartGame }
  }
})
</script>
