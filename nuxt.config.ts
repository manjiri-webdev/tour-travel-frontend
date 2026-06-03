export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2026-06-03',
  modules: ['@nuxtjs/prismic'],
  prismic: {
    endpoint: 'coimbatore-commute-blog'
  }
})