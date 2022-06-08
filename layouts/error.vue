<template>
  <div class="error-app">

    <div class="error-content">
      <div class="texts">
        <h1>{{ error_data.text }}</h1>
        <p>{{ error_data.title }}</p>

        <p>{{ error_data.description }}</p>
        <v-btn class="button-fill" to="/">
          رفتن به خانه
        </v-btn>
      </div>
    </div>
    <div class="error-image img-fluid">
      <img :src="error_data.image">
    </div>

  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      error_404: {
        text: 'خطای ۴۰۴ !!',
        title: 'صفحه مورد نظر پيدا نشد',
        description: 'مجدد امتحان کنید',
        image: require('~/assets/images/error_404.svg')
      },
      error_503: {
        text: 'در حال بروزرساني...',
        title: 'سايت در حال بروزرساني مي باشد',
        description: 'از شکيبايي شما متشکريم',
        image: require('~/assets/images/error_503.svg')

      },
      other: {
        text: 'خطا !!',
        title: 'خطایی رخ داده است',
        description: 'از شکيبايي شما متشکريم',
        image: require('~/assets/images/error_other.svg')
      },

    }
  },
  mounted() {
    this.$store.commit('setFooterColor', '#C5E3E3')
  },
  computed: {
    error_data() {
      switch (this.error.statusCode) {
        case 404:
          return this.error_404
        case 503:
          return this.error_503
        default:
          return this.other
      }
    }
  },
  head() {
    const title = this.error_data.image
    return {
      title
    }
  }
}
</script>

<style scoped lang="scss">

.error-app {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 30px;
  margin: 30px;

}

.error-image, .error-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 50%;

}

.error-content .texts {
  margin: auto;
  text-align: center;

  h1 {
    font-weight: bold;
    font-size: 50px;
    margin: 30px;
    color: #004948;
  }

  p {
    color: #004948;
  }

  .button-fill {
    padding: 10px 100px;
    margin-top: 50px;
  }

}
@media screen and (max-width: 1000px){
  .error-image{
    display: none;
  }
}
</style>
