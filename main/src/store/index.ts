// import actions from "@/shared/action"
import { createStore } from "vuex"

export const store = createStore({
  state() {
    return {
      token: "111",
      name: "",
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      // actions.setGlobalState({ ...state, token })
      // actions.offGlobalStateChange()
    },
    setName(state, name) {
      state.name = name
    },
  },
})