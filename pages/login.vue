<template>
  <div class="login">
    <div class="content">
      <h1>ورود به حساب کاربری</h1>
      <form @submit.prevent="logInUser(userData)" method="post">
        <input type="text" name="username" v-model="userData.username" placeholder="نام کاربری یا ایمیل">
        <input :type="passwordType" v-model="userData.password" name="password" placeholder="رمز عبور">
        <div>
          <label for="showPassword">نمایش رمز عبور</label>
          <input type="checkbox" id="showPassword" v-on:change="showPassword()">
          <a>رمز عبور خود را فراموش کرده اید</a>
          <input type="submit" value="ورود">
        </div>
      </form>
    </div>
    <div class="image">
      <img src="images/login_image.png">
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      passwordShow: false,
      userData: {username: '', password: ''}
    }
  },
  computed: {
    passwordType: function () {
      return (this.$data.passwordShow) ? 'text' : 'password';
    }
  },
  methods: {
    showPassword() {
      this.$data.passwordShow = !this.$data.passwordShow
    },
    async logInUser(userData) {
      try {
        await this.$auth.loginWith('local', {
          data: userData,
        })
        console.log('notification successful')
      } catch (error) {
        console.log('notification unsuccessful')
      }
    },
  }
}
</script>

<style scoped lang="scss">
.login {
  background: #A9E3E1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 30px;

  .content, .image {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;

  }
}

</style>
