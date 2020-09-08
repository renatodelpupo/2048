<template>
  <generic-screen
    :buttons="[
      {
        text: 'Restart'
      },
      {
        event: 'toggle-theme',
        text: 'Toggle theme'
      }
    ]"
    title="Settings"
    :style="style"
    @toggle-theme="() => $emit('toggle-theme')"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import GenericScreen from '../components/templates/GenericScreen.vue'

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

    return { style }
  }
})
</script>
