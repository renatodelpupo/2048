<template>
  <div class="Footer">
    <div class="Footer-streak">
      <span class="Footer-streak-icon">🔥</span>
      <span lass="Footer-streak-text" v-text="score" />
    </div>
    <div class="Footer-actions">
      <router-link :to="{ name: 'Settings' }" class="Footer-action">Settings</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',

  props: {
    score: {
      default: 0,
      type: Number
    }
  }
})
</script>

<style lang="scss" scoped>
.Footer {
  display: grid;
  grid-template-columns: 1fr auto;
  text-transform: uppercase;

  $padding: 15px;

  &-action {
    color: white;
    text-decoration: none;
  }

  &-actions {
    align-items: center;
    display: flex;
    padding: $padding;
  }

  &-streak {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: $padding;
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

.theme-dark .Footer {
  background-color: #383838;
  color: #ffffff;

  &-actions {
    background-color: #656565;
  }
}

.theme-light .Footer {
  background-color: #788791;
  color: #ffffff;

  &-actions {
    background-color: #4f5961;
  }
}
</style>
