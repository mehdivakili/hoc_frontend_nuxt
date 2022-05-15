<template>

  <div >
    <v-container class="user-info-container">
      <v-row>  <!-- title -->
        <v-col>
          <div >
            <h2>
              <v-icon>mdi-alert-circle-outline</v-icon>
              اطلاعات حساب کاربری
              <v-icon>mdi-alert-circle-outline</v-icon>

            </h2>
          </div>
        </v-col>
      </v-row>
      <hr>

      <v-row> <!-- Body -->
        <v-col>
          <v-row> <!-- row names -->
            <v-col>
              <p><v-icon color="#004948">mdi-account-outline</v-icon> نام و نام خانوادگی:  {{$auth.user.first_name_persian}} {{$auth.user.last_name_persian}}</p>
            </v-col>
            <v-col>
              <p><v-icon color="#004948">mdi-account-tie-outline</v-icon> نام و نام خانوادگی(انگلیسی):  {{$auth.user.first_name}} {{$auth.user.last_name}}</p>
            </v-col>
          </v-row>
          <v-row> <!-- row sex -->
          <v-col>
            <p><img src="~/assets/icons/gender.svg"> جنسیت:  {{$auth.user.sex}}</p>
          </v-col>
          <v-col>
            <p><img src="~/assets/icons/mail.svg"> ایمیل:  {{$auth.user.email}}</p>
          </v-col>
        </v-row>
          <v-row> <!-- row nationalCode -->
            <v-col>
              <p><img src="~/assets/icons/id_card.svg">  کد ملی:  {{$auth.user.national_code}}</p>
            </v-col>
            <v-col>
              <p><img src="~/assets/icons/username.svg"> نام کاربری:  {{$auth.user.username}}</p>
            </v-col>
          </v-row>
          <v-row> <!-- row birthday -->
            <v-col>
              <p style="width: 100%"><img src="~/assets/icons/calendar.svg"> تاریخ تولد:  {{new Date($auth.user.birth_date) | moment("jYYYY/jMM/jDD")}}</p>

            </v-col>
            <v-col>
              <p><img src="~/assets/icons/phone.svg"> شماره تماس:  {{$auth.user.phone_number}}</p>
            </v-col>
          </v-row>
          <v-row> <!-- row phone -->
            <v-col>
              <p><img src="~/assets/icons/phone.svg"> شماره تماس ضروری:  {{$auth.user.parent_phone_number}}</p>

            </v-col>
            <v-col>
              <p><img src="~/assets/icons/grade.svg"> پایه تحصیلی فعلی:  {{$auth.user.grade}}</p>
            </v-col>
          </v-row>
          <v-row> <!-- row paye -->
            <v-col>
              <p><img src="~/assets/icons/star.svg"> معدل پایه تحصیلی قبلی:  {{$auth.user.before_grade_score}}</p>
            </v-col>
            <v-col>
              <p><img src="~/assets/icons/school.svg"> نام مدرسه:  {{$auth.user.school_name}}</p>
            </v-col>
          </v-row>
          <v-row><!-- last row -->
            <v-col>
              <p><img src="~/assets/icons/map_marker.svg"> ناحیه:  {{$auth.user.aria}}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped lang="scss">
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
  }
  hr{
    background: #004948;
    height: 2px;
    opacity: 1;
    border-radius: 3px;
  }
  .user-info{
    display: flex;
    flex-wrap: wrap;
    p{
      min-width: 300px;
      width: calc(50% - 20px);
      padding-right: 10%;
      word-break: keep-all;
      margin: 10px;
      text-align: right;
    }
    @media screen and (max-width: 1000px){
      p{
        width: 100%;
      }
    }
  }
</style>
