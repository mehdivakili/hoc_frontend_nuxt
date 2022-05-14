<template>
  <div class="main-content">
    <div class="content">
      <NuxtChild></NuxtChild>
    </div>
    <div id="sidebar" class="sidebar">
      <div class="sidebar__inner">
        <div class="profile">
          <div class="img-fluid">
            <img src="~/assets/images/profile.svg"/>
          </div>
          <p class="user_name">
            {{ $auth.user.first_name_persian }}
            {{ $auth.user.last_name_persian }}
          </p>
          <p class="national_code">
            {{ $auth.user.national_code }}
          </p>
        </div>
        <div class="profile-menu">
            <router-link to="/account/" class="menu-item">
              <img width="20" src="~/assets/images/dashboard.svg"/>
              داشبورد
            </router-link>
          <router-link to="/account/edit/" class="menu-item">
            <img width="20" src="~/assets/images/edit_user.svg"/>
            ویرایش حساب کاربری
          </router-link>
          <router-link to="/account/ScoreBoard/" class="menu-item">
            <img width="20" src="~/assets/images/edit_user.svg"/>
            باشگاه زنگ برنامه نویسی
          </router-link>
          <a class="menu-item"
            @click="() => {
                  $nuxt.$loading.start();
                  $auth.logout().then($nuxt.$loading.finish);}"> <img width="20" src="~/assets/images/logout.svg"/>
            خروج</a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StickySidebar from "sticky-sidebar-v2";
import StickySideber from "sticky-sidebar-v2";

export default {
  name: "account",
  mounted() {
    this.$store.commit("setFooterColor", "#C5E3E3");
    var sidebar = new StickySideber(".sidebar", {
      topSpacing: 120,
      bottomSpacing: 20,
      containerSelector: ".main-content",
      innerWrapperSelector: ".sidebar__inner",

      scrollContainer: "#main-viewport",
    });
  },
};
</script>

<style scoped lang="scss">
.main-content {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  margin: 20px;
  gap: 20px;
}

.content {
  width: calc(100vw - 380px);
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
