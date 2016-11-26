<template>
  <div id="app">
    <header-a></header-a>
    <img-a></img-a>
    <img src="./assets/logo.png">
    <hello></hello>
    <h2>father:<input type="" v-model="fatherMsg"></h2>
    <component-a :msgfromfather='fatherMsg'></component-a>
    <div>
      <h1>Router</h1>
      <home></home>
      <about></about>
      <!-- <ol>
        <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      </ol> -->
      <!-- <router-view></router-view> -->
     <!--  <a class="list-group-item" v-link="{ path: '/home'}">Home</a>
    <a class="list-group-item" v-link="{ path: '/about'}">About</a> -->
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ComponentA from './components/ComponentA'
import HeaderA from './components/Header'
import Home from './components/Home'
import About from './components/About'
import ImgA from './components/Img'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// var Home=Vue.extend({template:"<h1>home</h1>"})
// var About=Vue.extend({template:"<h1>about</h1>"})
var  routes=[
    {path:'/home', component:Home},
    {path:'/about', component:About}
    ]
var router=new VueRouter({
  routes:routes
})
export default {
  // el:"#app",
  name: 'app',
  components: {
    Hello, ComponentA, HeaderA, Home, About, ImgA
  },
  data:function(){
    return {
      fatherMsg:'home'
    }
  },
  router
}
// new Vue({router}).$mount("#app")
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  /*list-style: none;*/
  font-size: 30px;
  text-align: center;
  display: inline-block;
  margin-right: 20px;
}
</style>
