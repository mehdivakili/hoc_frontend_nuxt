<template>

  <div >
    <v-container class="user-info-container">
      <v-row>  <!-- title -->
        <v-col>
          <div >
            <h2>
              <v-icon color="#004948">mdi-account-group-outline </v-icon>
              انتخاب گروه همایش
              <v-icon color="#004948">mdi-account-group-outline</v-icon>

            </h2>
          </div>
        </v-col>
      </v-row>
      <hr>

      <v-row> <!-- Body -->
        <v-col>
          <v-row> <!-- groups row -->
            <v-col v-for="item in items">
              <v-simple-table style="border: 1px solid #004948;border-radius: 10px;">
                <template>
                  <tr  > <!-- 1 -->
                    <th>
                      <p>شماره گروه</p>
                    </th>
                    <td >
                      <p>{{ item["groupNumber"] }}</p>
                    </td>
                  </tr>
                  <tr > <!-- 2 -->
                    <th>
                      <p>جنسیت</p>
                    </th>
                    <td>
                      <p>{{ item["gender"] }}</p>
                    </td>
                  </tr>
                  <tr > <!-- 3 -->
                    <th>
                      <p>روز اول</p>
                    </th>
                    <td>
                      <p style="width: 5rem;">{{ item["dayOne"] }}</p>
                    </td>
                  </tr>
                  <tr > <!-- 4 -->
                    <th>
                      <p>روز دوم</p>
                    </th>
                    <td>
                      <p style="width: 5rem">{{ item["dayTwo"] }}</p>
                    </td>
                  </tr>
                  <tr > <!-- 5 -->
                    <th>
                      <p>ظرفیت</p>
                    </th>
                    <td>
                      <p>{{ item["capacity"] }}</p>
                    </td>
                  </tr>
                </template>
              </v-simple-table>
            </v-col>

          </v-row>
          <v-row> <!-- buttons -->
            <v-col>
              <div class="text--class1">گروه مورد نظر خود را انتخاب کنید:</div>
            </v-col>
            <v-col cols="5">
              <v-radio-group

                row
                dense
                style=""
              >
                <v-radio  v-for="option in options"
                          class="textStyle1"
                          :label="option.label"
                          :value="option.value"
                          color="#004948"
                ></v-radio>
              </v-radio-group>
            </v-col>
            <v-col>
              <v-btn class="edit_btn" @click="" style="">ثبت نهایی</v-btn>
            </v-col>


          </v-row>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
  name: "GroupSelection",
  data(){
    return{
      items:[
        {
          groupNumber : 1,
          gender: 'دختر',
          dayOne: '۲۵ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          dayTwo: '۲۶ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          capacity: '۵۰ نفر'
        },
        {
          groupNumber : 2,
          gender: 'دختر',
          dayOne: '۲۵ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          dayTwo: '۲۶ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          capacity: '۵۰ نفر'
        },
        {
          groupNumber : 3,
          gender: 'دختر',
          dayOne: '۲۵ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          dayTwo: '۲۶ تیر\n' +
            'ساعت ۹ تا ۱۰:۳۰\n' +
            'و\n' +
            'ساعت ۱۱ تا ۱۲:۳۰',
          capacity: '۵۰ نفر'
        }
      ],
      options :[
        {
          label:"گروه ۱",
          value:"gp1"
        },
        {
          label:"گروه ۲",
          value:"gp2"
        },
        {
          label:"گروه ۳",
          value:"gp3"
        }

      ]
    }
  }
}
</script>

<style scoped >
.user-info-container{
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
}
h2{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 40px 0;
  word-break: keep-all;
  color: #004948;
}
hr{
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
}
th p{
  margin-right: 1em;
  margin-top:1em;
}
td p {
  margin-top: 1em;
}
tr:nth-child(even) {
  background-color: #C5E3E3;
}
tr {
  text-align: center;
}
@media screen  and (max-width: 420px){
  hr{
    min-width: 200px;

  }
}
.edit_btn {
  box-shadow: inset 0px -4px 4px rgba(255, 252, 252, 0.25);
  filter: drop-shadow(0px 8px 10px rgba(0, 146, 143, 0.25));
  background: linear-gradient(180deg, #03B9B5 0%, #009592 100%);
  border-radius: 15px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  color: #FEFEFE;
  margin-top: 13px;

}

.text--class1 {

  font-family: 'Vazir';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: right;
  color: #004948;
  margin-top:1.15em;
}
.textStyle1 /deep/ label {
  color: #004948;
  font-weight: 500;
  font-size: 14px;
}
</style>
