<template>
  <v-app>
    <Header/>

    <!-- <div style="height: 100px"></div> -->

    <v-main :style=" {backgroundColor:footerColor}">
      <notifications style="margin-top: 110px" position="top left" group="foo"/>

      <Nuxt/>
    </v-main>
    <TheFooter :bg-color="footerColor"/>

  </v-app>
</template>

<script setup>
import TheFooter from "@/components/TheFooter";
import Header from "@/components/Header";


export default {
  name: 'DefaultLayout',
  components: {Header, TheFooter},
  computed: {
    footerColor() {
      return this.$store.state.footerColor
    }
  },
  beforeMount() {
    this.$axios.post('menu/').then((response) => {
      this.$store.commit('setMenu', response.data)

    })
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

@font-face {
  font-family: Vazir;
  src: url(~/assets/fonts/Vazir.woff);
}

* {
  font-family: Vazir !important;
}

footer {
  text-align: center;
}

nav {
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
