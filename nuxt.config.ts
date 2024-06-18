// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // baseURL: '/logiciel-avocats/',
    // baseURL: '/.output/public/',
    head: {
      title:
        ' Logiciel Facturation Avocat : Solution de gestion cabinets d’avocats',
      htmlAttrs: {
        lang: 'fr',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' },
        {
          hid: 'title',
          name: 'title',
          content:
            ' Logiciel Facturation Avocat : Solution de gestion cabinets d’avocats',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
          // content: "Optimisez la facturation en tant qu'avocat avec notre logiciel dédié. Simplifiez la gestion financière de votre cabinet pour plus d'efficacité.",
        },
        { name: 'keywords', content: 'logicel avocat cabinet facturation' },

        // Twitter
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content:
            ' Logiciel Facturation Avocat : Solution de gestion cabinets d’avocats',
          // content: "Optimisez la facturation en tant qu'avocat avec notre logiciel dédié. Simplifiez la gestion financière de votre cabinet pour plus d'efficacité.",
        },
        {
          name: 'twitter:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { name: 'twitter:image', content: '/ogImage.webp' },

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
          content:
            'Logiciel facturation avocat : Solution de gestion cabinets d’avocats',
        },
        {
          hid: 'og-desc',
          property: 'og:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { hid: 'og-image', property: 'og:image', content: '/ogImage.webp' },

        //
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#5bbad5',
        },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'canonical', href: 'https://www.zlawyer.fr/logiciel-avocats/' },
      ],
      script: [
        {
          id: 'elfsight',
          src: 'https://apps.elfsight.com/p/platform.js',
          defer: true,
        },
        {
          id: 'ze-snippet',
          src: 'https://static.zdassets.com/ekr/snippet.js?key=e2d18a03-a4bd-4b4d-986b-292fec2fcd83',
        },
      ],
    },
  },

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

  plugins: [],

  components: true,

  runtimeConfig: {
    public: {
      gtagId: 'UA-7664894-1',
    },
  },
});
