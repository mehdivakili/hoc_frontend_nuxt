<template>
  <div>
    <v-row v-show="is_register">
      <v-col cols="12">
        <v-alert
          outlined
          type="warning"
          prominent

        >
          لطفا موارد زیر را به صورت دقیق تکمیل کنید، از این اطلاعات در جهت ارتباط با شما استفاده خواهد شد. همایش به صورت
          حضوری و مخصوص دانش آموزان شهر شیراز است.
        </v-alert>
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
        <v-text-field dir="ltr" solo flat :hide-details="!error.first_name" :error-messages="error.first_name"
                      :error="!!error.first_name"
                      name="first_name" v-model="userData.first_name"
                      placeholder="Name (english)"/>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field dir="ltr" solo flat :hide-details="!error.last_name" :error-messages="error.last_name"
                      :error="!!error.last_name"
                      name="last_name"
                      v-model="userData.last_name"
                      placeholder="Last Name (english)"/>
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

        <date-picker v-model="userData.birth_date" placeholder="تاریخ تولد"></date-picker>

      </v-col>
<!--      <v-col cols="12" md="6">-->
<!--        <v-text-field solo flat :hide-details="!error.vaccine_code"-->
<!--                      :error-messages="error.vaccine_code" :error="!!error.vaccine_code"-->
<!--                      name="vaccine_code"-->
<!--                      v-model="userData.vaccine_code"-->
<!--                      placeholder="کد کارت واکسن"/>-->
<!--      </v-col>-->
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field solo flat type="number" :hide-details="!error.phone_number"
                      :error-messages="error.phone_number"
                      :error="!!error.phone_number"
                      name="phone_number"
                      v-model="userData.phone_number"
                      placeholder="شماره همراه دانش آموز (دارای واتساپ)"/>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field solo flat type="number" :hide-details="!error.parent_phone_number"
                      :error-messages="error.parent_phone_number" :error="!!error.parent_phone_number"
                      name="parent_phone_number"
                      v-model="userData.parent_phone_number"
                      placeholder="شماره ضروری"/>
      </v-col>
    </v-row>
    <v-row>
<!--      <v-col cols="12" md="6">-->
<!--        <v-text-field solo flat type="number" :hide-details="!error.home_phone_number"-->
<!--                      :error-messages="error.home_phone_number" :error="!!error.home_phone_number"-->
<!--                      name="home_phone_number"-->
<!--                      v-model="userData.home_phone_number"-->
<!--                      placeholder="تلفن ثابت"/>-->
<!--      </v-col>-->
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-select :error-messages="error.grade" :error="!!error.grade" :hide-details="!error.grade"
                      v-model="userData.grade" solo flat
                      placeholder="پایه تحصیلی"
                      :items="['هفتم','هشتم','نهم','دهم','یازدهم','دوازدهم']" name="grade">
        </v-select>
      </v-col>
      <v-col cols="12" md="6">
        <v-text-field solo flat type="number" step="0.01" :hide-details="!error.before_grade_score"
                      :error-messages="error.before_grade_score" :error="!!error.before_grade_score"
                      name="before_grade_score"
                      v-model="userData.before_grade_score"
                      placeholder="معدل پایه تحصیلی مرحله قبل"/>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <v-text-field solo flat :hide-details="!error.school_name"
                      :error-messages="error.school_name"
                      :error="!!error.school_name"
                      name="school_name"
                      v-model="userData.school_name"
                      placeholder="نام مدرسه"/>
      </v-col>
      <v-col cols="12" md="6">

        <v-text-field solo flat :hide-details="!error.aria"
                      :error-messages="error.aria" :error="!!error.aria"
                      name="aria"
                      v-model="userData.aria"
                      placeholder="ناحیه"/>
      </v-col>
    </v-row>
    <div v-show="is_register"
         style="display: flex; flex-direction: row-reverse; justify-content: space-between; margin-top: 100px">
      <v-btn class="button-fill" v-on:click="goToNextPage()">مرحله بعد</v-btn>
    </div>
  </div>

</template>

<script>
export default {
  name: "user_info",
  data() {
    return {
      userData: (this.$auth.loggedIn) ? {...this.$auth.user} : {...this.$store.state.register.userData},
    }
  },
  methods: {
    async goToNextPage() {
      this.$store.commit('register/setState', this.$store.state.register.state + 1)
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
