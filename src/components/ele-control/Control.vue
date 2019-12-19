<template>
  <div class="control">
    <transition name="control">
      <i class="remove icon-remove_circle_outline"  @click="removeCount" v-show="food.count>0"></i>
    </transition>
    <transition name="control">
      <span class="text" v-show="food.count>0">{{food.count}}</span>
    </transition>
    <i class="add icon-add_circle" @click="addCount"></i>
  </div>
</template>
<script>
export default {
  props:{
    food:{
      type:Object,
      require:true
    },
    goodIndex:{
      type:Number,
      require:false
    },
    foodIndex:{
      type:Number,
      require:false
    }
  },
  methods:{
    addCount(){
      // this.$emit("addCount",this.goodIndex,this.foodIndex)
      this.$emit("addCount",this.food)

    },
    removeCount(){
      this.$emit("removeCount",this.food)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .control
    font-size 0
    display inline-block
    .add
      position relative
      z-index 1
    .remove,.add
      display inline-block
      margin-right 4px
      font-size 24px
      color rgba(0,160,220,1)
      line-height 24px
      vertical-align middle
    .text
      display inline-block
      width 24px
      font-size 10px
      text-align center
      color rgba(147,153,159,1)
      line-height 24px
      vertical-align middle
</style>