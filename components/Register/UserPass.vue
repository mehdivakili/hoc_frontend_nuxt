<template>
  <div :key="2" v-else-if="state === 2">
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field solo flat :hide-details="!error.username" :error-messages="error.username"
                      :error="!!error.username" name="username"
                      v-model="userData.username"
                      placeholder="نام کاربری"/>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field solo flat :hide-details="!error.email" type="email" :error-messages="error.email"
                      :error="!!error.email" name="email"
                      v-model="userData.email" placeholder="ایمیل"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field solo flat :hide-details="!error.password" type="password"
                      :error-messages="error.password"
                      :error="!!error.password"
                      :password="!passwordShow" v-model="userData.password"
                      name="password"
                      placeholder="رمز عبور"/>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field type="password" solo flat :hide-details="!error.confirm_password"
                      :error-messages="error.confirm_password"
                      :error="!!error.confirm_password" :password="!passwordShow"
                      v-model="userData.confirm_password"
                      name="confirm_password"
                      placeholder="تکرار رمز عبور"/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "user_pass",
  data() {
    return {
      userData: {...this.$store.state.register.userData},
      passwordShow: false,

    }
  },
  computed: {
    error() {
      return this.$store.state.register.error
    }

  },
  watch: {
    userData: {
      handler: function (val, oldVal) {
        this.$store.commit('register/setUserData', val)
      },
      deep: true,

    }
  },
  methods: {
    showPassword() {
      this.$data.passwordShow = !this.$data.passwordShow
    },
  }
}
</script>

<style scoped>

</style>
