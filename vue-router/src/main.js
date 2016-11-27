import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Book from './components/Book'
import Shopping from './components/Shopping'
/* eslint-disable no-new */
Vue.use(VueRouter)
const routes=[
	{path:'/home',component:Home},
	{path:'/book',component:Book},
	{path:'/shopping',component:Shopping}
]
const router=new VueRouter({
	routes,
	linkActiveClass:'animated bounceIn'  // 配置linkActiveClass
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Home, Book, Shopping },
  router
})
router.push({path:'home'})
