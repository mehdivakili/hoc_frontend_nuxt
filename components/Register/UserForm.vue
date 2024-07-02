<template>
  <div>
    <v-row justify="center" class="topRow">
      <v-col cols="3"> </v-col>
      <v-col
        cols="6"
        style="
          font-family: 'Vazir';
          font-style: normal;
          font-weight: 700;
          font-size: 0.8em;
          line-height: 25px;
          color: #004948;
        "
      >
        <h4>عکس شرکت کننده:</h4>
        <span>
          توجه کنید که این تصویر به عنوان تصویر پروفایل شما و در طول همایش نیز
          تصویری برای شناسایی شما خواهد بود پس از تصویر مناسب و مطابق با شئونات
          استفاده کنید.
        </span>

        <v-form method="POST" @submit.prevent="nextPage" ref="form">
          <v-file-input
            class="inputField"
            accept=".jpeg,.jpg,.png,image/jpeg,image/png"
            v-model="file"
            :rules="rules"
            hide-details="auto"
            :error-messages="error.vaccine ? error.vaccine.vaccine_image : ''"
            :error="!!error.vaccine"
            show-size
          ></v-file-input>
        </v-form>
      </v-col>
      <v-col cols="3"> </v-col>
    </v-row>
    <v-row justify="center" class="botRow">
      <div class="con">
        <p
          style="
            text-align: center;
            color: #004948;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 40px;
          "
        >
          برای ادامه ثبت نام حتما<br />
          در پرسشنامه شرکت کنید.
        </p>
        <div
          style="
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          "
        >
          <v-btn
            @click="nextPage"
            class="button-fill go-to-form-btn"
            style="width: 70%; margin-right: 2.5em; margin-bottom: 2em"
            >ورود به پرسشنامه
          </v-btn>
        </div>
      </div>
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
        (v) => !!v || "آپلود عکس پروفایل الزامی است",
        (v) => (v && v.size > 0) || "آپلود عکس پروفایل الزامی است",
      ],
    };
  },
  computed: {
    error() {
      return this.$store.state.register.error;
    },
  },
  methods: {
    nextPage() {
      if (this.$refs.form.validate()) this.$router.push("/register/form/");
    },
  },
  watch: {
    file: {
      handler(val, oldVal) {
        this.$store.commit("register/setVaccine", val);
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
.con {
  margin-top: 100px;
  max-width: 300px;
  background: #c7e4e4;
  border-radius: 10px;
  box-shadow: -18px -18px 30px #e0f0f0, 18px 18px 30px #98cdcd;
  padding-top: 30px;
  padding-bottom: 10px;
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

.go-to-form-btn {
  transform: scale(1.2);
  border-radius: 12px;
  margin-right: 0px !important;
}
</style>
