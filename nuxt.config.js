import colors from "vuetify/es5/util/colors";
import fa from "vuetify/src/locale/fa";

export default {
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - زنگ برنامه نویسی دانشگاه شیراز",
    title: "زنگ برنامه نویسی دانشگاه شیراز",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios.client.js",
    "~/plugins/notification.js",
    // '~/plugins/select.js',
    "~/plugins/datePicker.js",
    "~/plugins/persianNumberConverter.js",
    "~/plugins/OTPInput.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: true,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  imagemin: {
    plugins: [
      ["gifsicle", { interlaced: true }],
      ["jpegtran", { progressive: true }],
      ["optipng", { optimizationLevel: 5 }],
      ["svgo", { plugins: [{ removeViewBox: false }] }],
    ],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/tailwindcss",

    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    // '@nuxt/content',

    "@nuxtjs/auth-next",

    "nuxt-compress",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api.hocshirazu.ir/api/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "fa",
    },
    icon: {
      source: "~/static/icon.png",
      fileName: "icon.png",
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    rtl: true,
    lang: {
      locales: { fa },
      current: "fa",
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias.vue = "vue/dist/vue.common";
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: "auth_token",
          type: "Token",
          maxAge: 60 * 60 * 24 * 30 * 12,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: "token/login/",
            method: "post",
            property: "auth_token",
          },
          logout: { url: "token/logout/", method: "post" },
          user: {
            url: "me/",
            method: "get",
            propertyName: false,
          },
        },
      },

      register: {
        scheme: "local",
        token: {
          property: "auth_token",
          type: "Token",
          maxAge: 60 * 60 * 24 * 30 * 12,
        },
        user: {
          property: false,
        },
        endpoints: {
          login: {
            url: "register/",
            method: "post",
            property: "auth_token",
          },
          logout: { url: "token/logout/", method: "post" },
          user: {
            url: "me/",
            method: "get",
            propertyName: false,
          },
        },
      },
    },
    redirect: {
      login: "/login", //this example of the path of login page in your project
      logout: "/", //this will redirect to your home after logout
      home: "/", //this example will redirect to the path of user account page in your project.
    },
    plugins: ["~/plugins/crisp.client.js"],
  },
  router: {
    middleware: ["auth", "payment"],
  },
  loading: "~/components/loading.vue",
};
