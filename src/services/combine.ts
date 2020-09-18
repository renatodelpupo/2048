import store from '@/store'

const width = store.state.gameWidth

export const combineColumn = () => {
  for (let i = 0; i < 12; i++) {
    if (store.state.currentGame[i] === store.state.currentGame[i + width]) {
      const combinedTotal = parseInt(store.state.currentGame[i]) + parseInt(store.state.currentGame[i + width])
      store.dispatch('modifyCurrentGame', { index: i, value: combinedTotal })
      store.dispatch('modifyCurrentGame', { index: i + width, value: 0 })
      store.commit('setScore', store.state.score + combinedTotal)
    }
  }
}

export const combineRow = () => {
  for (let i = 0; i < 15; i++) {
    if (store.state.currentGame[i] === store.state.currentGame[i + 1]) {
      const combinedTotal = parseInt(store.state.currentGame[i]) + parseInt(store.state.currentGame[i + 1])
      store.dispatch('modifyCurrentGame', { index: i, value: combinedTotal })
      store.dispatch('modifyCurrentGame', { index: i + 1, value: 0 })
      store.commit('setScore', store.state.score + combinedTotal)
    }
  }
}
