<template>
  <div class="login">
    <div class="content">
      <div class="p-bars">
        <div :class="['line',(state === 0)? 'line-current':(state > 0) ?'line-before': '']"></div>

        <div :class="['bar',(state === 0)? 'bar-current':(state > 0) ?'bar-before': '']">
          <div class="bar-icon">
            <v-icon size="60">mdi-message-processing</v-icon>
          </div>
          <p>دریافت پیامک</p>

        </div>
        <div :class="['bar',(state === 1)? 'bar-current':(state > 1) ?'bar-before': '']">
          <div class="bar-icon">
            <v-icon size="60">mdi-key</v-icon>
          </div>
          <p>انتخاب رمز عبور جدید</p>

        </div>

      </div>
      <Transition name="fade" :duration="350" mode="out-in">
        <div style="width: 100%" :key="0" v-if="state === 0">
          <v-row justify="center" align="center">
            <v-col cols="9" md="5">
              <v-text-field :error-messages="error.phone_number" :error="!!error.phone_number" flat
                            :hide-details="!error.phone_number" v-model="phone_number"
                            solo
                            placeholder="شماره همراه">
              </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn @click="send_sms()">دریافت پیامک</v-btn>
            </v-col>
          </v-row>

          <v-row justify="center" align="center">
            <v-col cols="9" md="5">
              <v-otp-input dir="ltr" type="number" :hide-details="true" v-model="otp_code"
                            length="5"
              >
              </v-otp-input>
            </v-col>
            <v-col cols="2">
              <v-btn @click="validate_token()">ارسال کد تایید</v-btn>
            </v-col>
          </v-row>
        </div>

        <div style="width: 100%" :key="1" v-else-if="state === 1">
          <h5>زمر عبور جدید خود را وارد نمایید</h5>
          <v-row>
            <v-col cols="12">
              <v-text-field type="password" :error-messages="error.password" :error="!!error.password" flat
                            :hide-details="!error.password" v-model="password" placeholder="رمز عبور جدید"
                            solo></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field type="password" :error-messages="error.confirm_password" :error="!!error.confirm_password"
                            flat
                            :hide-details="!error.confirm_password" v-model="confirm_password"
                            placeholder="تکرار رمز عبور جدید"
                            solo
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn @click="change_password()">تغییر رمز عبور</v-btn>
        </div>

      </Transition>
    </div>
    <div class="image">
      <img src="/images/password_reset_image.svg">
    </div>
  </div>
</template>

<script>

export default {
  name: "password_reset",
  data() {
    return {
      phone_number: '',
      otp_code: '',
      state: 0,
      error: {},
      password: '',
      confirm_password: ''

    }
  },
  methods: {
    async send_sms() {
      this.$axios.post('/password_reset/', {phone_number: this.$data.phone_number}).then((response) => {
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'کد تایید با موفقیت ارسال شد',
        });
      }).catch((reason) => {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: reason.response.data.phone_number[0],
        });
        this.$data.error = reason.response.data
      })
    },
    async validate_token() {
      this.$axios.post('/password_reset/validate_token/', {token: this.$data.otp_code}).then((response) => {
        this.$data.state = 1
      }).catch((reason) => {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: reason.response.data.detail,
        });
        this.$data.error.otp_code = reason.response.data.detail
      })
    }, async change_password() {
      if (this.password !== this.confirm_password) {
        this.error = {password: 'دو پسورد، همسان نیستند', confirm_password: 'دو پسورد، همسان نیستند'}

        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'مشکلی پیش آمده',

        });
        return
      }
      this.$axios.post('/password_reset/confirm/', {
        password: this.$data.password,
        token: this.$data.otp_code
      }).then((response) => {
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'رمز با موفقیت تعویض شد',
        });
        this.$router.push('/login')
      }).catch((reason) => {
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'مشکلی پیش آمده',
          text: reason.response.data.detail,
        });
        this.$data.error = reason.response.data
      })
    }
  },
  mounted() {
    this.$store.commit('setFooterColor', '#A9E3E1')
  },
  auth: 'guest'

}
</script>

<style scoped lang="scss">

.login {
  background: #A9E3E1;
  padding: 30px;
}

@media screen and (min-width: 1000px) {
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

}


@media screen and (max-width: 1000px) {
  .image {
    display: none;
  }
}

.p-bars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-width: 300px;

}

.bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;

  p {
    margin-top: 10px;
    color: white;
    transition: color 0.7s;
  }
}

.bar-icon {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-sizing: border-box;
  background: #A9E3E1;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: white;
    transition: color 0.7s;
  }
}

.bar.bar-current {
  i, p {
    color: #004948;
  }
}

.bar-before i {
  color: #004948;
}

.line {
  flex-grow: 10;
  background: white;
  height: 5px;
  margin: 10px;
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  z-index: 0;
}

.line::after {
  position: absolute;
  height: 5px;
  content: "";
  width: 0;
  background: #004948;
  transition: width 0.7s;

}

.line-before::after {
  width: 100%;
}


</style>

<style>
.vpd-input-group {
  background: white !important;
  height: 48px !important;
  border-radius: 5px !important;

}

.vpd-icon-btn {
  border-radius: 0 5px 5px 0;
}
</style>
