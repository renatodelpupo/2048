<template>
  <generic-screen
    :buttons="[]"
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
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GenericScreen from '@/components/templates/GenericScreen.vue'

export default defineComponent({
  name: 'Success',

  components: { GenericScreen }
})
</script>
