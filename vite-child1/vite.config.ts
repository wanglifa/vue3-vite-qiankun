import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig, loadEnv } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import qiankun from "vite-plugin-qiankun"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // base: "http://localhost:3002/",
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE } = env
  return {
    base: mode !== "production" ? "/" : "http://127.0.0.1:8082/", // 生产环境需要指定域名
    server: {
      port: 8082,
      cors: true,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".json", ".js", ".vue"],
      alias: {
        "@": resolve("src"),
      },
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
        mergeProps: true,
      }),
      qiankun("subapp", {
        useDevMode: mode !== "production",
      }),
    ],
  }
})