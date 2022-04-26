<template>
  <div class="main-content">
    <div class="content">
      <NuxtChild></NuxtChild>
    </div>
    <div id="sidebar" class="sidebar">
      <div class="sidebar__inner">
        <div class="profile">
          <div class="img-fluid">
            <img src="~/assets/images/profile.png" />
          </div>
          <p>
            {{ $auth.user.first_name_persian }}
            {{ $auth.user.last_name_persian }}
          </p>
        </div>
        <div class="profile-menu">
          <p class="menu-item">
            <v-icon size="15">mdi-circle</v-icon>
            <router-link to="/account/">داشبورد</router-link>
          </p>
          <p class="menu-item">
            <v-icon size="15">mdi-circle</v-icon>
            <router-link to="/account/edit/">ویرایش حساب کاربری</router-link>
          </p>
          <p class="menu-item">
            <v-icon size="15">mdi-circle</v-icon>
            <a
              @click="
                () => {
                  $nuxt.$loading.start();
                  $auth.logout().then($nuxt.$loading.finish);
                }
              "
              >خروج</a
            >
          </p>
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
    this.$store.commit("setFooterColor", "#A9E3E1");
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
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 20px;
  width: 300px;

  .profile {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
    .img-fluid {
      display: flex;
      justify-content: center;
      padding: 0 20px;
      img {
        max-width: 100%;

        margin: auto;
        border-radius: 50%;
      }
    }
    p {
      text-align: center;
      margin-top: 10px;
    }
  }
  .profile-menu {
    .menu-item {
      background: rgba(255, 255, 255, 0.5);
      padding: 20px;
      border-radius: 15px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
