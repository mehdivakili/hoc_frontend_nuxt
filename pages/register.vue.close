<template>
  <div v-if="$route.fullPath.endsWith('register/') || $route.fullPath.endsWith('register')" class="login">
    <div class="content">
      <v-form style="width: 100% !important;" @submit.prevent="logInUser($store.state.register.userData)" method="post">
        <div class="p-bars" ref="bar">
          <template v-for="(page,index) in pages">
            <div :ref="`bar-${index}`"
                 :class="['bar',(state === index)? 'bar-current':(state > index) ?'bar-before': '']">
              <div class="bar-icon">
                <v-icon v-if="page.icon" :size="page.size" :color="(state === index)? 'white' :'#004948'">{{
                    page.icon
                  }}
                </v-icon>
                <component v-else :is="page.iconComponent" :fill="(state === index)? 'white' :'#004948'"
                           :size="page.size"/>
              </div>

              <p>{{ page.title }}</p>
            </div>
            <div :ref="`bar-line-${index}`"
                 :class="['line',(state === index)? 'line-current':(state > index) ?'line-before': '',(index === pages.length -1)?'bar-last':'' ]"></div>
          </template>
        </div>
        <Transition name="fade" :duration="350" mode="out-in">

          <Component ref="page" :is="pages[state].component"/>

        </Transition>
      </v-form>
    </div>
    <div class="image">
      <div class="register_sidebar">
        <img id="registerImage" src="~/assets/images/register_image.svg">
      </div>
    </div>
  </div>
  <NuxtChild v-else/>
</template>

<script>
import UserInfo from "@/components/Register/UserInfo";
import UserPass from "@/components/Register/UserPass";
import Finish from "@/components/Register/Finish";
import UserConfirm from "@/components/Register/UserConfirm";
import StickySidebar from "sticky-sidebar-v2";
import UserForm from "@/components/Register/UserForm";

import CertificateSvg from "@/components/icons/certificate.svg"
import PhoneValidationSvg from "@/components/icons/phone_validation.svg"
import FinishFlag from "@/components/icons/finish_flag.svg"
import UserPhoneVerify from "@/components/Register/UserPhoneVerify";

export default {
  name: "register",
  head() {
    return {
      title: 'ثبت نام'
    }
  },
  data() {

    return {
      oldState: -1,
      pages: [
        {title: 'تاييد شماره موبايل', iconComponent: PhoneValidationSvg, size: 67, component: UserPhoneVerify},
        {title: 'اطلاعات شخصی', icon: 'mdi-alert-circle', size: 80, component: UserInfo},
        {title: 'اطلاعات کاربری', icon: 'mdi-account-circle', size: 80, component: UserPass},
        {title: 'پرسشنامه', icon: 'mdi-help-circle', size: 80, component: UserForm},
        {title: 'تعهد نامه', iconComponent: CertificateSvg, size: 67, component: UserConfirm},
        {title: 'پرداخت و پایان', iconComponent: FinishFlag, size: 67, component: Finish},
      ]

    }
  },
  computed: {
    state: {
      get() {
        this.scrollBar()
        return this.$store.state.register.state
      },
      set(data) {
        return this.$store.commit('register/setState', data)
      }
    }
  },
  mounted() {
    if (this.$auth.loggedIn) {
      if (this.$auth.user.is_purchased)
        return this.$router.push("/account/")
      this.$store.commit('register/setState', 5)
      this.$store.commit('register/setUserData', {...this.$auth.user})
    } else {
      this.$store.commit('register/setState', 0)
    }
    if (this.$route.fullPath.endsWith('register/') || this.$route.fullPath.endsWith('register')) {
      this.$store.commit('setFooterColor', '#C5E3E3');
      var sidebar = new StickySidebar('.image', {
        topSpacing: 130,
        bottomSpacing: 30,
        containerSelector: '.login',
        innerWrapperSelector: '.register_sidebar',

        scrollContainer: '#main-viewport'
      });
    }
    setInterval(this.scrollBar.bind(this), 1000)
  },
  methods: {
    scrollBar() {
      let s = this.$store.state.register.state;
      let t = this
      if (this.oldState !== s) {
        let content = this.$refs.bar
        if (content) {
          let pre = (s === 0) ? '' : 'line-'
          this.$refs['bar-' + pre + s][0].scrollIntoView({behavior: 'smooth', block: "center"})
          setTimeout(function () {
            t.oldState = s
          }, 500)
        }
      }
    }
  },
  auth: false,

}
</script>

<style scoped lang="scss">

.login {
  background: #C5E3E3;
  margin: 30px;
}


@media screen and (min-width: 1000px) {
  .login {
    background: #C5E3E3;
    display: flex;
    justify-content: center;

    .content, .image {
      width: 50%;

      .register_sidebar {
        display: flex;
        justify-content: center;
      }
    }

  }

}

.p-bars {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

}

@media screen and (max-width: 1420px) {
  .image {
    display: none;
  }
}

.bar-last {
  opacity: 0;
  display: none;

}

@media screen and (max-width: 1420px) {
  .bar-last {
    display: block;
  }
  .p-bars {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    overflow-x: scroll;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
    transition: 0.4s;

    &::-webkit-scrollbar {
      display: none;
    }
  }
  .line {
    min-width: 50px;
  }
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
    white-space: nowrap;
  }
}

.bar-icon {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  box-sizing: border-box;
  background: #C5E3E3;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  i, svg {
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
  border-radius: 15px !important;

}

.vpd-icon-btn {
  border-radius: 0 5px 5px 0;
}
</style>
