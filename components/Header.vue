<template>
  <div>
    <v-app-bar height="100" class="white" app>
      <img src="../assets/images/logo.png" alt="hoc" />
      <div class="d-none d-md-flex" v-for="item in navItems" :key="item.path">
        <v-btn elevation="0" class="nav__btn mx-4 px-4 py-6" :to="item.path">{{
          item.name
        }}</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex" v-for="item in navButtons" :key="item.path">
        <v-btn :class="item.class" class="pa-5" :to="item.path">{{ item.name }}</v-btn>
      </div>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense></v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
      navItems: [
        { name: "خانه", path: "/" },
        { name: "اعتبار سنجی مردک", path: "/verify" },
        { name: "دوره قبلی", path: "/hoc6" },
      ],
      navButtons: [
        { name: "ثبت نام", path: "/register", class: "nav__btn__register" },
        { name: "ورود", path: "/login", class: "" },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.nav {
  &__btn {
    background-color: transparent !important;

    &__register {
      box-shadow: inset 0 -4px 4px rgb(255 252 252 / 25%);
      filter: drop-shadow(0 8px 10px rgba(0, 146, 143, 0.25));
      background: linear-gradient(180deg, #03b9b5, #009592);
      border-radius: 15px;
      color: #fff;
      border: none;
      font-size: 16px;
    }
  }
}
</style>
