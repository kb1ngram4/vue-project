<template>
  <div class="goods">
    <div class="menus" ref="menuWrap">
      <ul class="menu-list" ref="menuList" >
        <li 
          class="menu-item"
          v-for="(good,index) in goods"
          :key="good.index"
          :class="{active:currentIndex === index}"
          @click="handleForMenu(index)">
          <ele-icon 
            class="icon" 
            :size="3" 
            :type="good.type"
             v-show="good.type>=0" >
            </ele-icon>
          <span  class="text">{{good.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods" ref="foodWrap" >
      <ul class="foods-list" ref="foodList">
        <li class="foods-item" v-for="(good,goodIndex) in goods" :key="good.index">
          <h2 class="title">{{good.name}}</h2>
          <ul class="food-list">
            <li class="food-item" v-for="(food,foodIndex) in good.foods" :key="food.index">
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                  <div class="name">{{food.name}}</div>
                  <div class="des">{{food.description}}</div>
                  <div class="others">
                    <span class="sellCount">月售{{food.sellCount}}份 </span>
                    <span class="rating">好评率{{food.rating}}% </span>
                  </div>
                  <div class="price">
                    <span class="nowPrice">￥{{food.price}} </span>
                    <span class="oldPrice" v-show="food.oldprice" >￥{{food.oldprice}}</span>
                  </div>
                  <ele-control 
                    class="control"
                    :food="food"
                    @addCount="addCount"
                    @removeCount="removeCount"
                    :goodIndex="goodIndex"
                    :foodIndex="foodIndex"></ele-control>
              </div>
            </li>

          </ul>
        </li>
      </ul>
    </div>
    <ele-cart 
      :deliveryPrice="seller.deliveryPrice" 
      :minPrice="seller.minPrice"
      :selectedFoods="selectedFoods"
      @addCount="addCount"
      @removeCount="removeCount"
      @clear="clear">
      </ele-cart>
  </div>
</template>
<script>
import BScroll from "better-scroll"
import Icon from "@/components/ele-icon/Icon"
import Control from "@/components/ele-control/Control"
import Cart from "@/components/ele-cart/Cart"
const OK = 0
export default {
  name:"goods",
  props:{
    seller:Object
  },
  data(){
    return {
      goods:[],
      scrollY:0,
      //menu对应的食物的高度数组
      heights:[]
    }
  },
  components:{
    "ele-icon":Icon,
    "ele-control":Control,
    "ele-cart":Cart

  },
  methods:{
    addCount(food){
      // let food = this.goods.find((good,index)=>index===goodIndex)
      //             .foods.find((food,index)=>index===foodIndex)
      if(!food.count){
        this.$set(food,"count",1)
      }else{
        food.count++
      }
    },
    removeCount(food){
      // if(!food.count){
      //   this.$set(food,"count",1)
      // }
      food.count--
    },
    _initScroll(){
      this.menuScroll =  new BScroll(this.$refs.menuWrap,{
        click:true
      })
      this.foodScroll =  new BScroll(this.$refs.foodWrap,{
          click:true,
          probeType:3
      })
      this.foodScroll.on("scroll",({x,y})=>{
        this.scrollY = Math.abs(y)
      })
    },
    _initTops(){
      //拿到所有li
      let liNodes = this.$refs.foodList.children
      let height = 0;
      let heights = [height];
      Array.from(liNodes).forEach((liNode)=>{
          height += liNode.offsetHeight
          heights.push(height)
      })
      this.heights = heights
    },
    handleForMenu(index){
      const height = this.heights[index]
      this.foodScroll.scrollTo(0,-height,300)
    },
    clear(){
      this.selectedFoods.forEach((selectedFood)=>{
        selectedFood.count = 0
      })
    }
  },
  computed:{
    currentIndex(){
      //右侧列表滑动位置
      let {heights,scrollY} = this
      let index = heights.findIndex((height,index)=>{
          return scrollY >= height && scrollY < heights[index+1]
      })
      //左侧列表到置顶
      if(index !== this.oldindex){
        this.oldindex = index;
        var liNode = this.$refs.menuList.children[index];
        this.menuScroll.scrollToElement(liNode,300)
      }
      return index
    },
    //被选中的food
    selectedFoods(){
      let selectedFoods = []
      this.goods.forEach((good)=>{
        good.foods.forEach((food)=>{
          if(food.count>0){
            selectedFoods.push(food)
          }
        })
      })
      return selectedFoods
    }

  },
  async mounted(){
      const {errno,body} = await this.$http.shop.getGoods()
      if(errno === OK){
        this.goods = body
      }
      
      //滑屏
      this._initScroll()
      
      this.$nextTick(()=>{
        this._initTops()
      })      
  }
}
</script>
<style lang="stylus" scoped>
  @import "../../common/stylus/goods.stylus";
</style>