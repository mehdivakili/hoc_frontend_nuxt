<template>
  <div class="banner">
    <v-container>
      <ul class="nav-tabs">
        <li :class="[(groupKey === currentGroup)? 'active': '','nav-tab-item']" v-for="(group,groupKey) in team"
            :key="`nav-btn-${groupKey}`" @click="currentGroup = groupKey">
          {{ group.name }}
        </li>
      </ul>
      <div>
        <transition name="fade" mode="out-in">
          <div v-for="(group,groupKey) in team" :key="`nav-${groupKey}`"
               v-if="groupKey === currentGroup">
            <hooper :rtl="true" :settings="hooperSettings" style="height: 400px">
              <slide style="padding: 20px; display: flex; justify-content: center;align-items: end"
                     v-for="(person,pk) in group.people"
                     :key="`nav-${groupKey}-person-${pk}`" :index="pk">
                <div :class="['person-card','admin-card']">
                  <div>
                    <div style="display: flex; justify-content: center">
                      <v-img class="person-image"
                             :src="person.image"
                             :alt="person.name"
                      ></v-img>
                    </div>

                    <p class="person-name">{{ person.name }}</p>
                    <p class="person-description">{{ person.description }}</p>
                    <a :href="person.linkedin">
                      <v-img
                        :src="require(`~/assets/images/linkedin_logo.svg`)"
                        alt="linkedIn Icon"
                      ></v-img>
                    </a>
                  </div>
                </div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>

            </hooper>
            <div style="display: flex; justify-content: center">
              <div class="duty-box">{{ group.information }}</div>
            </div>
          </div>
        </transition>

      </div>
    </v-container>
  </div>
</template>

<script>
import {
  Hooper, Slide, Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';

export default {
  data() {
    return {
      team: [],
      currentGroup: 0,


      hooperSettings: {
        wheelControl: false,
        infiniteScroll: true,
        itemsToShow: 1,
        breakpoints: {
          500: {
            itemsToShow: 2
          },
          800: {
            itemsToShow: 3
          },
          1000: {
            itemsToShow: 4,
          }
        }
      }
    }

  },
  async mounted() {
    this.team = await this.$axios.$get('team/')
  },
  components: {
    Hooper, Slide, HooperNavigation
  }
}
</script>

<style scoped lang="scss">
.banner {
  background-image: url(~/assets/images/team_bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto;
  /* overflow: hidden; */
}

.nav-tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: none;

  li {
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    color: white;
    padding: 5px 10px;
    text-decoration: none;
    list-style: none;
    border: 3px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
    cursor: pointer;
    margin-top: 20px;

    &.active {
      border: 3px solid white;

    }
  }


}


.person-card {
  background: rgba(254, 254, 254, 0.55);
  /* grayShadow */
  box-shadow: 5px 5px 10px rgba(32, 32, 32, 0.35);
  border-radius: 15px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 20px;


  .person-image {
    max-width: 102px;
    max-height: 102px;
    border-radius: 50%;
    margin-bottom: 20px;

  }

  p {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #004948;
  }

  a {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  p.person-description {
    font-size: 12px;
  }

}

.admin-card {
  background: rgba(255,255,255,0.6);
  transform-origin: center bottom;
  transition: 0.4s;
  min-height: 500px;

  &:hover{
    transform: scale(1.1);
  }
}


</style>

<style lang="scss">
.icon {
  width: 50px !important;
  height: 50px !important;

  path:last-child {
    fill: white;
  }
}

.duty-box {

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255,255,255,0.6);
  padding: 10px 15px;

  border-radius: 30px 0px 30px 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  text-align: justify;
  margin: 10px;
  font-size: 14px;
  color: #004948;
}

@media screen and (min-width: 1000px) {
  .duty-box {
    font-size: 16px;
    max-width: 618px;
    width: 100%;
    padding: 20px;
  }
  .nav-tabs li {
    margin: 5px 20px;

  }
}

.hooper-next {
  transform: translateX(-25px);
}

.hooper-prev {
  transform: translateX(25px);


}
</style>
