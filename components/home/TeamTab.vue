<template>
  <div class="banner">
    <ul class="nav nav-pills" id="TeamTab" role="tablist">
      <li v-for="(group,groupKey) in team" class="nav-item" role="presentation">
        <button :class="['nav-link',!groupKey ? 'active': '']" :id="`group-${groupKey}-tab`" data-bs-toggle="tab"
                :data-bs-target="`#group-${groupKey}`" type="button"
                role="tab" :aria-controls="`group-${groupKey}`">{{ group.name }}
        </button>
      </li>
    </ul>
    <div class="tab-content" id="TeamTabContent">
      <div v-for="(group,groupKey) in team" class="tab-pane fade"
           :id="`group-${groupKey}`" role="tabpanel"
           :aria-labelledby="`group-${groupKey}-tab`">

      </div>
    </div>

  </div>

</template>

<script>
window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
require('bootstrap');
export default {
  name: "TeamTab",
  data() {
    return {
      team: [
        {
          name: 'سرگروه', people: [
            {id: '0', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '1', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '2', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '3', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '4', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '5', name: 'مهدی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
          ]
        },
        {
          name: 'انفورماتیک', people: [
            {id: '0', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '1', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '2', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '3', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '4', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '5', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
          ]
        },
        {
          name: 'علمی', people: [
            {id: '0', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '1', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '2', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '3', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '4', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '5', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
          ]
        }, {
          name: 'تولید محتوا', people: [
            {id: '0', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '1', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '2', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '3', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '4', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
            {id: '5', name: 'علی', image: 'static/images/logo.png', work: 'vue', role: 'member'},
          ]
        }
      ],
      model: null
    }
  }
}
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/bootstrap.scss";

</style>

<style scoped>
.banner {
  background-image: url("/images/team_bg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  height: 757px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-item .nav-link {
  color: white;
  background: none !important;
  border-radius: 15px;
  transition: 0.15s;
  border: solid 0 white;


}

.nav-item .nav-link.active {
  border-width: 3px;
}

.nav {
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 100px;
}
</style>
