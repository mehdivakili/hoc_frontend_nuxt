<template>
  <div class="banner">
    <h1>
      <v-icon size="60px" color="white">mdi-help-circle</v-icon>
      سوالات متداول
      <v-icon size="60px" color="white" >mdi-help-circle</v-icon>
    </h1>
    <v-expansion-panels accordion class="accordion">
      <v-expansion-panel
        v-for="question in questions"
      >
        <v-expansion-panel-header>{{question.title}}</v-expansion-panel-header>
        <v-expansion-panel-content class="panelContent">
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
        {'title': ' زنگ برنامه نویسی(Hour of Code) چیست؟ ', 'content': '\n' +
            'Hour of Code یا زنگ برنامه‌ نویسی یک رویداد جهانیه که توسط Code.org ایجاد شده و با هدف آشنا کردن دانش‌آموزان با علم کامپیوتر و گسترش مشارکت در این زمینه، هرساله در هفتۀ جهانی آموزش علوم کامپیوتر برگزار می‌شه. این رویداد در تلاشه با از بین بردن باورهای غلط نشون بده که هر کسی، با هر سن، جنسیت و پیش‌زمینه‌ای می‌تونه به یادگیری‌ علوم کامپیوتر و برنامه نویسی بپردازه.\n'},
        {'title': 'چرا برنامه نویسی؟', 'content': 'یادگیری برنامه‌ نویسی، طرز تفکر منطقی، خلاقیت و همچنین ذهنیت حل‌ مسئلهٔ ما رو تقویت می‌کنه؛ مهارت‌هایی که نه‌ تنها در زمینهٔ کاری به ما کمک می‌کنه، بلکه در زندگی و هنگام مواجهه با مسائل مختلف نیز مفید هستن. برنامه‌ نویسی به ما کمک می‌کنه که مشکلات رو از زاویهٔ جدیدی ببینیم، با استفاده از خلاقیت خودمون برای مشکلات دنیای واقعی راه‌حل‌های نوآورانه ارائه بدیم و جهان پیرامون خودمون رو به مکان بهتری تبدیل کنیم.\n'},
        {'title': 'چطور میتونم داخل همایش شرکت کنم؟', 'content': 'کاری نداره! کافیه توی سایت ثبت‌نام کنی و منتظر باشی تا برای شرکت توی همایش بهت خبر بدیم!\n' +
            'توی همین سایت، گزینه ثبت‌نام رو انتخاب کن. بعد از کامل کردن هر مرحله، به مرحله بعد برو. بعد از اتمام همه مراحل ثبت‌نامت با موفقیت انجام شده!\n'},
        {'title': 'توی همایش چه چیزهایی یاد میگیرم؟ ', 'content': 'هدف این همایش آشنایی با مفاهیم اولیهٔ برنامه نویسیه و از طریق آموزش‌های جذاب با مباحثی مثل تفکر الگوریتمی و مهارت حل مسئله آشنا میشی.'},
        {'title': 'همایش مناسب چه افرادیه؟', 'content': 'همهٔ دانش‌آموزانی که دوست دارن با برنامه نویسی آشنا و وارد این دنیای جذاب بشن، می‌تونن توی همایش شرکت کنن!'},
        {'title': 'همایش به صورت حضوری برگزار میشه؟', 'content': 'آره! امسال همایش به صورت حضوری و در دانشگاه شیراز برگزار میشه؛ پس اگه شیراز هستی فرصت رو از دست نده!'},
        {'title': 'مدت زمان همایش چقدره و چه روزهایی برگزار میشه؟', 'content': 'هر گروه از شما دانش‌آموزان ۲ روز به صورت حضوری - مجازی به دانشگاه میاین و آموزش می‌بینین. علاوه بر اون، ۴ روز دیگه هم براتون ویدیوهایی به صورت مجازی قرار میدیم که با مباحث جالبی آشنا بشین و لذت ببرین. در انتها هم توی مراسم جشن اختتامیه در دانشگاه، در خدمت همهٔ شما دانش‌آموزان عزیز خواهیم بود. :)'},
        {'title': 'آیا ظرفیت ثبت نام محدوده؟ ', 'content': 'آره!!  پس هر چه زودتر ثبت نام کن! توی همایش منتظرت هستیم :)'},


      ]
    }
  }
}
</script>

<style scoped>

.banner {
  background: linear-gradient(104.71deg, #00ADAA 11.26%, #00928F 90.55%);
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

.v-expansion-panels{
  width: 920px;
  height: 568px;
  background: #FEFEFE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

}

.v-expansion-panel-header{
  color: #004948;
}

.panelContent{
  color: #004948;

}

.accordion{
  max-width: calc(100% - 20px);
  margin-right: 10px;
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




}

</style>
