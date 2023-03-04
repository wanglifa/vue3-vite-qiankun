import {defineStore} from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore("user", () => {
  const token = ref(localStorage.getItem("token") || "")

  const setToken = (newToken: string) => {
    token.value = newToken
    localStorage.setItem("token", newToken)
  }

  return {
    token,
    setToken
  }
})