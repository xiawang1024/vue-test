<template>
  <div class="img">
    <h1>{{msg}}</h1>
    <div><img src="../img/1.jpg"></div>
  </div>
</template>

<script>
export default {
  name: 'img',
  data () {
    return {
      msg: '我是图片！'
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
