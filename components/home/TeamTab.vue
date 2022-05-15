<template>
  <div class="banner">
    <div class="bannerCover">

      <v-sheet color="rgb(0, 0, 0, 0)" class="mx-auto mt-12" max-width="auto">

        <v-slide-group single show-arrows mandatory>
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

      <v-window show-arrows>

        <v-window-item
          v-for="n in (activeTab) ?Math.ceil(activeTab.people.length / 4): 0"
          :key="`card-${n}`"
        >
          <v-card color="rgb(0, 0, 0, 0)" height="500">
            <v-row class="fill-height" align="center" justify="center">
              <!-- Inner Boxes -->
              <div class="profileContainer">

                <div
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
                  <v-img

                    :lazy-src="n == 1
                        ? j == 0 ? require(`~/assets/images/leaderIcon.svg`) :
                        require(`~/assets/images/memberIcon.svg`) :
                        require(`~/assets/images/memberIcon.svg`)"
                    :src="n == 1
                        ? j == 0 ? require(`~/assets/images/leaderIcon.svg`) :
                        require(`~/assets/images/memberIcon.svg`) :
                        require(`~/assets/images/memberIcon.svg`)" alt="role"

                    :style="
                      n == 1
                        ? j == 0
                          ? 'max-width: 65px; max-height: 26px;'
                          : 'max-width: 43px; max-height: 28px;'
                        : 'max-width: 43px; max-height: 28px;'
                    "
                  ></v-img>
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
                </div>
              </div>
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
  height: 757px;
  /* overflow: hidden; */
}

.bannerCover {
  height: 757px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(44, 44, 44, 0.7);
}

.profileContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
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
  width: 418px;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fefefe;

  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 30px 0px 30px 30px;
  font-family: "Vazir FD";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  text-align: right;

  color: #004948;
}
</style>
