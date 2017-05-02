<template>
  <div class="home_body">
    <!--遮罩-->
    <div class="lfmasklayer" style="display: none;"></div>
    <!--loading加载-->
    <div class="lf-loading" style="display: none;">
      <i class="lf-circles"></i>
      <i class="iconfont icon-loading-logo"></i>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*home_body显示*/
  .home_body .lfmasklayer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
  }
  .home_body .lf-loading{
    position: fixed;
    text-align: center;
    top: 48%;
    left: 0;
    width: 100%;
    height: 60px;
  }
  /*loading加载*/
  .lf-loading .lf-circles{
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 2px solid #009c42;
    border-top-color: #e4e4e4;
    border-radius: 50%;
    -webkit-animation: rotate 1s infinite linear
  }
  @keyframes rotate {
    0%{
      transform: rotate(60deg);
    }
    20%{
      transform: rotate(120deg);
    }
    40%{
      transform: rotate(180deg);
    }
    60%{
      transform: rotate(240deg);
    }
    80%{
      transform: rotate(300deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .lf-loading .iconfont{
    position: absolute;
    top: 13px;
    left: 158px;
    display: inline-block;
    width: 60px;
    height: 60px;
    background: url("../image/vc.png") no-repeat;
    background-size: 47px 37px;
    background-position: 50% 0;
  }
</style>
