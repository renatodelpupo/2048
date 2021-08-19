<template>
  <div class="Square" :style="style" v-text="number" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import store from '@/store'

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
          background: '#e6e5df',
          text: 'transparent'
        },
        2: {
          background: '#edf4f8',
          text: '#798691'
        },
        4: {
          background: '#e9f6fe',
          text: '#6289a2'
        },
        8: {
          background: '#bbd9d9',
          text: '#3e6e6e'
        },
        16: {
          background: '#b2e8fc',
          text: '#54aef1'
        },
        32: {
          background: '#e7f4d3',
          text: '#6ca03b'
        },
        64: {
          background: '#ece4fd',
          text: '#7F5Fc4'
        },
        128: {
          background: '#fae1ea',
          text: '#ce516e'
        },
        256: {
          background: '#fcebd8',
          text: '#e77538'
        },
        512: {
          background: '#fffa97',
          text: '#f3a53b'
        },
        1024: {
          background: '#ed669f',
          text: '#ffffff'
        },
        2048: {
          background: '#cf2e26',
          text: '#ffffff'
        }
      }

      const colorsOptions: ColorsOptions = store.state.darkTheme ? colorsOptionsDark : colorsOptionsLight
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
  justify-content: center;
  line-height: 1;
}
</style>
