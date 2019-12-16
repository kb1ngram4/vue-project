<template>
  <ul class="list">
    <li v-for="support in supports" :key="support.index" >
      <ele-icon class="icon" :size="2" :type="support.type" ></ele-icon>
      <span class="text">{{support.content}}</span>
    </li>
    
  </ul>
</template>
<script>
import Icon from "components/ele-icon/Icon"
export default {
  props:{
    supports:Array
  },
  components:{
    "ele-icon":Icon
  }
}
</script>
<style lang="stylus" scoped>
@import "../../../common/stylus/mixin.stylus";
.list
  box-sizing border-box
  width 80%
  margin 0 auto 
  margin-top 24px
  margin-bottom 28px
  padding 0 12px
  text-align left 
  li
    margin-bottom 12px
    &:last-child
      margin-bottom 0px
    .icon
      vertical-align middle
      margin-right 6px
      
    .text
      font-size 12px
      font-weight 200
      vertical-align middle
      color rgba(255,255,255,1)
      line-height 12px
</style>