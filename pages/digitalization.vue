<template>
  <Header/>
  <img src="/txt.png" class="w-full relative z-10 lg:mt-[100px] mt-[40px] " alt="">
  <div class="px-[16%] relative top-[-105px]">
    <div class="px-[60px] pt-[150px] pb-[50px] bg-[#F8FEE2]">
      <p class="description" v-html="$t('digitalization.block1.desc')"></p>
    </div>
    <v-video/>
  </div>
  <div class="flex">
    <img src="/react99.png" alt="">
    <p v-html="$t('digitalization.block2.desc')" class="description-26 ml-[20px] max-w-[1078px]">
    </p>
  </div>
  <h2 v-html="$t('digitalization.block3.title')" class="text-center title-big-3 font-bold mt-[40px]"></h2>
  <div class="flex mt-[40px] items-center justify-end">
    <p v-html="$t('digitalization.block3.desc1')" class="description mr-[40px] max-w-[638px]"></p>
    <img src="/react100.png" class="h-[69px]" alt="">
  </div>
  <div class="my-[100px]">
    <v-slider-big />
  </div>
  <div class="flex items-center mt-[40px]">
    <img src="/react101.png" class="h-[83px]" alt="">
    <p v-html="$t('digitalization.block3.desc2')" class="description ml-[20px] max-w-[748px]"></p>
  </div>
  <div class="my-[100px]">
    <v-slider-big :slider=" [
      '/sl22.png', '/sl23.png', '/sl24.png',
      '/sl25.png', '/sl22.png', '/sl23.png',
      '/sl24.png', '/sl25.png'
    ]" />
  </div>
  <div class="wrapper">
    <p v-html="$t('digitalization.block4.desc1')" class="text-center description-26 max-w-[840px] my-[80px] mx-auto"></p>
  </div>
  <div class="w-full pt-[20px] bg-[#F8FEE2] px-[17%]">
    <h2 v-html="$t('digitalization.block5.desc1')" class="text-[35px] leading-[45px] mb-[20px]">  </h2>
    <v-video src="/video/reverse-engineering.mp4"/>
  </div>
  <div class="wrapper">
    <div class=" mt-[250px]">
      <div class="relative bg-[#F8FEE2] px-[80px] pb-[40px] pt-[180px]">
        <img src="/sh1.png" class="absolute top-[-350px] left-[-300px]" alt="">
        <img src="/sh2.png" class="absolute top-[50px] right-[-200px]" alt="">
        <img src="/7%20copy%201.png" class="absolute bottom-[-150px] right-[150px]" alt="">
        <h2 v-html="$t('digitalization.block5.desc2')" class="description-big-40  max-w-[676px] uppercase"> </h2>
      </div>
      <div class="mt-[80px]">
        <h2 v-html="$t('digitalization.block6.title')" class="title-big mb-[58px]"></h2>
        <div class="flex justify-between">
          <div class="w-[49%]">
            <p v-html="$t('digitalization.block6.desc1')" class="description-21">
            </p>
            <img src="/Rectangle%20165.png" class="w-full" alt="">
          </div>
          <div class="w-[49%]">
            <img src="/Rectangle%20164.png" class="w-full" alt="">
            <p v-html="$t('digitalization.block6.desc2')" class="description">
            </p>

          </div>
        </div>
        <button class="flex items-center bg-[#CBE54E] px-[50px] h-[50px] relative z-10 top-[-20px]">
          <img src="/Group%2091%20(2).svg" class="mx-[5px]" alt="">
          {{ $t('digitalization.block6.btn') }}
        </button>
        <div class="flex justify-between relative top-[-40px] z-0">
          <img src="/Rectangle%20170.png" class="w-[32%]" alt="">
          <img src="/Rectangle%20170.png" class="w-[32%]" alt="">
          <img src="/Rectangle%20170.png" class="w-[32%]" alt="">
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>
<style lang="scss" scoped>
.swiper-slide {
  img{
    //transform: scale(0.8);
  }
  &.swiper-slide-active{
    img{

    }
  }
}
/*.swiper-slide {*/
/*  width: 80%;*/
/*  transform: scale(0.9);*/
/*  transition: 0.4s;*/
/*}*/

/*.swiper-slide-active {*/
/*  width: 115%;*/
/*  transform: scale(1.15);*/
/*  transition: 0.4s;*/
/*  height: 115%;
//} */
</style>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
import VSliderBig from "~/components/Sliders/vSliderBig.vue";
</script>