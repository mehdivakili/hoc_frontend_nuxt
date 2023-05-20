<template>
  <div>
    <MainBanner
      :image="require('~/assets/images/main_banner.png')"
      alt=""
      text-color="white"
      :count="count"
    />

    <Banner
      text-color="#004948"
      bg-color="#FEFEFE"
      :image="require('~/assets/images/banner1.svg')"
      alt="یک عکس"
    >
      <template v-slot:banner-title> چرا برنامه نویسی یاد بگیریم ؟ </template>

      <template v-slot:banner-content>
        با پیشرفت تکنولوژی در قرن بیست‌و‌یکم، آشنایی با دانش کامپیوتر و برنامه‌
        نویسی به یک مهارت ضروری تبدیل شده است. یادگیری برنامه‌ نویسی علاوه بر
        اینکه به ما این امکان را می‌دهد که ایده‌های خود را به واقعیت تبدیل کنیم،
        تفکر منطقی و حل مسئله را نیز به ما می‌آموزد. درک برنامه نویسی به ما کمک
        می‌کند هنگام مواجه شدن با مشکلات، برای رسیدن به بهترین نتیجه به تمامی
        روش‌های حل مسئله فکر کنیم و هر بار که با چالش جدیدی روبرو می‌شویم، به‌
        دنبال راه‌‌‌حل‌های متفاوت باشیم تا در نهایت به جواب درست برسیم. بنابراین
        یادگیری برنامه‌ نویسی، طرز تفکر منطقی، خلاقیت و همچنین ذهنیت حل‌ مسئلهٔ
        ما را تقویت می‌کند؛ مهارت‌هایی که نه‌ تنها در زمینهٔ کاری به ما کمک
        می‌کنند، بلکه در زندگی و هنگام مواجهه با مسائل مختلف نیز مفید هستند.
        برنامه‌ نویسی به ما کمک می‌کند که مشکلات را از زاویهٔ جدیدی ببینیم، با
        استفاده از خلاقیت خود برای مشکلات دنیای واقعی راه‌حل‌های نوآورانه ارائه
        دهیم و جهان پیرامون خود را به مکان بهتری تبدیل کنیم.
      </template>
    </Banner>

    <Banner
      text-color="#FEFEFE"
      bg-color="linear-gradient(104.71deg, #00928F 11.26%, #00ADAA 90.55%)"
      direction="row-reverse"
      :image="require('~/assets/images/banner2.svg')"
      alt="یک عکس"
    >
      <template v-slot:banner-title> زنگ برنامه نویسی چیست؟ </template>

      <template v-slot:banner-content>
        Hour of Code یا زنگ برنامه‌ نویسی یک رویداد جهانی است که توسط Code.org
        ایجاد شده است و با هدف آشنا کردن دانش‌آموزان با علم کامپیوتر و گسترش
        مشارکت در این زمینه، هرساله در هفتۀ جهانی آموزش علوم کامپیوتر برگزار
        می‌شود. شرکت‌های بزرگی مانند گوگل، فیسبوک، آمازون و مایکروسافت از این
        رویداد حمایت می‌کنند.

        <br />
        این رویداد هر سال در سراسر دنیا توسط نهاد‌های مختلف برگزار می‌شود و
        میلیون‌ها دانش‌آموز از سراسر جهان به این جنبش بین‌المللی می‌پیوندند تا
        از طریق بازی‌ها و آموزش‌های سرگرم‌کننده، لذت کدنویسی را تجربه کنند.
        دانش‌آموزان در این رویداد با مقدمات برنامه‌ نویسی و مفاهیم پایۀ علم
        کامپیوتر آشنا می‌شوند. مهم تر از آن، زنگ برنامه نویسی در تلاش است در این
        یک ساعت با از بین بردن باورهای غلط نشان دهد علوم کامپیوتر و برنامه‌
        نویسی جذاب و خلاقانه است و هر کسی، با هر سن، جنسیت و پیش‌زمینه‌ای
        می‌تواند به یادگیری آن بپردازد. تعداد زیادی از دانش‌آموزان شرکت‌کننده در
        این رویداد تصمیم گرفته‌اند یادگیری برنامه‌ نویسی و علوم کامپیوتر را
        بیشتر از یک ساعت ادامه دهند و حتی در این زمینه تحصیل کنند.
        <br />

        امروزه، زنگ برنامه‌ نویسی تنها به یک ساعت کدنویسی محدود نمی‌شود و شامل
        فعالیت‌های گوناگونی است. زنگ برنامه نویسی، دانش آموزان را در سراسر دنیا
        تشویق می‌کند که برنامه نویسی را امتحان کنند و با یادگیری علوم کامپیوتر
        دنیا را تغییر دهند!
      </template>
    </Banner>

    <Banner
      text-color="#004948"
      bg-color="#FEFEFE"
      :image="require('~/assets/images/banner3.svg')"
      alt="یک عکس"
    >
      <template v-slot:banner-title> زنگ برنامه نویسی دانشگاه شیراز </template>

      <template v-slot:banner-content>
        بخش کامپیوتر دانشگاه شیراز یکی از برگزارکنندگان رویداد جهانی زنگ برنامه
        نویسی در ایران است. دانشجویان این بخش از سال ۱۳۹۳ تا به حال به مدت شش
        دوره این رویداد را برای دانش‌آموزان ۱۲ تا ۱۸ سال برگزار کرده‌اند و
        مجموعه‌هایی از جمله کافه‌‌بازار، مکتب‌خونه و … در سال‌های مختلف حامیان
        این رویداد بود‌ه‌اند. امسال نیز دانشگاه شیراز برای هشتمین بار میزبان همۀ
        دانش‌آموزانی است که به آشنایی با برنامه نویسی علاقه‌مند هستند. هدف این
        همایش ایجاد فرصتی برای دانش‌آموزان دوره متوسطه است تا به یادگیری مفاهیم
        پایهٔ برنامه نویسی در فضای دانشگاه بپردازند. همچنین به شرکت‌کنندگان زنگ
        برنامه نویسی دانشگاه شیراز، مدرک بین‌المللی داده می‌شود که نشان می‌دهد
        جزو میلیون‌ها دانش‌آموزی هستند که در این رویداد جهانی شرکت داشته‌اند.
      </template>
    </Banner>

    <VideoBanner
      id="registerVideo"
      text-color="#FEFEFE"
      bg-color="linear-gradient(104.71deg, #00928F 11.26%, #00ADAA 90.55%)"
      direction="row-reverse"
      video="https://api.hocshirazu.ir/media/register_description.mp4"
      alt="یک فیلم"
    >
      <template v-slot:banner-title> نحوه ثبت نام ؟! </template>

      <template v-slot:banner-content>
        اگر هنگام ثبت نام براتون مشکل یا سوالی پیش اومد میتونید از طریق بشتیبان
        سایت دایرکت اینستاگرام و بشتیبان تلگرام با ما درمیون بگذارید.
      </template>
    </VideoBanner>

    <TeamTab />
    <Statistics />
    <Questions />
  </div>
</template>

<script>
import MainBanner from "@/components/home/MainBanner";
import Banner from "@/components/home/Banner";
import VideoBanner from "@/components/home/VideoBanner";
import Questions from "@/components/home/Questions";
import TeamTab from "@/components/home/TeamTab";
import Statistics from "@/components/home/Statistics";
export default {
  name: "IndexPage",
  components: {
    Statistics,
    MainBanner,
    Banner,
    Questions,
    TeamTab,
    VideoBanner,
  },
  auth: false,
  mounted() {
    this.$store.commit(
      "setFooterColor",
      "linear-gradient(15deg, #00ADAA 29%, #00928F 71%)"
    );
  },
  async asyncData({ $axios }) {
    let count = await $axios.$get("/remaining");
    return {
      count: count,
    };
  },
};
</script>
