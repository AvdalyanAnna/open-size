<script setup>
import {Pagination} from "swiper/modules";


defineProps({
  slider: {
    type: Array,
    default: [
      '/sl1.png', '/sl2.png', '/sl3.png',
      '/sl4.png', '/sl5.png', '/sl6.png',
      '/sl1.png', '/sl2.png', '/sl3.png',
      '/sl4.png', '/sl5.png', '/sl6.png',
    ]
  },

})
</script>
<template>
  <Swiper
      class="mx-auto w-full slider-simple-a animated"
      :modules="[Pagination]"
      :space-between="0"
      :slides-per-view="'auto'"
      :grab-cursor="true"
      :loop="true"
      :thumbs="true"
      :centered-slides="true"
      :additional-slide="2"
      :center-insufficient-slides="true"
      :centered-slides-bounds="true"
      :pagination="{
      dynamicBullets: true,
    }"

  >
    <!--    <SwiperSlide class="slide-item-a">-->
    <!--      <img src="/sl1.png" alt="">-->
    <!--    </SwiperSlide>-->
    <SwiperSlide v-for="(item,index) in slider" :key="index" class="slide-item-a">
      <div class="item-wrapper">
        <div class="item-image">
          <img :src="item" alt="">
        </div>
      </div>
    </SwiperSlide>
    <!--    <SwiperSlide class="slide-item-a">-->
    <!--      <img src="/sl3.png" alt="">-->
    <!--    </SwiperSlide>-->
    <!--    <SwiperSlide class="slide-item-a">-->
    <!--      <img src="/sl4.png" alt="">-->
    <!--    </SwiperSlide>-->
    <!--    <SwiperSlide class="slide-item-a">-->
    <!--      <img src="/sl5.png" alt="">-->
    <!--    </SwiperSlide>-->
    <!--    <SwiperSlide class="slide-item-a">-->
    <!--      <img src="/sl6.png" alt="">-->
    <!--    </SwiperSlide>-->
  </Swiper>
</template>

<style lang="scss">
.slider-simple-a.animated {

  .swiper-wrapper{
    .slide-item-a:nth-child(1){
      margin-left: -200px;
      @media screen and (max-width: 992px) {
        margin-left: -260px;
      }
    }
  }
  .slide-item-a .item-image {
    transform: scale(0.9);
    transition: 0.6s;
    z-index: -1;
  }
}

.slider-simple-a.animated .slide-item-a.swiper-slide-active .item-image {
  transform: none;
  opacity: 1;
}

.slide-item-a {
  width: 100%;
  max-width: 48rem;
  padding: 0 32px;
  @media screen and (max-width: 992px) {
    padding: 0 4px;
    max-width: 80vw;
  }

  .item-wrapper {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    align-items: center;
  }

  .item-image {
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 85vh;
    @media screen and (min-width: 992px) {
      height: auto;
    }
  }
}

.slider-simple-a .swiper-pagination .swiper-pagination-bullet-active {
  opacity: 1;
  transform: scale(2);
}

.slider-simple-a {
  .swiper-pagination {
    position: relative;
    top: unset;
    left: unset;
    right: unset;
    bottom: unset;
    margin-top: 22px;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: #EAEAEA;
      margin: 0 6px;
      transition: 0.3s all;
      opacity: 1;

      &.swiper-pagination-bullet-active {
        background: #CBE54E;
        transform: scale(1);
      }
      @media screen and (max-width: 992px) {
        width: 6px;
        height: 6px;
        margin: 0 2px;
      }
    }

    .swiper-pagination-bullets-dynamic {
      .swiper-pagination-bullet-active-prev-prev,
      .swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
        transform: scale(0.5) !important;
      }
    }
  }
}

</style>