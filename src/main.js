import Vue from 'vue'
import Keen from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'

/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

Vue.use(Keen)

var app7 = new Vue({
  el: '#app-7',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
