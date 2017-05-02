<template>
  <!--闲逛-->
  <div class="stroll">
      <!--回到顶部-->
      <div class="toTop"></div>
      <loading></loading>
      <div>
        <header id="topBa" class="header">
          <!--公共样式-->
          <div class="header-content">
            <p class="header-title">闲逛</p>
          </div>
        </header>
        <scroller :on-refresh="refresh"
                  :on-infinite="infinite"
                  :noDataText="'~没有更多了~'"
                  class="wrap_scroll">
            <div class="mint-loadmore-content">
              <div class="clearFix">
                <div class="stroll-all-item left">
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian01.jpg">
                      <span class="tag-new">NEW</span>
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">多用途清洁刷</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥10</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian02.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">抽真空防潮垫</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian03.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">双锁扣真空保鲜袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian04.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防尘防潮收纳袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian05.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防潮除湿剂（8袋）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian06.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">深层洁面魔芋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian07.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">金刚纱强力去污</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian01.jpg">
                      <span class="tag-new">NEW</span>
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">多用途清洁刷</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥10</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian02.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">抽真空防潮垫</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian03.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">双锁扣真空保鲜袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian04.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防尘防潮收纳袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian05.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防潮除湿剂（8袋）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian06.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">深层洁面魔芋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian07.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">金刚纱强力去污</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian05.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防潮除湿剂（8袋）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian06.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">深层洁面魔芋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian07.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">金刚纱强力去污</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                </div>
                <div class="stroll-all-item right">
                  <div class="stroll-item">
                    <span class="menu_a">新价格</span>
                    <span class="menu_b">今日新品</span>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian08.jpg">
                      <span class="tag-new">NEW</span>
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">单手开盖运动杯</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥10</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian09.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">离子洗衣粉</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥80</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian10.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">除菌泡沫洗手液</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥9</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian11.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">高级液体护理鞋油</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥18</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian12.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">无痕简约衣架（5只）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥10</span>
                      <span class="comment">月销11717件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian03.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">双锁扣真空保鲜袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian04.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防尘防潮收纳袋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian05.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防潮除湿剂（8袋）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian06.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">深层洁面魔芋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian07.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">金刚纱强力去污</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian05.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">可挂式防潮除湿剂（8袋）</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian06.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">深层洁面魔芋</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                  <div class="stroll-item">
                    <div class="stroll-item-layer">
                      <img src="../image/xian07.jpg">
                    </div>
                    <h3 class="stroll-item-title">
                      <a href="##">金刚纱强力去污</a>
                    </h3>
                    <div class="stroll-price-bar">
                      <span class="price">￥20</span>
                      <span class="comment">月销11730件</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </scroller>
      </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import footer from './footer.vue'
  import loading from './loading'
  export default {
    data () {
      return {
       /* imgUrl: [
          "http://i.lifevccdn.com/upload/stroll/fcd86fdb1965427b87582d44a0a7b3c3.jpg",
          "http://i.lifevccdn.com/upload/stroll/d4636f8c372d4246ab61ce0dc46315e3.jpg",
          "http://i.lifevccdn.com/upload/stroll/f829df2a91f645f6825b06534094cf33.jpg",
          "http://i.lifevccdn.com/upload/stroll/ac0b0474d4f247bfa880a249439b576b.jpg",
          "http://i.lifevccdn.com/upload/stroll/3efef7d9c1704ab5a4fa05e0cd72ab4e.jpg",
          "http://i.lifevccdn.com/upload/stroll/7a9d61e766db44ec95f1cfc5015ea5e7.jpg",
          "http://i.lifevccdn.com/upload/stroll/9f91822d55024e5688235185d486f340.jpg",
          "http://i.lifevccdn.com/upload/stroll/2f8dbffc14e14885b8aa436ff19b6f32.jpg",
          "http://i.lifevccdn.com/upload/stroll/a57d20c948614ebdb2e8ad1d9981cd0d.jpg",
          "http://i.lifevccdn.com/upload/stroll/368959b563a74586a9f1d5b0cdbfad38.jpg",
          "http://i.lifevccdn.com/upload/stroll/50ccff2472d74be298d86c2325b50f26.jpg"
        ]*/
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
    components: {
      loading,
      'v-footer': footer
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  /*闲逛的样式*/
  .wrap_scroll
    position absolute !important
    top 48px !important
    left 2px !important
  .clearFix {
    background-color: #fff;
    overflow: hidden;
    font-family: 'Microsoft YaHei', arial, sans-serif, 'Droid Sans Fallback';
  }
  .clearFix .stroll-all-item {
    width: 50%;
    float: left;
  }
  .clearFix .stroll-all-item .stroll-item {
    width: 172px;
    margin: 5px 7px;
  }
  .clearFix .stroll-all-item .stroll-item .menu_a,
  .clearFix .stroll-all-item .stroll-item .menu_b {
    font-size: 16px;
    display: inline-block;
    text-align: center;
    background-color: #eaeaea;
    width: 47.5%;
    border-radius: 8px;
    line-height: 58px;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-item-layer {
    position: relative;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-item-layer img {
    width: 172px;
    border-radius: 8px;
    vertical-align: middle;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-item-layer .tag-new {
    position: absolute;
    top: 8px;
    left: 0;
    z-index: 8;
    display: inline-block;
    font-size: 13px;
    width: 40px;
    text-align: center;
    line-height: 16px;
    background-color: #79da87;
    color: #fff;
    max-width: 94%;
    font-family: 'Microsoft YaHei', arial, sans-serif, 'Droid Sans Fallback';
  }
  .clearFix .stroll-all-item .stroll-item .stroll-item-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 5px 0;
    color: #000;
    font-size: 16px;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-price-bar {
    margin-top: -5px;
    position: relative;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-price-bar .price {
    color: #ff475d;
    font-size: 16px;
  }
  .clearFix .stroll-all-item .stroll-item .stroll-price-bar .comment {
    position: absolute;
    right: 0;
    bottom: 5px;
    color: #999;
    font-size: 15px;
  }
</style>
