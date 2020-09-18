<template>
  <div class="Home" :class="[darkTheme ? 'theme-dark' : 'theme-light']">
    <app-header />
    <main class="Main">
      <grid />
    </main>
    <app-footer :score="score" />
  </div>
</template>

<script lang="ts">
import AppFooter from '@/components/organisms/Footer.vue'
import AppHeader from '@/components/organisms/Header.vue'
import * as combine from '@/services/combine'
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'
import Grid from '@/components/organisms/Grid.vue'
import * as moves from '@/services/moves'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Home',

  components: { AppFooter, AppHeader, Grid },

  setup() {
    const keyDown = () => {
      moves.moveDown()
      combine.combineColumn()
      moves.moveDown()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyLeft = () => {
      moves.moveLeft()
      combine.combineRow()
      moves.moveLeft()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyRight = () => {
      moves.moveRight()
      combine.combineRow()
      moves.moveRight()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyUp = () => {
      moves.moveUp()
      combine.combineColumn()
      moves.moveUp()
      store.dispatch('addNumberToCurrentGame')
    }

    let xDown = 0
    let yDown = 0

    const getTouches = (evt: TouchEvent) => {
      return evt.touches
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        keyLeft()
      } else if (e.keyCode === 38) {
        keyUp()
      } else if (e.keyCode === 39) {
        keyRight()
      } else if (e.keyCode === 40) {
        keyDown()
      }
    }

    const handleTouchStart = (evt: TouchEvent) => {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    const handleTouchMove = (evt: TouchEvent) => {
      if (!xDown || !yDown) {
        return
      }

      const xUp = evt.touches[0].clientX
      const yUp = evt.touches[0].clientY

      const xDiff = xDown - xUp
      const yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          keyLeft()
        } else {
          keyRight()
        }
      } else {
        if (yDiff > 0) {
          keyUp()
        } else {
          keyDown()
        }
      }

      xDown = 0
      yDown = 0
    }

    const addEventListeners = () => {
      window.document.addEventListener('keyup', handleKeyUp)
      window.document.addEventListener('touchmove', handleTouchMove)
      window.document.addEventListener('touchstart', handleTouchStart)
    }

    const removeEventListeners = () => {
      window.document.removeEventListener('keyup', handleKeyUp)
      window.document.removeEventListener('touchmove', handleTouchMove)
      window.document.removeEventListener('touchstart', handleTouchStart)
    }

    const darkTheme = computed(() => {
      return store.state.darkTheme
    })

    const lose = computed(() => {
      return Boolean(!store.state.currentGame.includes(0))
    })

    const score = computed(() => {
      return store.state.score
    })

    const win = computed(() => {
      return Boolean(store.state.currentGame.includes(2048))
    })

    watch(lose, (state) => {
      if (state) router.push({ name: 'Fail' })
    })

    watch(win, (state) => {
      if (state && !store.state.continueAfterCompletion) router.push({ name: 'Success' })
    })

    onMounted(() => {
      addEventListeners()
    })

    onUnmounted(() => {
      removeEventListeners()
    })

    return {
      darkTheme,
      score
    }
  }
})
</script>

<style lang="scss" scoped>
.Home {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  &.theme-dark {
    background-color: #1e1e1e;
  }

  &.theme-light {
    background-color: #fffeef;
  }
}

.Main {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden auto;
}
</style>
