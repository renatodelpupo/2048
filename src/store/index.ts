import { createStore } from 'vuex'

export default createStore({
  state: {
    currentGame: Array(16).fill(0),
    continueAfterCompletion: false,
    darkTheme: true
  },

  mutations: {
    modifyCurrentGame(state, { index, value }) {
      state.currentGame[index] = value
    },

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
        currentGame[randomNumber] = 2
        context.commit('setCurrentGame', currentGame)
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
    }
  },

  modules: {}
})
