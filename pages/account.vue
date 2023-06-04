<template>

  <div style="background-color: #C5E3E3">
    <v-container>
      <v-row>
        <v-col lg="4" sm="12">
          <v-card
            style=" background: linear-gradient(146.8deg, #00807E 13.33%, #004746 86.04%); margin-top: 12px; border-radius: 15px;"
            elevation="2">
            <v-row>
              <v-col cols="12">
                <div>
                  <p class="user_name"><v-icon color="#C5E3E3">mdi-alert-octagram-outline</v-icon>برای <span style="color: #C62828">آپلود</span> عکس، روی عکس کلیک نمایید<v-icon color="#C5E3E3">mdi-alert-octagram-outline</v-icon></p>
                  <div class="img-fluid1" style="position: relative">
                    <input class="file-input" type="file" ref="im" @change="uploadImage"/>
                    <img :src="getUrl"/>
                  </div>
                  <v-row justify="center">
                    <v-col cols="10" md="5">
                      <v-row justify="center">
                        <v-btn class="button-fill" style="z-index: 1001" v-show="file" @click="realUploadImage">ارسال</v-btn>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
              <v-col cols="12">
                <div class="profile1">
                  <p class="user_name">
                    {{ $auth.user.first_name_persian }}
                    {{ $auth.user.last_name_persian }}
                  </p>
                  <p class="national_code">
                    {{ $auth.user.national_code }}
                  </p>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="profile-menu1">
                  <router-link to="/account/" class="menu-item">
                    <img width="20" src="~/assets/images/dashboard.svg"/>
                    داشبورد
                  </router-link>
                  <router-link to="/account/content/" class="menu-item">
                    <img width="20" src="~/assets/images/dashboard.svg"/>
                    محتوا
                  </router-link>
                  <router-link to="/account/edit/" class="menu-item">
                    <img width="20" src="~/assets/images/edit_user.svg"/>
                    ویرایش حساب کاربری
                  </router-link>
<!--                  <router-link to="/account/ScoreBoard/" class="menu-item">-->
<!--                    <img width="20" src="~/assets/icons/team.svg"/>-->
<!--                    باشگاه زنگ برنامه نویسی-->
<!--                  </router-link>-->
<!--                  <router-link to="/account/quiz/" class="menu-item">-->
<!--                    <img width="20" src="~/assets/icons/quiz_icon.svg"/>-->
<!--                    کوییز-->
<!--                  </router-link>-->
<!--                  <router-link to="/account/GroupSelection/" class="menu-item">-->
<!--                    <img width="20" src="~/assets/icons/group.svg"/>-->
<!--                    انتخاب گروه همایش-->
<!--                  </router-link>-->

                  <router-link to="/account/certificates/" class="menu-item">
                    <img width="20" src="~/assets/icons/group.svg"/>
                    مدارک همایش
                  </router-link>

                  <a class="menu-item"
                     @click="() => {

                  $nuxt.$loading.start();
                  $auth.logout().then($nuxt.$loading.finish);}"> <img width="20" src="~/assets/images/logout.svg"/>
                    خروج از حساب کاربری</a>

                </div>
              </v-col>
            </v-row>
          </v-card>

        </v-col>
        <v-col lg="8" sm="12" md="12">
          <div>
            <NuxtChild></NuxtChild>
          </div>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<script>


export default {
  name: "account",
  head() {
    return {
      title: 'حساب کاربری'
    }
  },
  data() {
    return {
      file: null
    }
  },
  mounted() {
    this.$store.commit('setFooterColor', '#C5E3E3')
  },
  methods: {
    uploadImage(event) {
      const reader = new FileReader();
      let t = this
      reader.addEventListener('load', (event) => {
        t.file = event.target.result;
      });
      if (event.target.files[0])
        reader.readAsDataURL(event.target.files[0])
    },
    async realUploadImage() {
      this.$nuxt.$loading.start()
      let form = new FormData();
      form.append('image', this.$refs.im.files[0])
      try {
        await this.$axios.$put('/user/profile_image/', form);
        await this.$auth.fetchUser()
        this.$notify({
          group: 'foo',
          type: 'success',

          title: 'عکس با موفقیت آپلود شد',
        });
      } catch (e){
        this.$notify({
          group: 'foo',
          type: 'error',

          title: 'ارسال عکس با مشکل مواجه شد',
        });
      }

      this.file = null
      this.$nuxt.$loading.finish()

    }

  },
  computed: {
    getUrl() {
      if (this.file) {
        return this.file
      } else if (this.$auth.user.profile.image) {
        return "https://api.hocshirazu.ir/" + this.$auth.user.profile.image
      } else {
        return require("~/assets/images/profile.svg")
      }
    }
  }

};
</script>

<style scoped lang="scss">
.profile-menu1 {
  .menu-item {
    display: block;
    background: #C5E3E3;
    padding: 20px;
    border-radius: 15px;
    font-weight: bold;
    text-decoration: none;
    color: #004948;
    margin-top: 20px;
    margin-bottom: 2em;
    margin-right: 1.5em;
    margin-left: 1.5em;
    transition: 0.4s;

    &.nuxt-link-exact-active {
      color: #00928F;

      img {
        filter: brightness(200%);

      }

    }

    img {
      margin-left: 20px;
      transition: 0.4s;

    }
  }
}
.user_name {
  margin: 10px;
  font-weight: bold;
  font-size: 17px;
  color: #C5E3E3;
  text-align: center;


}
.profile1 {
  p {
    text-align: center;
    color: #C5E3E3;

    &.national_code {
      margin: 0;
    }

  }
}

.img-fluid1 {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  width: 150px;
  margin: auto;

  img {
    max-width: 100%;
    width: 150px;
    height: 150px;

    margin: auto;
    border-radius: 50%;
  }
}

.file-input {
  opacity: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  cursor: pointer;

}

.sidebar__inner {
  background: linear-gradient(146.8deg, #00807E 13.33%, #004746 86.04%);
  border-radius: 20px;
  padding: 20px;
  width: 300px;

  .profile {
    background: none;
    border-radius: 15px;
    margin-bottom: 20px;


    .img-fluid {
      display: flex;
      justify-content: center;

      img {
        max-width: 100%;

        margin: auto;
        border-radius: 50%;
      }
    }

    p {
      text-align: center;
      color: #C5E3E3;

      &.user_name {
        margin: 10px;
        font-weight: bold;
        font-size: 20px;
      }

      &.national_code {
        margin: 0;
      }

    }
  }

  .profile-menu {
    .menu-item {
      display: block;
      background: #C5E3E3;
      padding: 20px;
      border-radius: 15px;
      font-weight: bold;
      text-decoration: none;
      color: #004948;
      margin-top: 20px;
      margin-bottom: 0;

      transition: 0.4s;

      &.nuxt-link-exact-active {
        color: #00928F;

        img {
          filter: brightness(200%);

        }

      }

      img {
        margin-left: 20px;
        transition: 0.4s;

      }


    }


  }

}
</style>
