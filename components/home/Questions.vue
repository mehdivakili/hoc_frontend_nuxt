<template>
  <div class="banner">
    <h1>
      <v-icon size="60px" color="white">mdi-help-circle</v-icon>
      سوالات متداول
      <v-icon size="60px" color="white" >mdi-help-circle</v-icon>
    </h1>
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="question in questions"
      >
        <v-expansion-panel-header>{{question.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          {{question.content}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      questions: [
        {'title': ' Hour of Code چیست؟ ', 'content': 'به عنوان یک ساعت مقدمه به علوم رایانه شروع شد و برای ساده نشان دادن "کد" طراحی شده بود تا نشون بده هر کسی می تونه اصول اولیه را یاد بگیره و مشارکت خودش رو در زمینه علوم رایانه گسترش بده. از اون زمان به بعد، به دنیایی برای بزرگداشت از علوم رایانه تبدیل شده ، که با فعالیتهای کد نویسی 1 ساعته شروع میشه اما به انواع فعالیت های داخل جامعه مربوط میشه!'},
        {'title': 'چرا علوم کامپیوتر؟', 'content': 'لورم ایپسوم'},
        {'title': 'چطور میتونم داخل همایش شرکت کنم؟', 'content': 'لورم ایپسوم'},
        {'title': 'من چیزی درباره کدنویسی نمیدونم، با این وجود بازم میتونم داخل همایش شرکت کنم؟', 'content': 'لورم ایپسوم'},
        {'title': 'آیا برای شرکت در همایش به رایانه نیاز دارم؟', 'content': 'لورم ایپسوم'},
        {'title': 'اگه اهل شیراز نیستم هم میتونم داخل همایش شرکت کنم؟', 'content': 'لورم ایپسوم'}

      ]
    }
  }
}
</script>

<style scoped>

.banner {
  background-color: #004948;
  position: relative;
  padding: 110px 0;

}

.accordion-button::after {
  margin-right: auto;
  margin-left: 0 !important;
}

h1 {
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 60px;
}

@media screen and (min-width: 1000px) {
  .banner {
    width: 100%;
    height: 684px;
    padding: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


  }

  .accordion {
    width: 100%;
    max-width: 1000px;
    border-radius: 15px;
    overflow: hidden;
    margin: auto;
  }


}

</style>
