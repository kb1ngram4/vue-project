<template>
  <div class="stars" :class="`stars-${size}`" >
    <div class="star on"></div>
    <div class="star on"></div>
    <div class="star on"></div>
    <div class="star half"></div>
    <div class="star off"></div>
  </div>
</template>
<script>
export default {
  props:{
    size:String
  }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixin.stylus";
.stars
  display inline-flex
  height 24px
  .star
    background-size 100% 100%
    background-repeat no-repeat
  &.stars-48
    .star
      width 20px
      height 20px
      margin-right 20px
      &:last-child
        margin-right 0
      &.on
        bg-img(star48_on)
      &.half
        bg-img(star48_half)
      &.off
        bg-img(star48_off)
  &.stars-36
    .star
      width 15px
      height 15px
      margin-right 15px
      &:last-child
        margin-right 0
      &.on
        bg-img(star36_on)
      &.half
        bg-img(star36_half)
      &.off
        bg-img(star36_off)
  &.stars-24
    .star
      width 10px
      height 10px
      margin-right 10px
      &:last-child
        margin-right 0
      &.on
        bg-img(star24_on)
      &.half
        bg-img(star24_half)
      &.off
        bg-img(star24_off)      
</style>