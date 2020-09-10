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
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import Grid from '@/components/organisms/Grid.vue'
import router from '@/router'
import store from '@/store'

export default defineComponent({
  name: 'Home',

  components: { AppFooter, AppHeader, Grid },

  setup() {
    const score = ref(0)
    const squares = ref(Array(16).fill(0))
    const width = 4

    const generate = () => {
      const randomNumber = Math.floor(Math.random() * squares.value.length)

      if (squares.value[randomNumber] === 0) {
        squares.value[randomNumber] = 2
        store.commit('setCurrentGame', squares.value)
      } else {
        generate()
      }
    }

    const mountGame = () => {
      if (store.state.currentGame.length) {
        squares.value = store.state.currentGame
      } else {
        generate()
      }
    }

    const moveDown = () => {
      for (let i = 0; i < 4; i++) {
        const totalOne = squares.value[i]
        const totalTwo = squares.value[i + width]
        const totalThree = squares.value[i + width * 2]
        const totalFour = squares.value[i + width * 3]
        const column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        const filteredColumn = column.filter((num) => num)
        const missing = 4 - filteredColumn.length
        const zeros = Array(missing).fill(0)
        const newColumn = zeros.concat(filteredColumn)

        squares.value[i] = newColumn[0]
        squares.value[i + width] = newColumn[1]
        squares.value[i + width * 2] = newColumn[2]
        squares.value[i + width * 3] = newColumn[3]
      }
    }

    const moveLeft = () => {
      for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
          const totalOne = squares.value[i]
          const totalTwo = squares.value[i + 1]
          const totalThree = squares.value[i + 2]
          const totalFour = squares.value[i + 3]
          const row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          const filteredRow = row.filter((num) => num)
          const missing = 4 - filteredRow.length
          const zeros = Array(missing).fill(0)
          const newRow = filteredRow.concat(zeros)

          squares.value[i] = newRow[0]
          squares.value[i + 1] = newRow[1]
          squares.value[i + 2] = newRow[2]
          squares.value[i + 3] = newRow[3]
        }
      }
    }

    const moveRight = () => {
      for (let i = 0; i < 16; i++) {
        if (i % 4 === 0) {
          const totalOne = squares.value[i]
          const totalTwo = squares.value[i + 1]
          const totalThree = squares.value[i + 2]
          const totalFour = squares.value[i + 3]
          const row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

          const filteredRow = row.filter((num) => num)
          const missing = 4 - filteredRow.length
          const zeros = Array(missing).fill(0)
          const newRow = zeros.concat(filteredRow)

          squares.value[i] = newRow[0]
          squares.value[i + 1] = newRow[1]
          squares.value[i + 2] = newRow[2]
          squares.value[i + 3] = newRow[3]
        }
      }
    }

    const moveUp = () => {
      for (let i = 0; i < 4; i++) {
        const totalOne = squares.value[i]
        const totalTwo = squares.value[i + width]
        const totalThree = squares.value[i + width * 2]
        const totalFour = squares.value[i + width * 3]
        const column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]

        const filteredColumn = column.filter((num) => num)
        const missing = 4 - filteredColumn.length
        const zeros = Array(missing).fill(0)
        const newColumn = filteredColumn.concat(zeros)

        squares.value[i] = newColumn[0]
        squares.value[i + width] = newColumn[1]
        squares.value[i + width * 2] = newColumn[2]
        squares.value[i + width * 3] = newColumn[3]
      }
    }

    const combineColumn = () => {
      for (let i = 0; i < 12; i++) {
        if (squares.value[i] === squares.value[i + width]) {
          const combinedTotal = parseInt(squares.value[i]) + parseInt(squares.value[i + width])
          squares.value[i] = combinedTotal
          squares.value[i + width] = 0
          score.value = score.value + combinedTotal
        }
      }
    }

    const combineRow = () => {
      for (let i = 0; i < 15; i++) {
        if (squares.value[i] === squares.value[i + 1]) {
          const combinedTotal = parseInt(squares.value[i]) + parseInt(squares.value[i + 1])
          squares.value[i] = combinedTotal
          squares.value[i + 1] = 0
          score.value = score.value + combinedTotal
        }
      }
    }

    const keyDown = () => {
      moveDown()
      combineColumn()
      moveDown()
      generate()
    }

    const keyLeft = () => {
      moveLeft()
      combineRow()
      moveLeft()
      generate()
    }

    const keyRight = () => {
      moveRight()
      combineRow()
      moveRight()
      generate()
    }

    const keyUp = () => {
      moveUp()
      combineColumn()
      moveUp()
      generate()
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
      return Boolean(squares.value.includes(2048))
    })

    watch(win, (state) => {
      if (state && !store.state.continueAfterCompletion) router.push({ path: '/success' })
    })

    onMounted(() => {
      mountGame()
    })

    return {
      darkTheme,
      score,
      squares
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
