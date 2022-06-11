<template>
  <div>
    <v-container class="user-info-container">
      <v-row>
        <v-col>
          <h2>
            <v-icon color="#004948">
              mdi-gift-outline
            </v-icon>
            اطلاعات حساب کاربری
            <v-icon color="#004948">
              mdi-gift-outline
            </v-icon>
          </h2>
        </v-col>
      </v-row>
      <hr>
      <v-row>
        <v-col>
          <v-card elevation="6" class="maincard">
            <v-row>
              <v-col>
                <v-card class="cardShape" style="margin-left: 3em;margin-right: 3em;margin-top: 2em">
                  <v-row>
                    <v-col>
                      <div class="code">کد معرف شما:</div>
                    </v-col>
                    <v-col>

                      <div class="codeNumber">{{ id_code }}</div>

                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row style="margin-left: 3em;margin-right: 3em; margin-bottom: 1em;margin-top: 2em;">

              <v-col style="margin-bottom: 3em">
                <v-card class="cardShape">
                  <v-row>
                    <v-col cols="12" class="fonts1">
                      امتیاز
                    </v-col>
                    <v-col cols="12" class="fonts2">
                      {{ total_score }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="cardShape">
                  <v-row>
                    <v-col cols="12" class="fonts1">
                      رتبه
                    </v-col>
                    <v-col cols="12" class="fonts2">
                      {{ rank }}
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="cardShape">
                  <v-row>
                    <v-col cols="12" class="fonts1">
                      شانس
                    </v-col>
                    <v-col cols="12" class="fonts2">
                      {{ total_score }}

                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col>
                <v-card class="cardShape">
                  <v-row>
                    <v-col cols="12" class="fonts1">
                      Quiz
                      Coin
                    </v-col>
                    <v-col cols="12" class="fonts2">
                      0
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="user-info-container">
      <v-row>
        <v-col>
          <h2>
            <v-icon color="#004948">
              mdi-gift-outline
            </v-icon>
            جدول امتیازات
            <v-icon color="#004948">
              mdi-gift-outline
            </v-icon>
          </h2>
        </v-col>
      </v-row>
      <hr>
      <v-card class="hocclubtable">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="جستجو"
            single-line
            hide-details

          ></v-text-field>
        </v-card-title>
        <v-container>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          ></v-data-table>
        </v-container>
      </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  data(){
    return{
      search: '' ,
      headers: [
        { text: 'رتبه', value: 'rank' , align: 'center'},
        { text: 'نام', value: 'name', align: 'center' },
        { text: 'امتیاز', value: 'score', align: 'center' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          rank: 1,
          score: 100
        },
        {
          name: 'Ice cream sandwich',
          rank: 1,
          score: 100
        },
        {
          name: 'Eclair',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Gingerbread',
          rank: 1,
          score: 100
        },
        {
          name: 'Jelly bean',
          rank: 1,
          score: 100
        },
        {
          name: 'Lollipop',
          rank: 1,
          score: 100
        },
        {
          name: 'Honeycomb',
          rank: 1,
          score: 100
        },
        {
          name: 'Donut',
          rank: 1,
          score: 100
        },
        {
          name: 'KitKat',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },
        {
          name: 'Cupcake',
          rank: 1,
          score: 100
        },

      ],
    }
  },
  async asyncData({$axios}) {
    return $axios.$get('/hoc_club/data/')
  }

}
</script>

<style scoped>
.user-info-container {
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 50px;
}

h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin: 20px 0 40px 0;
  color: #004948;
}

hr {
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;

}

.maincard {
  background: #C5E3E3;

  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD !important;
  border-radius: 15px;
}

.cardShape {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
  border-radius: 15px;
  padding-top: 2em;
  padding-bottom: 2em;

}

.code {
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 94% */

  text-align: center;

  color: #004948;
}

.codeNumber {
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 30px;
  /* identical to box height, or 62% */

  text-align: center;

  color: #00928F;

}

.fonts1 {
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 900;
  font-size: 28px;
  line-height: 30px;
  /* identical to box height, or 94% */

  text-align: center;

  color: #004948;
}

.fonts2 {
  font-family: 'Vazir';
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  line-height: 30px;
  /* identical to box height, or 62% */

  text-align: center;

  color: #00928F;
}

.hocclubtable {
  background-color: #C5E3E3;
}



@media screen  and (max-width: 420px) {
  hr {
    min-width: 200px;

  }
}
</style>

<style>
tr, th, td{
  border: 1px solid #004948 !important;
  background-color: #99bdbb !important;
  font-size: 20px !important;
  text-align: center !important;
}

.v-data-footer{
  background-color: #C5E3E3;
}

</style>
