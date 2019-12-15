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
      <div class="btn">
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
    <div class="mask">
      <div class="wrap">
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
        <i class="close icon-close "></i>  
      </div> 
    </div>
  </div>
</template>

<script>
import Stars from "components/stars/Stars.vue";
import Line from "components/line/Line.vue"
import List from "./list/List"
export default {
  components:{
    "ele-stars":Stars,
    "ele-line":Line,
    "ele-list":List

  }
}
</script>
<style lang="stylus" scoped>
@import "../../common/stylus/mixin.stylus";
.header
  position relative
  font-size 0px
  background rgba(7,17,27,.5)
  overflow hidden
  .header-top
    position relative
    padding 24px 0 0 24px
    .avatar
      width 64px
      height 64px
      border-radius 2px
      margin-right 16px
      margin-bottom 18px
    .content
      vertical-align top
      position relative
      display inline-block
      .title
        margin-bottom 8px
        margin-top 2px
        .brand
          bg-img(brand)
          display inline-block
          margin-right 6px
          width 30px
          height 18px
          background-size  100% 100%
          background-repeat no-repeat
          vertical-align middle
        .text
          vertical-align middle
          font-size 16px
          color rgba(255,255,255,1)
          font-weight bold
          line-height 18px 
      .des
        margin-bottom 10px
        .text
          font-size 12px
          color rgba(255,255,255,1)
          font-weight 200
          line-height 12px

      .supports
        .icon
          background-size 100% 100%
          background-repeat no-repeat
          vertical-align middle
          display inline-block
          margin-bottom 2px
          margin-right 4px
          width 12px
          height 12px
          &.decrease
            bg-img(decrease_1)
          &.discount
            bg-img(discount_1)
          &.guarantee
            bg-img(guarantee_1)
          &.invoice
            bg-img(invoice_1)
          &.special
            bg-img(special_1)  
        .text
          vertical-align middle

          font-size 10px
          color rgba(255,255,255,1)
          line-height 12px
          font-weight 200
    
    .btn
      position absolute
      right 12px
      bottom 34px
      width 48px
      height 24px
      text-align center
      font-size 10px
      color rgba(255,255,255,1)
      font-weight 200
      line-height 24px
      border-radius 10px
      background-color rgba(0,0,0,.2)

  .bulletin
    position relative
    width 100%
    height 28px
    background rgba(7,17,27,.2)
    font-size 10px
    color rgba(255,255,255,1)
    line-height 28px
    font-weight 200
    .bulletin-left
      height 100%
      margin-left 12px
      margin-right 26px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      .icon
        bg-img(bulletin)
        display inline-block
        background-size 100% 100%
        background-repeat no-repeat
        vertical-align middle
        margin-right 4px
        width 22px
        height 12px
      .text
        vertical-align middle
        
    .arrow
      position absolute
      right 10px
      top 10px
  .bg
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    z-index -1
    filter blur(10px)
    img 
      width 100%
      height 100%
  .mask
    position fixed

    top 0
    left 0
    right 0
    bottom 0
    background rgba(7,17,27,.8)
    z-index 99
    overflow auto
    font-size 32px
    color white
    .wrap
      min-height 100%
      .content
        text-align center
        padding-top 64px
        padding-bottom 96px
        .title
          font-size 16px
          font-weight 700
          color rgba(255,255,255,1)
        .stars
          margin-top 16px
          margin-bottom 28px
        .text
          box-sizing border-box
          text-indent 2em
          width 80%
          margin 0 auto 
          padding 24px 12px
          font-size 12px
          font-weight normal
          text-align left
          color rgba(255,255,255,1)
          line-height 24px
    .footer
      height 32px
      padding-top 32px
      padding-bottom 32px
      text-align center
      margin-top -96px
      .close
        font-size 32px
        color rgba(255,255,255,.5)
        

</style>