<template>
  <div style="margin-top: 30px">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card shaped class="mainCard">
          <template v-if="notReserve">
          <v-row class="firstRow">
            <v-col cols="12" md="6">
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px;">
                  <p class="titles" style="text-align: center; ">نام و نام خانوادگی</p>
                  <p class="content" style="text-align: center;"> {{ name }}</p>
                </div>

              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px;">
                  <p class="titles" style="text-align: center; ">کد ملی</p>
                  <p class="content" style="text-align: center;">{{ numberToPersian(nationalCode) }}</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="otherRow">
            <v-col>
              <v-card class="cardShape">
                <v-row style="margin-bottom: 5px;">
                  <v-col cols="12" md="6" style="display: flex; justify-content: center; align-items: center ">
                    <img src="~/assets/images/zarinpal.svg" style="max-width: 100%">
                  </v-col>
                  <v-col cols="12" md="6" style="display: flex; justify-content: center; align-items:center  ">
                    <div class="purchase-icon">
                      <p style="text-align: center">درگاه پرداخت</p>
                      <p style="margin-bottom: 0;text-align: center">زرین پال</p>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

          </v-row>
          <v-row class="otherRow">
            <v-col>
              <v-card class="cardShape">
                <v-row style="margin-bottom: 5px;">
                  <v-col cols="12" md="6" style="display: flex; justify-content: center; align-items:center"><p
                    class="titles">مبلغ پرداختی</p>
                  </v-col>
                  <v-col cols="12" md="6"><p class="content"
                                             style="display: flex; justify-content: center; align-items:center  ">
                    {{ numberToPersian(amount) }} تومان</p></v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="10" sm="6">
              <v-btn style="margin-bottom: 2em;margin-right: 1em;width: 100%" to="" class="button-fill"
                     @click="goToNextPage">ورود به درگاه پرداخت
              </v-btn>
            </v-col>
          </v-row>
          </template>
          <template v-else>
            <v-row class="firstRow">
              <v-col cols="12" md="6">
                <v-card class="cardShape">
                  <div style="padding-top: 6px; padding-bottom: 2px;">
                    <p class="titles" style="text-align: center; ">نام و نام خانوادگی</p>
                    <p class="content" style="text-align: center;"> {{ name }}</p>
                  </div>

                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="cardShape">
                  <div style="padding-top: 6px; padding-bottom: 2px;">
                    <p class="titles" style="text-align: center; ">کد ملی</p>
                    <p class="content" style="text-align: center;">{{ numberToPersian(nationalCode) }}</p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="otherRow">
              <v-col>
                <v-card class="cardShape">
                  <div class="reserve">
                    <p><img src="~/assets/images/success_icon.svg"/> شما در لیست انتظار قرار گرفتید</p>
                    <ul>
                      <li>متأسفانه ظرفیت ثبت‌نام به پایان رسیده است :(

                      </li>
                      <li>اسم شما در لیست انتظار قرار می‌گیرد و به‌محض افزایش ظرفیت با شما تماس می‌گیریم تا بتوانید در همایش زنگ برنامه‌نویسی شرکت کنید.

                      </li>
                    </ul>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </template>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "Finish",
  data() {
    return {
      amount: 132000,
      notReserve: false
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
        if (error.response !== undefined) {
          if (error.response.data.error !== undefined) {
            let text = error.response.data.error

            this.$notify({
              group: 'foo',
              type: 'error',

              title: 'خطا در پرداخت!!',
              text: text
            });
          }
        }
      }
      this.$nuxt.$loading.finish();
    }
    ,
  }
  ,
  beforeMount() {
    let t = this
    this.$axios.get('get_option/purchase_amount').then((res) =>
      t.amount = res.data.value / 10
    )
    this.$axios.get('remaining').then((res) =>{
      let count = res.data
      let gender = this.$auth.user.sex
      if(gender == 'مرد'){
        t.notReserve = count.male != 0
      }else{
        t.notReserve = count.female != 0
      }
      })
  }

}
</script>

<style scoped lang="scss">

.mainCard {
  background-color: #C5E3E3;
  border-radius: 20px !important;
  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD !important;

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

.content, .purchase-icon p {
  color: #00928F;
  font-family: 'Vazir Black';
  font-weight: 900;
  font-size: 18px;
}

.reserve {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD;
  border-radius: 15px;
  color: #00928F;
  padding: 30px;

p {
  font-size: 24px;
  line-height: 45px;
  text-align: right;
  font-weight: 900;

}
ul {
  padding-right: 70px;
}

/* identical to box height, or 189% */


}
</style>
