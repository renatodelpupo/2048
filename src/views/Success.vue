<template>
  <generic-screen
    :buttons="[
      {
        event: 'go-to-game',
        text: 'Continue'
      },
      {
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
    @go-to-game="goToGame"
  />
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent } from 'vue'
import GenericScreen from '../components/templates/GenericScreen.vue'

export default defineComponent({
  name: 'Success',

  components: { GenericScreen },

  setup() {
    const goToGame = () => {
      router.push({ path: '/' })
    }

    return { goToGame }
  }
})
</script>
