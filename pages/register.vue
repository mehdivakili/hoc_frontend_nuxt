<template>
  <div class="login">
    <div class="content">
      <v-form style="width: 100% !important;" @submit.prevent="logInUser($store.state.register.userData)" method="post">
        <div class="p-bars">
          <template v-for="(page,index) in pages">
            <div
              :class="['bar',(state === index)? 'bar-current':(state > index) ?'bar-before': '']">
              <div class="bar-icon" @click="state = index">
                <v-icon :size="page.size">{{ page.icon }}</v-icon>
              </div>
              <p>{{ page.title }}</p>

            </div>
            <div v-if="index !== pages.length -1"
                 :class="['line',(state === index)? 'line-current':(state > index) ?'line-before': '']"></div>
          </template>
        </div>
        <Transition name="fade" :duration="350" mode="out-in">

          <Component :is="pages[state].component"/>

        </Transition>
        <div style="display: flex; justify-content: space-between; margin-top: 100px">
          <v-btn class="button-outline" v-on:click="()=>{(!state)?0: state--}">قبلی</v-btn>
          <v-btn class="button-fill" v-on:click="(state===2)? logInUser($store.state.register.userData) : state++">بعدی</v-btn>
          <input type="submit" hidden>
        </div>
      </v-form>
    </div>
    <div class="image">
      <div class="register_sidebar">
      <img id="registerImage" src="~/assets/images/register_image.svg">
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/Register/UserInfo";
import UserPass from "@/components/Register/UserPass";
import UserAddress from "@/components/Register/UserAddress";
import StickySideber from "sticky-sidebar-v2";

export default {
  name: "register",
  data() {
    return {
      state: 0,
      pages: [
        {title: 'اطلاعات شخصی', icon: 'mdi-alert-circle', size: 80, component: UserInfo},
        {title: 'آدرس', icon: 'mdi-map-marker', size: 80, component: UserAddress},
        {title: 'اطلاعات کاربري', icon: 'mdi-account-circle', size: 80, component: UserPass},
      ]

    }
  },
  methods: {
    async logInUser(userData) {
      if (this.$data.sending)
        return
      this.$nuxt.$loading.start()

      try {
        await this.$auth.loginWith('register', {
          data: {
            ...userData,
            // providence: this.providences.filter((providence) => providence.id === userData.providence)[0].name
          },
        })
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'با موفقیت وارد شدید',
          text: 'الان به صفحه پروفایلتان منتقل می شوید'
        });
        this.$store.commit('register/setError', {})


      } catch (error) {
        let text = ''
        if (error.response !== undefined) {
          if (error.response.data.non_field_errors !== undefined) {
            error.response.data.non_field_errors.forEach((value) => {
              text += value
            })
          }
          this.$notify({
            group: 'foo',
            type: 'error',

            title: 'لطفا موارد را با دقت پر کنید',
            text: text
          });
          this.$store.commit('register/setError', error.response.data)
          this.state = 0
        }
      }
      this.$nuxt.$loading.finish()

    }
  },
  mounted() {
    this.$store.commit('setFooterColor', '#A9E3E1');
    var sidebar = new StickySideber('.image', {
      topSpacing: 130,
      bottomSpacing: 30,
      containerSelector: '.login',
      innerWrapperSelector: '.register_sidebar',

      scrollContainer: '#main-viewport'
    });

  },
  auth: 'guest'

}
</script>

<style scoped lang="scss">

.login {
  background: #A9E3E1;
  margin: 30px;
}


@media screen and (min-width: 1000px) {
  .login {
    background: #A9E3E1;
    display: flex;
    justify-content: center;

    .content, .image {
      width: 50%;
      .register_sidebar{
        display: flex;
        justify-content: center;
      }
    }

  }

}


@media screen and (max-width: 1000px) {
  .image {
    display: none;
  }
}

.p-bars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

}

.bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    margin-top: 10px;
    color: white;
    transition: color 0.7s;
  }
}

.bar-icon {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-sizing: border-box;
  background: #A9E3E1;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    color: white;
    transition: color 0.7s;
  }
}

.bar.bar-current {
  i, p {
    color: #004948;
  }
}

.bar-before i {
  color: #004948;
}

.line {
  flex-grow: 10;
  background: white;
  height: 5px;
  margin: 10px;
  position: relative;
  transform: translateY(-20px);

}

.line::after {
  position: absolute;
  height: 5px;
  content: "";
  width: 0;
  background: #004948;
  transition: width 0.7s;

}

.line-before::after {
  width: 100%;
}


</style>

<style>
.vpd-input-group {
  background: white !important;
  height: 48px !important;
  border-radius: 5px !important;

}

.vpd-icon-btn {
  border-radius: 0 5px 5px 0;
}
</style>
