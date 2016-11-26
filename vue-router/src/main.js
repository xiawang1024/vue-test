import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Home from './components/Home'
import LinkA from './components/Link'
import About from './components/About'
/* eslint-disable no-new */
Vue.use(VueRouter)
const routes=[
	{path:'/home',component:Home},
	{path:'/link',component:LinkA},
	{path:'/about',component:About}
]
const router=new VueRouter({
	routes,
	linkActiveClass:'animated bounceIn'  // 配置linkActiveClass
})
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Home, LinkA, About },
  router
})
router.push({path:'home'})
