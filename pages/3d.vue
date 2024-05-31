<template>
  <Header/>
  <div class="wrapper">
    <div class="flex justify-between items-center">
      <img src="/app%20copy%201.png" class="w-1/2" alt="">
      <div class="mt-[60px]">
        <h2 v-html="$t('3d.block1.title')" class="title-big text-right lg:mb-[40px] mb-[20px]">
        </h2>
        <p v-html="$t('3d.block1.desc')" class="text-right description-big">
        </p>
      </div>
    </div>
    <div class="flex bg-[#5BA8A0] items-center lg:mb-[190px] mb-5 lg:mt-[190px] mt-5">
      <img src="/n21.png" alt="">
      <p v-html="$t('3d.block2.desc')" class="text-white description px-[50px]"></p>
    </div>

    <h2 v-html="$t('3d.block3.title')" class="title-big  mt-[40px]">
     </h2>
    <p v-html="$t('3d.block3.desc1')" class="description mt-[20px] lg:max-w-[45%]">
     </p>

  </div>
  <div class="flex items-center justify-between  px-[15%] mt-[40px] h-[500px]" style="background-image: url(/bg1.png)">
    <p v-html="$t('3d.block3.desc2')" class="w-[50%] mr-[20px] description-2 font-bold text-white">
    </p>
    <img src="/VRARim-psd-iphone14pro-mockup-a%20copy%201.png" class="relative right-[-40px]" alt="">
  </div>
  <img src="/Rectangle%20136.png" class="mt-[20px]" alt="">
  <div class="wrapper">
    <p v-html="$t('3d.block3.desc3')" class="lg:max-w-[46.3%] mt-[40px] description">
    </p>
  </div>

  <Swiper
      class="mx-auto w-full mt-[180px]"
      :modules="[SwiperAutoplay]"
      :slides-per-view="3"
      :space-between="55"
      :centered-slides="true"
      :pagination="true"
      :loop="true"
      :thumbs="true"
      :centered-slides-bounds="true"
      :center-insufficient-slides="true"
      :additional-slide="1"
  >
    <SwiperSlide>
      <img src="/sld%20(1).png" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/sld%20(2).png" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/sld%20(3).png" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/sld%20(4).png" alt="">
    </SwiperSlide>
    <SwiperSlide>
      <img src="/sld%20(5).png" alt="">
    </SwiperSlide>

  </Swiper>
  <div class="flex items-center mt-[140px]">
    <div>
      <img src="/Rectangle%20174.png" alt="">
      <div class="ml-auto w-fit">
        <img src="/map%201.png" alt="">
        <img src="/rty.png" class="absolute w-full h-[20px]" alt="">
      </div>

    </div>
    <div class="mx-[40px]">
      <h2 v-html="$t('3d.block4.desc')" class="description-big-40 lg:max-w-[645px]">

      </h2>
    </div>
  </div>
<!--  <div class="px-[16%]">-->

<!--    <img src="/lastImg.png" class="mt-[80px]" alt="">-->
<!--    <button class="flex items-center mt-[-46px] bg-[#CBE54E] h-[46px] px-[70px]  absolute"><img src="/Arr.svg"-->
<!--                                                                                                alt=""> BACK-->
<!--    </button>-->

<!--  </div>-->
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>
<style scoped>
.swiper-slide {
  width: 80%;
  transform: scale(0.9);
  transition: 0.4s;
}

.swiper-slide-active {
  width: 150%;
  transform: scale(1.15);
  transition: 0.4s;
  height: 150%;
}
</style>