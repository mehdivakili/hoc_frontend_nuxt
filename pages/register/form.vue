<template>
  <v-form ref="form">
    <div class="bigDiv">
      <v-row class="alertCol">
        <v-col cols="6">
          <v-alert

            type="info"
            color="grey"
            style="width:30em"
          >
            صادقانه جواب بدین چون جواب درست یا غلطی وجود نداره!


          </v-alert>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card
            elevation="10"
            outlined
            class="questionCard"
          >
            <v-card-title class="cardT" style="">

              میزان آشنایی با برنامه نویسی

            </v-card-title>
            <v-row>
              <v-col cols="12">
                <v-sheet
                  color="#C5E3E3"
                  outlined
                  class="Sheets"

                >
                  <v-row>
                    <v-col>
                      <p style="margin-right: 2em;">تا چه اندازه با علوم کامپیوتر(به طور ویژه، برنامه نویسی) آشنایی
                        دارید؟ </p>
                    </v-col>
                    <v-col>
                      <v-radio-group
                        v-model="q1"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px;"

                      >
                        <v-radio
                          label="خوب"
                          value="high"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="متوسط"
                          value="normal"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="کم"
                          value="low"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="آشنایی ندارم"
                          value="zero"
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>

                </v-sheet>
              </v-col>
              <v-col cols="12">
                <v-sheet
                  color="#C5E3E3"
                  outlined
                  class="Sheets"

                >
                  <v-row>
                    <v-col>
                      <p style="margin-right: 2em;">تا به حال برنامه نویسی کردید؟ </p>
                    </v-col>
                    <v-col>
                      <v-radio-group
                        v-model="q2"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px;"

                      >
                        <v-radio
                          label="بله"
                          value="true"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="خیر"
                          value="false"
                          color="#004948"
                        ></v-radio>

                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q2=== 'true'">
                    <v-col cols="12">
                      <p style="margin-right: 2em;">با چه زبون هایی؟ از چه طریقی یاد گرفتید؟</p>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        solo
                        name="q2_text_area"
                        :rules="rules"
                        label="اینجا بنویسید . . ."
                        style="margin-right: 2em;margin-left: 2em;margin-top: -1.5em"
                        clearable
                        v-model="q2_text"
                      ></v-textarea>
                    </v-col>
                  </v-row>

                </v-sheet>
              </v-col>
              <v-col cols="12">
                <v-sheet
                  color="#C5E3E3"
                  outlined
                  class="Sheets"
                >
                  <v-row>
                    <v-col>
                      <p style="margin-right: 2em;">در دوره های قبلی hoc شرکت کردید؟</p>
                    </v-col>
                    <v-col>
                      <v-radio-group
                        v-model="q3_1"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px;"

                      >
                        <v-radio
                          label="بله"
                          value="true"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="خیر"
                          value="false"
                          color="#004948"
                        ></v-radio>

                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1 ==='true'">
                    <v-col>
                      <p style="margin-right: 2em;">کدام دوره؟</p>
                    </v-col>
                    <v-col>
                      <v-radio-group
                        v-model="q3_2"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px;"

                      >
                        <v-radio
                          label="اول"
                          value="first"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="دوم"
                          value="second"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="سوم"
                          value="third"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="چهارم"
                          value="forth"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="پنجم"
                          value="fifth"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="ششم"
                          value="sixth"
                          color="#004948"
                        ></v-radio>

                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1 ==='true'">
                    <v-col>
                      <p style="margin-right: 2em;">تا چه اندازه از حضور در همایش رضایت داشتید؟</p>
                    </v-col>
                    <v-col>
                      <v-radio-group
                        v-model="q3_3"
                        :rules="rules"
                        row
                        dense
                        style="margin-top: -2px;"

                      >
                        <v-radio
                          label="زیاد"
                          value="high1"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="متوسط"
                          value="normal1"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="کم"
                          value="low1"
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          label="راضی نبودم"
                          value="zero1"
                          color="#004948"
                        ></v-radio>

                      </v-radio-group>
                    </v-col>
                  </v-row>
                  <v-row v-if="q3_1=== 'true'">
                    <v-col cols="12">
                      <p style="margin-right: 2em;">چرا؟</p>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        :rules="rules"
                        solo
                        name="q3_text_area"
                        label="اینجا بنویسید . . ."
                        style="margin-right: 2em;margin-left: 2em;margin-top: -1.5em"
                        clearable
                        v-model="q3_text"
                      ></v-textarea>
                    </v-col>
                  </v-row>

                </v-sheet>
              </v-col>
          </v-row>
          <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2">
              <v-btn style="margin-bottom: 4em;margin-right: -4em;" to="" class="button-fill" @click="goToNextPage">ثبت پرسشنامه و ادامه
              </v-btn>
            </v-col>
            <v-col cols="5"></v-col>
          </v-row>
        </v-card>
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
      rules: [
        v => !!v || "این مقدار لازم است"
      ],
    }
  },
  methods: {
    goToNextPage() {
      if (!this.$refs.form.validate())
        return
      let d = {...this.$data}
      delete d.rules

      this.$store.commit('register/setState', this.$store.state.register.state + 1)
      this.$store.commit('register/setUserData', {
        ...this.$store.state.register.userData,
        form: {answer: JSON.stringify(d)}
      })
      this.$router.push('/register/')
    }
  },
  mounted() {
    this.$store.commit('setFooterColor', '#C5E3E3');
  }
}
</script>

<style scoped>
.alertCol {
  margin-right: 50px;
  margin-top: 20px;
}

.bigDiv {
  background-color: #C5E3E3;
}

.questionCard {
  background-color: #C5E3E3;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 4em;
}

.cardT {
  color: #004948;
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 700;
  margin-right: 2em;

}

.Sheets {
  border: 2px solid #004948 !important;
  border-radius: 10px;
  margin-right: 5em;
  margin-bottom: 2em;
  margin-left: 5em;
}
</style>
