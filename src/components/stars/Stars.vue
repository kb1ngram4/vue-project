<template>
  <div class="stars" :class="`stars-${size}`" >
    <div 
        class="star on" 
        v-for="star in starArray" 
        :key="star.index" 
        :class="star">    
    </div>
  </div>
</template>
<script>
const ON = "on"
const HALF = "half"
const OFF = "off"
const Length = 5
export default {
  props:{
    size:String,
    score:Number
  },
  computed:{
    starArray(){
      let arr = []
      // 3.2  3.6   0.4  0.7   4  3.5
      // 6.4  7.2   0.8  1.4   8   7
      const Store = Math.floor(this.score*2)/2
      const fullStar = Math.floor(Store)
      const halfStar = Store%1===0 ? false : true
      for (let i = 0; i < fullStar; i++) {
        arr.push(ON)
      }
      if(halfStar){
        arr.push(HALF)
      }
      while(arr.length<Length){
        arr.push(OFF)
      }
      return arr
    }
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