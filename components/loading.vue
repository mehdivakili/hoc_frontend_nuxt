<template>
  <transition name="fade">
    <div v-show="loading" class="loading-page">
      <p>لطفا کمی صبر کنید...</p>
      <v-progress-circular
        indeterminate
        color="white"
      ></v-progress-circular>
    </div>
  </transition>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  z-index: 1000000;
  color: white;
}
</style>
