<template>

  <div>
    <div style="display: flex; justify-content: center; align-items: center">
      <div style="background: #004948; height: 3px; flex-grow: 3;border-radius: 3px"></div>
      <span style="margin: 10px; font-size: 30px">فرم تعهد نامه</span>
      <div style="background: #004948; height: 3px; flex-grow: 3; border-radius: 3px"></div>
    </div>
    اینجانب تعهد می دهم که:
    <ul>
      <li>شئونات اسلامی و موازین اخلاقی را رعایت نمایم.</li>
      <li>پـروتـــــکـل‌ های بهــــــداشـــــتی را رعـــــــایــــت و در طــــــول رویـــــــداد از ماســــــــک
        استـــــفـــــــاده نمایم.
      </li>
      <li>با کـــــادر برگـــــــزاری رویداد همــــــکاری لازم را به عمـــــل آورم و نظـــــم و انـــــضــباط را رعــایت
        نمایم.
      </li>
      <li>راس ساعت مقرر در هـــــــمایش حضور پیدا کرده و در پایـــــــــــــــان ساعـــــــــــــــــــت مقرر خارج شوم.
        در حـــــــــــــفظ تجهیزات دانشگاه کوشش کنم و در صورت وارد کردن هرگونه خسارت، آن را جبران
        نمایم.
      </li>
      <li>از وســـایل خود مراقـــــــبت نمــــوده و در صــــورت بروز مشـــــکل مســـئولیت آن را بر عهده میـــگیرم.
      </li>
      <li>
        کلیه ضــــوابط و شرایطی را که پیـــــش از رویداد و در طــــول رویداد اعـلام می‌شود، رعـایت نمایم و
        در صورت نقض هر یک از این قوانین، مسئولین رویداد با اینجانب برخورد خواهند کرد.
      </li>
      <li>تمامــــی اطلاعات خواسته شده در مراحـل ثبت نام را به طور دقیق و با صــداقت تکمیــل نمـوده‌ام
        و چـــنانچه هـــر زمـــان عدم صحــــت این اطـــلاعات مشخــص گردد، بدون استرداد وجه پرداختی از
        شرکت در رویداد محروم شوم.
      </li>
    </ul>
    تذکرات

    <ul>
      <li> بدیـهی اســت مســئولیت حراســت از وســایل شــخصی بــر عــهده دانــش آموز بوده و کـادر برگـزاری
        همایش مسئولیتی در این قبال ندارند.
      </li>
      <li> مسئولین رویداد در خارج از ساعـات رویداد و فضای دانشــگاه مسئولیتی در قبال شرکت کـنندگان
        ندارند.
      </li>
      <li> چنانچه هر زمان عدم صــحت اطلاعــات وارده توسط دانـــش آموز محرز گــردید، فرد خــاطی بــدون
        استرداد وجه پرداختی از شرکت در همایش محروم می شود.
      </li>
      <li> در صورت بروز هرگونه مسـئله اخلاقی در محیط دانشــگاه، دانــش آموز خــاطی بـدون تذکر قبلی و
        استرداد وجه پرداختی از همایش اخراج خواهد شد.
      </li>
    </ul>


    <div style="display: flex; justify-content: space-between; align-items: center">
      <v-checkbox :error-messages="error" v-model="checked"
                  label="شرایط گفته شده را مطالعه نموده و قبول دارم."></v-checkbox>
      <v-btn class="button-fill" style="color: #FEFEFE" @click="goToNextPage">تکمیل ثبت نام</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserConfirm",
  data() {
    return {
      error: "",
      checked: false,

    }
  },
  methods: {
    async goToNextPage() {
      function buildFormData(formData, data, parentKey) {
        if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
          Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}.${key}` : key);
          });
        } else {
          const value = data == null ? '' : data;

          formData.append(parentKey, value);
        }
      }

      if (this.checked) {
        this.$nuxt.$loading.start()
        this.$data.sending = true
        let formData = new FormData()
        try {
          buildFormData(formData, {...this.$store.state.register.userData});
          formData.append('vaccine.vaccine_image', this.$store.state.register.vaccine)
          let response = await this.$auth.loginWith('register', {
            data: formData,
          })

          this.$store.commit('register/setState', this.$store.state.register.state + 1)
        } catch (e) {
          this.$notify({
            group: 'foo',
            type: 'error',

            title: 'خطایی پیش آمده',
          });
          this.$store.commit('register/setState', this.$store.state.register.state - 1)
          this.$store.commit('register/setError', e.response.data)
        } finally {
          this.$nuxt.$loading.finish()

        }
      } else {
        this.error = "شما باید این موارد را تایید کنید"
      }
    }
  },
  watch: {
    checked() {
      this.error = null
    }
  }
}
</script>

<style scoped>
ul {
  margin-right: 20px;
  text-align: justify;
}
</style>
