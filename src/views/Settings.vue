<template>
  <generic-screen
    :buttons="[
      {
        event: 'go-to-game',
        text: 'Back to game'
      }
    ]"
    title="Settings"
    :style="style"
    @go-to-game="goToGame"
  />
</template>

<script lang="ts">
import router from '@/router'
import { computed, defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'

export default defineComponent({
  name: 'Settings',

  components: { GenericScreen },

  props: {
    darkTheme: {
      default: true,
      type: Boolean
    }
  },

  setup(props) {
    const goToGame = () => {
      router.push({ path: '/' })
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

      return props.darkTheme ? dark : light
    })

    return { goToGame, style }
  }
})
</script>
