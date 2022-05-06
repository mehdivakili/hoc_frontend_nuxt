<template>
  <div class="bigDiv">
    <v-row class="alertCol">
      <v-col cols="6" >
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
                   <p style="margin-right: 2em;">تا چه اندازه با علوم کامپیوتر(به طور ویژه، برنامه نویسی) آشنایی دارید؟ </p>
                 </v-col>
                 <v-col>
                   <v-radio-group
                     v-model="row"
                     row
                     dense
                     style="margin-top: -2px;"

                   >
                     <v-radio
                       label="خوب"
                       value="radio-1"
                       color="#004948"
                     ></v-radio>
                     <v-radio
                       label="متوسط"
                       value="radio-2"
                       color="#004948"
                     ></v-radio>
                     <v-radio
                       label="کم"
                       value="radio-3"
                       color="#004948"
                     ></v-radio>
                     <v-radio
                       label="آشنایی ندارم"
                       value="radio-4"
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

              </v-sheet>
            </v-col>
            <v-col cols="12">
              <v-sheet
                color="#C5E3E3"
                outlined
                class="Sheets"

              >

              </v-sheet>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "form",
  data () {
    return {

      row: null,
    }
  },
}
</script>

<style scoped>
.alertCol {
  margin-right:50px ;
  margin-top:20px;
}

.bigDiv {
  background-color: #C5E3E3;
}

.questionCard {
  background-color: #C5E3E3;
  margin-right: 50px;
  margin-left:50px;
}

.cardT {
  color:#004948;
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
