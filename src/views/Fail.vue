<template>
  <generic-screen
    :buttons="[
      {
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
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenericScreen from '../components/templates/GenericScreen.vue'

export default defineComponent({
  name: 'Fail',

  components: { GenericScreen }
})
</script>
