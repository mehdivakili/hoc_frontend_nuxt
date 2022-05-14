<template>
  <div class="banner">
    <div class="bannerCover">
      <!-- <ul class="nav nav-pills" id="TeamTab" role="tablist">
          <li
            :key="groupKey"
            v-for="(group, groupKey) in team"
            class="nav-item"
            role="presentation"
          >
            <button
              :class="['nav-link', !groupKey ? 'active' : '']"
              :id="`group-${groupKey}-tab`"
              data-bs-toggle="tab"
              :data-bs-target="`#group-${groupKey}`"
              type="button"
              role="tab"
              :aria-controls="`group-${groupKey}`"
            >
              {{ group.name }}
            </button>
          </li>
        </ul> -->
      <!-- <div class="tab-content" id="TeamTabContent" style="height: 200px">
          <div
            :key="groupKey"
            v-for="(group, groupKey) in team"
            :class="['tab-pane', 'fade', !groupKey ? 'show' : '']"
            :id="`group-${groupKey}`"
            role="tabpanel"
            :aria-labelledby="`group-${groupKey}-tab`"
          ></div>
        </div> -->
      <!-- <v-sheet class="mx-auto" elevation="8" max-width="800">
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                height="200"
                width="100"
                @click="toggle"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="48"
                      v-text="'mdi-close-circle-outline'"
                    ></v-icon>
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet> -->

      <v-sheet color="rgb(0, 0, 0, 0)" class="mx-auto mt-12" max-width="auto">
        <v-slide-group single hide-arrows mandatory>
          <v-slide-item
            v-for="(team, n) in teams"
            :key="n"
            v-slot="{ active, toggle }"
          >
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
          </v-slide-item>
        </v-slide-group>
      </v-sheet>

      <v-window show-arrows>
        <v-window-item
          v-for="n in Math.ceil(activeTab.count / 4)"
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
                    :lazy-src="
                      require(`~/assets/images/${activeTab.people[j].image}`)
                    "
                    :src="
                      require(`~/assets/images/${activeTab.people[j].image}`)
                    "
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
                    :lazy-src="
                      require(`~/assets/images/${activeTab.people[j].icon}`)
                    "
                    :src="
                      require(`~/assets/images/${activeTab.people[j].icon}`)
                    "
                    alt="role"
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
                    {{ activeTab.people[j].skill }}
                  </div>
                  <a href="#">
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
          {{ groupsInformation[activeTabN] }}
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
      groupsInformation: [
        "مسئولیت سرگروهی را بر عهده دارند.",
        "انفورماتیک مسئول زدن سایت و استریم.",
        "تولید محتوای علمی میکنند.",
        "تولید محتوا میکنند.",
        "مسئولیت روابط عمومی را بر عهده دارند.",
        "مسئولیت تبلیغات را برعهده دارند.",
        "مسئولیت تدارکات و دکور را برعهده دارند.",
      ],
      teams: [
        {
          count: 3,
          name: "سرگروه ها",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 9,
          name: "انفورماتیک",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 11,
          name: "علمی",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 4,
          name: "تولید محتوا",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 5,
          name: "روابط عمومی",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 7,
          name: "تبلیغات",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "مریم",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
        {
          count: 3,
          name: "تدارکات و دکور",
          people: [
            {
              name: "مهدی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "leaderIcon.svg",
            },
            {
              name: "زهرا",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
            {
              name: "علی",
              image: "acm.png",
              skill: "توسعه دهنده اندروید و فلاتر",
              icon: "memberIcon.svg",
            },
          ],
        },
      ],
      model: null,
      activeTabN: 0,
      activeTabCount: 3,
    };
  },
  computed: {
    activeTab(param, n = this.activeTabN) {
      return this.teams[n];
    },
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
  },
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
}

.memberPicture {
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
