import { createStore } from 'vuex'

export default createStore({
  state: {
    darkTheme: true
  },

  mutations: {
    setDarkTheme(state, value) {
      state.darkTheme = value
    }
  },

  actions: {},

  modules: {}
})
