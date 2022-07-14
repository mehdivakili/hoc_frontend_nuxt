<template>
  <div>
    <p><img src="~/assets/images/success_icon.svg"/> ثبت نام شما با موفقیت انجام شد</p>
    <ul>
      <li>تاریخ برگزاری همایش<br>
        ۲۴ تا ۳۱ تیرماه ۱۴۰۱
      </li>
      <li>به زودی به کانال واتساپ اطلاع رسانی همایش<br>
        اضافه می شوید!
      </li>
      <li>در همایش منتظرتان هستیم!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "success"
}
</script>

<style scoped lang="scss">

div {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD;
  border-radius: 15px;
  padding: 30px 20px;

  p {
    font-size: 24px;
    line-height: 45px;
    text-align: center;
    font-weight: 900;
  }
  ul {
    padding-right: 30px;
  }

  /* identical to box height, or 189% */


}
</style>
