<template>
  <v-row class="bigRow">
    <v-col class="eachCol" v-for="item in items" md="3" sm="6" xs="12">
      <v-card class="eachCard">
        <v-img :src="item.image"/>
        <v-row align="center">
          <v-col cols="8">
            <h3 style="font-size: 20px; font-weight: bold">
              {{ item.name }}
            </h3>
            <p style="font-size: 14px">
              {{ item.description }}
            </p>
            <v-btn
              class="button-fill"
              :href="item.link"
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
          <v-col class="d-md-flex">
            <medal class="medal" :fill="getColor(item.status)"></medal>
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
          name: "گالری سروناز",
          description: "...",
          status: "gold",
          image: require("~/assets/images/sarvenaz.png"),
          link: "https://www.instagram.com/sarv_e_naz_gallery/"
        },
        {
          name: "جالبو",
          description: "...",
          status: "gold",
          image: require("~/assets/images/jalbo.png"),
          link: "https://jalbo.net/"
        },
        {
          name: "سون لرن",
          description: "...",
          status: "gold",
          image: require("~/assets/images/seven.png"),
          link: "https://7learn.com/"
        },
        {
          name: "هاب شیراز",
          description: "...",
          status: "gold",
          image: require("~/assets/images/hab.png"),
          link: "https://hubshiraz.ir/"
        },
        {
          name: "ابر دراک",
          description: "...",
          status: "silver",
          image: require("~/assets/images/derak.png"),
          link: "https://derak.cloud/"
        },
        {
          name: "آیتول",
          description: "...",
          status: "silver",
          image: require("~/assets/images/itool.png"),
          link: "https://itoll.ir/"
        },
        {
          name: "آیتن",
          description: "...",
          status: "silver",
          image: require("~/assets/images/iten.png"),
          link: ""
        },
        {
          name: "گروه هنری VHD",
          description: "...",
          status: "silver",
          image: require("~/assets/images/vhd.png"),
          link: ""
        },
        {
          name: "آبرک",
          description: "...",
          status: "bronze",
          image: require("~/assets/images/abrak.png"),
          link: "https://www.instagram.com/abrak.home/"
        },
        {
          name: "بنیاد نخبگان و مجمع خیران",
          description: "...",
          status: "bronze",
          image: require("~/assets/images/khaier.png"),
          link: ""
        },
        {
          name: "استعدادهای درخشان",
          description: "...",
          status: "bronze",
          image: require("~/assets/images/estedad.png"),
          link: ""
        },
        {
          name: "پویش بانوان استاد",
          description: "...",
          status: "bronze",
          image: require("~/assets/images/banovan.png"),
          link: ""
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

.medal{
  width: 80%;
}


</style>
