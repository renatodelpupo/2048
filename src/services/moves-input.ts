import * as moves from '@/services/moves'

export const handleKeyUp = (e: KeyboardEvent) => {
  if (e.keyCode === 37) {
    moves.moveLeftHandler()
  } else if (e.keyCode === 38) {
    moves.moveUpHandler()
  } else if (e.keyCode === 39) {
    moves.moveRightHandler()
  } else if (e.keyCode === 40) {
    moves.moveDownHandler()
  }
}
