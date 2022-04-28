<template>
  <v-row justify="center">
    <v-col cols="12" md="6" class="con">
      <p>برای ادامه ثبت نام حتما
        در پرسشنامه شرکت کنید.</p>
      <v-btn to="/register/form/" class="button-fill" style="width: 100%">ورود به پرسشنامه</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UserForm"
}
</script>

<style scoped>
.con {
  margin-top: 100px;
  max-width: 300px;
  background: white;
  border-radius: 15px;
  padding: 40px;

}
</style>
