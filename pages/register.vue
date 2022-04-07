<template>
  <div class="login">
    <div class="content">
      <h1>ورود به حساب کاربری</h1>
      <form @submit.prevent="logInUser(userData)" method="post">

        <TextInput show-error="true" :error="error.first_name" name="first_name" v-model="userData.first_name"
                   placeholder="first name (english)"/>
        <TextInput show-error="true" :error="error.last_name" name="last_name" v-model="userData.last_name"
                   placeholder="first name (english)"/>
        <TextInput show-error="true" :error="error.first_name_persian" name="first_name_persian"
                   v-model="userData.first_name_persian"
                   placeholder="نام (فارسی)"/>
        <TextInput show-error="true" :error="error.last_name_persian" name="last_name_persian"
                   v-model="userData.last_name_persian"
                   placeholder="نام (خانوادگی)"/>
        <TextInput show-error="true" :error="error.national_code" name="national_code" v-model="userData.national_code"
                   placeholder="کد ملی"/>
        <TextInput show-error="true" :error="error.sex" name="sex" v-model="userData.sex" placeholder="جنسیت"/>
        <TextInput show-error="true" :error="error.phone_number" name="phone_number" v-model="userData.phone_number"
                   placeholder="شماره همراه دانش آموز"/>
        <TextInput show-error="true" :error="error.parent_phone_number" name="parent_phone_number"
                   v-model="userData.parent_phone_number"
                   placeholder="شماره همراه ولی"/>
        <v-select v-model="userData.grade" solo style="border-radius: 15px;
    font-size: 29px;"
                  :items="['دهم','یازدهم']" name="grade">
        </v-select>

        <TextInput show-error="true" :error="error.providence" name="providence" v-model="userData.providence"
                   placeholder="استان"/>
        <TextInput show-error="true" :error="error.city" name="city" v-model="userData.city" placeholder="شهر"/>
        <TextInput show-error="true" :error="error.address" name="address" v-model="userData.address"
                   placeholder="آدرس"/>
        <TextInput show-error="true" :error="error.post_code" name="post_code" v-model="userData.post_code"
                   placeholder="کد پستی"/>

        <TextInput show-error="true" :error="error.birth_date" name="birth_date" v-model="userData.birth_date"
                   placeholder="کد پستی"/>

        <TextInput show-error="true" :error="error.username" name="username" v-model="userData.username"
                   placeholder="نام کاربری"/>
        <TextInput show-error="true" :error="error.email" name="email" v-model="userData.email" placeholder="ایمیل"/>
        <TextInput show-error="true" :error="error.password" :password="!passwordShow" v-model="userData.password"
                   name="password"
                   placeholder="رمز عبور"/>
        <TextInput show-error="true" :error="error.confirm_password" :password="!passwordShow"
                   v-model="userData.confirm_password"
                   name="confirm_password"
                   placeholder="تکرار رمز عبور"/>

        <input type="submit" value="ثبت نام">
      </form>
    </div>
    <div class="image">
      <img src="images/login_image.png">
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/Form/TextInput";

export default {
  name: "register",
  components: {TextInput},
  data() {
    return {
      passwordShow: false,
      userData: {},
      error: {},
      sending: false

    }
  },
  computed: {
    passwordType: function () {
      return (this.$data.passwordShow) ? 'text' : 'password';
    },
  },
  methods: {
    showPassword() {
      this.$data.passwordShow = !this.$data.passwordShow
    },
    async logInUser(userData) {
      if (this.$data.sending)
        return
      this.$data.sending = true
      try {
        await this.$auth.loginWith('register', {
          data: userData,
        })
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'با موفقیت وارد شدید',
          text: 'الان به صفحه پروفایلتان منتقل می شوید'
        });
      } catch (error) {
        let text = ''
        if (error.response.data.non_field_errors !== undefined) {
          error.response.data.non_field_errors.forEach((value) => {
            text += value
          })
        }
        this.$notify({
          group: 'foo',
          type: 'error',

          title: 'لطفا موارد را با دقت پر کنید',
          text: text
        });
        this.$data.error = error.response.data
        this.$data.sending = false

      }
    },
  },
  mounted() {
    this.$store.commit('setFooterColor', '#A9E3E1')
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

  @media screen and (max-width: 1000px) {
    .image {
      display: none;
    }
  }


  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    color: #004948;
  }

  input[type="submit"] {
    box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
    filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
    background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
    border-radius: 15px;
    padding: 10px 15px;
    border: none;
    width: 100%;
    height: 70px;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #FEFEFE;
  }

  input[type="checkbox"] {
    background: none;
    border-radius: 5px;
    width: 15px;
    height: 15px;

    color: #FEFEFE;
  }
}

</style>
