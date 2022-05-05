<template>
  <div style="width: 100%">
    <div class="user-info-container">
      <h2>اطلاعات حساب کاربری</h2>
      <hr>
      <div class="user-info">
        <p><v-icon>mdi-account</v-icon> نام و نام خانوادگی:  {{$auth.user.first_name_persian}} {{$auth.user.last_name_persian}}</p>
        <p><v-icon>mdi-gender-male-female</v-icon> جنسیت:  {{$auth.user.sex}}</p>
        <p><v-icon>mdi-phone-in-talk</v-icon> شماره تماس:  {{$auth.user.phone_number}}</p>
        <p><v-icon>mdi-email-outline</v-icon> ایمیل:  {{$auth.user.email}}</p>
        <p><v-icon>mdi-map-marker-outline</v-icon> محل سکونت:  {{$auth.user.address}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped lang="scss">
  .user-info-container{
    border: 3px white solid;
    border-radius: 15px;
    padding: 20px;
  }
  hr{
    background: white;
    height: 3px;
    opacity: 1;
    border-radius: 3px;
  }
  .user-info{
    display: flex;
    flex-wrap: wrap;
    p{
      min-width: 300px;
      width: 31%;
      word-break: keep-all;
      margin: 10px;
      text-align: right;
      &:last-child{
        flex-grow: 2;
      }
    }
  }
</style>
