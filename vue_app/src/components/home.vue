<template>
  <div id="home_page">
    <div class="toTop"></div>
    <div class="home_data">
      <header id="topbar" class="header">
        <div class="header-content">
          <div class="wrap-heard">
            <div class="header-Ico"></div>
            <a href="##">
              <span class="head-typeimg"></span>
            </a>
          </div>
        </div>
        <div class="wrap-menuNavNewProduct" title="分类导航条">
          <div id="navPanelDiv" class="menuNavNewProductPanel">
            <ul id="navUL" class="menuNavNewProduct" style="width: 800px;">
              <li class="font-large selected">
                <a>首页</a>
              </li>
              <li class="font-large">
                <a>新品</a>
              </li>
              <li class="font-large">
                <a>家务</a>
              </li>
              <li class="font-large">
                <a>下厨</a>
              </li>
              <li class="font-large">
                <a>家居服</a>
              </li>
              <li class="font-large">
                <a>生活</a>
              </li>
              <li class="font-large">
                <a>软装</a>
              </li>
              <li class="font-large">
                <a>床品</a>
              </li>
              <li class="font-large">
                <a>工作和旅行</a>
              </li>
              <li class="font-large">
                <a>了解LifeVC</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
    <loading></loading>
    <article class="home_body">
      <div class="page-loadmore-wrapper">
        <div class="mint-loadmore-content">
          <div class="mint-loadmore-top">
            <span class="mint-loadmore-text">下拉刷新</span>
          </div>
          <div class="swiper-container swiper-container-horizontal">
            <ul class="swiper-wrapper">
              <li class="swiper-slide swiper-slide-duplicate">
                <a href="##">
                  <img src="../../../img/2.jpg">
                </a>
              </li>
              <li class="swiper-slide swiper-slide-duplicate">
                <a href="##">
                  <img src="../../../img/3.jpg">
                </a>
              </li>
              <li class="swiper-slide swiper-slide-duplicate">
                <a href="##">
                  <img src="../../../img/4.jpg">
                </a>
              </li>
            </ul>
            <div class="swiper-pagination swiper-pagination-bullets">
              <span class="banner"></span>
              <span class="banner"></span>
              <span class="banner"></span>
              <span class="banner"></span>
              <span class="banner"></span>
              <span class="banner"></span>
              <span class="banner"></span>
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/nianqing.jpg">
            </div>
            <!--组件标签-->
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/jifeng.jpg" >
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/title.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/xinping.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/hot-seller.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/chuang.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/yifu.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/lvxing.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/hufu.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/info.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/manman.jpg">
            </div>
          </div>
          <div class="item-combo">
            <div class="img-wrap">
              <img src="../../../img/manman1.jpg">
            </div>
          </div>
        </div>
      </div>
      <div class="loadingAlert">
        <span>~没有更多了~</span>
      </div>
    </article>
  </div>
</template>
<script>
  import loading from './loading'
  export default {
    components: {
      loading
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*home首页的样式*/
  .header .header-content{
    height: 48px;
    background-color: #88C13E;
  }
  .wrap-heard .header-Ico{
    width: 100%;
    height: 48px;
    background: url('../../../img/data-image-png;base….png') no-repeat;
    background-size: 50%;
    background-position: 50%;
  }
  .wrap-heard .head-typeimg{
    display: block;
    width: 43.98px;
    height: 43.98px;
    float: right;
    position: absolute;
    top:0;
    right: 0;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9qkf8RAAAALHRSTlMA4yl4B/GrYh8P+rKFLyQF58acfnvWu2peNvXt6d/e2NDOoJlyWUtDPBcUjkxLpL4AAAEgSURBVDjL5dLHcoMwFIVhCdEJHffeS/73f77g0XiMQbZZJKt8K3TmoGEuV/yCq3/9XLLHkQM40dh+2ztI7uThdS0tuHEWDjdFqmNL8iCtOnGBeZXUT0k1B1xdVDQpHbiB0AJXh4Yb/RAK8VBA6AuDHazT5hevYWcajAOnp+QEjmFIZ1i2oiWcu8URbFvRFkbdYglfregLym6xMharbtEDtxW54HWLMczs5znMIBZdsv2+B1IYlJBdGudLBqWpGGSQB49jDll9NDgCq4nQJivg+GLN9gBDL/ZjbwiwN69ZbTylYSPMi3uTRNyFMBJvJCoaLAaRSr5haoke7AFs0j7NONR//zMF4aRXcwiqV9HPc1/8V5bkPWndB/+J6n/jn/gBNys8rIWO1DgAAAAASUVORK5CYII=") no-repeat;
    background-size: 45%;
    background-position: 50%;
  }
  /*home中的导航显示*/
  .menuNavNewProductPanel .menuNavNewProduct{
    width: 100%;
    height: 48px;
    overflow: hidden;
    background-color: white;
  }
  .menuNavNewProduct .selected{
    border-bottom: 2px solid #80b532;
  }
  .menuNavNewProduct li{
    width: 80px;
    line-height: 48px;
    text-align: center;
    float: left;
    box-sizing: border-box;
    border-bottom: 2px solid #dddddd;
  }
  .menuNavNewProduct li a{
    display: block;
    font-size: 0.7rem;
    height: 45.59px;
    color: #333;
  }
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
  /*轮播图*/
  .mint-loadmore-top{
    margin-top: 46px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .swiper-container{
    position: relative;
    overflow: hidden;
  }
  .mint-loadmore-top .mint-loadmore-text{
    font-size: 15px;
  }
  .page-loadmore-wrapper .swiper-wrapper{
    /*待定*/
    width: 700%;
  }
  .swiper-wrapper .swiper-slide{
    /*待定*/
    width: 375px;
    float: left;
  }
  .swiper-wrapper .swiper-slide img{
    /*待定*/
    width:375px;
    height: 250px;
  }
  .mint-loadmore-content .swiper-pagination{
    position: absolute;
    left: 130px;
    bottom: 15px;
  }
  .mint-loadmore-content .banner{
    display: block;
    width: 8px;
    height: 8px;
    background-color: gainsboro;
    border-radius: 8px;
    float: left;
    margin-left: 8px;
  }
  /*内容图*/
  .mint-loadmore-content .item-combo{
    margin-top: -3px;
    margin-bottom: 13px;
  }
  .mint-loadmore-content .img-wrap img{
    width: 100%;
  }
  .home_body .loadingAlert{
    text-align: center;
    padding-bottom: 16px;
  }
  .home_body .loadingAlert span{
    color: #888;
    font-size: 14px;
    vertical-align: middle;
  }
</style>
