<template>
<footer>
  <div id="footer-wave" :style="{'--bgColor': bgColor}"></div>
  <div class="footer-content">
    <div class="footer-info">
      <h5> ارتباط با ما: </h5>
      <p>
        <v-icon>mdi-phone</v-icon>
        <a href="tel:09170001234">
          ۰۹۱۷۰۰۰۱۲۳۴
        </a>
        <v-icon>mdi-phone</v-icon>
      </p>
      <p>
        <v-icon>mdi-email</v-icon>
        support@hocshirazu.ir
        <v-icon>mdi-email</v-icon>
      </p>
      <h5>با زنگ برنامه نویسی در شبکه های اجتماعی باشید !</h5>
      <div class="footer-contacts">
        <a href="https://t.me/hocshirazu">
          <img src="~/assets/images/telegram.png">
        </a>
        <a href="https://www.instagram.com/hocshirazu/">
          <img src="~/assets/images/instagram.png">
        </a>
        <a href="https://www.linkedin.com/company/hocshirazu/">
          <img src="~/assets/images/linkedin.png">
        </a>
      </div>
    </div>
    <div class="footer-logos">
      <a href="https://hourofcode.com/ir">
        <img src="~/assets/images/logo.png">
        <p>زنگ برنامه نویسی بین المللی</p>
      </a>
      <a href="https://shirazu.ac.ir/">
        <img src="~/assets/images/shiraz.png">
        <p>دانشگاه شیراز</p>
      </a>
      <a href="https://acm.shirazu.ac.ir/">
        <img src="~/assets/images/acm.png">
        <p>انجمن ACM</p>
      </a>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: {
    bgColor: {
      default: 'white'
    }
  }
}
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 100px;
  overflow: hidden;
  color: black;
}

@media screen and (min-width: 500px) {}

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
