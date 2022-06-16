<template>
  <div class="banner" :style="{backgroundImage: imageUrl,color: textColor}">
    <h1>
      هفتمین همایش زنگ برنامه نویسی (۱۴۰۱)
    </h1>
    <h4>
      {
      باکیفیت‌ترین نوع یادگیری،<br>
      همگام با تکنولوژی و هم‌نبض با آینده‌ است <br>
      و کدنویسی ادبیات تکنولوژی و بذر آینده است. }
    </h4>
    <h3>
      تاریخ همایش: ۲۵ تا ۳۱ تیر ماه ۱۴۰۱
    </h3>
    <v-btn class="button-fill px-7 py-4 my-2 d-flex d-md-none" to="register/" style="transform: scale(1.4)"> ثبت نام </v-btn>
    <div class="remaining">
    <h2 style="margin-bottom: 50px">ظرفیت باقی مانده</h2>
    <div class="d-flex d-md-flex" style="width: 100%; justify-content: center; align-items: center" >
        <div class="d-block d-md-flex" style="justify-content: space-around; align-items: center; flex-grow: 1;">
        <h3 style="text-align: center; margin: 0">پسران: {{numberToPersian(count.male)}}</h3>
<!--        <v-btn class="button-fill px-7 py-4 my-2 d-flex " to="register/" style="transform: scale(1.4)"> ثبت نام </v-btn>-->
        </div>
        <div class="d-block d-md-flex" style="justify-content: space-around; align-items: center; flex-grow: 1;">
        <h3 style="text-align: center; margin: 0"> دختران: {{numberToPersian(count.female)}}</h3>
<!--        <v-btn class="button-fill px-7 py-4 my-2 d-flex " to="register/" style="transform: scale(1.4)"> ثبت نام </v-btn>-->
        </div>
    </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "MainBanner",
  props: {
    textColor: {}, image: {}, alt: {default: ''}, count: {}
  },
  computed: {
    imageUrl() {
      return `url('${this.$props.image}')`
    }
  }

}
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

h1{
  font-weight: bold;
}

h4 {
  line-height: 40px;
}

.remaining{
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid white;
}

@media screen and (min-width: 1000px){
  .banner{
    padding: 100px;
  }

  .remaining{
    width: 50%;
  }
}


</style>
