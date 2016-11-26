<template>
  <div id="app">
    <hello></hello>
    <head-nav></head-nav>
  </div>
</template>

<script>
import Hello from './components/Hello'
import HeadNav from './components/Head'
export default {
  name: 'app',
  components: {
    HeadNav, Hello
  }
}
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
</style>
