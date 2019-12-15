<template>
  <ul class="list">
    <li>
      <i class="icon decrease"></i>
      <span class="text">在线支付满28减5，满50减10</span>
    </li>
    <li>
      <i class="icon discount"></i>
      <span class="text">在线支付满28减5，满50减10</span>
    </li>
    <li>
      <i class="icon guarantee" ></i>
      <span class="text">在线支付满28减5，满50减10</span>
    </li>
    <li>
      <i class="icon invoice"></i>
      <span class="text">在线支付满28减5，满50减10</span>
    </li>
    <li>
      <i class="icon special" ></i>
      <span class="text">在线支付满28减5，满50减10</span>
    </li>
  </ul>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
@import "../../../common/stylus/mixin.stylus";
.list
  box-sizing border-box
  width 80%
  // margin 24px 0 28px 0
  margin 0 auto 
  padding 0 12px
  text-align left 
  li
    .icon
      display inline-block
      vertical-align middle
      width 16px
      height 16px
      background-size 100% 100%
      background-repeat no-repeat
      margin-right 6px
      &.decrease
        bg-img(decrease_2)
      &.discount
        bg-img(discount_2)
      &.guarantee
        bg-img(guarantee_2)
      &.invoice
        bg-img(invoice_2)
      &.special
        bg-img(special_2)
    .text
      font-size 12px
      font-weight normal
      vertical-align middle
      color rgba(255,255,255,1)
      line-height 12px
</style>