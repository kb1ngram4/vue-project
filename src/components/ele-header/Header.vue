<template>
  <div class="header">
    <div class="header-top">
      <img class="avatar" src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
      <div class="content">
        <div class="title">
          <i class="brand"></i>
          <span class="text">嘉禾一品（温都水城）</span>
        </div>
        <div class="des">
          <span class="text">硅谷专送/38分钟送达</span>
        </div>
        <div class="supports">
          <i class="icon decrease"></i>
          <span class="text">在线支付满25送阿芳，满50送达姆</span>
        </div>
      </div>
      <div class="btn" @click="maskShow=true">
        <span class="text">5个</span>
        <i class="icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin">
      <div class="bulletin-left">
        <i class="icon"></i>
        <span class="text">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”</span>
      </div>
      <i class="arrow icon-keyboard_arrow_right"></i>
    </div>
    <div class="bg">
      <img src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg" alt="">
    </div>
    <div class="mask" v-show="maskShow">
      <div class="wrap"  >
        <div class="content">
          <div class="title">粥品香坊(大运村)</div>
          <ele-stars class="stars" size="24" ></ele-stars>
          <ele-line></ele-line>
          <ele-list></ele-list>
          <ele-line></ele-line>
          <p class="text">是以粥为特色的中式营养快餐，自2004年10月18日创立“嘉和一品”品牌至今，不断优化管理，积极创新，立足于“贴近百姓生活，服务千家万户”</p>
        </div>
      </div>
      <div class="footer">
        <i class="close icon-close" @click="maskShow=false"></i>  
      </div> 
    </div>
  </div>
</template>

<script>
import Stars from "components/stars/Stars.vue";
import Line from "components/line/Line.vue"
import List from "./list/List"
export default {
  data(){
    return {
      maskShow:false
    }
  },
  components:{
    "ele-stars":Stars,
    "ele-line":Line,
    "ele-list":List

  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixin.stylus";
@import "../../common/stylus/header.stylus";
</style>