import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prefixos: [
      { id: 1, name: "Wendel" },
      { id: 2, name: "Paco" },
      { id: 3, name: "Santos" }
    ],
    sufixos: [
      { id: 1, name: "Wendel" },
      { id: 2, name: "Paco" },
      { id: 3, name: "Santos" }
    ],
    domains: [
      { id: 1, name: "Wendel" },
      { id: 2, name: "Paco" },
      { id: 3, name: "Santos" }
    ]
  },
  mutations: {},
  actions: {}
});
