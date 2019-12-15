<template>
  <div id="app">
    <v-header></v-header>
    <div class="nav" >
      <div class="item" >
        <router-link to= "/goods">商品</router-link>
      </div>
      <div class="item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/ele-header/Header'

export default {
  name: 'app',
  components: {
    "v-header":Header
  }
}
</script>

<style lang="stylus" scoped>
@import "./common/stylus/mixin.stylus"
#app
  .nav
    one-px(rgba(7,17,27,0.1))
    position relative
    display flex
    height 40px
    line-height 40px
    .item
      flex 1
      a
        font-size 14px
        display block
        text-align center
        color rgba(77,85,93,1)
        &.active
          color rgba(240,20,20,1)
    

    







</style>
