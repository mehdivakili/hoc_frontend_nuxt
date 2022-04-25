<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <router-link class="navbar-brand" to="/">
      <img class="img-fluid" src="~/assets/images/logo.png">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="#navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
            v-on:click="() => {navShow = !navShow}">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClasses">
      <div class="navbar-nav">
        <template v-for="navItem in navItems">
          <router-link v-if="navItem.link.startsWith('/')" class="nav-item nav-link" :to="navItem.link">
            {{ navItem.title }}
          </router-link>
          <a v-else class="nav-item nav-link" :href="navItem.link">
            {{ navItem.title }}
          </a>
        </template>
      </div>
      <div v-if="$auth.loggedIn" class="button-container">
        <v-btn @click="$nuxt.$loading.start();$auth.logout().then($nuxt.$loading.finish);" class="head-button login-button">خروج</v-btn>
        <NuxtLink to="/account" class="head-button register-button">پروفايل</NuxtLink>
      </div>
      <div v-else class="button-container">
        <NuxtLink to="/login" class="head-button login-button">ورود</NuxtLink>
        <br>
        <NuxtLink to="/register" class="head-button register-button">ثبت نام</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script>


export default {
  name: "Header",
  data() {
    return {navShow: false}
  },
  computed: {
    navItems() {
      return this.$store.state.menu
    },
    navClasses() {
      if (this.$data.navShow) {
        return ['collapse', 'navbar-collapse', 'show']
      } else {
        return ['collapse', 'navbar-collapse']
      }
    }

  },


}
</script>

<style scoped>
nav {
  background: white;
  padding: 10px;
}

.nav-item {
  color: #004948 !important;
  padding-left: 48px !important;
}

.navbar-brand {
  padding-left: 48px;
}

.head-button {
  width: 90px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 17px;
}

@media screen and (min-width: 1000px) {
  .button-container {
    display: flex;
    flex-direction: row-reverse;
    gap: 15px;
    box-sizing: border-box;
    margin-right: auto;
  }


  .head-button.register-button {
    box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
    filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
    background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
    border-radius: 15px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  .head-button.login-button {
    box-shadow: inset 0px -4px 4px rgba(255, 255, 255, 0.25);
    filter: drop-shadow(0px 4px 4px rgba(0, 150, 147, 0.25));
    border-radius: 15px;
    border: solid #03B9B5 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: #03B9B5;
  }
}


</style>
