<template>
  <div>
    <v-container class="user-info-container">
      <v-row>
        <v-col>
          <h2>
            <v-icon color="#004948">
              mdi-account
            </v-icon>
            اطلاعات حساب کاربری
            <v-icon color="#004948">
              mdi-account
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
                      Quiz
                      Coin
                    </v-col>
                    <v-col cols="12" class="fonts2">
                      {{ quiz_coin }}
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
            :item-class="get_me"
            :search="search"
          ></v-data-table>
        </v-container>
      </v-card>

    </v-container>
    <v-container class="user-info-container">
      <v-row>
        <v-col>
          <h2>
            <v-icon color="#004948">
              mdi-clipboard-text-clock-outline
            </v-icon>
            تاریخچه امتیازات
            <v-icon color="#004948">
              mdi-clipboard-text-clock-outline
            </v-icon>
          </h2>
        </v-col>
      </v-row>
      <hr>
      <v-card class="hocclubtable">
        <v-card-title>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="historySearch"
            append-icon="mdi-magnify"
            label="جستجو"
            single-line
            hide-details

          ></v-text-field>
        </v-card-title>
        <v-container>
          <v-data-table
            :headers="historyHeaders"
            :items="historyDesserts"
            :search="historySearch"
          ></v-data-table>
        </v-container>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import Vue from "vue"

export default {
  name: "ScoreBoard",
  data() {
    return {
      search: '',
      headers: [
        {text: 'رتبه', value: 'hoc_club_rank', align: 'center'},
        {text: 'نام', value: 'name', align: 'center'},
        {text: 'امتیاز', value: 'total_score', align: 'center'},
      ],
      historySearch: '',
      historyHeaders: [
        {text: 'تاریخ', value: 'date', align: 'center'},
        {text: 'توضیح', value: 'description', align: 'center'},
        {text: 'امتیاز', value: 'score', align: 'center'},
      ],
    }
  },
  async asyncData({$axios}) {
    let data = await $axios.$get('/hoc_club/data/');
    data.desserts = await $axios.$get('/hoc_club/ranking/')
    data.historyDesserts = await $axios.$get('/hoc_club/history/')
    let len = data.desserts.length
    let historyLen = data.historyDesserts.length
    for (let i = 0; i < len; i++) {
      data.desserts[i].name = data.desserts[i].first_name_persian + " " + data.desserts[i].last_name_persian
    }
    for (let i = 0; i < historyLen; i++) {
      data.historyDesserts[i].date = Vue.filter("moment")(data.historyDesserts[i].date, "hh:mm - jYYYY/jMM/jDD ")
    }
    return data
  },
  methods: {
    get_me(v) {

      if (v.first_name_persian === this.$auth.user.first_name_persian &&
        v.last_name_persian === this.$auth.user.last_name_persian &&
        v.hoc_club_rank == this.rank &&
        v.total_score == this.total_score) {

        return 'me'
      }
      return ''

    }

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

<style lang="scss">
tr, th, td {
  border: 1px solid #004948 !important;
  background-color: #99bdbb !important;
  font-size: 20px !important;
  text-align: center !important;
}

.v-data-footer {
  background-color: #C5E3E3;
}

.me {
  td {
    background: #026968 !important;
    color: white;

  }
}

</style>
