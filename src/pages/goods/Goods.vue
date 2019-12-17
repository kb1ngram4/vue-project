<template>
  <div class="goods">
    <div class="menus" ref="menuWrap">
      <ul class="menu-list" ref="menuList" >
        <li 
          class="menu-item"
          v-for="(good,index) in goods"
          :key="good.index"
          :class="{active:currentIndex === index}">
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
        <li class="foods-item" v-for="good in goods" :key="good.index">
          <h2 class="title">{{good.name}}</h2>
          <ul class="food-list">
            <li class="food-item" v-for="food in good.foods" :key="food.index">
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
              </div>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
import Icon from "@/components/ele-icon/Icon"
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
    "ele-icon":Icon
  },
  methods:{
    _initScroll(){
      this.menuScroll =  new BScroll(this.$refs.menuWrap)
      this.foodScroll =  new BScroll(this.$refs.foodWrap,{
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