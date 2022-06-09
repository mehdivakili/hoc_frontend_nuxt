<template>

  <div>
    <v-container >
      <v-row>
        <v-col class="user-info-container" align="center">
          <v-row>  <!-- title -->
            <v-col>
              <div >
                <h2>
                  <v-icon color="#004948">mdi-clipboard-list-outline</v-icon>
                  کوییز
                  <v-icon color="#004948">mdi-clipboard-list-outline</v-icon>

                </h2>
              </div>
            </v-col>
          </v-row>
          <hr>
          <v-card class="mainCard">
            <v-row>
              <v-col>
                <v-card class="cardShape">

                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>

              </v-col>
            </v-row>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "quiz"
}
</script>

<style scoped>
.user-info-container{
  border: 2px #004948 solid;
  border-radius: 15px;
  padding: 20px;
}
hr{
  background: #004948;
  height: 2px;
  opacity: 1;
  border-radius: 3px;
  min-width: 350px;
}
h2{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0 40px 0;
  word-break: keep-all;
  color: #004948;
}
.cardShape {
  background: #C5E3E3;
  box-shadow: inset -18px -18px 30px #E0F0F0, inset 18px 18px 30px #98CDCD !important;
  border-radius: 15px;
  padding-top: 2em;
  padding-bottom: 2em;

}
.mainCard{
  background: #C5E3E3;
  /* sabz-bar */

  box-shadow: -18px -18px 30px #E0F0F0, 18px 18px 30px #98CDCD;
  border-radius: 15px;
}
</style>
