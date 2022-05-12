<template>
  <div style="width: 100%">
    <div class="user-info-container">
      <h2>
        <img width="20" src="~/assets/icons/edit.svg"/>
        ویرایش اطلاعات حساب کاربری
        <img width="20" src="~/assets/icons/edit.svg"/>
      </h2>
      <hr>
      <div class="user-info">
        <Userinfo :is_register="false"/>
        <v-btn class="edit_btn" @click="edit_user">ذخیره اطلاعات</v-btn>

      </div>
    </div>
  </div>
</template>

<script>
import Userinfo from "@/components/Register/UserInfo";

export default {
  name: "edit",
  components: {Userinfo},
  methods: {
    async edit_user() {
      this.$nuxt.$loading.start()
      try {
        let store = this.$store
        await this.$axios.patch('edit_user/', {
          ...store.state.register.userData
        })
        await this.$auth.fetchUser()
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'اطلاعات با موفقیت ذخیره شد',
        });
        this.$store.commit('register/setError', {})

        this.$router.push("/account/")
      } catch (error) {
        this.$store.commit('register/setError', error.response.data)
        this.$notify({
          group: 'foo',
          type: 'error',
          title: 'خطایی پیش آمده',
        });
      } finally {
        this.$nuxt.$loading.finish()

      }

    }
  }
}
</script>

<style scoped lang="scss">
.user-info-container {
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
}

h2 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 40px 0;
}

hr {
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
}

.edit_btn {
  box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
  filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
  background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
  border-radius: 15px;
  padding: 10px 15px;
  border: none;
  width: 100%;
  height: 50px !important;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #FEFEFE;
  margin-top: 20px;
}

.vpd-input-group {
  background: white !important;
  height: 48px !important;
  border-radius: 15px !important;

}

</style>
