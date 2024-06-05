<template>
  <Header/>
  <div class="i3d">
    <div class="wrapper">
      <div class="i3d-hero">
        <div class="i3d-hero__img">
          <img src="/app%20copy%201.png" class="" alt="">
        </div>
        <div class="i3d-hero__text">
          <h2 v-html="$t('3d.block1.title')" class="title-big lg:mb-[40px] mb-[20px]">
          </h2>
          <p v-html="$t('3d.block1.desc')" class="description-big">
          </p>
        </div>
      </div>

      <div class="i3d-second">
        <div class="i3d-second__img">
          <img src="/n21.png" alt="">
        </div>
        <div class="i3d-second__text text-white description ">
          <p v-html="$t('3d.block2.desc')"></p>
        </div>
      </div>




    </div>
    <div class="i3d-abs">
      <div class="wrapper">
        <div class="i3d-abs__inner">
          <div class="i3d-abs__left">
            <h2 v-html="$t('3d.block3.title')" class="title-big  mt-[40px]">
            </h2>
            <p v-html="$t('3d.block3.desc1')" class="i3d-abs__inner-desc-1 description mt-[20px] ">
            </p>
            <p v-html="$t('3d.block3.desc2')" class="i3d-abs__inner-desc-2 mr-[20px] description-30 font-bold text-white">
            </p>
            <p v-html="$t('3d.block3.desc3')" class="i3d-abs__inner-desc-3 description">
            </p>
          </div>
          <div class="i3d-abs__right">
            <img src="/VRARim-psd-iphone14pro-mockup-a%20copy%201.png" class="relative right-[-40px]" alt="">
          </div>
          <div class="gradient-colors">
            <div class="gradient-color inline"></div>
            <div class="gradient-color inline"></div>
          </div>


        </div>

      </div>
    </div>

<!--          <div class="flex items-center justify-between  px-[15%] mt-[40px] h-[500px]" style="background-image: url(/bg1.png)">-->

<!--          </div>-->
<!--          <img src="/Rectangle%20136.png" class="mt-[20px]" alt="">-->
<!--          <div class="wrapper">-->

<!--          </div>-->


    <div class="lg:mt-[200px] mt-[50px] lg:mb-[100px] mb-[50px]">
      <v-slider-big :slider=" [
          '/sld1.png', '/sld2.png', '/sld3.png',
          '/sld4.png', '/sld5.png','/sld1.png',
          '/sld2.png', '/sld3.png','/sld4.png', '/sld5.png',
        ]"/>
    </div>

    <div class="i3d-block">
      <div class="wrapper">
        <div class="i3d-block__inner">
          <div class="i3d-block__left">
            <div class="gradient-color inline"></div>
            <div class="i3d-block__left-img">
              <img src="/map%201.png" alt="">
            </div>
            <div class="gradient-color inline"></div>
          </div>
          <div class="i3d-block__right mx-[40px]">
            <h2 v-html="$t('3d.block4.desc')" class="description-big-40 lg:max-w-[645px]"></h2>
          </div>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="i3d-abc">
        <div class="i3d-abc__img">
          <img src="/i3d-abc.png" alt="i3d">
        </div>
        <div class="i3d-abc__text-1 description">{{ $t('3d.block5.desc1') }}</div>
        <div class="i3d-abc__text-2 description">{{ $t('3d.block5.desc2') }}</div>
        <button class="i3d-abc__text-btn  flex items-center bg-[#CBE54E] h-[46px] px-[30px]">
          <img src="/Arr.svg" class="mr-[20px]" alt="">
          {{ $t('3d.block5.btn') }}
        </button>
      </div>
    </div>
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
import VSliderBig from "~/components/Sliders/vSliderBig.vue";
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