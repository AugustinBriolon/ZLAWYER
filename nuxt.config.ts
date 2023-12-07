// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // target: 'static',
  // ssr: false,
  // router: {
  //   base: '/logiciel-avocats/',
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  app: {
    head: {
      title: 'Logiciel Avocat accessible et complet | zLawyer',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
        {
          hid: 'title',
          name: 'title',
          content: 'Logiciel Avocat accessible et complet | zLawyer',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { name: 'keywords', content: 'logicel avocat cabinet facturation' },

        // Twitter
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content: 'Logiciel Avocat accessible et complet | zLawyer',
        },
        {
          name: 'twitter:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { name: 'twitter:image', content: '/ogImage.png' },

        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { hid: 'og-type', property: 'og:type', content: 'website' },
        {
          hid: 'og-url',
          property: 'og:url',
          content: 'https://www.zlawyer.fr/logiciel-avocats/',
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Logiciel Avocat accessible et complet | zLawyer',
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { hid: 'og-image', property: 'og:image', content: '/ogImage.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://www.zlawyer.fr/logiciel-avocats/' },
      ],
      script: [
        {
          id: 'ze-snippet',
          src: 'https://static.zdassets.com/ekr/snippet.js?key=e2d18a03-a4bd-4b4d-986b-292fec2fcd83',
        },
      ],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/css/main.css'],
  vite: {
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // buildModules: [
  //   // https://go.nuxtjs.dev/tailwindcss
  //   // '@nuxt/image',
  //   '@nuxt/image',
  //   '@nuxtjs/tailwindcss',
  //   '@nuxtjs/vuetify',
  //   'nuxt-gsap-module',
  // ],

  // gsap: {
  //   extraPlugins: {
  //     scrollTrigger: true,
  //   },
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
  ],

  // runtimeConfig: {
  //   recaptcha: {
  //     hideBadge: false,
  //     language: 'FR',
  //     siteKey: '6LeLYOUgAAAAAMLyGgi4_Owoy-HHuvQAgjoElWHN',
  //     version: 2,
  //     size: 'normal',
  //   },
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  // build: {
  //   publicPath: 'https://www.zlawyer.fr/logiciel-avocats/',
  //   extend(config, ctx) {
  //     config.performance.maxAssetSize = 700 * 1024;
  //   },
  // },
});
