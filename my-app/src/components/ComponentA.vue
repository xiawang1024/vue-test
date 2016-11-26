<template>
  <div class="componenta">
    <h1>{{ msg }}</h1>
    <button class="btn btn-primary" @click='onClickMe'>click</button>
    <p><h2>child:{{msgfromfather}}</h2></p>
  
  </div>
</template>

<script>
export default {
  name: 'componenta',
  data () {
    return {
      msg: 'hello from component a',
    }
  },
  props:['msgfromfather'],
  methods:{
    onClickMe:function(){
      console.log(this.msgfromfather)
    }
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
