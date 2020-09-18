import * as moves from '@/services/moves'

// Keyboard
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

// Touch
let xDown = 0
let yDown = 0

const getTouches = (evt: TouchEvent) => {
  return evt.touches
}

export const handleTouchMove = (evt: TouchEvent) => {
  if (!xDown || !yDown) {
    return
  }

  const xUp = evt.touches[0].clientX
  const yUp = evt.touches[0].clientY

  const xDiff = xDown - xUp
  const yDiff = yDown - yUp

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      moves.moveLeftHandler()
    } else {
      moves.moveRightHandler()
    }
  } else {
    if (yDiff > 0) {
      moves.moveUpHandler()
    } else {
      moves.moveDownHandler()
    }
  }

  xDown = 0
  yDown = 0
}

export const handleTouchStart = (evt: TouchEvent) => {
  const firstTouch = getTouches(evt)[0]
  xDown = firstTouch.clientX
  yDown = firstTouch.clientY
}
