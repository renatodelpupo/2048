import * as moves from '@/services/moves'
import store from '@/store'

const keyDown = () => {
  moves.moveDown()
  moves.combineColumn()
  moves.moveDown()
  store.dispatch('addNumberToCurrentGame')
}

const keyLeft = () => {
  moves.moveLeft()
  moves.combineRow()
  moves.moveLeft()
  store.dispatch('addNumberToCurrentGame')
}

const keyRight = () => {
  moves.moveRight()
  moves.combineRow()
  moves.moveRight()
  store.dispatch('addNumberToCurrentGame')
}

const keyUp = () => {
  moves.moveUp()
  moves.combineColumn()
  moves.moveUp()
  store.dispatch('addNumberToCurrentGame')
}

export const handleKeyUp = (e: KeyboardEvent) => {
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
