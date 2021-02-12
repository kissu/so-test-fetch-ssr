export default {
  // Auto-load components/
  components: true,
  target: 'static',
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  tailwindcss: {
    // add '~tailwind.config` alias
    exposeConfig: true
  }
};
