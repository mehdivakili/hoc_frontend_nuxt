<template>
  <div style="margin-top: 30px">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card v-if="loaded" shaped class="mainCard">
          <!-- <template v-if="notReserve"> -->
          <v-row class="firstRow">
            <v-col cols="12" md="6">
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px">
                  <p class="titles" style="text-align: center">
                    نام و نام خانوادگی
                  </p>
                  <p class="content" style="text-align: center">{{ name }}</p>
                </div>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card class="cardShape">
                <div style="padding-top: 6px; padding-bottom: 2px">
                  <p class="titles" style="text-align: center">کد ملی</p>
                  <p class="content" style="text-align: center">
                    {{ numberToPersian(nationalCode) }}
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="otherRow">
            <v-col class="cardShape">
              <v-select
                flat
                label="نوع برگزاری کلاس ها"
                v-model="serviceType"
                placeholder="نوع برگزاری"
                :items="['غیر حضوری', 'حضوری']"
              >
              </v-select>
            </v-col>
            <v-col>
              <v-card class="cardShape">
                <v-row style="margin-bottom: 5px">
                  <v-col
                    cols="12"
                    md="6"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <img
                      src="~/assets/images/zarinpal.svg"
                      style="max-width: 100%"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <div class="purchase-icon">
                      <p style="text-align: center">درگاه پرداخت</p>
                      <p style="margin-bottom: 0; text-align: center">
                        زرین پال
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="otherRow">
            <v-col>
              <v-card class="cardShape">
                <v-row style="margin-bottom: 5px">
                  <v-col
                    cols="12"
                    md="6"
                    style="
                      display: flex;
                      justify-content: center;
                      align-items: center;
                    "
                    ><p class="titles">مبلغ پرداختی</p>
                  </v-col>
                  <v-col cols="12" md="6" v-if="!discount"
                    ><p
                      class="content"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      {{
                        numberToPersian(
                          amount - (serviceType === "غیر حضوری" ? 100000 : 0)
                        )
                      }}
                      تومان
                    </p></v-col
                  >
                  <v-col cols="12" md="6" v-if="discount"
                    ><p
                      class="content"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-decoration-line: line-through;
                        color: red;
                      "
                    >
                      {{
                        numberToPersian(
                          amount - (serviceType === "غیر حضوری" ? 100000 : 0)
                        )
                      }}
                      تومان
                    </p>
                    <p
                      class="content"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      {{ numberToPersian(discountAmount) }} تومان
                    </p>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="10" sm="6">
              <v-btn
                style="margin-bottom: 2em; margin-right: 1em; width: 100%"
                to=""
                class="button-fill"
                @click="goToNextPage"
                >ورود به درگاه پرداخت
              </v-btn>
            </v-col>
          </v-row>
          <!-- </template>
          <template v-else>
            <v-row class="firstRow">
              <v-col cols="12" md="6">
                <v-card class="cardShape">
                  <div style="padding-top: 6px; padding-bottom: 2px">
                    <p class="titles" style="text-align: center">
                      نام و نام خانوادگی
                    </p>
                    <p class="content" style="text-align: center">{{ name }}</p>
                  </div>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card class="cardShape">
                  <div style="padding-top: 6px; padding-bottom: 2px">
                    <p class="titles" style="text-align: center">کد ملی</p>
                    <p class="content" style="text-align: center">
                      {{ numberToPersian(nationalCode) }}
                    </p>
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="otherRow">
              <v-col>
                <v-card class="cardShape">
                  <div class="reserve">
                    <p>
                      <img src="~/assets/images/success_icon.svg" /> شما در لیست
                      انتظار قرار گرفتید
                    </p>
                    <ul>
                      <li>متأسفانه ظرفیت ثبت‌نام به پایان رسیده است :(</li>
                      <li>
                        اسم شما در لیست انتظار قرار می‌گیرد و به‌محض افزایش
                        ظرفیت با شما تماس می‌گیریم تا بتوانید در همایش زنگ
                        برنامه‌نویسی شرکت کنید.
                      </li>
                      <li>
                        اولویت ثبت ‌نام با شرکت‌ کنندگانی است که زودتر برای رزرو
                        اقدام کرده‌اند.
                      </li>
                    </ul>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </template> -->
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
      amount: 299000,
      discount: false,
      discountAmount: 199000,
      notReserve: false,
      loaded: false,
      serviceType: undefined,
    };
  },
  computed: {
    name() {
      return (
        this.$store.state.register.userData.first_name_persian +
        " " +
        this.$store.state.register.userData.last_name_persian
      );
    },
    nationalCode() {
      return this.$store.state.register.userData.national_code;
    },
  },
  methods: {
    async goToNextPage() {
      if (!this.serviceType) {
        this.$notify({
          group: "foo",
          type: "error",

          title: "خطا در ثبت نام!!",
          text: "نوع برگزاری را انتخاب کنید",
        });

        return;
      }

      this.$nuxt.$loading.start();
      try {
        let response = await this.$axios.get(
          this.serviceType === "حضوری"
            ? "purchase/request/"
            : "purchase/request-remote/"
        );
        if (response.data.error === undefined)
          window.location.href = response.data.pay_link;
      } catch (e) {
        if (error.response !== undefined) {
          if (error.response.data.error !== undefined) {
            let text = error.response.data.error;

            this.$notify({
              group: "foo",
              type: "error",

              title: "خطا در پرداخت!!",
              text: text,
            });
          }
        }
      }
      this.$nuxt.$loading.finish();
    },
  },
  beforeMount() {
    let t = this;
    this.$axios
      .get("get_option/purchase_amount")
      .then((res) => (t.discountAmount = res.data.value / 10));
    this.$axios.get("pass_register_limit/").then((res) => {
      t.notReserve = res.data;
      t.loaded = true;
    });
    t.discount =
      this.$store.state.register.userData.discount_code === "" ||
      this.$store.state.register.userData.discount_code === null ||
      this.$store.state.register.userData.discount_code === undefined
        ? false
        : true;
  },
};
</script>

<style scoped lang="scss">
.mainCard {
  background-color: #c5e3e3;
  border-radius: 20px !important;
  box-shadow: -18px -18px 30px #e0f0f0, 18px 18px 30px #98cdcd !important;
}

.firstRow {
  margin-left: 4px;
  margin-right: 4px;
}

.cardShape {
  box-shadow: inset -18px -18px 30px #e0f0f0, inset 18px 18px 30px #98cdcd !important;
  background: #c5e3e3;
  border-radius: 10px;
}

.otherRow {
  margin-left: 18px;
  margin-right: 18px;
}

.titles {
  color: #004948;
  font-family: "Vazir";
  font-weight: 400;
  font-size: 13px;
}

.content,
.purchase-icon p {
  color: #00928f;
  font-family: "Vazir Black";
  font-weight: 900;
  font-size: 18px;
}

.reserve {
  background: #c5e3e3;
  box-shadow: inset -18px -18px 30px #e0f0f0, inset 18px 18px 30px #98cdcd;
  border-radius: 15px;
  color: #00928f;
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
