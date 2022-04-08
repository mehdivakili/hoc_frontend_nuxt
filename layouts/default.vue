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
nav{
  position: fixed !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}


</style>
