<template>

  <div style="background-color: #C5E3E3">
    <v-container>
      <v-row>
        <v-col lg="4" sm="12" >
          <v-card style=" background: linear-gradient(146.8deg, #00807E 13.33%, #004746 86.04%);" elevation="2">
            <v-row>
              <v-col cols="12">
                <div class="img-fluid1">
                  <img src="~/assets/images/profile.svg"/>
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
                  <router-link to="/account/edit/" class="menu-item">
                    <img width="20" src="~/assets/images/edit_user.svg"/>
                    ویرایش حساب کاربری
                  </router-link>

                  <a class="menu-item"
                     @click="() => {

                  $nuxt.$loading.start();
                  $auth.logout().then($nuxt.$loading.finish);}"> <img width="20" src="~/assets/images/logout.svg"/>
                    خروج</a>

                </div>
              </v-col>
            </v-row>
          </v-card>

        </v-col>
        <v-col lg="8" sm="12" md="12">
          <div >
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

};
</script>

<style scoped lang="scss">
.profile-menu1{
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
.profile1{
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
.img-fluid1{
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;

    margin: auto;
    border-radius: 50%;
  }
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
        img{
          filter: brightness(200%);

        }

      }
      img{
        margin-left: 20px;
        transition: 0.4s;

      }


    }


  }

}
</style>
