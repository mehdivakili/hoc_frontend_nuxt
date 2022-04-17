<template>
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

</template>

<script>
export default {
  name: "user_address",
  data() {
    return {
      userData: {...this.$store.state.register.userData},
    }
  },
  computed: {
    error() {
      return this.$store.state.register.error
    },
    getCity() {
      return this.cities.filter((city) =>
        city.province_id === (this.$data.userData.providence) ? this.$data.userData.providence : 0
      )
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
