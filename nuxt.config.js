
export default {
  /*
  ** Headers of the page
  */
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon-512x512.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/redirect-module',
    'nuxt-webfontloader',
    '@nuxt/components',
    'vue-scrollto/nuxt',
    '@nuxtjs/google-gtag'
  ],
  sitemap: {
    hostname: 'https://www.slow.is',
    gzip: true,
    trailingSlash: true,
    defaults: {
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      {
        url: '/',
        priority: 1
      }
    ]
  },
  robots: {
    UserAgent: '*',
    Sitemap: 'https://www.slow.is/sitemap.xml'
  },
  redirect: [],
  webfontloader: {
    custom: {
      families: [
        'Montserrat:n3,n4,n7,n9',
      ],
      urls: [
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap',
      ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  components: [
    '~/components/brand'
  ],
  'google-gtag': {
    id: 'G-XXXXXXXXXX',
    config: {
      anonymize_ip: true,
      send_page_view: true,
      linker: {
        domains: ['www.slow.is']
      }
    },
    debug: false,
    disableAutoPageTrack: false
  }
}
