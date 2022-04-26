<template>
  <nav>
    <div>
      <img src="../assets/images/logo.png" alt="" />
      <nuxt-link to="">خانه</nuxt-link>
      <nuxt-link to="">اعتبار سنجی مدرک</nuxt-link>
      <nuxt-link to="">زنگ برنامه نویسی دروه ششم</nuxt-link>
    </div>
    <div>
      <v-btn>ثبت نام</v-btn>
      <v-btn>ورود</v-btn>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped lang="scss">
nav {
  z-index: 2;
}
</style>
