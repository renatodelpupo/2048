<template>
  <div class="Footer" :class="[darkTheme ? 'theme-dark' : 'theme-light']">
    <div class="Footer-streak">
      <span class="Footer-streak-icon">🔥</span>
      <span lass="Footer-streak-text" v-text="score" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',

  props: {
    darkTheme: {
      default: true,
      type: Boolean
    },
    score: {
      default: 0,
      type: Number
    }
  }
})
</script>

<style lang="scss" scoped>
.Footer {
  display: flex;
  height: 40px;
  text-transform: uppercase;
  padding: 15px;
  width: 100%;

  &-streak {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    width: 100%;

    &-icon {
      font-size: 1.2em;
      margin-right: 0.25em;
    }

    &-text {
      font-size: 1.1em;
    }
  }

  &.theme-dark {
    background-color: #383838;
    color: #ffffff;
  }

  &.theme-light {
    background-color: #65839b;
    color: #edf4f8;
  }
}
</style>
