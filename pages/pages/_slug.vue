<template>
  <div v-html="content"/>
</template>

<script>
export default {
  async asyncData({params, $axios}) {
    let data = await $axios.$get('pages/' + params.slug)
    data.content = data.content.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, "\"");
    return data
  },
  auth: false
}
</script>

<style scoped>

</style>
