<template>
  <div class="banner" :style="{ backgroundImage: imageUrl, color: textColor }">
    <h1 style="margin-top: 45px">هشتمین دوره همایش زنگ برنامه نویسی</h1>
    <h2>(بزرگترین همایش علمی دانش آموزی کشور)</h2>
    <h4>
      { باکیفیت‌ترین نوع یادگیری،<br />
      همگام با تکنولوژی و هم‌نبض با آینده‌ است <br />
      و کدنویسی ادبیات تکنولوژی و بذر آینده است. }
    </h4>
    <h3>تاریخ همایش: ۲۵ مرداد لغایت ۳ شهریور ماه ۱۴۰۲</h3>
    <!-- <v-btn to="live" class="button-fill">پخش زنده اختتامیه</v-btn> -->
    <v-btn
      class="button-fill px-7 py-4 my-2 d-flex d-md-none"
      to="/register"
      style="transform: scale(1.4)"
    >
      ثبت نام
    </v-btn>
    <!-- <div class="remaining">
      <h2 style="margin-bottom: 50px">ظرفیت باقی مانده</h2>
      <div
        class="d-block d-md-flex"
        style="width: 100%; justify-content: center; align-items: center"
      >
        <div
          class="d-flex d-md-flex"
          style="
            justify-content: space-around;
            align-items: center;
            flex-grow: 1;
            margin: 10px;
          "
        >
          <h3 style="text-align: center; margin: 0">
            پسران: {{ numberToPersian(count.male) }}
          </h3>
          <div class="d-flex" style="justify-content: center">
            <v-btn
              v-if="count.male != 0"
              class="button-fill px-7 py-4 my-2 d-flex"
              to="/register"
              style="transform: scale(1.1)"
            >
              ثبت نام
            </v-btn>
            <v-btn
              v-else
              class="button-fill px-7 py-4 my-2 d-flex"
              to="/register"
              style="transform: scale(1.1)"
            >
              رزرو
            </v-btn>
          </div>
        </div>
        <div
          class="d-flex d-md-flex"
          style="
            justify-content: space-around;
            align-items: center;
            flex-grow: 1;
            margin: 10px;
          "
        >
          <h3 style="text-align: center; margin: 0">
            دختران: {{ numberToPersian(count.female) }}
          </h3>
          <div class="d-flex" style="justify-content: center">
            <v-btn
              v-if="count.female != 0"
              class="button-fill px-7 py-4 my-2 d-flex"
              to="/register"
              style="transform: scale(1.1)"
            >
              ثبت نام
            </v-btn>
            <v-btn
              v-else
              class="button-fill px-7 py-4 my-2 d-flex"
              to="/register"
              style="transform: scale(1.1)"
            >
              رزرو
            </v-btn>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  props: {
    textColor: {},
    image: {},
    alt: { default: "" },
    count: {},
  },
  computed: {
    imageUrl() {
      return `url('${this.$props.image}')`;
    },
  },
};
</script>

<style scoped>
.banner {
  box-sizing: content-box;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 650px;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 40px;
  padding: 10px;
}

h1 {
  font-weight: bold;
}

h4 {
  line-height: 40px;
}

.remaining {
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  border: 2px solid white;
  margin-bottom: 40px;
}

@media screen and (min-width: 1000px) {
  .banner {
    padding: 100px;
  }

  .remaining {
    width: 50%;
  }
}
</style>
