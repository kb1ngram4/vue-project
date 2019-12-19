<template>
  <div>
    <div class="shopCart">
      <div class="cartleft" @click="foldFn">
        <div class="logowarp" :class="{heightLight:totalCount>0}">
          <div class="logo">
            <i class="icon icon-shopping_cart"></i>
          </div>
          <span class="bubble" v-show="totalCount>0">{{totalCount}}</span>
        </div>
        <div class="totalmoney">
          <span :class="{heightLight:totalmoney>0}">￥{{totalmoney}}</span>
        </div>
        <div class="deliveryPrice">
          <span>另需配送费￥{{deliveryPrice}}元</span>
        </div>
      </div>
      <div class="cartright" :class="{heightLight:this.totalmoney>=this.minPrice}">
        <span>{{pay}}</span>
      </div>
    </div>
  <transition name="shopCartList">
    <div class="list" v-show="showList" >
      <div class="header">
        <span class="car">购物车</span>
        <span class="clear" @click="clear">清空</span>
      </div>
      <div class="content" ref="shopCartContent">
        <ul>
          <li v-for="selectedFood in selectedFoods" :key="selectedFood.index">
              <span class="left">{{selectedFood.name}}</span>
              <div class="right">
                <span class="money"> {{selectedFood.count*selectedFood.price}} </span>
                <ele-control 
                  class="control" 
                  :food="selectedFood"
                  @addCount="addCount"
                  @removeCount="removeCount">
                  </ele-control>
              </div>
          </li>
        </ul>
      </div>
    </div>
  </transition>
  <div class="mask" v-show="showList" @click="fold=true" ></div>
  </div>
</template>
<script>
import Control from "@/components/ele-control/Control"
import BScroll from "better-scroll"
export default {
  props:{
    selectedFoods:Array,
    deliveryPrice:Number,
    minPrice:Number
  },
  data(){
    return {
      //定义折叠
      fold:true
    }
  },
  components:{
    "ele-control":Control
  },
  methods:{
    addCount(food){
      this.$emit("addCount",food)
    },
    removeCount(food){
      this.$emit("removeCount",food)
    },
    clear(){
      this.$emit("clear")
    },
    foldFn(){
      // if(this.totalCount>0){
      //   return this.fold = !this.fold
      // }else{
      //     return true ;
      // }
      if(this.totalCount<=0){
        return ;
      }
      this.fold = !this.fold
    }
  },
  computed:{
    totalmoney(){
      let totalmoney = 0
      this.selectedFoods.forEach(food => {
        totalmoney+=(food.count*food.price)
      });
      return totalmoney
    },
    totalCount(){
      let totalCount = 0
      this.selectedFoods.forEach(food=>{
        totalCount+=food.count

      })
      return totalCount
    },
    pay(){
      // switch (this.totalmoney) {
      //   case this.totalmoney===0:
      //     return `￥${this.minPrice}元起送`
      //   case this.totalmoney < this.minPrice:
      //     return `还差${this.minPrice-this.totalmoney}元起送`
      //   case this.totalmoney >=this.minPrice:
      //     return `去结算`
      //   default:
      //     break;
      // }
      if(this.totalmoney===0){
        return `￥${this.minPrice}起送`
      }else if(this.totalmoney<this.minPrice){
        return `￥还差${this.minPrice-this.totalmoney}元`
      }else{
        return `去结算`
      }
    },
    showList(){
      // if(this.totalCount>0){
      //   return !this.fold  
      // }else{
      //   return  false
      // }
      if(this.totalCount<=0){
        this.fold = true
        return false
      }
      return !this.fold
    }
  },
  mounted(){
    //滑屏
    new BScroll(this.$refs.shopCartContent,{
      click:true
    })
  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/Cart.stylus";
</style>