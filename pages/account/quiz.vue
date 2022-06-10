<template>

  <div>
    <v-container >
      <v-row>
        <v-col class="user-info-container" align="center">
          <v-row>  <!-- title -->
            <v-col>
              <div >
                <h2>
                  <v-icon color="#004948">mdi-clipboard-list-outline</v-icon>
                  کوییز
                  <v-icon color="#004948">mdi-clipboard-list-outline</v-icon>

                </h2>
              </div>
            </v-col>
          </v-row>
          <hr>
          <v-card class="mainCard">
            <v-row>
              <v-col>
                <v-card class="cardShape" style="margin-left: 2rem; margin-right: 2rem;margin-top: 2rem;margin-bottom: 2rem">
                  <v-row> <!-- 1 -->
                    <v-col>
                      <p class="mainText">نوع کوییز: <span class="innerText">کوییز پیش فرض</span></p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- 2 -->
                    <v-col>
                      <p style="margin-top: -2rem" class="mainText">زمان کوییز:  <span class="innerText">۵ دقیقه</span></p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- 3 -->
                    <v-col>
                      <p style="margin-top: -2rem" class="mainText">تعداد سوالات:  <span class="innerText">۵ سوال</span></p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- 4 -->
                    <v-col>
                      <p style="margin-top: -2rem" class="mainText">نوع سوالات:  <span class="innerText">تستی</span></p>
                    </v-col>
                  </v-row>
                  <v-row> <!-- 5 -->
                    <v-col>
                      <p style="margin-top: -2rem" class="mainText">نوع کوییز: <span class="innerText">کوییز پیش فرض</span></p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-btn class="edit_btn" @click="participate" style="margin-top: -2rem">شرکت در کوییز</v-btn>
                    </v-col>
                  </v-row>
                </v-card>
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
  name: "quiz",
  data(){
    return{

    }
  },
  methods:{
    participate(){
      this.$router.push('/forms/quizForm')
    }
  }
}
</script>

<style scoped>
.user-info-container{
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
}
hr{
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
}
h2{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 40px 0;
  word-break: keep-all;
  color: #004948;
}
.cardShape {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
  border-radius: 15px;
  padding-top: 2em;
  padding-bottom: 2em;

}
.mainCard{
  background: #C5E3E3;
  /* sabz-bar */

  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD;
  border-radius: 15px;
}
.mainText{
  color: #004948;
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
}
.innerText{
  font-weight: 900 !important;
}
.edit_btn {
  box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
  filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
  background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
  border-radius: 15px;
  padding: 10px 15px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #FEFEFE;
  margin-top: 20px;
}
</style>
