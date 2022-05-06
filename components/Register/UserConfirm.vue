<template>

  <div>
    <div style="display: flex; justify-content: center; align-items: center">
      <div style="background: #004948; height: 3px; flex-grow: 3;border-radius: 3px"></div>
      <p class="titleSpan" >فرم تعهد نامه</p>
      <div style="background: #004948; height: 3px; flex-grow: 3; border-radius: 3px"></div>
    </div>
    <div class="listDiv">
      <p>اینجانب تعهد می دهم که: </p>
      <ul>
        <li>
          شئونات اسلامی و موازین اخلاقی را رعایت نمایم.
        </li>
        <li>
          پـروتـــــکـل‌ های بهــــــداشـــــتی را رعـــــــایــــت و در طــــــول رویـــــــداد از ماســــــــک استـــــفـــــــاده نمایم.
        </li>
        <li>
          راس ساعت مقرر در هـــــــمایش حضور پیدا کرده و در پایـــــــــــــــان ساعـــــــــــــــــــت مقرر خارج شوم.
        </li>
        <li>
          در حفظ تجهیزات و امکانات دانشگاه کوشا باشم.
        </li>
        <li>
          از وســـایل خود مراقـــــــبت نمــــوده و در صــــورت بروز مشـــــکل مســـئولیت آن را بر عهده میـــگیرم.
        </li>
        <li>
          کلیه ضوابط و شــرایطی را که پیش از همایــش و در طول همایــش اعــلام می‌شود، رعایت نمایم.
        </li>
        <li>
          تمامــــی اطلاعات خواسته شده در مراحـل ثبت نام را به طور دقیق و با صــداقت تکمیــل نمـوده‌ام.
        </li>

      </ul>
      <p> تذکرات :</p>
      <ul>
        <li>بدیـهی اســت مســئولیت حراســت از وســایل شــخصی بــر عــهده دانــش آموز بوده و کـادر برگـزاری
          همایش مسئولیتی در این قبال ندارند.</li>
        <li> مسئولین رویداد در خارج از ساعـات رویداد و  فضای دانشــگاه مسئولیتی در قبال شرکت کـنندگان
          ندارند.</li>
        <li>چنانچه هر زمان عدم صــحت اطلاعــات وارده توسط دانـــش آموز محرز گــردید، فرد خــاطی بــدون
          استرداد وجه پرداختی از شرکت در همایش محروم می شود.</li>
        <li>در صورت بروز هرگونه مسـئله اخلاقی در محیط دانشــگاه، دانــش آموز خــاطی بـدون تذکر قبلی و
          استرداد وجه پرداختی از همایش اخراج خواهد شد.</li>
      </ul>
    </div>


    <div style="display: flex; justify-content: space-between; align-items: center">
      <v-checkbox v-model="check" label="شرایط گفته شده را مطالعه نموده و قبول دارم."></v-checkbox>
      <v-btn class="button-fill" style="color: #FEFEFE" @click="goToNextPage">تکمیل ثبت نام</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserConfirm",
  data(){
    return{
      check:null,
    }
  },
  methods: {
    goToNextPage() {
      this.$store.commit('register/setState', this.$store.state.register.state + 1)
    }
  }
}
</script>

<style scoped>
.titleSpan {
  margin: 10px;
  font-size: 30px;
  color: #004948;
  font-weight: 900 !important;
}

.listDiv {
  margin-right: 2em;
}
ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color:#004948;
  font-weight:bold !important;
  display: inline-block;
  width: 1em;
  margin-top: 10px;
}
</style>
