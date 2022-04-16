<template>
  <div class="login">
    <div class="content">
      <v-form style="width: 100% !important;" @submit.prevent="logInUser(userData)" method="post">
        <div class="p-bars">
          <div :class="['bar',(state === 0)? 'bar-current':(state > 0) ?'bar-before': '']">
            <div class="bar-icon" @click="state = 0">
              <v-icon size="80">mdi-alert-circle</v-icon>
            </div>
            <p>اطلاعات شخصی</p>

          </div>
          <div :class="['line',(state === 0)? 'line-current':(state > 0) ?'line-before': '']"></div>
          <div :class="['bar',(state === 1)? 'bar-current':(state > 1) ?'bar-before': '']">
            <div class="bar-icon" @click="state = 1">
              <v-icon size="80">mdi-map-marker</v-icon>
            </div>
            <p>ادرس</p>

          </div>
          <div :class="['line',(state === 1)? 'line-current':(state > 1) ?'line-before': '']"></div>
          <div :class="['bar',(state === 2)? 'bar-current':(state > 2) ?'bar-before': '']">
            <div class="bar-icon" @click="state = 2">
              <v-icon size="80">mdi-account-circle</v-icon>
            </div>
            <p>اطلاعات کاربری</p>

          </div>

        </div>
        <Transition name="fade" :duration="350" mode="out-in">
          <div :key="0" v-if="state === 0">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field dir="ltr" solo flat :hide-details="!error.first_name" :error-messages="error.first_name"
                              :error="!!error.first_name"
                              name="first_name" v-model="userData.first_name"
                              placeholder="first name (english)"/>
              </v-col>
              <v-col cols="12" md="6">

                <v-text-field dir="ltr" solo flat :hide-details="!error.last_name" :error-messages="error.last_name"
                              :error="!!error.last_name"
                              name="last_name"
                              v-model="userData.last_name"
                              placeholder="first name (english)"/>
              </v-col>

            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field solo flat :hide-details="!error.first_name_persian"
                              :error-messages="error.first_name_persian" :error="!!error.first_name_persian"
                              name="first_name_persian"
                              v-model="userData.first_name_persian"
                              placeholder="نام (فارسی)"/>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field solo flat :hide-details="!error.last_name_persian"
                              :error-messages="error.last_name_persian"
                              :error="!!error.last_name_persian"
                              name="last_name_persian"
                              v-model="userData.last_name_persian"
                              placeholder="نام (خانوادگی)"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field solo flat :hide-details="!error.national_code" :error-messages="error.national_code"
                              :error="!!error.national_code"
                              name="national_code" v-model="userData.national_code"
                              placeholder="کد ملی"/>
              </v-col>
              <v-col cols="12" md="6">

                <v-select flat :hide-details="!error.sex" :error-messages="error.sex" :error="!!error.sex"
                          v-model="userData.sex" solo
                          placeholder="جنسیت"
                          :items="['مرد','زن']" name="sex">
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field solo flat type="number" :hide-details="!error.phone_number"
                              :error-messages="error.phone_number"
                              :error="!!error.phone_number"
                              name="phone_number"
                              v-model="userData.phone_number"
                              placeholder="شماره همراه دانش آموز"/>
              </v-col>
              <v-col cols="12" md="6">

                <v-text-field solo flat :hide-details="!error.parent_phone_number"
                              :error-messages="error.parent_phone_number" :error="!!error.parent_phone_number"
                              name="parent_phone_number"
                              v-model="userData.parent_phone_number"
                              placeholder="شماره همراه ولی"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-select :error-messages="error.grade" :error="!!error.grade" flat :hide-details="!error.grade"
                          v-model="userData.grade" solo
                          placeholder="پایه تحصیلی"
                          :items="['دهم','یازدهم']" name="grade">
                </v-select>
              </v-col>
              <v-col cols="12" md="6">

                <date-picker v-model="error.birth_date" placeholder="تاریخ تولد"></date-picker>

              </v-col>
            </v-row>
          </div>

          <div :key="1" v-else-if="state === 1">

            <v-row>
              <v-col cols="12" md="6">

                <v-select :error-messages="error.providence" :error="!!error.providence" flat
                          :hide-details="!error.providence" v-model="userData.providence"
                          solo
                          placeholder="استان"
                          :items="providences" item-text="name" item-value="id" name="providence">
                </v-select>
              </v-col>
              <v-col cols="12" md="6">
                <v-select :error-messages="error.city" :error="!!error.city" v-model="userData.city" solo flat
                          :hide-details="!error.city"
                          placeholder="شهر"
                          :items="getCity"
                          item-text="name" name="city">
                </v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field solo flat :hide-details="!error.address" :error-messages="error.address"
                              :error="!!error.address" name="address"
                              v-model="userData.address"
                              placeholder="آدرس"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field solo flat :hide-details="!error.post_code" :error-messages="error.post_code"
                              :error="!!error.post_code" name="post_code"
                              v-model="userData.post_code"
                              placeholder="کد پستی"/>
              </v-col>
            </v-row>
          </div>

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

        </Transition>
        <div style="display: flex; justify-content: space-between; margin-top: 100px">
          <v-btn :disabled="!state" v-on:click="()=>{(!state)?0: state--}">قبلی</v-btn>
          <v-btn v-on:click="(state===2)? logInUser(userData) : state++">بعدی</v-btn>
          <input type="submit" hidden>
        </div>
      </v-form>
    </div>
    <div class="image">
      <img src="~/assets/images/register_image.svg">
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
      userData: {birth_date: '2005-01-01'},
      error: {},
      sending: false,
      state: 0

    }
  },
  computed: {
    passwordType: function () {
      return (this.$data.passwordShow) ? 'text' : 'password';
    },
    getCity() {
      return this.cities.filter((city) =>
        city.province_id === (this.$data.userData.providence) ? this.$data.userData.providence : 0
      )
    }
  },
  methods: {
    showPassword() {
      this.$data.passwordShow = !this.$data.passwordShow
    },
    submit() {
      console.log(JSON.parse(JSON.stringify(this.userData)))
      logInUser(JSON.parse(JSON.stringify(this.userData)))
    },
    async logInUser(userData) {
      if (this.$data.sending)
        return
      this.$data.sending = true
      this.$nuxt.$loading.start()

      try {
        await this.$auth.loginWith('register', {
          data: {
            ...userData,
            // providence: this.providences.filter((providence) => providence.id === userData.providence)[0].name
          },
        })
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'با موفقیت وارد شدید',
          text: 'الان به صفحه پروفایلتان منتقل می شوید'
        });

      } catch (error) {
        let text = ''
        if (error.response !== undefined) {
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
          this.state = 0

        }
      }
      this.$nuxt.$loading.finish()

    },
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

}

.bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
  cursor: pointer;

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
  position: relative;
  transform: translateY(-20px);

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
