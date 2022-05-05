<template>
  <div style="width: 100%">
    <div class="user-info-container">
      <h2>ویرایش اطلاعات</h2>
      <hr>
      <div class="user-info">
        <Userinfo :is_register="false"/>
      </div>
    </div>
  </div>
</template>

<script>
import Userinfo from "@/components/Register/UserInfo";

export default {
  name: "edit",
  components: {Userinfo}
}
</script>

<style scoped lang="scss">
.user-info-container {
  border: 3px white solid;
  border-radius: 15px;
  padding: 20px;
}

hr {
  background: white;
  height: 3px;
  opacity: 1;
  border-radius: 3px;
}

</style>
