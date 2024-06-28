<template>
  <div>
    <p>
      <img src="~/assets/images/success_icon.svg" /> ثبت نام شما با موفقیت انجام
      شد
    </p>
    <ul>
      <li>
        تاریخ برگزاری همایش<br />
        ۱۳ تا ۱۹ مرداد ۱۴۰۳
      </li>
      <li>
        به زودی به کانال واتساپ اطلاع رسانی همایش<br />
        اضافه می شوید!
      </li>
      <li>در همایش منتظرتان هستیم!</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "success",
};
</script>

<style scoped lang="scss">
div {
  background: #c5e3e3;
  box-shadow: inset -18px -18px 30px #e0f0f0, inset 18px 18px 30px #98cdcd;
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
