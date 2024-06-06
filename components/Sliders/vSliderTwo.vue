

<script setup>
import {Autoplay, FreeMode, Navigation, Thumbs} from "swiper/modules";
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
const smallSlider = ref(['/systems/shoes.png','/systems/woman.png','/systems/done-shoes.png'])
const bigSlider = ref(['/cities/future.png','/cities/palms.png','/cities/down-town.png'])
</script>
<template>
  <div class="home-page__slider">
    <div class="home-page__slider-left">
      <h2 class="home-sliders-title">
        <span v-html="$t('home.block1.titleBold')"></span>
        <span>{{ $t('home.block1.title') }}</span>
      </h2>
      <Swiper
          class="mx-auto w-full mySwiper2"
          :modules="[FreeMode, Navigation, Thumbs, Autoplay]"
          :thumbs="{ swiper: thumbsSwiper }"
          :autoplay="{
            delay: 3000,
            // disableOnInteraction: false,
          }"
          :loop="true"
          :slides-per-view="1"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :center-insufficient-slides="true"
      >
        <SwiperSlide v-for="(item,index) in smallSlider" :key="index">
          <img :src="item" class="w-full" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="home-page__slider-right">
      <Swiper
          class="w-[49%] mySwiper"
          :modules="[FreeMode, Navigation, Thumbs]"
          @swiper="setThumbsSwiper"
          :slides-per-view="1"
      >
        <SwiperSlide v-for="(item,index) in bigSlider" :key="index">
          <img :src="item" class="w-full" alt="">
        </SwiperSlide>
      </Swiper>
    </div>

  </div>
</template>

<style lang="scss">

</style>