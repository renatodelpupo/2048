<template>
  <generic-screen
    :buttons="[
      {
        event: 'restart-game',
        text: 'Restart'
      }
    ]"
    message="You lose!"
    title="Oh, no!"
    titleEmoji="😕"
    :style="{
      backgroundColor: '#e17833',
      button: {
        backgroundColor: '#a34f18',
        textColor: '#ffffff'
      },
      textColor: '#ffffff'
    }"
    @restart-game="restartGame"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Fail',

  components: { GenericScreen },

  setup() {
    const goToGame = () => {
      router.push({ name: 'Home' })
    }

    const restartGame = () => {
      store.dispatch('resetCurrentGame')
      goToGame()
    }

    return { restartGame }
  }
})
</script>
