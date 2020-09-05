<template>
  <div class="Square" :style="style" v-text="number" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Square',

  props: {
    number: {
      required: true,
      type: Number
    }
  },

  setup(props) {
    const style = computed(() => {
      type ColorsOption = {
        background: string
        text: string
      }

      type ColorsOptions = {
        [index: number]: ColorsOption
      }

      const colorsOptions: ColorsOptions = {
        0: {
          background: '#383838',
          text: 'transparent'
        },
        2: {
          background: '#CCCCCC',
          text: '#383838'
        },
        4: {
          background: '#B8B8B8',
          text: '#383838'
        },
        8: {
          background: '#A3A3A3',
          text: '#383838'
        },
        16: {
          background: '#8F8F8F',
          text: '#383838'
        },
        32: {
          background: '#7A7A7A',
          text: '#B5B5B5'
        },
        64: {
          background: '#666666',
          text: '#B5B5B5'
        },
        128: {
          background: '#525252',
          text: '#B5B5B5'
        },
        256: {
          background: '#3D3D3D',
          text: '#B5B5B5'
        },
        512: {
          background: '#292929',
          text: '#B5B5B5'
        },
        1024: {
          background: '#141414',
          text: '#B5B5B5'
        },
        2048: {
          background: '#141414',
          text: '#B5B5B5'
        }
      }

      const colorsOption: ColorsOption = colorsOptions[props.number]

      return {
        backgroundColor: colorsOption.background,
        color: colorsOption.text
      }
    })

    return { style }
  }
})
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
