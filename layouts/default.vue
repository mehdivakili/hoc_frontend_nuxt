<template>
  <v-app dir="rtl">
    <TheHeader/>
    <v-main>
        <Nuxt/>
    </v-main>
    <TheFooter bg-color="#004948"/>

  </v-app>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

export default {
  name: 'DefaultLayout',
  components: {TheHeader, TheFooter},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">

* {
  font-family: Vazir !important;
}

footer {
  text-align: center;
}


</style>
