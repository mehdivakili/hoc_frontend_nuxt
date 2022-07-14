<template>
  <WPContent :html="'<div>'+content+'</div>'"/>
</template>

<script>
import WPContent from "@/components/WPContent";

export default {
  async asyncData({params, $axios}) {
    let data = await $axios.$get('pages/' + params.slug)
    return data
  },
  components: {WPContent},
  auth: false
}
</script>

<style scoped>

</style>
