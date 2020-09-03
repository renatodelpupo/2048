<template>
  <div class="Square" v-text="number" />
</template>

<script lang="ts">
export default {
  name: 'Square',

  props: {
    number: {
      required: true,
      type: Number
    }
  }
}
</script>

<style lang="scss" scoped>
.Square {
  align-items: center;
  background-color: #383838;
  border-radius: 5px;
  color: #b5b5b5;
  display: flex;
  font-size: 40px;
  font-weight: bold;
  height: 100px;
  justify-content: center;
  line-height: 1.6;
  margin: 5px;
  width: 100px;
}
</style>
