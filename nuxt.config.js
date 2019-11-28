const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Dancing+Script|Raleway|Ubuntu:300,400,500,700'}
    ],
    script: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3FC4E4' },

  /*
   ** Global CSS
   */
  css: [
  ],

  /*
   ** Plugins to load before mounting the App
   */
plugins: [
  { src: "~/plugins/google-maps", ssr: false },
  { src: "~/plugins/vue-notification", ssr: true }
],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
     // your settings here
     scss: ['@/vendor/scss/variables.scss'],
     less: [],
     stylus: []
    },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
   build: {
     /*
     ** You can extend webpack config here
     */
     transpile: [/^vue2-google-maps($|\/)/],
     extend(config, ctx) {
       // Run ESLint on save
       if (ctx.isDev && ctx.isClient) {
         config.module.rules.push({
           enforce: 'pre',
           test: /\.(js|vue)$/,
           loader: 'eslint-loader',
           exclude: /(node_modules)/,
           options: {
             fix: true
           }
         })
       }
     }
   }
}
