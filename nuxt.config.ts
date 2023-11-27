export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },

  app:{
    head:{
      title: 'Türkmenistanyň Milli Baýramçylyklary',
      meta:[
        { name: 'description', content: 'Türkmenistanyň Milli Baýramçylyklary barada maglumat berýän web-sahypa' }
      ],
      link:[
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-swiper',
  ]
})
