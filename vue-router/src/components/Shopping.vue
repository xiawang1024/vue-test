<template>
  <div class="shopping">
    <div class="panel panel-primary">
      <div class="panel-heading"><h3>购物车</h3></div>
      <div class="panel-body">
        <table class="table table-hover table-condensed">
          <thead>
            <tr >
              <th><input type="checkbox" @click="selectAll" v-model="allSelected"> 全选</th>
              <th>商品信息</th>
              <th>单价</th>
              <th>数量</th>
              <th>金额</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="goods.length" v-for="(good, index) of goods">
              <tr> 
                <td><input type="checkbox" :value="index" v-model="checkname"></td>
                <td>
                  <div>
                    <img :src="good.imgUrl" width="80px" height="80px" class="pull-left img-thumbnail">
                  </div>
                  <div>
                    <a href="" class="title">{{good.title}}</a>
                    <span class="guige">{{good.guige}}</span>
                  </div>
                </td>
                <td><strong>&#65509; {{good.danjia}}</strong></td>
                <td><span class="shuliang" @click="minus(index)">-</span> <input class="ipt" type="text" v-model="good.shuliang"> <span class="shuliang" @click="add(index)">+</span></td>
                <td><strong>&#65509; {{good.jine}}</strong></td>
                <td><button class="btn btn-danger btn-xs" @click="del(index)">删除</button></td>
              </tr>
            </template>
            <template v-else><tr><td><input type="checkbox"></td></tr></template>
          </tbody>
          <tfoot>
            <tr class="fttr">
              <td><input type="checkbox" @click="selectAll" v-model="allSelected"> 全选</td>
              <td><button class="btn btn-danger btn-xs" @click="delSelected">删除</button> <button class="btn btn-danger btn-xs" @click="delAll">清空</button></td>
              <td></td>
              <td>已选 <strong class="zj">{{totalCount}}</strong> 件商品</td>
              <td>合计（不含运费）：<strong class="zj">{{totalPrice}}</strong></td>
              <td><button class="btn btn-danger btn-sm">结算</button></td>
            </tr>
          </tfoot>
        </table>
       <!-- <p>{{checkname}}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopping',
    data () {
      return {
        //模拟数据
        goods:[
        {	
          'imgUrl':'shopping/1.jpg',
          'title':'月盛斋酱牛肉清真食品卤熟牛肉五香真空香辣红烧牛肉北京特产包邮',
          'guige':'口味：五香酱牛肉200g',
          'danjia':'32',
          'shuliang':'1',
          'jine':'32'
        },
        {
          'imgUrl':'shopping/2.jpg',
          'title':'布艺沙发小户型宜家现代简约客厅家具双三人组合可拆洗布沙发特价',
          'guige':'几人位：三人位（豪华版）',
          'danjia':'1222',
          'shuliang':'1',
          'jine':'1222'
        },
        {
          'imgUrl':'shopping/3.jpg',
          'title':'心韵实木擀面杖和面棍擀面棒擀饺子皮擀面条压面棍擀面棍厨房烘焙',
          'guige':'颜色分类：榉木长30cm直径3cm',
          'danjia':'22',
          'shuliang':'1',
          'jine':'22' 
        },
        {
          'imgUrl':'shopping/4.jpg',
          'title':'匠中匠绿檀木梳子檀香便携细齿直发梳整木防静电梳礼盒刻字送女友',
          'guige':'颜色分类：绿檀9-5宽齿',
          'danjia':'59',
          'shuliang':'1',
          'jine':'59'
        }
        ],
        checkname:[],
        totalPrice:"455",
        totalCount:'4',
        allSelected:false
      }
    },
    methods:{
        selectAll:function(){
          if(!this.allSelected){
            this.checkname=[];
            this.allSelected=!this.allSelected;
            var len=this.goods.length;
            for(var i=0;i<len;i++){
              this.checkname.push(i);
            }
          }else{
            this.checkname=[];
            this.allSelected=!this.allSelected;
          }
          
        },
        selected:function(){

        },
        add:function(index){
          this.goods[index].shuliang++;
          this.goods[index].jine=this.goods[index].danjia*this.goods[index].shuliang;
        },
        minus:function(index){
          if(this.goods[index].shuliang>0){
            this.goods[index].shuliang--;
            this.goods[index].jine=this.goods[index].danjia*this.goods[index].shuliang;
          }
        },
        del:function(index){
          this.goods.splice(index,1);
        },
        delAll:function(){
          this.goods.splice(0,this.goods.length)
        },
        delSelected:function(){
          if(this.checkname){
            var len=this.checkname.length;
            for(var i=0;i<len;i++){
              goodsJson.splice(this.checkname[i],1);
              console.log(this.checkname[i])
            }
          }
          this.checkname=[]
          
        }
      },
      computed:{
        totalPrice:function(){
        	let total=0;
        	let len=this.checkname.length;
          for(let i=0;i<len;i++){
          	total+=Number(this.goods[this.checkname[i]].jine);
          }
          return String(total.toFixed(1));//保留一位小数
        },
        totalCount:function(){
          let len=this.checkname.length;
          return String(len);
        }
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ipt{
    max-width: 30px;
    padding:0 5px;
  }
  .shuliang{
    display: inline-block;
    width: 18px;height: 20px;
    background-color: #BEBFBF;
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
  }
  .shuliang:hover{
    border:1px solid #15C1AA;
  }
  .title{
    display: inline-block;
    max-width: 200px;
    font-size: 12px;
    padding-top: 4px;
    padding-left: 4px
  }
  .guige{
    display:block;
    font-size: 12px;
    margin-left: 4px;
    padding-top: 8px;
  }
  .zj{
    color: red;
    font-size: 16px;
  }
</style>
