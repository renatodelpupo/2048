import { createStore } from 'vuex'

export default createStore({
  state: {
    currentGame: [],
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
    fetchCurrentGame({ commit }) {
      const localStorageData = localStorage.getItem('currentGame')
      if (localStorageData) commit('setCurrentGame', JSON.parse(localStorageData))
    },

    fetchDarkTheme({ commit }) {
      const localStorageData = localStorage.getItem('darkTheme') === 'false' ? false : true
      commit('setDarkTheme', localStorageData)
    }
  },

  modules: {}
})
