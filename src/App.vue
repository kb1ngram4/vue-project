<template>
  <div id="app">
    <v-header :seller="seller" ></v-header>
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
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from './components/ele-header/Header'
const ok = 0
export default {
  name: 'app',
  data(){
    return {
      seller:{}
    }
  },
  async mounted(){
    const data = await this.$http.shop.getSellers()
    if(data.errno===ok){
      this.seller = data.body
    }
  },
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
