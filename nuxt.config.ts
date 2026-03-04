import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    output: {
      dir: '.output',
      publicDir: 'static',
    },
  },

  ssr: true,

  app: {
    // baseURL: '/logiciel-avocats/',
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
          name: 'title',
          content:
            ' Logiciel Facturation Avocat : Solution de gestion cabinets d’avocats',
        },
        {
          name: 'description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { name: 'keywords', content: 'logicel avocat cabinet facturation' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          name: 'twitter:title',
          content:
            ' Logiciel Facturation Avocat : Solution de gestion cabinets d’avocats',
        },
        {
          name: 'twitter:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { name: 'twitter:image', content: '/ogImage.webp' },

        { name: 'format-detection', content: 'telephone=no' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://www.zlawyer.fr/logiciel-avocats/',
        },
        {
          property: 'og:title',
          content:
            'Logiciel facturation avocat : Solution de gestion cabinets d’avocats',
        },
        {
          property: 'og:description',
          content:
            'Logiciel avocat intuitif, simple, et complet pour la gestion du cabinet | zLawyer aide les avocats, depuis 2006, à ne plus perdre de temps... à en saisir.',
        },
        { property: 'og:image', content: '/ogImage.webp' },

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
        { rel: 'manifest', href: '/logiciel-avocats/favicon/site.webmanifest' },
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
      ],
    },
  },

  css: ['@/scss/main.scss', '@/css/main.css'],

  vite: {
    plugins: [
      tailwindcss() as any,
    ],
    resolve: {
      alias: {
        '~': '/public',
        '@': '/assets',
      },
    },
  },

  plugins: ['~/plugins/google-recaptcha.ts'],
  components: true,

  runtimeConfig: {
    public: {
      gtagId: 'UA-7664894-1',
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY || '',
    },
  },

  compatibilityDate: '2025-06-20',
});
