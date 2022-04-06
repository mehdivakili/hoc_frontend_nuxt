<template>
  <v-app dir="rtl">
    <TheHeader/>

    <div style="height: 100px"></div>

    <v-main>
      <notifications style="margin-top: 110px" position="top left" group="foo"/>

      <Nuxt/>
    </v-main>
    <TheFooter :bg-color="footerColor"/>

  </v-app>
</template>

<script setup>
import TheFooter from "@/components/TheFooter";
import TheHeader from "@/components/TheHeader";

window.Popper = require('popper.js').default;

window.$ = window.jQuery = require('jquery');

require('bootstrap');

export default {
  name: 'DefaultLayout',
  components: {TheHeader, TheFooter},
  computed: {
    footerColor() {
      return this.$store.state.footerColor
    }
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

* {
  font-family: Vazir !important;
}

footer {
  text-align: center;
}


</style>
