<template>
  <div class="book">
    <div class="panel panel-primary">
      <div class="panel-heading">我的书架</div>
      <div class="panel-body">
        <table class="table table-hover table-responsive">
          <thead>
            <tr>
              <th v-for="hd of heads" v-html="hd.th" @click="sortBy(hd.sort)"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book of orderBooks">
              <td v-text="book.id"></td>
              <td v-text="book.name"></td>
              <td v-text="book.author"></td>
              <td v-text="book.price"></td>
              <td><button class="btn btn-danger btn-sm" @click="removeBook($index)">删除</button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>总价：</td>
              <td colspan="4" v-text="sum"></td><!-- 总价 -->
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="panel panel-primary">
      <div class="panel-heading">添加书籍</div>
      <div class="panel-body">
        <form role='form'>
          <div class="form-group">
            <label>书名</label>
            <input type="text" class="form-control" v-model="book.name">
          </div>
          <div class="form-group">
            <label>作者</label>
            <input type="text" class="form-control" v-model="book.author">
          </div>
          <div class="form-group">
            <label>价格</label>
            <input type="text" class="form-control" v-model="book.price">
          </div>
        </form>
        <button class="btn btn-success btn-block" @click="addBook">添加</button>
      </div>
    </div>
    <p>
      <span v-for='item of book'></span>
    </p>
  </div>
</template>

<script>
  import Vue from 'Vue'
  import Lodash from 'lodash'
  Vue.use(Lodash)
  export default {
    name: 'book',
    data () {
      return {
        heads:[
        {th:'序号 <span class="glyphicon glyphicon-sort"></span>',sort:'id'},
        {th:'书名 <span class="glyphicon glyphicon-sort"></span>',sort:'name'},
        {th:'作者 <span class="glyphicon glyphicon-sort"></span>',sort:'author'},
        {th:'价格 <span class="glyphicon glyphicon-sort"></span>',sort:'price'},
        {th:'操作',sort:''}
        ],
        book:{
          id:0,
          name:'',
          author:'',
          price:''
        },
        books:[
        {
          id:1,
          name:'红楼梦',
          author:'曹雪芹',
          price:'32.0'
        },
        {
          id:2,
          name:'水浒传',
          author:'施耐庵',
          price:'30.0'
        },
        {
          id:3,
          name:'三国演义',
          author:'罗贯中',
          price:'24.0'
        },
        {
          id:4,
          name:'西游记',
          author:'吴承恩',
          price:'20.0'
        }
        ],
        sortKey:"",//排序关键字
        sum:0//总价
      }
    },
    methods:{
        addBook:function(){
          this.book.id=this.books.length+1;
          //书名，作者，价格不为空
          if(this.book.name&&this.book.author&&this.book.price){
            this.books.push(this.book);
          }
          this.book={
                id:0,
                name:'',
                author:'',
                price:''
              };
        },
        removeBook:function(index){
          this.books.splice(index,1);
        },
        sortBy:function(sortKey){
          this.sortKey=sortKey;
        }
      },
      computed:{
        sum:function(){
          var len=this.books.length,
            result=0;
          for(var i=0;i<len;i++){
            result+=Number(this.books[i].price);
          }
          return result;
        },
        orderBooks:function(){
        	return _.orderBy(this.books,this.sortKey);
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
