<template>
  <v-row class="bigRow">
    <v-col class="eachCol" v-for="item in items" md="3" sm="6" xs="12">
      <v-card class="eachCard">
        <v-img :src="item.image"/>
        <v-row align="center">
          <v-col cols="12" md="8">
            <h3 style="font-size: 20px; font-weight: bold">
              {{ item.name }}
            </h3>
            <p style="font-size: 14px">
              {{ item.description }}
            </p>
            <v-btn
              class="button-fill"
            >
              اطلاعات بیشتر
              <v-icon style="margin-right: 10px"
                      left
                      dark
              >
                mdi-chevron-left
              </v-icon>
            </v-btn>
          </v-col>
          <v-col class="d-none d-md-flex">
            <medal :fill="getColor(item.status)"></medal>
          </v-col>
        </v-row>

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MedalsSvg from "@/components/icons/medal.svg";

export default {
  name: "sponsers",
  components: {'medal': MedalsSvg},
  auth: false,

  data() {
    return {
      items: [
        {
          name: "سروناز",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "gold",
          image: require("~/assets/images/sarvenaz.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "gold",
          image: require("~/assets/images/jalbo.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "gold",
          image: require("~/assets/images/seven.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "gold",
          image: require("~/assets/images/hab.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "silver",
          image: require("~/assets/images/derak.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "silver",
          image: require("~/assets/images/itool.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "silver",
          image: require("~/assets/images/acmm.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "silver",
          image: require("~/assets/images/vhd.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "bronze",
          image: require("~/assets/images/abrak.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "bronze",
          image: require("~/assets/images/khaier.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "bronze",
          image: require("~/assets/images/acmm.png")
        },
        {
          name: "ایرانسل",
          description: "ایرانسل یکی از حامیان هفتمین دوره\n" +
            "زنگ برنامه نویسی میباشد.",
          status: "bronze",
          image: require("~/assets/images/shirazu.png")
        },

      ]
    }
  },
  methods: {
    getColor(status) {
      if (status === 'gold')
        return "#FFCF00"
      if (status === 'silver')
        return "#89939A"
      if (status === 'bronze')
        return "#967444"
    }
  },
  mounted() {
    this.$store.commit('setFooterColor', "#C5E3E3")
  }
}
</script>

<style scoped lang="scss">
.eachCol {;
}

.eachCard {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
  padding: 12px;
  border-radius: 8px;

  h3, p {
    color: #004948;
  }

}

.bigRow {
  margin-right: 1rem;
  margin-left: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}
</style>
