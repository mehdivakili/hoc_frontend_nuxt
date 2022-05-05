<template>
  <v-row justify="center">
    <v-card outlined  elevation="15" class="con">
      <v-card-text >

      <p style="text-align: center; font-weight: bold;">برای ادامه ثبت نام حتما<br />
        در پرسشنامه شرکت کنید.</p>

      </v-card-text>


        <v-btn to="/register/form/" class="button-fill" style="width: 70%;margin-right: 2.5em;margin-bottom: 2em">ورود به پرسشنامه</v-btn>


    </v-card>
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
  background: #C7E4E4;
  border-radius: 8px;

}
</style>
