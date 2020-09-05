<template>
  <div class="Square" :style="style" v-text="number" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Square',

  props: {
    darkTheme: {
      default: true,
      type: Boolean
    },
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

      const colorsOptionsDark: ColorsOptions = {
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

      const colorsOptionsLight: ColorsOptions = {
        0: {
          background: '#65839B',
          text: 'transparent'
        },
        2: {
          background: '#EDF4F8',
          text: '#798691'
        },
        4: {
          background: '#E9F6FE',
          text: '#6289A2'
        },
        8: {
          background: '#957869',
          text: '#6B4E40'
        },
        16: {
          background: '#B2E8FC',
          text: '#54AEF1'
        },
        32: {
          background: '#E7F4D3',
          text: '#6CA03B'
        },
        64: {
          background: '#ECE4FD',
          text: '#7F5FC4'
        },
        128: {
          background: '#FAE1EA',
          text: '#CE516E'
        },
        256: {
          background: '#FCEBD8',
          text: '#E77538'
        },
        512: {
          background: '#FFFA97',
          text: '#F3A53B'
        },
        1024: {
          background: '#ED669F',
          text: '#FFFFFF'
        },
        2048: {
          background: '#CF2E26',
          text: '#FFFFFF'
        }
      }

      const colorsOptions: ColorsOptions = props.darkTheme ? colorsOptionsDark : colorsOptionsLight
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
  height: 75px;
  justify-content: center;
  line-height: 1;
  margin: 5px;
  width: 75px;
}
</style>
