<template>
  <div
    class="GenericScreen"
    :class="[darkTheme ? 'theme-dark' : 'theme-light']"
    :style="
      style && {
        backgroundColor: style.backgroundColor,
        color: style.textColor
      }
    "
  >
    <div class="GenericScreen-title">
      <span v-text="title" />
      <span class="GenericScreen-title-emoji" v-text="titleEmoji" />
    </div>
    <div v-if="message" class="GenericScreen-message" v-text="message" />
    <div class="GenericScreen-button-list">
      <btn
        v-for="button in buttons"
        :key="button.text"
        :style="style?.button || {}"
        :text="button.text"
        @click="
          () => {
            if (button.event) $emit(button.event)
          }
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Btn from '@/components/atoms/Btn.vue'
import { computed, defineComponent } from 'vue'
import store from '@/store'

type Style = {
  backgroundColor: string
  button: {
    backgroundColor: string
    textColor: string
  }
  textColor: string
}

export default defineComponent({
  name: 'GenericScreen',

  components: { Btn },

  props: {
    buttons: {
      type: Object as () => {
        event: string
        text: string
      }
    },
    message: {
      default: '',
      type: String
    },
    title: {
      default: '',
      required: true,
      type: String
    },
    titleEmoji: {
      default: '',
      type: String
    },
    style: {
      default: {},
      type: Object as () => Style
    }
  },

  setup() {
    const darkTheme = computed(() => {
      return store.state.darkTheme
    })

    return {
      darkTheme
    }
  }
})
</script>

<style lang="scss" scoped>
.GenericScreen {
  display: flex;
  flex-direction: column;
  height: 100vh;

  &-button {
    &-list {
      margin-top: 10vh;
    }
  }

  &-message {
    margin-top: 10vh;
    text-align: center;
  }

  &-title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    margin-top: 20vh;
    text-align: center;

    &-emoji {
      display: block;
    }
  }

  &.theme-dark {
    background-color: #1e1e1e;
    color: #ffffff;
  }

  &.theme-light {
    background-color: #fffeef;
    color: #65839b;
  }

  .Button {
    display: flex;
    margin: 0 auto 15px;
    text-transform: uppercase;
  }
}
</style>
