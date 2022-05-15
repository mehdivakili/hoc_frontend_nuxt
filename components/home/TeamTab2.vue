<template>
  <div class="banner">
    <div class="bannerCover">
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamTab2"
}
</script>

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

</style>
