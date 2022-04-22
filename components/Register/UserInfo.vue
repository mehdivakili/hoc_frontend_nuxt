<template>
  <div>
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

        <date-picker v-model="userData.birth_date" placeholder="تاریخ تولد"></date-picker>

      </v-col>
      <v-col cols="12" md="6">

        <v-file-input
          accept="image/*"
          label="عکس کارت واکسن"
          solo flat
          prepend-icon=""

        ></v-file-input>
      </v-col>
    </v-row>
  </div>

</template>

<script>
export default {
  name: "user_info",
  data() {
    return {
      userData: {...this.$store.state.register.userData},
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
  }
}
</script>

<style scoped>

</style>
