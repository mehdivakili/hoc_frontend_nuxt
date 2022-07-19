<template>

  <div>
    <v-container class="user-info-container">
      <template v-if="!!items[0]">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          color="black"
          grow
        >
          <v-tab tag="h2"
                 v-for="item in items"
                 :key="item.slug"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="custom-tab-items">

          <v-tab-item style="padding: 20px"
                      v-for="item in items"
                      :key="item.slug"
          >
            <WPContent :html="'<div>'+item.content+'</div>'"></WPContent>
          </v-tab-item>
        </v-tabs-items>
      </template>
      <h1 v-else style="text-align: center">محتوایی هنوز آپلود نشده</h1>
    </v-container>


  </div>
</template>

<script>
import WPContent from "@/components/WPContent";

export default {
  name: "content",
  components: {WPContent},
  async asyncData({$axios}) {
    return {items: await $axios.$get('pages/user/pages/')}
  },
  data() {
    return {
      tab: null
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

@media screen and (max-width: 600px){
  .user-info-container{
    width: calc(100vw - 20px);
  }
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

.custom-tab-items {
  background-color: transparent !important;
}
</style>
