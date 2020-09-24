<template>
  <button
    class="Button"
    :style="
      style && {
        backgroundColor: style.backgroundColor,
        color: style.textColor
      }
    "
    v-text="text"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button',

  props: {
    text: {
      default: '',
      type: String
    },
    style: {
      type: Object as () => {
        backgroundColor: string
        textColor: string
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.Button {
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
}

.theme-dark {
  .Button {
    background-color: #383838;
    color: #ffffff;
  }
}

.theme-light {
  .Button {
    background-color: #7d95a9;
    color: #fffeef;
  }
}
</style>
