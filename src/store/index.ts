import { createStore } from 'vuex'

export default createStore({
  state: {
    currentGame: Array(16).fill(0) as Array<number>,
    continueAfterCompletion: false as boolean,
    darkTheme: true as boolean,
    gameWidth: 4 as number,
    score: 0 as number
  },

  mutations: {
    setContinueAfterCompletion(state, value) {
      state.continueAfterCompletion = value
    },

    setCurrentGame(state, value) {
      state.currentGame = value
      localStorage.setItem('currentGame', JSON.stringify(state.currentGame))
    },

    setDarkTheme(state, value) {
      state.darkTheme = value
      localStorage.setItem('darkTheme', value.toString())
    },

    setScore(state, value) {
      state.score = value
    }
  },

  actions: {
    addNumberToCurrentGame({ dispatch, state }) {
      const currentGame = state.currentGame
      const randomNumber = Math.floor(Math.random() * state.currentGame.length)

      if (currentGame[randomNumber] === 0) {
        dispatch('modifyCurrentGame', { index: randomNumber, value: 2 })
      } else {
        dispatch('addNumberToCurrentGame')
      }
    },

    fetchCurrentGame({ commit, dispatch }) {
      const localStorageData = localStorage.getItem('currentGame')
      if (localStorageData) {
        commit('setCurrentGame', JSON.parse(localStorageData))
      } else {
        dispatch('addNumberToCurrentGame')
      }
    },

    fetchDarkTheme({ commit }) {
      const localStorageDarkScheme = localStorage.getItem('darkTheme')
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (localStorageDarkScheme) {
        const status = localStorageDarkScheme === 'true'
        commit('setDarkTheme', status)
      } else {
        commit('setDarkTheme', prefersDarkScheme)
      }
    },

    modifyCurrentGame({ commit, state }, { index, value }) {
      const currentGame = state.currentGame
      currentGame[index] = value
      commit('setCurrentGame', currentGame)
    },

    resetCurrentGame({ commit, dispatch }) {
      commit('setCurrentGame', Array(16).fill(0))
      dispatch('addNumberToCurrentGame')
    }
  },

  modules: {}
})
