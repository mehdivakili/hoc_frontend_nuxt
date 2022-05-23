<template>
  <v-form ref="form">
    <!--    <v-row justify="center" class="alertCol">-->
    <!--      <v-col cols="6">-->
    <!--        <v-alert-->

    <!--          type="info"-->
    <!--          style="width:30em"-->
    <!--        >-->
    <!--          صادقانه جواب بدین چون جواب درست یا غلطی وجود نداره!-->


    <!--        </v-alert>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field :rules="phone_rules" solo flat type="number" hide-details="auto"
                      :error-messages="error.phone_number"
                      :error="!!error.phone_number"
                      name="phone_number"
                      v-model="userData.phone_number"
                      placeholder="شماره همراه دانش آموز (دارای واتساپ)">
          <template #label>
            شماره همراه دانش آموز (دارای واتساپ) <span style="color: red"><strong>* </strong></span>
          </template>
        </v-text-field>
      </v-col>
      <v-col cols="4" md="2">

        <v-btn @click="send_verify_code" class="button-fill">ارسال کد تاييد</v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" v-if="is_send">
      <v-col cols="12" md="6">
        <vue-otp-input dir="ltr"
                       ref="otpInput"
                       input-classes="otp-input"
                       separator="&nbsp;"
                       :num-inputs="5"
                       :is-input-num="true"
                       @on-change="(value) => {userData.verify_code = value}"
        />
      </v-col>
      <v-col cols="4" md="2">

        <v-btn @click="verify_code" class="button-fill">تاييد کد</v-btn>
      </v-col>
      <!--      <v-col cols="12" md="6">-->
      <!--        <v-text-field :rules="rules" solo flat type="number" :hide-details="!error.home_phone_number"-->
      <!--                      :error-messages="error.home_phone_number" :error="!!error.home_phone_number"-->
      <!--                      name="home_phone_number"-->
      <!--                      v-model="userData.home_phone_number"-->
      <!--                      placeholder="تلفن ثابت"
                <template #label>
            ناحیه<span  style="color: red"><strong>* </strong></span>
          </template>
        ><v-text-field/-->
      <!--      </v-col>-->
    </v-row>
  </v-form>

</template>

<script>
import Form from "@/pages/register/form";

export default {
  name: "user_info",
  components: {Form},
  data() {
    return {
      is_send: false,
      userData: (this.$auth.loggedIn) ? {...this.$auth.user} : {...this.$store.state.register.userData},
      rules: [
        v => !!v || "این مقدار لازم است"
      ],
      score_rules: [
        v => !!v || "این مقدار لازم است",
        v => (v >= 0 && v <= 20) || "این مقدار باید بین 0 و 20 باشد"
      ],
      phone_rules: [
        v => !!v || "این مقدار لازم است",
        v => (!!v && v.length === 11) || "شماره وارد شده باید 11 رقمی باشد"
      ],
      id_code_rules: [
        v => !!v || "این مقدار لازم است",
        v => (!!v && v.length === 10) || "کد ملی وارد شده باید 10 رقمی باشد"
      ]
    }
  },
  methods: {
    async goToNextPage() {
      if (this.$refs.form.validate())
        this.$store.commit('register/setState', this.$store.state.register.state + 1)
    },
    async send_verify_code() {
      try {
        this.$nuxt.$loading.start()
        let res = await this.$axios.$post('phone_number_verify/send_token', this.userData)
        this.is_send = true
      } catch (e) {
        if (e.response.data.phone_number[0] === "این شماره از قبل موجود است") {
          this.goToNextPage()
        } else {
          this.error = e.response.data
        }
      }
      this.$nuxt.$loading.finish()


    },
    async verify_code() {
      this.$nuxt.$loading.start()

      try {
        let res = await this.$axios.$post('phone_number_verify/verify_token', this.userData)
        this.goToNextPage()
      } catch (e) {
        this.error = e.response.data
      }
      this.$nuxt.$loading.finish()

    }
  },
  computed: {
    error() {
      return this.$store.state.register.error
    },
    state: {
      get() {
        return this.$store.state.register.state
      },
      set(data) {
        return this.$store.commit('register/setState', data)
      }
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
  props: {
    is_register: {default: true}
  }
}
</script>

<style lang="scss">
.vpd-input-group {
  background: white !important;
  height: 48px !important;
  border-radius: 15px !important;

}

.vpd-icon-btn {
  border-radius: 0 5px 5px 0;
}

.otp-input {
  width: 100%;
  height: 100%;
  padding: 5px;
  font-size: 20px;
  border-radius: 4px;
  text-align: center;
  outline: none;
  background: white;

  &.error {
    border: 1px solid red !important;
  }
}


.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
