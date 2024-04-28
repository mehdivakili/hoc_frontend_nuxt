<template>
  <v-footer
    class="bg-indigo-lighten-1 flex-shrink-0 text-center d-flex flex-column"
  >
    <div
      class="container mt-10 text-right mx-auto p-2 flex flex-wrap justify-between"
    >
      <div class="w-full md:w-1/4 mb-6 md:mb-0">
        <h3 class="text-xl font-bold mb-3">ساعت کد زنی</h3>
        <p class="text-gray-600 leading-loose pl-10 text-justify">
          Hour of Code یا زنگ برنامه‌ نویسی یک رویداد جهانی است که توسط Code.org
          ایجاد شده است و با هدف آشنا کردن دانش‌آموزان با علم کامپیوتر و گسترش
          مشارکت در این زمینه، هرساله در هفتۀ جهانی آموزش علوم کامپیوتر برگزار
          می‌شود. شرکت‌های بزرگی مانند گوگل، فیسبوک، آمازون و مایکروسافت از این
          رویداد حمایت می‌کنند.
        </p>
      </div>
      <div class="w-full md:w-1/4 mb-6 md:mb-0">
        <h3 class="text-xl font-bold mb-3">سامانه های مرتبط</h3>
        <div class="flex mt-10 text-center items-center gap-5">
          <a class="no-underline" href="https://hourofcode.com/ir">
            <img
              class="mx-auto"
              width="70"
              height="70"
              src="~/assets/images/logo.png"
            />
            <p>زنگ برنامه نویسی بین المللی</p>
          </a>
          <a class="no-underline" href="https://shirazu.ac.ir/">
            <img class="mx-auto" src="~/assets/images/shiraz.svg" />
            <p>دانشگاه شیراز</p>
          </a>
          <a class="no-underline" href="https://acm.shirazu.ac.ir/">
            <img class="mx-auto" src="~/assets/images/acm.png" />
            <p>انجمن ACM</p>
          </a>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-gray-500 mt-5"></div>
      </div>
      <div class="w-full md:w-1/4 mb-6 md:mb-0">
        <h3 class="text-xl font-bold mb-3">تماس با ما</h3>
        <ul class="text-gray-600 leading-loose">
          <li>شماره پشتیبانی: 09919170034</li>
          <li>
            <a href="mailto:support@hocshirazu.ir">
              ایمیل: support@hocshirazu.ir</a
            >
          </li>
        </ul>
        <div class="mt-5 flex gap-5 flex-col md:flex-row">
          <a href="https://t.me/hocshirazu">
            <img src="~/assets/images/telegram.svg" />
          </a>
          <a href="https://www.instagram.com/hocshirazu/">
            <img src="~/assets/images/instagram.svg" />
          </a>
          <a href="https://www.linkedin.com/company/hocshirazu/">
            <img src="~/assets/images/linkedin.svg" />
          </a>
        </div>
      </div>
    </div>

    <div>© {{ new Date().getFullYear() }} — <strong>HOC</strong></div>
  </v-footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    bgColor: {
      default: "white",
    },
  },
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  color: black;
}

@media screen and (min-width: 500px) {
}

.footer-logos {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 600px;
  margin: 30px auto;
  gap: 50px;
  flex-wrap: wrap;
}

.footer-logos a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.footer-logos a img {
  width: 90px;
}

.footer-logos a p {
  margin-top: 6px;
  font-size: 13px;
}

.footer-info {
  text-align: center;
  z-index: 1;
}

.footer-info p {
  margin-bottom: 0;
}

.footer-info h5 {
  margin-top: 15px;
}

.footer-contacts {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px auto;
  max-width: 400px;
}

@media screen and (min-width: 1000px) {
  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }

  #footer-wave {
    display: block;
    position: relative;
    height: 40px;
    background: var(--bgColor);
  }

  #footer-wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: white;
    right: -25%;
    top: 20px;
  }

  #footer-wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background: var(--bgColor);
    left: -25%;
    top: -240px;
  }

  .footer-info {
    width: 50%;
  }
}
</style>
