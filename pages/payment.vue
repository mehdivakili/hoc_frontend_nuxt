<template>
  <div class="bigDiv">
    <div class="box">
      <NuxtChild/>
      <v-btn to="/account/" class="button-fill payment-btn" style="width: 100%">ورود به حساب کاربری</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "payment",
  head(){
    return{
      title: 'پرداخت'
    }
  },
}
</script>

<style scoped lang="scss">
.bigDiv {
  background-color: #C5E3E3;
  padding: 10px;
  min-height: 80vh;
  position: relative;
  display: flex;
}

.box {
  margin: auto;
  width: 500px;
  padding: 20px;
  background: #C5E3E3;
  /* sabz-bar */

  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD;
  border-radius: 36px;
  color: #00928F;

  .payment-btn{
    margin-top: 20px;
  }

}

</style>
