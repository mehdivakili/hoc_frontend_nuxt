<template>
  <div>
    <v-app-bar>
      <img src="../assets/images/logo.png" alt="" />
      <div class="d-none d-sm-flex" v-for="item in navItems" :key="item.path">
        <v-btn :to="item.path">{{ item.name }}</v-btn>
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-sm-flex" v-for="item in navButtons" :key="item.path">
        <v-btn :class="item.class" :to="item.path">{{ item.name }}</v-btn>
      </div>
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
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
        { name: "ثبت نام", path: "/register", class: "" },
        { name: "ورود", path: "/login", class: "" },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
