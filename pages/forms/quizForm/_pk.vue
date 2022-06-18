<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="bigDiv">
            <v-row> <!-- TIMER block -->
              <v-col align="center" style="margin-top: 2rem">
                <v-card class="timer" align="center">
                  <div class="mainText">زمان باقی مانده:
                    <div style="display: inline" class="innerText"><span style="display: inline" v-if="sec<10"
                                                                         class="innerText">0</span>{{ sec }} : {{ min }}
                    </div>
                  </div>
                </v-card>
                <!--                <span v-if="sec<10" class="innerText"> 0 </span>-->
              </v-col>
            </v-row>
            <v-row v-for="q in question"> <!-- Question model Block -->
              <v-col> <!-- TODO INSERT v-for here -->
                <v-sheet class="question" color="#C5E3E3">
                  <v-row>  <!-- question text block -->
                    <v-col>
                      <p class="quesText">{{ q.text }}</p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- answers block -->
                    <v-col>
                      <v-radio-group

                        row
                        dense
                        style="margin-top: -1rem;"
                      >
                        <v-radio @change="changeAnswer(o,q)" v-for="o in q.option"
                                 class="text--style"
                                 :label="o.text"
                                 :value="o.pk"
                                 color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="6" md="2">
                <v-btn class="button-fill" @click="setTime(true)">اتمام آزمون</v-btn>
              </v-col>
            </v-row>

          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "quizForm",

  data() {
    return {
      force_end: false,
      answers: {},
      answersSubmit: {},
      t: setTimeout(() => {
      }, 1000)


    }
  },

  async asyncData({$axios, params}) {
    let data = await $axios.$get('/quiz/' + params.pk + '/')
    data.timerCount = Math.floor(new Date(data.end) / 1000 - (new Date() / 1000))
    return data

  },
  computed: {
    sec() {
      return this.timerCount % 60
    },
    min() {
      return Math.floor(this.timerCount / 60)
    }
  },
  methods: {
    async setTime(forceEnd = false) {
      this.timerCount = Math.floor(new Date(this.end) / 1000 - new Date() / 1000)

      let t = this
      if (forceEnd || this.force_end || this.timerCount <= 0) {
        if (this.force_end)
          return
        this.force_end = true
        this.$nuxt.$loading.start()
        clearTimeout(this.t)
        await this.submitAnswer()
        try {
          let res = await this.$axios.$get(`/quiz/${this.pk}/get-score/`)
          t.$router.push('/account/quiz')

          t.$notify({
            group: 'foo',
            type: 'success',

            title: `نمره شما از این کوییز: ${res.score}`,
          });
          t.$nuxt.$loading.finish()
        } catch (error) {
          t.$notify({
            group: 'foo',
            type: 'error',

            title: error.response.data.detail,
          });
        }


      } else {
        setTimeout(this.setTime.bind(this), 1000)
      }

    },
    async submitAnswer() {
      let t = this
      for (const [key, o] of Object.entries(this.answers)) {
        if (this.answersSubmit[key] !== o) {
          try {
            let res = await this.$axios.$post('/quiz/answer/', {quiz: t.pk, option: o.pk})
            t.$notify({
              group: 'foo',
              type: 'success',

              title: 'جواب شما ثبت شد',
            })
            this.answersSubmit[key] = o
          } catch {
            t.$notify({
              group: 'foo',
              type: 'error',

              title: 'مشکلی در ثبت جواب پیش آمد',
            })
          }
        }

      }


    }
    ,
    changeAnswer(o, q) {
      clearTimeout(this.t)
      this.answers[q.pk] = o

      this.t = setTimeout(this.submitAnswer.bind(this), 1000)
    }
  },
  mounted() {
    setTimeout(this.setTime.bind(this), 1000)
  }
}
</script>

<style scoped>
.timer {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
  border-radius: 15px;
  width: 20%;
}

.bigDiv {
  background: #C5E3E3;
  /* sabz-bar */

  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD;
  border-radius: 10px;
}

.mainText {
  color: #004948;
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;


}

.innerText {
  font-weight: 900 !important;
}

.question {
  border: 2px solid #004948 !important;
  border-radius: 10px;
  margin-right: 5em;
  margin-bottom: 2em;
  margin-left: 5em;
}

.quesText {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: right;
  color: #004948;
  margin-right: 2rem;
}

.text--style /deep/ label {
  color: #004948;
  font-weight: 500;
  font-size: 14px;
}

</style>
