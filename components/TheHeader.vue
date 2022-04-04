<template>
  <v-app-bar
    fixed
    app
  >
    <v-btn v-for="item in items"
           text
    >
      <NuxtLink :to="item.link">{{ item.title }}</NuxtLink>
    </v-btn>

    <div class="authentication-buttons">
      <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn icon to="/logout" class="logout-btn">
          <v-icon light @click="$auth.logout()">mdi-logout</v-icon>
        </v-btn>
      </div>
      <div v-else>
        <v-btn icon to="/login" class="login-btn">
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn icon to="/register" class="register-btn">
          <v-icon>mdi-account-key-outline</v-icon>
        </v-btn>
      </div>
    </div>
  </v-app-bar>

</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      items: [{'link': '/', 'title': 'خانه'},
        {'link': '/about', 'title': 'درباره'},
        {'link': '/login', title: 'ورود'}
      ]
    }
  }, computed: {},
  mounted() {
    console.log(this.$store.state.auth.loggedIn)
  }
}
</script>

<style scoped>

a {
  color: black;
  text-decoration: none;
}
</style>


