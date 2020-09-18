import * as combine from '@/services/combine'
import * as moves from '@/services/moves'
import store from '@/store'

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
