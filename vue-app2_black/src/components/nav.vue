<template>
  <div class="wrap-menuNavNewProduct" title="分类导航条">
    <swiper class="menuNavNewProduct" id="nav"
          :options="swiperOption" ref="mySwiper">
    <swiper-slide class="font-large">
      <router-link to="/home">
        首页
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/new" >
        新品
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2010">
        家务
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2011">
        下厨
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2012">
        家居服
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2013">
        生活
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2014">
        软装
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2015">
        床品
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2016">
        工作和旅行
      </router-link>
    </swiper-slide>
    <swiper-slide class="font-large">
      <router-link to="/channel/2017">
        了解LifeVC
      </router-link>
    </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    props: ['flag'],
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          direction: 'horizontal',
          freeMode : true,
          slidesPerView: 'auto'
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style>
  /*home中的导航显示*/
 /* #nav{
    width: 80px;
  }*/
 .wrap-menuNavNewProduct{
   height: 48px;
   /*position: absolute;
   top: 0;
   left: 0;
   right: 0;*/
 }
  .font-large{
    width: 80px;
    line-height: 48px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 2px solid #dddddd;
  }
  .menuNavNewProduct .font-large a{
    display: block;
    font-size: 0.6rem;
    height: 45.59px;
    color: #333;
  }
</style>
