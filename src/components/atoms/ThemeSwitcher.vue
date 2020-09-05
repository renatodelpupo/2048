<template>
  <div class="ThemeSwitcher">
    <label class="switch" id="switch" @click="() => $emit('toggle-theme')">
      <span class="slider" :class="[darkTheme ? 'theme-dark' : 'theme-light']" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ThemeSwitcher',

  props: {
    darkTheme: {
      default: true,
      type: Boolean
    }
  }
})
</script>

<style lang="scss" scoped>
.ThemeSwitcher {
  display: flex;
  flex-direction: column;

  .switch {
    display: inline-block;
    height: 25px;
    position: relative;
    width: 40px;

    .slider {
      border-radius: 34px;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: 0.4s;

      &:before {
        background-size: 18px;
        border-radius: 50%;
        bottom: 0;
        box-shadow: 0 0px 15px #2020203d;
        content: '';
        height: 24px;
        left: 0px;
        margin: auto 0;
        position: absolute;
        top: 0;
        transition: 0.4s;
        width: 24px;
      }

      &.theme-dark {
        background-color: #a3a3a3;

        &:before {
          background-color: #525252;
        }
      }

      &.theme-light {
        background-color: #fcebd8;

        &:before {
          background-color: #e77538;
          transform: translateX(18px);
        }
      }
    }
  }
}
</style>
