<template>
  <div class="post">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      error: null
    }
  },
  created () {
    this.get_all_activities()
  },
  watch: {
    '$route': 'getActivities'
  },
  methods: {
    getActivities (page_num) {
        var options = {
          params : {
          callback: 'callback_function',
          access_token: localStorage['access_token']
          }
        }

        return this.$http.jsonp('https://www.strava.com/api/v3/athlete/activities?per_page=200&page=' + page_num, options)
    },

    get_all_activities() {
      var page = 1;

      this.getActivities(page).then((response) => {
          console.log(response);
      }, (response) => {
          console.log(response);
      });
    }
  }
}
</script>

<style>
.loading {
  position: absolute;
  top: 10px;
  right: 10px;
}
.error {
  color: red;
}
.content {
  transition: all .35s ease;
  position: absolute;
}
.slide-enter {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-leave-active {
  opacity: 0;
  transform: translate(-30px, 0);
}
</style>