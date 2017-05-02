<template>
  <div class="wrap_swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <a href="##">
          <img src="../../../img/2.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/3.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/4.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/5.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/6.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/7.jpg">
        </a>
      </swiper-slide>
      <swiper-slide>
        <a href="##">
          <img src="../../../img/1.jpg">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination">
      </div>
    </swiper>
  </div>
</template>
<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
          notNextTick: true,
          autoplay: 1000,
          direction: 'horizontal',
          autoplayDisableOnInteraction: false,
          grabCursor : true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
          loop: true,
          mousewheelControl: true
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
  .swiper-wrapper .swiper-slide img{
    width:375px!important;
    height: 250px;
  }
</style>
