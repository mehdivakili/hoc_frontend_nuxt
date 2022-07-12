<template>
  <div style="background-color: #C5E3E3;">
    <div style="">
      <v-row class="bigRow" >
        <v-col class="eachCol" v-for="item in items"  md="3" sm="6" xs="12">
          <v-card  class="eachCard">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
              <v-img ></v-img>
            <v-card-title>
              <div>
                {{item.name}}
              </div>

            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="7">
                  <div>
                    {{item.description}}
                  </div>
                </v-col>
                <v-col>

                </v-col>

              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
               color="teal lighten-3"
               elevation="4"
               style="margin-bottom: 1rem;margin-right: 0.5rem"
              >
                اطلاعات بیشتر
                <v-icon
                  left
                  dark
                >
                  mdi-chevron-left
                </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "sponsers",
  data(){
    return{
      items: [
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },
        {
          name:"ایرانسل",
          description:"ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد."
        },

      ]
    }
  }
}
</script>

<style scoped>
.eachCol{
  ;
}
.eachCard{
  margin-left: 0.1rem;
  margin-right: 0.1rem;

}
.bigRow{
  margin-right: 1rem;
  margin-left: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}
</style>
