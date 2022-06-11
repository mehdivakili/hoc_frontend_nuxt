<template>
  <div class="banner">
    <ul class="nav-tabs">
      <li :class="[(groupKey === currentGroup)? 'active': '','nav-tab-item']" v-for="(group,groupKey) in team"
          :key="`nav-btn-${groupKey}`" @click="currentGroup = groupKey">
        {{ group.name }}
      </li>
    </ul>
    <div>
      <transition name="fade" mode="out-in">
        <div v-for="(group,groupKey) in team" :key="`nav-${groupKey}`"
                  v-if="groupKey === currentGroup">
          <hooper :rtl="true" :settings="hooperSettings" style="height: 400px">
            <slide style="padding: 20px; display: flex; justify-content: center;align-items: end"
                   v-for="(person,pk) in group.people"
                   :key="`nav-${groupKey}-person-${pk}`" :index="pk">
              <div :class="['person-card',(pk===0)?'admin-card':'']">
                <div>
                  <div style="display: flex; justify-content: center">
                    <v-img class="person-image"
                           :src="person.image"
                           :alt="person.name"
                    ></v-img>
                  </div>

                  <p class="person-name">{{ person.name }}</p>
                  <p class="person-description">{{ person.description }}</p>
                  <a :href="person.linkedin">
                    <v-img
                      :lazy-src="require(`~/assets/images/linkedin_logo.svg`)"
                      max-height="38"
                      max-width="113"
                      :src="require(`~/assets/images/linkedin_logo.svg`)"
                      alt="linkedIn Icon"
                    ></v-img>
                  </a>
                </div>
              </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>

          </hooper>
          <div class="duty-box">{{group.information}}</div>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
import {
  Hooper, Slide, Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  data() {
    return {
      team: [
        {
          "name": "سرگروه ها",
          "information": "دبیر رویداد، برنامه‌ریزی نقشه راه کلی و مدیریت امور مالی مربوط به رویداد را بر عهده دارد.\r\nاین برنامه‌ها با کمک و همفکری سرگروه‌های هر کمیته، به تیم اطلاع داده می‌شود، تا درنهایت با تعیین و تقسیم وظایف، هر برنامه به بهترین نحو به اجرا برسد.",
          "people": [
            {
              "name": "امید عسلی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9375_rzO3Vmh.jpg",
              "description": "دبیر رویداد",
              "linkedin": "https://www.linkedin.com/in/omidasali/"
            },
            {
              "name": "محمدرضا جوانمردی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9250.jpg",
              "description": "نایب دبیر",
              "linkedin": "https://www.linkedin.com/in/mohammadreza-javanmardi/"
            },
            {
              "name": "امیرحسین رودکی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9306_2k580gh.jpg",
              "description": "سرگروه علمی",
              "linkedin": "https://www.linkedin.com/in/amirhossein-roodaki"
            },
            {
              "name": "آرزو برادران",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9642__9NKdvAc.jpg",
              "description": "سرگروه روابط عمومی",
              "linkedin": "https://www.linkedin.com/in/arezoo-baradaran"
            },
            {
              "name": "متین منشی زاده",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9296_3wYDRPH.jpg",
              "description": "سرگروه انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/matin-monshizadeh-b120b9220/"
            },
            {
              "name": "ریحانه اکبری فرد",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9669.jpg",
              "description": "سرگروه تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/reihaneh-akbari-fard-558800227/"
            },
            {
              "name": "ارسلان جباری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9462_PDSVl4E.jpg",
              "description": "سرگروه تبلیغات",
              "linkedin": "https://www.linkedin.com/in/arsalan-jabbari-408318203"
            },
            {
              "name": "احمد شمس",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9382.jpg",
              "description": "سرگروه تدارکات",
              "linkedin": "https://www.linkedin.com/in/ahmad-shams-"
            }
          ]
        },
        {
          "name": "علمی",
          "information": "کمیته علمی، برنامه های آموزشی پیرامون تفکر حل مسئله و برنامه‌نویسی را انتخاب و اجرا می‌کند.\r\nهمچنین پست‌های علمی در شبکه‌های اجتماعی رویداد، با همکاری تیم علمی تهیه می‌شوند.",
          "people": [
            {
              "name": "امیرحسین رودکی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9306_uzXLKjN.jpg",
              "description": "سرگروه علمی",
              "linkedin": "https://www.linkedin.com/in/amirhossein-roodaki"
            },
            {
              "name": "محمدرضا نظیری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9286.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/mohammadreza-naziri-100ba2227"
            },
            {
              "name": "محمد کمال",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9608.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/mohammad-kamal-mk"
            },
            {
              "name": "امیرحسین زمانی لاری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9301.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/%D8%A7%D9%85%DB%8C%D8%B1%D8%AD%D8%B3%DB%8C%D9%86-%D8%B2%D9%85%D8%A7%D9%86%DB%8C-%D9%84%D8%A7%D8%B1%DB%8C-27783823a"
            },
            {
              "name": "علی ماهر",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9202.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/alii-maher/"
            },
            {
              "name": "محمدمهدی زمانی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9284.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/mohammadmehdi-zamani/"
            },
            {
              "name": "سيد حسين قيومي",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9277.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/hosein-ghayoomi"
            },
            {
              "name": "ستاره انوری نژاد",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9408.jpg",
              "description": "علمی",
              "linkedin": "http://www.linkedin.com/in/setare-anvari"
            },
            {
              "name": "کوشا زندپارسا",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9298.jpg",
              "description": "علمی",
              "linkedin": "https://www.linkedin.com/in/koosha-zandparsa-4b7b3023a"
            },
            {
              "name": "احمدرضا فرح بخش",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9340.jpg",
              "description": "علمی",
              "linkedin": "؟"
            },
            {
              "name": "منصور سامی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9603.jpg",
              "description": "علمی",
              "linkedin": "http://www.linkedin.com/in/mansour-sami"
            }
          ]
        },
        {
          "name": "انفورماتیک",
          "information": "کمیته انفورماتیک، وظیفه طراحی، راه‌اندازی و پشتیبانی از سایت همایش را بر عهده دارد. سایتی که الان در آن هستید، حاصل تلاش بچه‌های تیم انفورماتیک است.",
          "people": [
            {
              "name": "متین منشی زاده",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9296_VtiXgfN.jpg",
              "description": "سرگروه انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/matin-monshizadeh-b120b9220/"
            },
            {
              "name": "مهدی وکیلی نی ریزی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9189-copy.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/ali-rahimi-6030b7225"
            },
            {
              "name": "حسین رضا اکبری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9581.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/hrakbari/"
            },
            {
              "name": "یوسف اسدی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9186.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/yousof-asadi"
            },
            {
              "name": "علی رحیمی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9206.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/ali-rahimi-6030b7225"
            },
            {
              "name": "محمد مهدی کتیبه",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9198.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/mwlite/in/mehdi-katibeh-23bb12232"
            },
            {
              "name": "محمدعلی کاظمی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9234.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/mohammad-ali-kazemi-50a318240"
            },
            {
              "name": "امیررضا رضوانی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9218.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/amirreza-rezvani/"
            },
            {
              "name": "علی شجاعی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9237.jpg",
              "description": "انفورماتیک",
              "linkedin": "https://www.linkedin.com/in/ali-shojaee-9628a023a/"
            }
          ]
        },
        {
          "name": "تولید محتوا",
          "information": "کمیته تولید محتوا، وظیفه طراحی و تولید محتواهای گرافیکی همایش، مثل پوستر و کلیپ را بر عهده دارد. \r\nهمچنین ضبط و ثبت همه مراحل برگزاری همایش، مانند مراحل آماده‌سازی همایش، فیلمبرداری از آموزش‌ها و…، همه از مسئولیت‌های دوستان ما در تیم تولید محتوا است.",
          "people": [
            {
              "name": "ریحانه اکبری فرد",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9669_qHoOmKf.jpg",
              "description": "سرگروه تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/reihaneh-akbari-fard-558800227/"
            },
            {
              "name": "میلاد نورائی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9215.jpg",
              "description": "تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/milad-nooraei-640820236"
            },
            {
              "name": "پردیس بصیری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_1456.JPG",
              "description": "تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/pardis-basiri-2607a9213"
            },
            {
              "name": "آریا سعادت",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9227.jpg",
              "description": "تولید محتوا",
              "linkedin": "http://www.linkedin.com/in/arya-saadat"
            },
            {
              "name": "شایان باقرنژاد",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9209.jpg",
              "description": "تولید محتوا",
              "linkedin": "http://linkedin.com/in/shayan-baghernejad"
            },
            {
              "name": "سروش عبدالهی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9270.jpg",
              "description": "تولید محتوا",
              "linkedin": "http://www.linkedin.com/in/soroush-abdollahi"
            },
            {
              "name": "یوسف اسدی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9186_vvuK6RS.jpg",
              "description": "تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/yousof-asadi"
            },
            {
              "name": "حسین محمدی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9176.jpg",
              "description": "تولید محتوا",
              "linkedin": "https://www.linkedin.com/in/hossein-mohammadi-732420213"
            }
          ]
        },
        {
          "name": "روابط عمومی",
          "information": "کمیته روابط عمومی، راه ارتباط دانش‌آموزان با همایش و همچنین ارتباط سایر کمیته‌ها با یکدیگر است. \r\nشما می‌توانید از طریق شبکه‌های اجتماعی واتساپ، اینستاگرام و تلگرام، با ما در ارتباط باشید. دوستان ما در کمیته روابط عمومی، پاسخگوی سوالات شما خواهند بود.",
          "people": [
            {
              "name": "ارزو برادران",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9642_.jpg",
              "description": "سرگروه روابط عمومی",
              "linkedin": "https://www.linkedin.com/in/arezoo-baradaran"
            },
            {
              "name": "آزاده برادران",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9650.jpg",
              "description": "روابط عمومی",
              "linkedin": "https://www.linkedin.com/in/azadeh-baradaran"
            },
            {
              "name": "پردیس فرهمندصابر",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9352.jpg",
              "description": "روابط عمومی",
              "linkedin": "http://www.linkedin.com/in/pardis-farahmandsaber"
            },
            {
              "name": "ملیکا گنجی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9999.jpg",
              "description": "روابط عمومی",
              "linkedin": "https://www.linkedin.com/in/melikaganji/"
            },
            {
              "name": "نرجس عبدشاه",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9998.jpg",
              "description": "روابط عمومی",
              "linkedin": "http://www.linkedin.com/in/narjes-abdeshah"
            },
            {
              "name": "فاطمه شیروانی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9564_.jpg",
              "description": "روابط عمومی",
              "linkedin": "https://www.linkedin.com/in/fateme-shirvani-61b44023b"
            }
          ]
        },
        {
          "name": "تبلیغات",
          "information": "کمیته تبلیغات، طراحی و اجرای برنامه‌های تبلیغاتی همایش را بر عهده دارد. \r\nبرای مثال، برنامه‌های تیم تبلیغات، نقشه‌ راه تیم تولید محتوا می‌شوند و نتیجه آن، پست‌های تبلیغاتی همایش ما هستند.",
          "people": [
            {
              "name": "ارسلان جباری",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9462_0Fwckjl.jpg",
              "description": "سرگروه تبلیغات",
              "linkedin": "https://www.linkedin.com/in/arsalan-jabbari-408318203"
            },
            {
              "name": "سوگل بذرافشان",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9446.jpg",
              "description": "تبلیغات",
              "linkedin": "؟"
            },
            {
              "name": "رها راضی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9453.jpg",
              "description": "تبلیغات",
              "linkedin": "https://www.linkedin.com/in/raharazi/"
            },
            {
              "name": "علیرضا علیزاده",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9483.jpg",
              "description": "تبلیغات",
              "linkedin": "https://www.linkedin.com/in/alireza-alizadeh-608033217/"
            },
            {
              "name": "علیرضا جاهدی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9478.jpg",
              "description": "تبلیغات",
              "linkedin": "https://www.linkedin.com/in/alireza-alizadeh-608033217/"
            },
            {
              "name": "علی نیکخو",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9617.jpg",
              "description": "تبلیغات",
              "linkedin": "https://www.linkedin.com/in/ali-nickhoo-158a0723a"
            },
            {
              "name": "نادیا جوانمردی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9456.jpg",
              "description": "تبلیغات",
              "linkedin": "https://www.linkedin.com/in/nadia-javanmardi"
            }
          ]
        },
        {
          "name": "تدارکات",
          "information": "کمیته تدارکات و دکور، مسئولیت طراحی و اجرای دکور همایش، پذیرایی از کادر و شرکت‌کنندگان و همچنین برگزاری مراسم اختتامیه با همکاری سایر کمیته‌ها را بر عهده دارد.",
          "people": [
            {
              "name": "احمد شمس",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9382_UFnpnya.jpg",
              "description": "سرگروه تدارکات",
              "linkedin": "https://www.linkedin.com/in/ahmad-shams-"
            },
            {
              "name": "احمدرضا فرح بخش",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9340_j1nvreW.jpg",
              "description": "تدارکات",
              "linkedin": "https://www.linkedin.com/in/amir-hossein-khoddam-darban-mohammadi-4a582023a"
            },
            {
              "name": "ملیکا زمانی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9347.jpg",
              "description": "تدارکات",
              "linkedin": "http://www.linkedin.com/in/melika-zamani"
            },
            {
              "name": "هلیا شامس",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9470.jpg",
              "description": "تدارکات",
              "linkedin": "http://linkedin.com/in/helia-shames-63387b23a"
            },
            {
              "name": "آناهیتا هوشیار",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9390.jpg",
              "description": "تدارکات",
              "linkedin": "https://www.linkedin.com/in/anahita-houshyar-95187923a"
            },
            {
              "name": "اصلان مرادی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9385.jpg",
              "description": "تدارکات",
              "linkedin": "http://linkedin.com/in/aslan-moradi-99a87123a"
            },
            {
              "name": "پانیذ آذرنیا",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9486.jpg",
              "description": "تدارکات",
              "linkedin": "https://www.linkedin.com/in/paniz-azarnia-28993b23a"
            },
            {
              "name": "ستیا کمالی",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9426.jpg",
              "description": "تدارکات",
              "linkedin": "https://www.linkedin.com/in/setia-kamali-78958223a"
            },
            {
              "name": "امیرحسین خدام",
              "image": "https://api.hocshirazu.ir/media/team_images/IMG_9245.jpg",
              "description": "تدارکات",
              "linkedin": "https://www.linkedin.com/in/amir-hossein-khoddam-darban-mohammadi-4a582023a"
            }
          ]
        }
      ],
      currentGroup: 0,


      hooperSettings: {
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
        breakpoints: {
          500: {
            itemsToShow: 2
          },
          800: {
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 4,
          }
        }
      }
    }

  },
  components: {
    Hooper, Slide, HooperNavigation
  }
}
</script>

<style scoped lang="scss">
.banner {
  background-image: url(~/assets/images/team_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto;
  /* overflow: hidden; */
}

.nav-tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: none;

  li {
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
    margin: 5px 20px;
    padding: 5px 10px;
    text-decoration: none;
    list-style: none;
    border: 3px solid rgba(0, 0, 0, 0);
    transition: 0.4s;


    &.active {
      border: 3px solid white;

    }
  }


}


.person-card {
  background: rgba(254, 254, 254, 0.55);
  /* grayShadow */
  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 15px;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;


  .person-image {
    max-width: 102px;
    max-height: 102px;
    border-radius: 50%;
    margin-bottom: 20px;

  }

  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #004948;
  }

  a {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  p.person-description {
    font-size: 12px;
  }

}

.admin-card {
  background: white;
  transform-origin: left bottom;

  transform: scale(1.25);
}


</style>

<style lang="scss">
.icon {
  width: 50px !important;
  height: 50px !important;

  path:last-child {
    fill: white;
  }
}
.duty-box {
  max-width: 618px;
  width: 100% ;
  min-height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(254, 254, 254, 0.55);
  padding: 10px 15px;

  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 30px 0px 30px 30px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  text-align: justify ;

  color: #004948;
}

</style>
