<template>
  <div class="banner">
    <div class="out">
      <div class="squire">
        <h5>تـــعـــداد دانـــش آمـــوزان
          شرکت کننده تا به امروز </h5>
        <p>۲۰۰۰ +</p>
      </div>
      <div class="squire">
        <h5>تــعــداد دفــعــات
          برگزاری همایش</h5>
        <p>۶</p>
      </div>
      <div class="squire">
        <h5>تــعــداد کــشــور هــای
          برگزار کننده همایش</h5>
        <p>۱۸۰ +</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics"
}
</script>

<style scoped lang="scss">
.banner{
  background: #FEFEFE;
}
.squire {
  background: #ECF0F3;

  padding: 10px;
  margin-bottom: 10px;
  box-sizing: border-box;


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

    background: linear-gradient(104.71deg, #00ADAA 11.26%, #00928F 90.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;

  }
}

@media screen and (min-width: 600px){
  .squire {
    padding: 40px;
    margin-left: 60px;
    margin-bottom: 60px;
    width: 27%;
    min-width: 300px;
    box-shadow: inset -18px -18px 30px #FFFFFF, inset 18px 18px 30px #D1D9E6;
    border-radius: 15px;
  }
  .banner {
    padding: 100px;
  }

  .out {
    display: flex;
    justify-content: center;
    background: #ECF0F3;
    padding: 80px 80px 20px 20px;
    flex-wrap: wrap;
    /* shadow-neu */

    box-shadow: -18px -18px 30px #FFFFFF, 18px 18px 30px #D1D9E6;
    border-radius: 15px;
  }
}




</style>
