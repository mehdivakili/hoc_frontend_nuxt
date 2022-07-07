<template>

  <div >
    <v-container class="user-info-container">
      <v-row>  <!-- title -->
        <v-col>
          <div >
            <h2>
              <v-icon>mdi-alert-circle-outline</v-icon>
              انتخاب گروه همایش
              <v-icon>mdi-alert-circle-outline</v-icon>

            </h2>
          </div>
        </v-col>
      </v-row>
      <hr>

      <v-row> <!-- Body -->

      </v-row>
    </v-container>


  </div>
</template>

<script>
export default {
  name: "GroupSelection"
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
  word-break: keep-all;
}
hr{
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
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
@media screen  and (max-width: 420px){
  hr{
    min-width: 200px;

  }
}
</style>
