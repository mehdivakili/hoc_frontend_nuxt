<template>
  <v-app-bar app class="nav d-flex justify-space-between align-center pa-4">
    <div class="">
      <img src="../assets/images/logo.png" alt="" />
      <nuxt-link class="px-4" to="">خانه</nuxt-link>
      <nuxt-link class="px-4" to="">اعتبار سنجی مدرک</nuxt-link>
      <nuxt-link class="px-4" to="">زنگ برنامه نویسی دروه ششم</nuxt-link>
    </div>
    <div class="d-flex">
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>
      <v-btn class="button-fill">ثبت نام</v-btn>
      <div class="mx-4"></div>
      <v-btn class="button-outline">ورود</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  z-index: 2;
  background-color: white;

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
