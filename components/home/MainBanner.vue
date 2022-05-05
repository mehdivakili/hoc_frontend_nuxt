<template>
  <div class="banner" :style="{backgroundImage: imageUrl,color: textColor}">
    <h1>
      هفتمین همایش زنگ برنامه نویسی (۱۴۰۱)
    </h1>
    <h4>
      {
      امروز یاد بگیر و یک فردای بهتر برای خودت بساز!<br>
      اینجا هستیم که بازی هامون رو بنویسیم،<br>
      نه اینکه فقط روی گوشی بازی کنیم. بزن بریم!! }
    </h4>
    <h3>
      تاریخ همایش: ۲۵ تا ۳۱ تیر ماه ۱۴۰۱
    </h3>
  </div>

</template>

<script>
export default {
  name: "MainBanner",
  props: {
    textColor: {}, image: {}, alt: {default: ''}
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


h4 {
  line-height: 40px;
}

@media screen and (min-width: 1000px){
  .banner{
    padding: 100px;
  }
}


</style>
