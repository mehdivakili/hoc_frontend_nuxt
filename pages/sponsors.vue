<template>
  <v-row class="bigRow">
    <v-col class="eachCol" v-for="item in items" md="3" sm="6" xs="12">
      <v-card class="eachCard">
        <div style="width: 100%;margin-bottom: 10px">
          <v-img :src="item.image" style="width: 100%"/>
        </div>
        <v-row>
          <v-col cols="8" style="display: flex; flex-direction: column;">
            <h3 style="font-size: 20px; font-weight: bold">
              {{ item.name }}
            </h3>
            <p style="font-size: 14px; flex-grow: 10">
              {{ item.description }}
            </p>
            <v-btn
              class="button-fill" style="min-width: 140px"
              :href="item.link"
            >
              اطلاعات بیشتر
              <v-icon style="margin-right: 10px"
                      left
                      dark
              >
                mdi-chevron-left
              </v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-md-flex">
            <medal class="medal" :fill="getColor(item.status)" style="height: fit-content"></medal>
          </v-col>
        </v-row>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MedalsSvg from "@/components/icons/medal.svg";

export default {
  name: "sponsers",
  components: {'medal': MedalsSvg},
  auth: false,

  data() {
    return {
      items: [
        {
          name: "گالری سروناز",
          description: "بین تمام سروها، یکی سروناز می‌شود!\n" +
            "در باغی به جا مانده از گذشتگان؛ فضایی را فراهم نموده ایم که بوی هنر را حس کنید. ما اینجا همنشین بوم و رنگ و عشقیم ...\n" +
            "گالری سروناز محفلی است برای دور شدن از روزمرگی و رها شدن در هنر.\n" +
            "ما در گالری سروناز، بزرگترین فضای هنری جنوب کشور را آماده کرده‌ایم، دو سالن برای نمایش هنر هنرمندان هنرهای تجسمی؛ سه فضای مستقل جهت عرضه دست سازهای هنرمندان ایرانی، فضایی برای برپایی ورک‌شاپ و نشست های هنری و در کنار تمام این ها، یک کافه دنج که می‌توانید در کنار طبیعت سروناز با بوی قهوه عشق‌بازی کنید...\n" +
            "در سروناز انرژی های مثبت جاریست زیرا ما با تکیه بر علم فنگ‌شویی فضا را طراحی کرده‌ایم.\n" +
            "سروناز را باید دید...",
          status: "gold",
          image: require("~/assets/images/sarvenaz.png"),
          link: "https://www.instagram.com/sarv_e_naz_gallery/"
        },
        {
          name: "جالبو",
          description: "فروشگاه جالبو (رایانه گستر شیراز) به عنوان یکی از قدیمی‌ترین فروشگاه های حقیقی با بیش از دو دهه تجربه، با پایبندی به سه اصل کلیدی احترام به حقوق مشتری ، تضمین اصالت کالا و تضمین قیمتی مناسب موفق شده تا همگام با دیگر فروشگاه‌های معتبر شروع به فعالیت در فروشگاه اینترنتی برای خدمت رسانی به شمار بیشتری از هموطنان کند.",
          status: "gold",
          image: require("~/assets/images/jalbo.png"),
          link: "https://jalbo.net/"
        },
        {
          name: "سون لرن",
          description: "ما در سون لرن با انتقال تجربه از اساتید شاغل در بزرگترین کسب و کارهای آنلاین ایران و دنیا، به شما کمک می کنیم که مهارت مورد نیاز بازار کار را فرا بگیرید و برای خودتان یک امنیت شغلی و کسب درآمد پایدار از تخصص برنامه نویسی بسازید...",
          status: "gold",
          image: require("~/assets/images/seven.png"),
          link: "https://7learn.com/"
        },
        {
          name: "هاب شیراز",
          description: "شتابدهنده هاب شیراز با همکاری شرکت کسب و کارهای نوپای حرکت اول و دانشگاه شیراز با هدف تمرکززدایی اکوسیستم کارآفرین، تقویت و غنی‌سازی زیست‌بوم کارآفرینی و نوآوری جنوب کشور از سال 1396 تاسیس شده و فعالیت شتابدهی خود را از آبان ماه 99 شروع کرده است و در حال حاضر ٨ استارتاپ را تحت حمایت خود قرار داده است.",
          status: "gold",
          image: require("~/assets/images/hab.png"),
          link: "https://hubshiraz.ir/"
        },
        {
          name: "ابر دراک",
          description: "رایا ابر دراک پارس با تمرکز بر توسعه فناوری‌های هوشمند ابری و مالکیت PoP سایت‌های توزیع‌شده‌ی انتقال محتوا در سراسر دنیا، تلاش میکنه تا قویترین خدمات در زمینه مدیریت توزیع محتوا رو به وب‌سایت‌ها، اپلیکیشن‌ها و رسانه‌های مجازی رو به کسب‌وکارها و کاربرانش ارائه بده.",
          status: "silver",
          image: require("~/assets/images/derak.png"),
          link: "https://derak.cloud/"
        },
        {
          name: "آیتول",
          description: "آیتول درگاه ورودی سرویس‌های تجمیع شده عوارض خودرو برای کاربران می‌باشد. در آیتول سعی شده تا محیط جدیدی برای کاربران ایجاد شود، به صورتی که در هر نقطه‌ای نیازهای مرتبط با عوارض خودرو را به ساده‌ترین شکل اغنا کنند.",
          status: "silver",
          image: require("~/assets/images/itool.png"),
          link: "https://itoll.ir/"
        },
        {
          name: "آیتن",
          description: "آیتن به عنوان یک Product Studio یا استودیو طراحی و تولید محصول، در تلاش است تا کسب‌وکارها بتوانند تمام نیازهای تکنیکال استارت‌آپ‌ خود مانند طراحی و توسعه وب‌سایت‌، اپلیکیشن، زیرساخت‌های تجزیه و تحلیل داده و انواع دیگر نیازمندی‌های نرم‌افزاری را در یک پکیج دریافت نمایند.",
          status: "silver",
          image: require("~/assets/images/iten.png"),
          link: "https://ayten.studio/about-us/"
        },
        {
          name: "گروه هنری VHD",
          description: "مجموعه VHD art group با بیش از یک دهه سابقه در حوزه ساخت تیزر های صنعتی و تبلیغاتی، سینمایی، مستند، عکاسی و برگزاری همایش ها فعالیت می کند.",
          status: "silver",
          image: require("~/assets/images/vhd.png"),
          link: "https://www.instagram.com/vhdartgroup"
        },
        {
          name: "آبرک",
          description: "خانه رویداد آبرک یک استارت آپ در حوزه خلق تجربه است که با طراحی و برگزاری تخصصی ایونت ها، تجربه متمایزی از برند ها را در ذهن مخاطبانشان ماندگار میکند.\n" +
            "\n" +
            "با آبرک تو خاطره ها بمون!",
          status: "bronze",
          image: require("~/assets/images/abrak.png"),
          link: "https://www.instagram.com/abrak.home/"
        },
        {
          name: "بنیاد نخبگان و مجمع خیران",
          description: "«مجمع خیران نخبه پرور فارس» در راستای فراهم کردن بستری جهت شناسایی و حمایت از استعدادهای برتر و نخبگان استان فارس فعالیت می‌کند.",
          status: "bronze",
          image: require("~/assets/images/khaier.png"),
          link: "http://shiraz-feca.ir/"
        },
        {
          name: "استعدادهای درخشان",
          description: "دفتر استعدادهای درخشان دانشگاه شیراز به عنوان یکی از واحدهای معاونت آموزشی و تحصیلات تکمیلی دانشگاه، در جهت پشتیبانی از دانشجویان و دانش‌آموزان ممتاز، برگزاری المپیادهای علمی دانشجویی و... فعالیت می‌کند.",
          status: "bronze",
          image: require("~/assets/images/estedad.png"),
          link: "https://gifted.shirazu.ac.ir/"
        },
        {
          name: "پویش بانوان استاد",
          description: "«پویش بانوان استاد دانشگاه شیراز، در حمایت از توانمند سازی دانشجو‌‌» تشکلی است که به همت پانزده نفر از بانوان استاد دانشگاه شیراز از فروردین ماه سال ۱۳۹۹، با هدف توانمند سازی دانشجویان در زمینه های علمی، فرهنگی، کارآفرینی و اقتصادی با استفاده از توان اعضای پویش و همیاران پویش تاسیس گردیده است.",
          status: "bronze",
          image: require("~/assets/images/banovan.png"),
          link: "https://www.instagram.com/suwfea/"
        },

      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'gold')
        return "#FFCF00"
      if (status === 'silver')
        return "#89939A"
      if (status === 'bronze')
        return "#967444"
    }
  },
  mounted() {
    this.$store.commit('setFooterColor', "#C5E3E3")
  }
}
</script>

<style scoped lang="scss">
.eachCol {;
}

.eachCard {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  padding: 12px;
  border-radius: 8px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  h3, p {
    color: #004948;
  }

}

.bigRow {
  margin-right: 1rem;
  margin-left: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

.medal{
  width: 80%;
}


</style>
