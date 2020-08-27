<template>
  <div class="Footer">
    <div class="Footer-streak">
      <span class="Footer-streak-icon">🔥</span>
      <span lass="Footer-streak-text" v-text="score" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  @Prop() private score = 0
}
</script>

<style lang="scss" scoped>
.Footer {
  background-color: #383838;
  color: #ffffff;
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
}
</style>
