<template>
  <p>hello</p>
</template>

<script>
export default {
  name: "register.vue",

  mounted() {
    this.$store.commit('setFooterColor', 'white')
  }
}
</script>

<style scoped>

</style>
