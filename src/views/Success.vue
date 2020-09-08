<template>
  <generic-screen
    :buttons="[
      {
        event: 'continue-game',
        text: 'Continue'
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
    const continueGame = () => {
      store.commit('setContinueAfterCompletion', true)
      router.push({ path: '/' })
    }

    return { continueGame }
  }
})
</script>
