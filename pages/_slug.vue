<template>
  <v-container class="user-info-container">
    <v-row>  <!-- title -->
      <v-col>
        <div>
          <h1>
            {{ title }}
          </h1>
        </div>
      </v-col>
    </v-row>
    <hr>


    <WPContent :html="'<div>'+content+'</div>'"/>
  </v-container>
</template>

<script>
import WPContent from "@/components/WPContent";

export default {
  async asyncData({params, $axios}) {
    let data = await $axios.$get('pages/' + params.slug)
    return data
  },
  mounted() {
    this.$store.commit('setFooterColor', '#C5E3E3')
  },
  components: {WPContent},
  auth: false
}
</script>

<style scoped>
.user-info-container {
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
  margin-top: 2rem;
}

h1 {
  text-align: center;
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
@media screen  and (max-width: 420px) {
  hr {
    min-width: 200px;

  }
}
</style>
