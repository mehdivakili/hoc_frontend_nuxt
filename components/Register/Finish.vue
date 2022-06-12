<template>
  <div>
    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="8">
        <v-card shaped class="mainCard">
          <v-row class="firstRow">
            <v-col>
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px;">
                  <p class="titles" style="text-align: center; ">نام و نام خانوادگی</p>
                  <p class="content" style="text-align: center;"> {{ name }}</p>
                </div>

              </v-card>
            </v-col>
            <v-col>
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px;">
                  <p class="titles" style="text-align: center; ">کد ملی</p>
                  <p class="content" style="text-align: center;">{{ numberToPersian(nationalCode) }}</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <!--          <v-row class="otherRow">-->
          <!--            <v-col>-->
          <!--              <v-card class="cardShape">-->
          <!--                <v-row>-->
          <!--                  <v-col style="margin-right: 15px;">-->
          <!--                    image-->
          <!--                  </v-col>-->
          <!--                  <v-col>-->
          <!--                    name-->
          <!--                  </v-col>-->
          <!--                </v-row>-->
          <!--              </v-card>-->
          <!--            </v-col>-->

          <!--          </v-row>-->
          <v-row class="otherRow">
            <v-col>
              <v-card class="cardShape">
                <v-row style="margin-bottom: 5px;">
                  <v-col style="margin-right: 15px; "><p class="titles" style="margin-right: 5em">مبلغ پرداختی</p>
                  </v-col>
                  <v-col><p class="content"> {{ numberToPersian(amount) }} تومان</p></v-col>
                </v-row>
              </v-card>
            </v-col>

          </v-row>
          <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <v-btn style="margin-bottom: 2em;margin-right: 1em;width: 100%" to="" class="button-fill"
                     @click="goToNextPage">ورود به درگاه پرداخت
              </v-btn>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "Finish",
  data() {
    return {
      amount: 132000
    }
  },
  computed: {
    name() {
      return this.$store.state.register.userData.first_name_persian + " " + this.$store.state.register.userData.last_name_persian
    },
    nationalCode() {
      return this.$store.state.register.userData.national_code
    }
  },
  methods: {
    async goToNextPage() {
      this.$nuxt.$loading.start();
      try {
        let response = await this.$axios.get('purchase/request/')
        if (response.data.error === undefined)
          window.location.href = response.data.pay_link;


      } catch (e) {
        console.log(e)
      }
      this.$nuxt.$loading.finish();
    },
  },
  beforeMount() {
    let t = this
    this.$axios.get('get_option/purchase_amount').then((res) =>
      t.amount = res.data.value / 10
    )
  }

}
</script>

<style scoped>
.mainCard {
  background-color: #C5E3E3;
}

.firstRow {
  margin-left: 4px;
  margin-right: 4px;

}

.cardShape {
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
  background: #C5E3E3;
  border-radius: 10px;

}

.otherRow {
  margin-left: 18px;
  margin-right: 18px;
}

.titles {
  color: #004948;
  font-family: 'Vazir';
  font-weight: 400;
  font-size: 13px;
}

.content {
  color: #00928F;
  font-family: 'Vazir Black';
  font-weight: 900;
  font-size: 18px;
}
</style>
