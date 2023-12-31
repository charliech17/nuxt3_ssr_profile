// https://nuxt.com/docs/api/configuration/nuxt-config
const thisYear = new Date().getFullYear();


export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt', 
    '@vueuse/nuxt', 
    '@element-plus/nuxt',
    "@nuxtjs/tailwindcss",
    '@nuxtjs/i18n',
  ],
  app: {
    head: {
      title: `Josh的個人網站`,
      meta: [
        {
          name: "title",
          content: `【${thisYear}年 持續更新!】Josh的個人網站`
        },
        {
          name: "description",
          content: "我是Josh，從事前端工作兩年，對技術學習和教學很有興趣，歡迎看看我的作品集!還有可以玩玩看這個網頁的各種功能~"
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/index/profile_logo.png'
        }
      ],
    }
  },
  elementPlus: { 
    icon: false,
    themes: ['dark']
  },
  tailwindcss: {
    cssPath: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.json'
      },
      {
        code: 'zh-tw',
        iso: 'zh-TW',
        file: 'zh-tw.json'
      }
    ],
    defaultLocale: 'zh-tw'
  },
  css: [
    '~/assets/css/style.scss'
  ],
})