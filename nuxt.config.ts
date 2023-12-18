// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', 
    '@vueuse/nuxt', 
    "@nuxtjs/tailwindcss",
    '@element-plus/nuxt'
  ],
  tailwindcss: {
    cssPath: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  elementPlus: { 
    icon: false
  },
  css: [
    '~/assets/css/style.scss'
  ],
})