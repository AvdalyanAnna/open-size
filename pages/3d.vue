<template>
  <Header/>
  <div class="px-[17%]">
    <div class="flex justify-between items-start">
      <img src="/app%20copy%201.png" class="w-1/2" alt="">
      <div class="mt-[60px]">
        <h2 class="font-bold text-[70px] text-right">
          3D SCANNER
          <br>INSIDE A MOBILE
          <br>APPLICATION
        </h2>
        <h2 class="text-right text-[45px]">
          Advanced solution OpenSize
          <br>3D Scanner Mobile app —
          <br>high-precision 3D scanner
          <br>implemented as a mobile
          <br>application
        </h2>
      </div>
    </div>
    <div class="flex bg-[#5BA8A0] items-center">
      <img src="/n21.png" alt="">
      <h2 class="text-white text-[23px] px-[50px]">The OpenSize 3D Scanner mobile app allows brand customers, regardless of their geographical location, to use their own phone to make three-dimensional scans of their feet and body, which is essential to receive recommendation of the correct fit and choose the right size.
        <br>
        <br>
        This gives the brand the opportunity to quickly launch its own electronic fitting service without investing in expensive floor mounted 3D scanners.
        <br>
        <br>
        OpenSize mobile solutions benefit the influx of new customers and maintain loyalty thanks to the simplicity and convenience of electronic fitting.</h2>
    </div>

    <h2 class="text-[80px] font-bold leading-[80px] mt-[40px]">
      Comfort
      <br>recommendations
    </h2>
    <h2 class="text-[23px] mt-[20px]">
      OpenSize operates high-precision 3D e-twins of brand
      <br>products and customers to provide brands and
      <br>customers with industry-leading fit recommendations.
    </h2>

  </div>
  <div class="flex items-center justify-between  px-[17%] mt-[40px] h-[500px]" style="background-image: url(/bg1.png)">
    <h2 class="w-[40%] mr-[20px] text-[25px] font-bold text-white">
      E-fitting is carried out by smart OpenSize AI algorithms, which ensure the selection of not only the correct
      size, but also an assessment of potential wearing comfort.
      <br>
      Preliminary statistics show that the OpenSize E-fitting has an impressive potential for increasing conversions and makes it possible to reduce returns of ill-fitting shoes for online sales from 50% to 10%.
    </h2>
    <img src="/VRARim-psd-iphone14pro-mockup-a%20copy%201.png" class="relative right-[-40px]" alt="">
  </div>
  <img src="/Rectangle%20136.png" class="mt-[20px]" alt="">
  <h2 class="px-[17%] mt-[40px] text-[23px]">
    The OpenSize E-fitting exceeds the accuracy of the
    <br>recommendations of existing services that try to compare
    <br>the sizing charts of different brands with each other,
    <br>according to the principle — “if you wear 8 in brand A,
    <br>then in brand B your size will be 8.5”.
  </h2>
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
      <h2 class="text-[40px]">
        <span class="font-bold">OpenSize</span> mobile solutions
        <br>provide unlimited scaling of your
        <br>  customer base and instantly
        <br>connect customers to your
        <br>brand’s digital shoe and clothing
        <br>size recommendation system.

        <span class="font-bold"><br>OpenSize's unique SaaS platform
        <br>turns customer traffic
        <br>into ongoing brand loyalty</span>
      </h2>
    </div>
  </div>
  <div class="px-[16%]">

    <img src="/lastImg.png" class="mt-[80px]" alt="">
    <button class="flex items-center mt-[-46px] bg-[#CBE54E] h-[46px] px-[70px]  absolute"><img src="/Arr.svg" class="mr-[20px]" alt=""> BACK</button>

  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>
<style scoped>
.swiper-slide{
  width: 80%;
  transform: scale(0.9);
  transition: 0.4s;
}
.swiper-slide-active{
  width: 150%;
  transform: scale(1.15);
  transition: 0.4s;
  height: 150%;
}
</style>