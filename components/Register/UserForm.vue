<template>
  <div>
    <v-row justify="center" class="topRow">
      <v-col cols="3">

      </v-col>
      <v-col cols="6" style="font-family: 'Vazir';
                        font-style: normal;
                        font-weight: 700;
                        font-size: 0.80em;
                        line-height: 25px;
                        color: #004948;"
      >
        <p>عکس کارت واکسن:</p>
        <v-form ref="form">
          <v-file-input
            class="inputField"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            v-model="file"
            :rules="rules"
            hide-details="auto"
            :error-messages="(error.vaccine) ?error.vaccine.vaccine_image: ''"
            :error="!!error.vaccine"
            show-size
          ></v-file-input>
        </v-form>
      </v-col>
      <v-col cols="3">

      </v-col>


    </v-row>
    <v-row justify="center" class="botRow">

      <v-card outlined elevation="15" class="con">
        <v-card-text>

          <p style="text-align: center;color:#004948; font-weight: bold;">برای ادامه ثبت نام حتما<br/>
            در پرسشنامه شرکت کنید.</p>

        </v-card-text>


        <v-btn @click="nextPage" class="button-fill" style="width: 70%;margin-right: 2.5em;margin-bottom: 2em">ورود
          به پرسشنامه
        </v-btn>


      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      file: null,
      rules: [
        v => !!v || 'آپلود کارت واکسن لازم است',
        v => (v && v.size > 0) || 'آپلود کارت واکسن لازم است',
      ]
    }
  },
  computed: {
    error() {
      return this.$store.state.register.error
    },
  },
  methods: {
    nextPage() {
      if (this.$refs.form.validate())
        this.$router.push("/register/form/")
    }
  },
  watch: {
    file: {
      handler(val, oldVal) {
        this.$store.commit('register/setVaccine', val)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.con {
  margin-top: 100px;
  max-width: 300px;
  background: #C7E4E4;
  border-radius: 8px;

}

.inputField {
  direction: ltr !important;
}

.topRow {
  margin-bottom: -5em;
  margin-right: 3em;
}

.botRow {
  margin-right: 1em;
}
</style>
