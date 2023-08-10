<template>
  <div>
    <v-container class="user-info-container">
      <v-row>
        <!-- title -->
        <v-col>
          <div>
            <h2 v-if="!$auth.user.profile.group">
              <v-icon color="#004948">mdi-account-group-outline</v-icon>
              انتخاب گروه همایش
              <v-icon color="#004948">mdi-account-group-outline</v-icon>
            </h2>
            <h2 v-if="!!$auth.user.profile.group">
              <v-icon color="#004948">mdi-account-group-outline</v-icon>
              اطلاعات گروه شما
              <v-icon color="#004948">mdi-account-group-outline</v-icon>
            </h2>
          </div>
        </v-col>
      </v-row>
      <hr />

      <v-row v-if="!isClose">
        <!-- Body -->
        <v-col v-if="!$auth.user.profile.group && !$auth.user.is_dormitory">
          <v-row>
            <!-- groups row -->
            <v-col
              cols="6"
              v-for="item in items[gender][grade]"
              :key="items[gender][grade].indexOf(item)"
            >
              <v-simple-table
                style="border: 1px solid #004948; border-radius: 10px"
                v-if="!item.dorm"
              >
                <template>
                  <tr>
                    <!-- 1 -->
                    <th>
                      <p>شماره گروه</p>
                    </th>
                    <td>
                      <p>{{ item["groupNumber"] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 2 -->
                    <th>
                      <p>جنسیت</p>
                    </th>
                    <td>
                      <p>{{ item["gender"] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 3 -->
                    <th>
                      <p>روز اول</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayOne'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 4 -->
                    <th>
                      <p>روز دوم</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayTwo'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 5 -->
                    <th>
                      <p>روز سوم</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayThree'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 6 -->
                    <th>
                      <p>ظرفیت</p>
                    </th>
                    <td>
                      <p>
                        {{
                          numberToPersian(capacity[gender][item["groupNumber"]])
                        }}
                        نفر
                      </p>
                    </td>
                  </tr>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
          <v-row>
            <!-- buttons -->
            <v-col>
              <div class="text--class1">گروه مورد نظر خود را انتخاب کنید:</div>
            </v-col>
            <v-col cols="5">
              <v-radio-group v-model="choose" row dense style="">
                <v-radio
                  v-for="option in options[gender][grade]"
                  class="textStyle1"
                  :label="option.label"
                  :value="option.value"
                  color="#004948"
                  :key="options[gender][grade].indexOf(option)"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col>
              <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="edit_btn" v-bind="attrs" v-on="on">
                    ثبت نهایی
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5"> </v-card-title>
                  <v-card-text style="text-align: center">
                    <div class="text--class1">
                      آیا از انتخاب خود مطمئن هستید ؟
                    </div>
                  </v-card-text>
                  <v-card-actions
                    style="
                      margin-left: 4em;
                      padding-bottom: 2em;
                      padding-top: 2em;
                    "
                  >
                    <v-spacer></v-spacer>
                    <v-btn
                      outlined
                      elevation="5"
                      color="error"
                      text
                      @click="dialog = false"
                      style="margin-left: 1em"
                    >
                      لغو
                    </v-btn>
                    <v-btn
                      outlined
                      elevation="5"
                      color="#004948"
                      text
                      @click="handler()"
                    >
                      بله
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
        <v-col v-if="!!$auth.user.profile.group || !!$auth.user.is_dormitory">
          <v-row>
            <!-- groups row -->
            <v-col v-for="item in chosenGroup" :key="chosenGroup.indexOf(item)">
              <v-simple-table
                style="border: 1px solid #004948; border-radius: 10px"
              >
                <template>
                  <tr>
                    <!-- 1 -->
                    <th>
                      <p>شماره گروه</p>
                    </th>
                    <td>
                      <p>{{ item["groupNumber"] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 2 -->
                    <th>
                      <p>جنسیت</p>
                    </th>
                    <td>
                      <p>{{ item["gender"] }}</p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 3 -->
                    <th>
                      <p>روز اول</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayOne'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 4 -->
                    <th>
                      <p>روز دوم</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayTwo'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 5 -->
                    <th>
                      <p>روز سوم</p>
                    </th>
                    <td>
                      <p>
                        <span
                          v-for="part in item['dayThree'].split('.')"
                          :key="part"
                        >
                          {{ part }}
                          <br />
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <!-- 6 -->
                    <th>
                      <p>ظرفیت</p>
                    </th>
                    <td>
                      <p>
                        {{
                          numberToPersian(capacity[gender][item["groupNumber"]])
                        }}
                        نفر
                      </p>
                    </td>
                  </tr>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row v-else>
        <h4 style="text-align: center">
          در حال حاضر انتخاب گروه امکان پذیر نمی باشد
        </h4>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "GroupSelection",
  async asyncData({ $axios }) {
    return { capacity: await $axios.$get("groups_remaining/") };
  },
  data() {
    return {
      dialog: false,
      isClose: false,
      choose: 0,
      items: {
        male: {
          secondry: [
            {
              groupNumber: 1,
              gender: "پسر",
              dayOne: "۲۵ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۲۶ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۲۸ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۱ نفر",
              dorm: false,
            },
            {
              groupNumber: 2,
              gender: "پسر",
              dayOne:
                "۲۶ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۲۸ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۲۹ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              capacity: "۴۱ نفر",
              dorm: false,
            },
            {
              groupNumber: 3,
              gender: "پسر",
              dayOne: "۲۸ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۲۹ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۳۰ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۱ نفر",
              dorm: false,
            },
            {
              groupNumber: 5,
              gender: "پسر",
              dayOne: "۲۸ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۲۹ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۳۰ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۱ نفر",
              dorm: true,
            },
          ],
          junior: [
            {
              groupNumber: 4,
              gender: "پسر",
              dayOne: "۲۹ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۳۰ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۳۱ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۱ نفر",
              dorm: false,
            },
            {
              groupNumber: 5,
              gender: "پسر",
              dayOne: "۲۸ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۲۹ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۳۰ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۱ نفر",
              dorm: true,
            },
          ],
        },
        female: {
          secondry: [
            {
              groupNumber: 1,
              gender: "دختر",
              dayOne:
                "۲۵ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۲۶ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۲۸ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              capacity: "۴۸ نفر",
              dorm: false,
            },
            {
              groupNumber: 2,
              gender: "دختر",
              dayOne: "۲۶ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayTwo: "۲۸ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              dayThree:
                "۲۹ مرداد." + "ساعت ۳ تا ۴:۳۰." + "و." + "ساعت ۵ تا ۶:۳۰",
              capacity: "۴۸ نفر",
              dorm: false,
            },
            {
              groupNumber: 3,
              gender: "دختر",
              dayOne:
                "۲۸ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۲۹ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۳۰ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              capacity: "۴۸ نفر",
              dorm: false,
            },
            {
              groupNumber: 4,
              gender: "دختر",
              dayOne:
                "۳۰ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۳۱ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۱ شهریور." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",

              capacity: "۴۸ نفر",
              dorm: false,
            },
            {
              groupNumber: 6,
              gender: "دختر",
              dayOne:
                "۳۰ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۳۱ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۱ شهریور." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",

              capacity: "۴۸ نفر",
              dorm: true,
            },
          ],
          junior: [
            {
              groupNumber: 5,
              gender: "دختر",
              dayOne:
                "۲۹ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۳۰ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۳۱ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              capacity: "۴۸ نفر",
              dorm: false,
            },
            {
              groupNumber: 6,
              gender: "دختر",
              dayOne:
                "۳۰ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayTwo:
                "۳۱ مرداد." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",
              dayThree:
                "۱ شهریور." + "ساعت ۹ تا ۱۰:۳۰." + "و." + "ساعت ۱۱ تا ۱۲:۳۰",

              capacity: "۴۸ نفر",
              dorm: true,
            },
          ],
        },
      },
      options: {
        male: {
          secondry: [
            {
              label: "گروه ۱",
              value: "1",
            },
            {
              label: "گروه ۲",
              value: "2",
            },
            {
              label: "گروه ۳",
              value: "3",
            },
          ],
          junior: [
            {
              label: "گروه ۴",
              value: "4",
            },
          ],
        },
        female: {
          secondry: [
            {
              label: "گروه ۱",
              value: "1",
            },
            {
              label: "گروه ۲",
              value: "2",
            },
            {
              label: "گروه ۳",
              value: "3",
            },
            {
              label: "گروه ۴",
              value: "4",
            },
          ],
          junior: [
            {
              label: "گروه ۵",
              value: "5",
            },
          ],
        },
      },
    };
  },
  computed: {
    chosenGroup() {
      let groupNumber = this.$auth.user.profile.group;

      if (this.$auth.user.is_dormitory) {
        groupNumber = this.$auth.user.sex === "زن" ? 6 : 5;
        this.choose = groupNumber;
      }

      console.log(groupNumber);

      let userItems = this.items[this.gender][this.grade];
      for (let group in userItems) {
        if (userItems[group].groupNumber == groupNumber) {
          console.log(userItems[group]);
          return [userItems[group]];
        }
      }
    },
    gender() {
      if (this.$auth.user.sex === "زن") {
        return "female";
      }
      return "male";
    },
    grade() {
      let userGrade = this.$auth.user.grade;
      console.log(this.$auth.user);
      if (["دهم", "یازدهم", "دوازدهم"].includes(userGrade)) {
        return "secondry";
      }
      return "junior";
    },
  },
  methods: {
    async handler() {
      this.$nuxt.$loading.start();
      this.dialog = false;
      try {
        let group = this.choose;
        await this.$axios.$put("user/set_group/", { group: group });
        const userToUpdate = { ...this.$auth.user };
        userToUpdate.profile.group = group;
        this.$auth.setUser(userToUpdate);
        this.$router.push("/account/");
      } catch (e) {
        this.$notify({
          group: "foo",
          type: "error",

          title: e.response.data.group[0],
        });
      }
      this.$nuxt.$loading.finish();
    },
  },
  async created() {
    if (this.$auth.user.profile.group == 0 && this.$auth.user.is_dormitory) {
      let userItems = this.items[this.gender][this.grade];
      let groupNumberHere;
      for (let group in userItems) {
        if (userItems[group].dorm) {
          groupNumberHere = userItems[group].groupNumber;
        }
      }

      console.log(groupNumberHere + "Adding user group");
      await this.$axios.$put("user/set_group/", { group: groupNumberHere });
      console.log(this.$auth.user.profile.group + "Added user group");
    } else
      console.log("User already has group" + this.$auth.user.profile.group);
  },
};
</script>

<style scoped>
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
  color: #004948;
}

hr {
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
}

th p {
  margin-right: 1em;
  margin-top: 1em;
}

td p {
  margin-top: 1em;
}

tr:nth-child(even) {
  background-color: #c5e3e3;
}

tr {
  text-align: center;
}

@media screen and (max-width: 420px) {
  hr {
    min-width: 200px;
  }
}

.edit_btn {
  box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
  filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
  background: linear-gradient(180deg, #03b9b5 0%, #009592 100%);
  border-radius: 15px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #fefefe;
  margin-top: 13px;
}

.text--class1 {
  font-family: "Vazir";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: right;
  color: #004948;
  margin-top: 1.15em;
}

.textStyle1 /deep/ label {
  color: #004948;
  font-weight: 500;
  font-size: 14px;
}
</style>
