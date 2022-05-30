<template>
  <div>
    <v-app-bar height="100" class="white" app>
      <img class="ml-6" src="../assets/images/logo.png" alt="hoc"/>
      <div class="d-none d-md-flex" v-for="item in navItems" :key="item.path">
        <v-btn
          elevation="0"
          class="nav__btn mx-4 px-4 py-6"
          :to="item.to ? item.to : ''"
          :href="item.href ? item.href : ''"
          @click="(item.hasClick)?logout():()=>{}"
        >{{ item.title }}
        </v-btn
        >
      </div>
      <v-spacer></v-spacer>
      <div class="d-none d-md-flex"
           v-for="item in ($auth.loggedIn) ?($auth.user.is_purchased)? navButtonsLogin: navButtonsLoginButNotPurchased:navButtons"
           :key="item.path">
        <v-btn :class="item.class" class="py-4 px-6 mx-2"
               :to="item.path ? item.path : ''"
               :href="item.href ? item.href : ''"
               @click="(item.hasClick)?logout():()=>{}"

        >{{
            item.name
          }}
        </v-btn>
      </div>
      <v-app-bar-nav-icon
        class="d-flex d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary style="position: fixed;">
      <v-list nav dense>
        <v-list-item-group v-model="group">
          <div
            class="d-flex flex-column"
            v-for="item in navItems"
            :key="item.title"
          >
            <v-btn
              elevation="0"
              class="nav__btn my-2 px-2 py-6"
              :to="item.to ? item.to : ''"
              :href="item.href ? item.href : ''"
            >{{ item.title }}
            </v-btn
            >
          </div>
          <div
            class="d-flex flex-column"
            v-for="item in ($auth.loggedIn) ?($auth.user.is_purchased)? navButtonsLogin: navButtonsLoginButNotPurchased:navButtons"
          >
            <v-btn :class="item.class" class="py-4 px-6 my-2" :to="item.path"
                   @click="(item.hasClick)?logout():()=>{}"
            >{{
                item.name
              }}
            </v-btn>
          </div>
        </v-list-item-group>
      </v-list>
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
      navItems: [],
      navButtons: [
        {name: "ثبت نام", path: "/register", class: "nav__btn__register"},
        {name: "ورود", path: "/login", class: "nav__btn__login"},
      ],
      navButtonsLogin: [
        {name: "پروفایل", path: "/account", class: "nav__btn__register"},
        {name: "خروج", hasClick: true, class: "nav__btn__login"},
      ],
      navButtonsLoginButNotPurchased: [
        {name: "شروع دوباره ثبت نام", hasClick: true, class: "nav__btn__login"},
      ],
    };
  },
  methods: {
    logout() {
      this.$nuxt.$loading.start()
      this.$auth.logout()
      this.$store.commit('register/setState', 0)
      this.$nuxt.$loading.finish()

    }
  },
  async fetch() {
    try {
      this.navItems = await this.$axios.$get('front/menu/')
    } catch (e) {
      if (e.response.status === 401) {
        await this.$auth.logout()
        await this.$fetch()
      }
    }
  },
  fetchOnServer: false,
};
</script>

<style scoped lang="scss">
.v-btn--active::before {
  opacity: 0;
}

.nav {
  &__btn {
    background-color: transparent !important;
    color: #004948 !important;

    &__register {
      box-shadow: inset 0 -4px 4px rgb(255 252 252 / 25%);
      filter: drop-shadow(0 8px 10px rgba(0, 146, 143, 0.25));
      background: linear-gradient(180deg, #03b9b5, #009592);
      border-radius: 15px;
      color: #fff !important;
      border: none;
      font-size: 16px;
    }

    &__login {
      box-shadow: inset 0 -4px 4px hsl(0deg 0% 100% / 25%);
      filter: drop-shadow(0 4px 4px rgba(0, 150, 147, 0.25));
      background-color: #fff !important;
      border-radius: 15px;
      border: 3px solid #03b9b5;
      color: #03b9b5 !important;
      font-size: 16px;
    }
  }
}
</style>
