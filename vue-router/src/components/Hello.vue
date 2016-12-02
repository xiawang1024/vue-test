<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import Bus from '../bus.js'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Vue!'
      }
    },
    mounted:function(){
      var that=this;  
      Bus.$on("test",function(data) {//this指向全局，或者用箭头函数，this继承外围作用于
        console.log(this)
        that.msg=data
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
