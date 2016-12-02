<template>
  <div class="head">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container-fluid">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#" @click="hello">Brand</a>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link to="/home" v:>Home</router-link></li>
            <li><router-link to="/book">Book</router-link></li>
            <li><router-link to="/shopping">Shopping</router-link></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Bus from '../bus.js'
  export default {
    name: 'head',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      hello:function(){
        Bus.$emit("test",'event bus');
      }
    }
  }

 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .router-link-active{
    border:2px solid red;
  }

  /*css过度*/
  .fade-enter-active,.fade-leave-active{
    transition: opacity .3s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  

  /* css 动画 */
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
