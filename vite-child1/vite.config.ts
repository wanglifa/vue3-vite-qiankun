import vueJsx from "@vitejs/plugin-vue-jsx"
import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import qiankun from "vite-plugin-qiankun"

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://localhost:3002/",
  server: {
    port: 3002,
    cors: true,
    origin: "http://localhost:3002",
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
      useDevMode: true,
    }),
  ],
})