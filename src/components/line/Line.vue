<template>
  <div class="line-wrap">
    <div class="line"></div>
    <slot>
      <span class="line-text">优惠信息</span>
    </slot>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.line-wrap
  // height 30px
  width 80%
  display inline-flex
  align-items center
  .line
    flex 1
    height 1px
    background rgba(255,255,255,.2)
  .line-text
    font-size 14px
    font-weight 700
    font-size 14px
    line-height 14px
    color rgba(255,255,255,1)
    margin-left 12px
    margin-right 12px
    
      
</style>