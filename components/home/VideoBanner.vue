<template>
  <div class="banner" :style="{flexDirection: direction,background: bgColor}">
    <div class="banner-content" :style="{color: textColor}">
      <h3>
        <slot name="banner-title"></slot>
      </h3>
      <p>
        <slot name="banner-content" :style="{color: textColor}"></slot>
      </p>
    </div>
    <div class="banner-img img-fluid">
      <video controls>
        <source :src="video" type="video/mp4">

      </video>
    </div>
  </div>

</template>

<script>
export default {
  name: "Banner",
  props: {
    bgColor: {}, textColor: {}, video: {}, alt: {default: ''}, direction: {
      default: 'row'
    }
  }
}
</script>

<style scoped>


.banner {
  width: 100%;
  margin: 0;
}

.banner-content, .banner-img {
  position: relative;
}

.banner-img video {

  width: 100% !important;
}



.banner-content {
  text-align: justify;
  padding: 20px;
}

.banner-content h3 {
  margin-bottom: 30px;
}

@media screen and (min-width: 1000px) {
  .banner-content, .banner-img {
    width: 50% !important;

  }


  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 110px;
    gap: 110px;
    height: 684px;

  }
}


</style>
