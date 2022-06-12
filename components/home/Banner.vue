<template>
  <div class="banner" :style="{flexDirection: direction,background: bgColor}">
    <div class="banner-inner" :style="{flexDirection: direction}">
    <div class="banner-content" :style="{color: textColor}">
      <h3>
        <slot name="banner-title"></slot>
      </h3>
      <p>
        <slot name="banner-content" :style="{color: textColor}"></slot>
      </p>
    </div>
    <div class="banner-img img-fluid">
      <img :src="image" :alt="alt"/>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: "Banner",
  props: {
    bgColor: {}, textColor: {}, image: {}, alt: {default: ''}, direction: {
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

.banner-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100% !important;
}

.banner-img {
  padding: 110px;
  display: none;
}

.banner-content {
  text-align: justify;
  padding: 20px;
}

.banner-content h3 {
  margin-bottom: 30px;
}

.banner-inner{
  max-width: 2000px;
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

@media screen and (min-width: 1000px) {
  .banner-content, .banner-img {
    width: 50% !important;
    max-width: 800px !important;
  }

  .banner-img {
    display: block;
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
