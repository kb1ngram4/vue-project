<template>
  <div class="header">
    <div class="header-top">
      <img class="avatar" :src="seller.avatar" alt="">
      <div class="content">
        <div class="title">
          <i class="brand"></i>
          <span class="text">{{seller.name}}</span>
        </div>
        <div class="des">
          <span class="text">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
        </div>
        <!-- 得有seller.supports才能显示，不然就报错 -->
        <div class="supports" v-if="seller.supports" >
          <ele-icon class="icon" :size="1" :type="seller.supports[0].type" ></ele-icon>
          <span class="text">{{seller.supports[0].content}}</span>
        </div>
      </div>
      <div class="btn" @click="maskShow=true">
        <span class="text" v-if="seller.supports" >{{seller.supports.length}}个</span>
        <i class="icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin">
      <div class="bulletin-left">
        <i class="icon"></i>
        <span class="text">{{seller.bulletin}}</span>
      </div>
      <i class="arrow icon-keyboard_arrow_right"></i>
    </div>
    <div class="bg">
      <img :src="seller.avatar" alt="">
    </div>
    <transition name="mask">
      <div class="mask" v-show="maskShow">
        <div class="wrap"  >
          <div class="content">
            <div class="title">{{seller.name}}</div>
            <ele-stars class="stars" size="48" :score="seller.score" ></ele-stars>
            <ele-line></ele-line>
            <ele-list :supports="seller.supports" ></ele-list>
            <ele-line></ele-line>
            <p class="text">{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="footer">
          <i class="close icon-close" @click="maskShow=false"></i>  
        </div> 
      </div>
    </transition>
  </div>
</template>

<script>
import Stars from "components/stars/Stars.vue";
import Line from "components/line/Line.vue"
import List from "./list/List"
import Icon from "components/ele-icon/Icon"
export default {
  props:{
    seller:Object
  },
  data(){
    return {
      maskShow:false,
    }
  },
  components:{
    "ele-stars":Stars,
    "ele-line":Line,
    "ele-list":List,
    "ele-icon":Icon

  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixin.stylus";
@import "../../common/stylus/header.stylus";
</style>