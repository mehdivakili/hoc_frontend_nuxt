<template>
  <div class="banner">
    <v-container class="out">
      <div class="squire">
        <h5>تـــعـــداد دانـــش آمـــوزان شرکت کننده تا به امروز</h5>
        <p>۱۲۰۰ +</p>
      </div>
      <div class="squire">
        <h5>تــعــداد دفــعــات برگزاری همایش</h5>
        <p>۷</p>
      </div>
      <div class="squire">
        <h5>تــعــداد کــشــور هــای برگزار کننده همایش</h5>
        <p>۱۸۰ +</p>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Statistics",
};
</script>

<style scoped lang="scss">
.banner {
  background: #fefefe;
  padding: 50px 10px;
}
.squire {
  background: #ecf0f3;

  box-sizing: border-box;
  padding: 40px;
  margin-left: 60px;
  margin-bottom: 60px;
  width: 27%;
  min-width: 300px;
  box-shadow: inset -18px -18px 30px #ffffff, inset 18px 18px 30px #d1d9e6;
  border-radius: 15px;

  h5 {
    font-weight: 900;
    font-size: 24px;
    color: #004948;
    text-align: center;
  }

  p {
    font-style: normal;
    font-weight: 900;
    font-size: 60px;
    margin-top: 20px;
    /* identical to box height, or 50% */

    text-align: center;

    /* gradient-button */

    background: linear-gradient(104.71deg, #00adaa 11.26%, #00928f 90.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
}

.out {
  display: flex;
  justify-content: center;
  background: #ecf0f3;
  padding: 80px 80px 20px 20px;
  flex-wrap: wrap;
  /* shadow-neu */

  box-shadow: -18px -18px 30px #ffffff, 18px 18px 30px #d1d9e6;
  border-radius: 15px;
}

@media screen and (min-width: 600px) {
  .banner {
    padding: 100px;
  }
}
</style>
