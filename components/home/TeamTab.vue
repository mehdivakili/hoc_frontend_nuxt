<template>
  <div class="banner ">
    <div class="bannerCover " >

      <v-sheet color="rgb(0, 0, 0, 0)" class="mx-auto mt-12 " max-width="auto">

        <v-slide-group single show-arrows mandatory >
          <v-row>


          <v-slide-item
            v-for="(team, n) in teams"
            :key="n"
            v-slot="{ active, toggle }"
          >
            <v-col >
              <v-btn
                class="mx-2 noSelected font-weight-bold"
                :color="active ? 'buttonBox' : ''"
                :input-value="active"
                active-class="buttonBox"
                text
                x-large
                @click="
                  toggle();
                  changeActiveTab(n);
                "
              >
                {{ team.name }}
              </v-btn>
            </v-col>
          </v-slide-item>
          </v-row>
        </v-slide-group>

      </v-sheet>

      <v-window show-arrows  class="overflow-x-hidden overflow-y-auto" >

        <v-window-item
          v-for="n in (activeTab) ?Math.ceil(activeTab.people.length / 4): 0"
          :key="`card-${n}`"
        >
          <v-card color="rgb(0, 0, 0, 0)" height="500">
            <v-row class="fill-height" align="center" justify="center">
              <!-- Inner Boxes -->
              <v-col class="profileContainer">
                <v-row style="align-items: flex-end !important;" justify="center">
                  <v-col
                    style="margin-left: 2em;margin-right: 3em;margin-top: 2em"
                    v-for="j of periodMaker(n)"
                    :key="j"
                    :class="
                      n == 1
                        ? j == 0
                          ? 'groupLeader memberCardContainer'
                          : 'groupMember memberCardContainer'
                        : 'groupMember memberCardContainer'
                    "
                  >
                    <!-- Card's Content -->
                    <v-img
                      :lazy-src="activeTab.people[j].image"
                      :src="activeTab.people[j].image"
                      alt="profile Picture"
                      :class="
                        n == 1
                          ? j == 0
                            ? 'leaderPicture'
                            : 'memberPicture'
                          : 'memberPicture'
                      "
                    ></v-img>
                    <div
                      class="skillText font-weight-bold"
                      :style="
                        n == 1
                          ? j == 0
                            ? 'font-size: 20px;'
                            : 'font-size: 16px;'
                          : 'font-size: 16px;'
                      "
                    >
                      {{ activeTab.people[j].name }}
                    </div>
                    <div
                      class="skillText font-weight-bold"
                      :style="
                        n == 1
                          ? j == 0
                            ? 'font-size: 16px;'
                            : 'font-size: 12px;'
                          : 'font-size: 12px;'
                      "
                    >
                      {{ activeTab.people[j].description }}
                    </div>
                    <a :href="activeTab.people[j].linkedin">
                      <v-img
                        :lazy-src="require(`~/assets/images/linkedin_logo.svg`)"
                        max-height="38"
                        max-width="113"
                        :src="require(`~/assets/images/linkedin_logo.svg`)"
                        alt="linkedIn Icon"
                      ></v-img>
                    </a>
                    <!-- End Of Card's Content -->
                  </v-col>
                </v-row>
              </v-col>
              <!-- End Of Inner Boxes -->
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>
      <div class="groupDutyBoxContainer mb-10">
        <div class="groupDutyBox font-weight-bold">
          {{ groupsInformation(activeTabN) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamTab",
  data() {
    return {


      teams: [],
      model: null,
      activeTabN: 0,

    };
  },
  computed: {
    activeTab(param, n = this.activeTabN) {
      return this.teams[n];
    },
    activeTabCount() {
      return this.activeTab.people.length
    }
  },


  methods: {
    changeActiveTab(n) {
      this.activeTabN = n;
      // console.log("count is", this.teams[n].count);
      this.activeTabCount = this.teams[n].count;
      // Be sure to change (activeTabCount) default num if, first group count changes.
    },
    periodMaker(n) {
      var periodList = [];
      var start = 4 * (n - 1);
      var i = start;
      var highestPage = Math.ceil(this.activeTabCount / 4);
      // console.log("highest page is", highestPage, "n is", n);
      if (n == highestPage && this.activeTabCount % 4 != 0) {
        var end = start + (this.activeTabCount % 4);
      } else {
        var end = 4 * n;
      }
      // console.log("start is", start, "end is", end);
      while (i >= start && i < end) {
        periodList.push(i);
        i++;
      }
      return periodList;
    },
    groupsInformation(n) {
      if (this.activeTab)
        return this.activeTab.information
      return ""
    }
  },
  async mounted() {
    this.teams = (await this.$axios.get('team/')).data

  }
};
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap.scss";
</style>

<style scoped>
.banner {
  background-image: url(~/assets/images/team_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto;
  /* overflow: hidden; */
}

.bannerCover {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(44, 44, 44, 0.7);
}

.profileContainer {


  align-items: flex-end !important;
  width: 70%;
  height: 316px;
}

/* .bringCardDown {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
} */

.noSelected {
  display: flex;
  flex-direction: row;
  /* border: 3px solid #fefefe; */
  box-sizing: border-box;
  border-radius: 15px;
  font-family: "Vazir FD";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #fefefe;
}

.buttonBox {
  display: flex;
  flex-direction: row;
  border: 3px solid #fefefe;
  box-sizing: border-box;
  border-radius: 15px;
  font-family: "Vazir FD";
  font-style: normal;
  font-weight: 550;
  font-size: 20px;
  color: #fefefe;
}

.groupMember {
  background: rgba(254, 254, 254, 0.55);
  /* grayShadow */
  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 15px;
  width: 177px;
  height: 258px;
}

.groupLeader {
  background-color: #efefef;
  width: 217px;
  height: 316px;
  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 15px;
}

.vectorIcon {
  font-size: 60px;
}

.memberCardContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 16px;
  max-width: 250px;
}

.leaderPicture {
  max-width: 102px;
  max-height: 102px;
  border-radius: 50%;
}

.memberPicture {
  border-radius: 50%;

  max-width: 84px;
  max-height: 84px;
}

.skillText {
  font-family: "Vazir FD";
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  text-align: right;

  color: #004948;
}

.groupDutyBoxContainer {
  width: 100%;
  display: flex;
  justify-content: center;

}

.groupDutyBox {
  max-width: 618px;
  width: 100% ;
  min-height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(254, 254, 254, 0.55);
  padding: 10px 15px;

  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 30px 0px 30px 30px;
  font-family: "Vazir FD";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  text-align: justify ;

  color: #004948;
}

.theme--light.v-icon{
  color: rgba(255,255,255, 0.9);
}
</style>
