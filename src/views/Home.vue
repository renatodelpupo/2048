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
import { computed, defineComponent, ref, watch } from 'vue'
import Grid from '@/components/organisms/Grid.vue'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Home',

  components: { AppFooter, AppHeader, Grid },

  setup() {
    const score = ref(0)
    const width = 4

    const moveDown = () => {
      for (let i = 0; i < 4; i++) {
        const totalOne = store.state.currentGame[i]
        const totalTwo = store.state.currentGame[i + width]
        const totalThree = store.state.currentGame[i + width * 2]
        const totalFour = store.state.currentGame[i + width * 3]
        const column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        const filteredColumn = column.filter((num) => num)
        const missing = 4 - filteredColumn.length
        const zeros = Array(missing).fill(0)
        const newColumn = zeros.concat(filteredColumn)

        store.dispatch('modifyCurrentGame', { index: i, value: newColumn[0] })
        store.dispatch('modifyCurrentGame', { index: i + width, value: newColumn[1] })
        store.dispatch('modifyCurrentGame', { index: i + width * 2, value: newColumn[2] })
        store.dispatch('modifyCurrentGame', { index: i + width * 3, value: newColumn[3] })
      }
    }

    const moveLeft = () => {
      for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
          const totalOne = store.state.currentGame[i]
          const totalTwo = store.state.currentGame[i + 1]
          const totalThree = store.state.currentGame[i + 2]
          const totalFour = store.state.currentGame[i + 3]
          const row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          const filteredRow = row.filter((num) => num)
          const missing = 4 - filteredRow.length
          const zeros = Array(missing).fill(0)
          const newRow = filteredRow.concat(zeros)

          store.dispatch('modifyCurrentGame', { index: i, value: newRow[0] })
          store.dispatch('modifyCurrentGame', { index: i + 1, value: newRow[1] })
          store.dispatch('modifyCurrentGame', { index: i + 2, value: newRow[2] })
          store.dispatch('modifyCurrentGame', { index: i + 3, value: newRow[3] })
        }
      }
    }

    const moveRight = () => {
      for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
          const totalOne = store.state.currentGame[i]
          const totalTwo = store.state.currentGame[i + 1]
          const totalThree = store.state.currentGame[i + 2]
          const totalFour = store.state.currentGame[i + 3]
          const row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          const filteredRow = row.filter((num) => num)
          const missing = 4 - filteredRow.length
          const zeros = Array(missing).fill(0)
          const newRow = zeros.concat(filteredRow)

          store.dispatch('modifyCurrentGame', { index: i, value: newRow[0] })
          store.dispatch('modifyCurrentGame', { index: i + 1, value: newRow[1] })
          store.dispatch('modifyCurrentGame', { index: i + 2, value: newRow[2] })
          store.dispatch('modifyCurrentGame', { index: i + 3, value: newRow[3] })
        }
      }
    }

    const moveUp = () => {
      for (let i = 0; i < 4; i++) {
        const totalOne = store.state.currentGame[i]
        const totalTwo = store.state.currentGame[i + width]
        const totalThree = store.state.currentGame[i + width * 2]
        const totalFour = store.state.currentGame[i + width * 3]
        const column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        const filteredColumn = column.filter((num) => num)
        const missing = 4 - filteredColumn.length
        const zeros = Array(missing).fill(0)
        const newColumn = filteredColumn.concat(zeros)

        store.dispatch('modifyCurrentGame', { index: i, value: newColumn[0] })
        store.dispatch('modifyCurrentGame', { index: i + width, value: newColumn[1] })
        store.dispatch('modifyCurrentGame', { index: i + width * 2, value: newColumn[2] })
        store.dispatch('modifyCurrentGame', { index: i + width * 3, value: newColumn[3] })
      }
    }

    const combineColumn = () => {
      for (let i = 0; i < 12; i++) {
        if (store.state.currentGame[i] === store.state.currentGame[i + width]) {
          const combinedTotal = parseInt(store.state.currentGame[i]) + parseInt(store.state.currentGame[i + width])
          store.dispatch('modifyCurrentGame', { index: i, value: combinedTotal })
          store.dispatch('modifyCurrentGame', { index: i + width, value: 0 })
          score.value = score.value + combinedTotal
        }
      }
    }

    const combineRow = () => {
      for (let i = 0; i < 15; i++) {
        if (store.state.currentGame[i] === store.state.currentGame[i + 1]) {
          const combinedTotal = parseInt(store.state.currentGame[i]) + parseInt(store.state.currentGame[i + 1])
          store.dispatch('modifyCurrentGame', { index: i, value: combinedTotal })
          store.dispatch('modifyCurrentGame', { index: i + 1, value: 0 })
          score.value = score.value + combinedTotal
        }
      }
    }

    const keyDown = () => {
      moveDown()
      combineColumn()
      moveDown()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyLeft = () => {
      moveLeft()
      combineRow()
      moveLeft()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyRight = () => {
      moveRight()
      combineRow()
      moveRight()
      store.dispatch('addNumberToCurrentGame')
    }

    const keyUp = () => {
      moveUp()
      combineColumn()
      moveUp()
      store.dispatch('addNumberToCurrentGame')
    }

    window.document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.keyCode === 37) {
        keyLeft()
      } else if (e.keyCode === 38) {
        keyUp()
      } else if (e.keyCode === 39) {
        keyRight()
      } else if (e.keyCode === 40) {
        keyDown()
      }
    })

    let xDown = 0
    let yDown = 0

    const getTouches = (evt: TouchEvent) => {
      return evt.touches
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

    window.document.addEventListener('touchstart', handleTouchStart, false)
    window.document.addEventListener('touchmove', handleTouchMove, false)

    const darkTheme = computed(() => {
      return store.state.darkTheme
    })

    const win = computed(() => {
      return Boolean(store.state.currentGame.includes(2048))
    })

    watch(win, (state) => {
      if (state && !store.state.continueAfterCompletion) router.push({ path: '/success' })
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
