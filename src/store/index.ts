import { createStore } from 'vuex'

export default createStore({
  state: {
    currentGame: Array(16).fill(0),
    continueAfterCompletion: false,
    darkTheme: true
  },

  mutations: {
    setContinueAfterCompletion(state, value) {
      state.continueAfterCompletion = value
    },

    setCurrentGame(state, value) {
      state.currentGame = value
      localStorage.setItem('currentGame', JSON.stringify(value))
    },

    setDarkTheme(state, value) {
      state.darkTheme = value
      localStorage.setItem('darkTheme', value.toString())
    }
  },

  actions: {
    addNumberToCurrentGame(context) {
      const currentGame = context.state.currentGame
      const randomNumber = Math.floor(Math.random() * context.state.currentGame.length)

      if (currentGame[randomNumber] === 0) {
        context.dispatch('modifyCurrentGame', { index: randomNumber, value: 2 })
      } else {
        context.dispatch('addNumberToCurrentGame')
      }
    },

    fetchCurrentGame({ commit }) {
      const localStorageData = localStorage.getItem('currentGame')
      if (localStorageData) {
        commit('setCurrentGame', JSON.parse(localStorageData))
      } else {
        commit('addNumberToCurrentGame')
      }
    },

    fetchDarkTheme({ commit }) {
      const localStorageData = localStorage.getItem('darkTheme') === 'false' ? false : true
      commit('setDarkTheme', localStorageData)
    },

    modifyCurrentGame({ commit, state }, { index, value }) {
      const currentGame = state.currentGame
      currentGame[index] = value
      commit('setCurrentGame', currentGame)
    }
  },

  modules: {}
})
