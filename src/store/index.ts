import { createStore } from 'vuex'

export default createStore({
  state: {
    continueAfterCompletion: false,
    darkTheme: true
  },

  mutations: {
    setContinueAfterCompletion(state, value) {
      state.continueAfterCompletion = value
    },

    setDarkTheme(state, value) {
      state.darkTheme = value
      localStorage.setItem('darkTheme', value.toString())
    }
  },

  actions: {
    fetchDarkTheme({ commit }) {
      const localStorageData = localStorage.getItem('darkTheme') === 'false' ? false : true
      commit('setDarkTheme', localStorageData)
    }
  },

  modules: {}
})
