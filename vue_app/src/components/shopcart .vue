<template>
  <!--购物车-->
  <div class="shopcart">
    <div>
      <loading></loading>
      <header class="header">
        <div class="header-content">
          <span class="btn-back"></span>
          <p class="header-title">购物车</p>
        </div>
        <div class="header-login">
          <a href="#/login?redirect=/cart" class="btn-login">
            登陆
          </a>
          <span class="login-tip">
                你可以在登录后同步电脑与手机购物车中的商品
              </span>
        </div>
      </header>
      <div class="wrap-content wrap-cart-cont  wrap-cart-login">
        <div class="page-loadmore-wrapper">
          <div class="mint-loadmore">
            <div class="mint-loadmore-content">
              <div class="mint-loadmore-top">
                <span class="mint-loadmore-text">下拉刷新</span>
              </div>
              <div class="header-exchange-wrap">
                <form class="header-exchange">
                  <input type="text" minlength="15"
                         placeholder="礼品兑换处，请输入兑换码"
                         class="exch-ipt"
                         align="middle">
                  <input type="button" value="兑换" class="exch-btn">
                </form>
              </div>
              <div id="wrap-nodata">
                <div class="carts-img">
                  <img src="../image/shopcart.png">
                </div>
                <div class="carts-text font-medium">
                  <p>您的购物车还是空荡荡的</p>
                </div>
                <div class="carts-link font-medium">
                  <a href="##">赶紧去逛逛</a>
                </div>
                <div class="wrap-cart-assem cart-empty-recom">
                  <div class="cart-assem-title">
                    <p>Rico.S为你精心推荐</p>
                  </div>
                  <div class="cart-assem-list">
                    <ul>
                      <li class="cart-assem-item">
                        <a href="##">
                          <img src="../image/sjop01.jpg">
                        </a>
                        <p class="title">可降解环保垃圾袋</p>
                        <p class="price">￥9</p>
                      </li>
                      <li class="cart-assem-item">
                        <a href="##">
                          <img src="../image/shop02.jpg">
                        </a>
                        <p class="title">自黏式缝隙膜贴</p>
                        <p class="price">￥9</p>
                      </li>
                      <li class="cart-assem-item">
                        <a href="##">
                          <img src="../image/shop03.jpg">
                        </a>
                        <p class="title">厨房防油污贴纸（5张）</p>
                        <p class="price">￥9</p>
                      </li>
                      <li class="cart-assem-item">
                        <a href="##">
                          <img src="../image/shop04.jpg">
                        </a>
                        <p class="title">全棉超软加厚毛巾</p>
                        <p class="price">￥9</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  /*购物车的样式*/
  .shopcart {
    font-family: 'Microsoft YaHei';
    /*下拉刷新*/
  }
  .shopcart .btn-back {
    position: absolute;
    top: 7px;
    left: 0;
    display: block;
    width: 27px;
    height: 32px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeAQMAAAAW3KwoAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAADZJREFUCNdjYGA4wMDACMTMDQwM7EAuHxDLALEFEBcA8QMc0lAsAxYDyYHUgNSC9ID04lNwAACHIArVHBwTzAAAAABJRU5ErkJggg==") no-repeat;
    background-size: 31px 37px;
    background-position: 12px 0;
  }
  .shopcart .header-login {
    width: 100%;
    position: relative;
    height: 51px;
    background-color: #f0fae6;
  }
  .shopcart .header-login .btn-login {
    width: 18%;
    height: 33px;
    display: inline-block;
    font-size: 15px;
    text-align: center;
    line-height: 33px;
    color: #88c13e;
    border: 0.08rem solid #8bc146;
    background-color: #fff;
    position: absolute;
    top: 8px;
    left: 10px;
  }
  .shopcart .header-login .login-tip {
    overflow: hidden;
    width: 72%;
    display: table-cell;
    font-size: 14px;
    line-height: 18px;
    position: absolute;
    right: 8px;
    top: 8px;
  }
  .shopcart .mint-loadmore-top {
    margin-top: 49px;
  }
  .shopcart .mint-loadmore-top .mint-loadmore-text {
    display: inline-block;
    height: 50px;
  }
  .shopcart .header-exchange-wrap {
    width: 100%;
    height: 52.5px;
    position: relative;
    background-color: #fff;
    font-size: 0;
  }
  .shopcart .header-exchange-wrap .header-exchange {
    padding-top: 8px;
  }
  .shopcart .header-exchange-wrap .header-exchange .exch-ipt {
    padding-left: 10px;
    margin: 0 14px;
    outline: none;
    display: inline-block;
    text-align: left;
    width: 68%;
    line-height: 35px;
    font-size: 13px;
    border: 0.08rem solid #e7e7e7;
  }
  .shopcart .header-exchange-wrap .header-exchange .exch-btn {
    outline: none;
    font-size: 13px;
    line-height: 33px;
    display: inline-block;
    width: 20%;
    background-color: #fff;
    border: 1px solid #6fbd00;
    color: #6fbd00;
    position: absolute;
    right: 18px;
    top: 9px;
  }
  .shopcart #wrap-nodata {
    position: relative;
    text-align: center;
  }
  .shopcart #wrap-nodata .carts-img {
    width: 100%;
    margin-left: 20px;
    padding-top: 8px;
  }
  .shopcart #wrap-nodata .carts-img img {
    max-width: 160px;
    vertical-align: middle;
  }
  .shopcart #wrap-nodata .carts-text {
    width: 100%;
  }
  .shopcart #wrap-nodata .carts-text p {
    font-size: 18px;
    line-height: 27px;
    color: #666;
    font-family: 'Microsoft YaHei';
  }
  .shopcart #wrap-nodata .carts-link {
    margin-top: 8px;
  }
  .shopcart #wrap-nodata .carts-link a {
    display: inline-block;
    font-size: 16px;
    letter-spacing: 1px;
    padding: 0 10px;
    line-height: 32px;
    color: #89be48;
    border: 1px solid #89be48;
    border-radius: 5px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem {
    position: fixed;
    bottom: 55px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-title {
    margin-top: 10px;
    text-align: left;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-title p {
    margin-left: 10px;
    font-size: 16px;
    line-height: 44px;
    color: #333;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list {
    text-align: left;
    background-color: #fff;
    width: 100%;
    padding: 15px 0 8px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list ul {
    width: 2000px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list .cart-assem-item {
    display: inline-block;
    margin-left: 5px;
    width: 96px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list .cart-assem-item img {
    width: 96px;
  }
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list .cart-assem-item .title,
  .shopcart #wrap-nodata .wrap-cart-assem .cart-assem-list .cart-assem-item .price {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 23px;
    color: #333;
    width: 100%;
  }
</style>
