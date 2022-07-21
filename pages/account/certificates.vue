<template>

  <div>
    <v-container class="user-info-container">
      <v-row>  <!-- title -->
        <v-col>
          <div>
            <h2>
              <v-icon>mdi-alert-circle-outline</v-icon>
              گواهی همایش
              <v-icon>mdi-alert-circle-outline</v-icon>

            </h2>
          </div>
        </v-col>
      </v-row>
      <hr>
      <template v-if="certificates != []">
        <div v-for="cer in certificates">
          <v-img :src="cer.image"></v-img>
          <v-row justify="center">
            <v-col md="2" sm="4" cols="6">
              <v-btn class="button-fill" :href="cer.image">دانلود مدرک</v-btn>
            </v-col>
          </v-row>
        </div>
      </template>
      <h2 v-else>مدارک در حال آپلود می باشند، لطفا کمی صبور باشید</h2>
    </v-container>


  </div>
</template>

<script>
export default {
  name: "certificates",
  async asyncData({$axios}) {
    return {certificates: await $axios.$get('/user/certificates/')}
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
  word-break: keep-all;
}

hr {
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
}

.user-info {
  display: flex;
  flex-wrap: wrap;

  p {
    min-width: 300px;
    width: calc(50% - 20px);
    padding-right: 10%;
    word-break: keep-all;
    margin: 10px;
    text-align: right;
  }

  @media screen and (max-width: 1000px) {
    p {
      width: 100%;
    }
  }

}

@media screen and (max-width: 420px) {
  hr {
    min-width: 200px;

  }
}
</style>
