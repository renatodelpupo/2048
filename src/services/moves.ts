import store from '@/store'

const width = store.state.gameWidth

export const moveDown = () => {
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

export const moveLeft = () => {
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

export const moveRight = () => {
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

export const moveUp = () => {
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
