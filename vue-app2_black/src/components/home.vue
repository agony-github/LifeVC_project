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
        <v-nav></v-nav>
      </header>
    </div>
    <loading></loading>
    <scroller style="top: 98px;"
              :on-refresh="refresh"
              :on-infinite="infinite"
              :noDataText="'~没有更多了~'"
              class="home_wrap">
      <div ref="scroll">
        <div class="mint-loadmore-content">
          <carous></carous>
          <div class="item-combo" v-for="url in imgUrl">
            <img  v-lazy="url"  style="width: 100%; height: 100%"/>
          </div>
        </div>
      </div>
    </scroller>
    <v-footer :flag="flag"></v-footer>
  </div>
</template>
<script type="text/javascript">
  import Swiper from 'vue-awesome-swiper'
  import footer from './footer'
  import loading from './loading'
  import carous from './carous'
  import nav from './nav.vue'
  export default {
    data () {
      return {
        imgUrl:[
          'http://i.lifevccdn.com/upload/combinationchart/e561e13a48f64df3a6305cc4bd72935d_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/a008b4c6187745fc91a1747e6b4ccf6a_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/5c0c88d22a094db7a917860ea4a11fee_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/be62a37a54604cf08f1aac1f976daf59_d1242x0.jpg',
          "http://i.lifevccdn.com/upload/combinationchart/f4d7598b89f9454ea9d19342e2035e7b_d1242x0.jpg",
          'http://i.lifevccdn.com/upload/combinationchart/d1d96cc66b2e4c3ba56a6d49796ac4d7_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/68f1b5429f9a4afeaba9ae5ee0647dd6_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/5b4c149ee304400c895f4ce9576cdd36_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/33ca81e7d3bd49cc90891ad0378c9e69_d1242x0.jpg'
        ],
        flag: true
      }
    },
    methods: {
      refresh (done) {
        var self = this
        setTimeout(function () {
          self.top = self.top - 10;
          done(true);
        }, 1500)
      },
      infinite (done) {
        var self = this
        setTimeout(function () {
          self.bottom = self.bottom + 10;
          done(true);
        }, 1500)
      }
    },
    created () {
    },
    components: {
      'v-footer': footer,
      'v-nav': nav,
      carous,
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
  /*home_body显示*/
  .home_body .lfmasklayer{
    position: absolute;
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
  .mint-loadmore-text
    font-size 13px
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

  .mint-loadmore-top{
    margin-top: 46px;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .page-loadmore-wrapper .swiper-wrapper{
    width: 700%;
  }
  .swiper-wrapper .swiper-slide img{
    width:375px;
    height: 250px;
  }

  /*内容图*/
  .home_wrap
    position fixed !important
    top 96px !important
    bottom 60px
  .item-combo
    margin-bottom 10px
  .img-wrap img{
    width: 100%;
    height: 100%
  }

  img[lazy=loaded] {
    width 100%
    height : 100%
    display block
  }
  .bg[lazy=loaded] {
    display none
  }
</style>
