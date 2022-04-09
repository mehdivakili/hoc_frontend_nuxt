<template>
  <div>
    <MainBanner image="images/main_banner.png" alt="" text-color="white"/>

    <Banner text-color="#004948" bg-color="#FEFEFE" image="images/banner1.png" alt="یک عکس">
      <template v-slot:banner-title>
        چرا برنامه نویسی یاد بگیریم ؟
      </template>

      <template v-slot:banner-content>

        برنامه نویسی مهارتی است که فواید زیادی دارد. برخی از مزایایی که با دانستن کد همراه است، شغل تضمین شده، ایجاد
        برنامه های کاربردی جالب، توسعه مهارت های حل مسئله است، حتی اگر در یک شرکت فناوری یا در یک بخش فناوری اطلاعات کار
        نمی کنید، می توانید از یادگیری این مهارت بهره مند شوید.
      </template>
    </Banner>

    <Banner text-color="#FEFEFE" bg-color="linear-gradient(104.71deg, #00928F 11.26%, #00ADAA 90.55%)"
            direction="row-reverse" image="images/banner2.png" alt="یک عکس">
      <template v-slot:banner-title>
        زنگ برنامه نویسی چیست؟
      </template>

      <template v-slot:banner-content>
        ساعت برنامه نویسی ابتدا به عنوان مقدمه ای یک ساعته برای علوم کامپیوتر شروع شد که برای ابهام زدایی از واژه "کد" و
        برنامه نویسی طراحی شده بود تا نشان دهد هرکسی میتواند اصول اولیه آنرا بیاموزد و در زمینه های علوم کامپیوتری
        مشارکت داشته باشد.
        <br>
        از آن زمان به بعد این همایش به عنوان یک تلاش جهانی برای معرفی علم کامپیوتر تبدیل شد که در آن با کارهای مختلف علم
        کامپیوتر و برنامه نویسی را توضیح میدهند. این همایش اولین بار توسط انجمن علمی بخش کامپیوتر دانشگاه شیراز و به کمک
        دانشجویان همین بخش کار خود را در ایران شروع کرد.

      </template>
    </Banner>

    <Banner text-color="#004948" bg-color="#FEFEFE" image="images/banner3.png" alt="یک عکس">
      <template v-slot:banner-title>
        زنگ برنامه نویسی دانشگاه شیراز
      </template>

      <template v-slot:banner-content>
        هم چنین قراره جوایز ارزشمندی هم به نفرات برتر بدیم و البته از تمامی شرکت کنندگان قدردانی کنیمﺑﺮﻧﺎﻣﻪ ﻫﺎی ﺟﺬاب و
        ﻣﺘﻨﻮﻋﯽ دارﯾﻢ ﮐﻪ در ﻃﻮل ﻫﻤﺎﯾﺶ ﺑﺮﮔﺰار ﻣﻴﺸﻦ و اﺟﺎزه ﻧﻤﻴﺪن ﺷﻤﺎ ﺣﻮﺻﻠﺘﻮن ﺳﺮ ﺑﺮهحالا که با هدف و محتوای زنگ برنامه
        نویسی آشنا شدیم خوبه بدونیم که امسال هم مثل هر سال، دانشگاه شیراز میزبانی این رویداد رو برعهده داره اما به دلیل
        شیوع ویروس کرونا، این همایش بصورت مجازی برگزار خواهد شد. ما دانشجو های بخش کامپیوتر داریم سخت تلاش می‌کنیم تا
        بتونیم این همایش رو به بهترین شکل و کیفیت ممکن برگزار کنیم و صمیمانه منتظر حضور گرم تک تک شما هستیم.
      </template>
    </Banner>

    <TeamTab/>
    <Statistics/>
    <Questions/>
  </div>

</template>

<script>

import MainBanner from "@/components/home/MainBanner";
import Banner from "@/components/home/Banner";
import Questions from "@/components/home/Questions";
import TeamTab from "@/components/home/TeamTab";
import Statistics from "@/components/home/Statistics";

export default {
  name: 'IndexPage',
  components: {
    Statistics,
    MainBanner,
    Banner, Questions, TeamTab
  },
  auth: false,
  mounted() {
    this.$store.commit('setFooterColor', '#004948')
  }
}
</script>



