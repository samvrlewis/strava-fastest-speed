import Vue from 'vue'
import Keen from 'keen-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource';
import 'keen-ui/dist/keen-ui.css'
import Token from './Token.vue'
import Speed from './Speed.vue'

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
Vue.use(Keen)
Vue.use(VueRouter)
Vue.use(VueResource)

const Home = { template: '<a href="https://www.strava.com/oauth/authorize?client_id=14508&response_type=code&redirect_uri=http://localhost:8080/token&approval_prompt=force"><img src="static/btn_strava_connectwith_orange.png"></a>'}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/token', component: Token },
    { path: '/speed', component: Speed }
  ]
})

var app = new Vue({
  router,
  el: '#app'
})
