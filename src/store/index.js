import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 0,
        task: "task one",
        done: false
      },
      {
        id: 1,
        task: "task two",
        done: false
      },
      {
        id: 2,
        task: "task three",
        done: false
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
})
