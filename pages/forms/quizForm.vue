<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" >
          <v-card class="bigDiv">
            <v-row> <!-- TIMER block -->
              <v-col align="center" style="margin-top: 2rem">
                <v-card class="timer"  align="center">
                  <div class="mainText">زمان باقی مانده:
                      <div style="display: inline" class="innerText"><span style="display: inline" v-if="sec<10" class="innerText">0</span>{{sec}} : {{ min }}</div>
                  </div>
                </v-card>
<!--                <span v-if="sec<10" class="innerText"> 0 </span>-->
              </v-col>
            </v-row>
            <v-row> <!-- Question model Block -->
              <v-col> <!-- TODO INSERT v-for here -->
                <v-sheet class="question" color="#C5E3E3" >
                  <v-row>  <!-- question text block -->
                    <v-col >
                      <p class="quesText">۱- پدر کامپیوتر لقب کیست ؟</p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- answers block -->
                    <v-col>
                      <v-radio-group

                        row
                        dense
                        style="margin-top: -1rem;"
                      >
                        <v-radio
                          class="text--style"
                          label="خوب"
                          value=" "
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          class="text--style"
                          label="متوسط"
                          value="  "
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          class="text--style"
                          label="کم"
                          value= "   "
                          color="#004948"
                        ></v-radio>
                        <v-radio
                          class="text--style"
                          label="آشنایی ندارم"
                          value="    "
                          color="#004948"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>
                </v-sheet>
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
  data(){
    return{

      timerCount : 300,
      min:0,
      sec:14,
    }
  },
  method: {

  },
  created() {

  },
  watch: {

    timerCount: {
      handler(value) {

        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
            this.sec--;
            if(this.sec === 0 ){
              if(this.min ===0){
                this.min = 0;
                this.$router.push('/account/quiz') //TODO Send Exam result here for backend
              }
              else{
                this.min --;
                this.sec = 59;
              }

            }
          }, 1000);
        }

      },
      immediate: true // This ensures the watcher is triggered upon creation
    }

  }
}
</script>

<style scoped>
  .timer{
    background: #C5E3E3;
    box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
    border-radius: 15px;
    width: 20%;
  }
  .bigDiv{
    background: #C5E3E3;
    /* sabz-bar */

    box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD;
    border-radius: 10px;
  }
  .mainText{
    color: #004948;
    font-family: 'Vazir';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;


  }
  .innerText{
    font-weight: 900 !important;
  }
  .question{
    border: 2px solid #004948 !important;
    border-radius: 10px;
    margin-right: 5em;
    margin-bottom: 2em;
    margin-left: 5em;
  }
  .quesText{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: right;
    color: #004948;
    margin-right: 2rem;
  }
.text--style  /deep/ label{
  color: #004948;
  font-weight: 500;
  font-size: 14px;
}

</style>
