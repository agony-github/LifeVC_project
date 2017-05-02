<template>
  <!--首页-->
  <div>
    <!--用来将当前路由组件渲染到页面上-->
    <router-view></router-view>

    <v-footer></v-footer>

    <loading></loading>
  </div>
</template>
<script>
import footer from './components/footer'
import loading from './components/loading'
export default {
  components: {
    'v-footer': footer,
    loading,
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .active
    color #3ea438

  /*页面头部的公共样式*/
  #home_page{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .home_data{
    width: 100%;
    margin: 0 auto;
  }
  .header{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 111;
    font-family: Microsoft YaHei;
  }
</style>

