<template>
  <v-form ref="form">
    <div class="bigDiv">
      <v-row>
        <v-col cols="12">
          <v-container elevation="10" outlined class="questionCard">
            <v-card-title class="cardT" style="" v-if="isDormAllowed">
              اطلاعات محل سکونت
            </v-card-title>

            <v-row v-if="isDormAllowed">
              <v-col cols="12">
                <v-sheet color="#C5E3E3" outlined class="Sheets">
                  <v-row>
                    <v-col cols="12" md="6">
                      <p class="q-text">متقاضی دریافت خوابگاه هستم.</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q4"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="بله"
                          value="بله"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="خیر"
                          value="خیر"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <p class="q-text">نام شهر محل سکونت خود را بنویسید.</p>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        solo
                        name="q4_text_area"
                        :rules="rules"
                        label="اینجا بنویسید . . ."
                        class="text-area"
                        style="margin-top: -1.5em; border-radius: 10px"
                        clearable
                        v-model="q4_text"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>

            <v-row class="alertCol">
              <v-col cols="12" md="6">
                <v-alert type="info" color="grey" style="width: 30em">
                  صادقانه جواب بدین چون جواب درست یا غلطی وجود نداره!
                </v-alert>
              </v-col>
            </v-row>
            <v-card-title class="cardT" style="">
              میزان آشنایی با برنامه نویسی
            </v-card-title>
            <v-row>
              <v-col cols="12">
                <v-sheet color="#C5E3E3" outlined class="Sheets">
                  <v-row>
                    <v-col cols="12" md="6">
                      <p class="q-text">
                        تا چه اندازه با علوم کامپیوتر(به طور ویژه، برنامه نویسی)
                        آشنایی دارید؟
                      </p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q1"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="خوب"
                          value="خوب"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="متوسط"
                          value="متوسط"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="کم"
                          value="کم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="آشنایی ندارم"
                          value="آشنایی ندارم"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
              <v-col cols="12">
                <v-sheet color="#C5E3E3" outlined class="Sheets">
                  <v-row>
                    <v-col cols="12" md="6">
                      <p class="q-text">تا به حال برنامه نویسی کردید؟</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q2"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="بله"
                          value="بله"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="خیر"
                          value="خیر"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q2 === 'بله'">
                    <v-col cols="12">
                      <p class="q-text">
                        با چه زبون هایی؟ از چه طریقی یاد گرفتید؟
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        solo
                        name="q2_text_area"
                        :rules="rules"
                        label="اینجا بنویسید . . ."
                        class="text-area"
                        style="margin-top: -1.5em; border-radius: 10px"
                        clearable
                        v-model="q2_text"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
              <v-col cols="12">
                <v-sheet color="#C5E3E3" outlined class="Sheets">
                  <v-row>
                    <v-col cols="12" md="6">
                      <p class="q-text">در دوره های قبلی hoc شرکت کردید؟</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q3_1"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="بله"
                          value="بله"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="خیر"
                          value="خیر"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1 === 'بله'">
                    <v-col cols="12" md="6">
                      <p class="q-text">کدام دوره؟</p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q3_2"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="اول"
                          value="اول"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="دوم"
                          value="دوم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="سوم"
                          value="سوم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="چهارم"
                          value="چهارم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="پنجم"
                          value="پنجم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="ششم"
                          value="ششم"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1 === 'بله'">
                    <v-col cols="12" md="6">
                      <p class="q-text">
                        تا چه اندازه از حضور در همایش رضایت داشتید؟
                      </p>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-radio-group
                        v-model="q3_3"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px"
                      >
                        <v-radio
                          label="زیاد"
                          value="زیاد"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="متوسط"
                          value="متوسط"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="کم"
                          value="کم"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="راضی نبودم"
                          value="راضی نبودم"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1 === 'بله'">
                    <v-col cols="12">
                      <p class="q-text">چرا؟</p>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        :rules="rules"
                        solo
                        name="q3_text_area"
                        label="اینجا بنویسید . . ."
                        class="text-area"
                        style="margin-top: -1.5em; border-radius: 10px"
                        clearable
                        v-model="q3_text"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="2">
                <v-btn style="" class="button-fill" @click="goToNextPage"
                  >ثبت پرسشنامه و ادامه
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      q1: null,
      q2: null,
      q2_text: null,
      q3_1: null,
      q3_2: null,
      q3_3: null,
      q3_text: null,
      q4: null,
      q4_text: null,
      rules: [(v) => !!v || "این مقدار لازم است"],
    };
  },
  methods: {
    goToNextPage() {
      if (!this.$refs.form.validate()) return;
      let d = { ...this.$data };
      delete d.rules;

      this.$store.commit(
        "register/setState",
        this.$store.state.register.state + 1
      );
      this.$store.commit("register/setUserData", {
        ...this.$store.state.register.userData,
        form: { answer: JSON.stringify(d) },
      });
      this.$router.push("/register/");
    },
  },
  computed: {
    isDormAllowed() {
      return ["هفتم", "هشتم", "نهم", "دهم", "یازدهم", "دوازدهم"].includes(
        this.$store.state.register.userData.grade
      );
    },
  },
  mounted() {
    this.$store.commit("setFooterColor", "#C5E3E3");
  },
};
</script>

<style scoped lang="scss">
.bigDiv {
  background-color: #c5e3e3;
}

.questionCard {
  background-color: #c5e3e3;
}

.cardT {
  position: relative;
  color: #004948;
  font-family: "Vazir";
  font-style: normal;
  font-weight: 700;
  &::after {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #004948;
    content: "";
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.Sheets {
  border: 2px solid #004948 !important;
}

.q-text {
  margin-right: 20px;
}

.text-area {
  margin-left: 20px;
  margin-right: 20px;
}

@media screen and (min-width: 1000px) {
  .alertCol {
    margin-right: 20px;
    margin-top: 20px;
  }

  .questionCard {
    margin-top: 4em;
    margin-bottom: 4em;
    border-radius: 36px;
    box-shadow: -18px -18px 30px #e0f0f0, 18px 18px 30px #98cdcd !important;
  }

  .Sheets {
    border-radius: 10px;
    margin-right: 100px;
    margin-left: 100px;
  }

  .cardT {
    margin-right: 2em;
  }

  .q-text {
    margin-right: 2em;
  }

  .text-area {
    margin-left: 2em;
    margin-right: 2em;
  }
}
</style>
