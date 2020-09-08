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
    }
  },

  actions: {},

  modules: {}
})
