<template>
  <Header/>
  <div class="lg:mt-[100px] mt-[80px]"></div>
  <div class="digitalization-title">
    <div class="wrapper">
      <div  class="digitalization-title__inner title-big-3">
        <b>Е-fitting <br> and Digitized comfort</b>
        <div class="digitalization-title__inner-bg"></div>
        <div class="digitalization-title__inner-bg-2"></div>
      </div>
    </div>
  </div>
  <!--  <img src="/txt.png" class="w-full relative z-10 lg:mt-[100px] mt-[40px] " alt="">-->
  <div class="wrapper relative">
    <div class="digitalization-desc__block">
      <p class="description" v-html="$t('digitalization.block1.desc')"></p>
    </div>
    <v-video/>
  </div>


  <div class="digitalization-desc__block-1 lg:mt-[50px] mt-[30px]" >
    <div class="wrapper">
      <div class="digitalization-desc__block-1__inner">
        <!--      <img src="/react99.png" alt="">-->
        <div class="gradient-color inline"></div>
        <p v-html="$t('digitalization.block2.desc')" class="description-26 ml-[20px]">
        </p>
      </div>

    </div>
  </div>
  <div class="wrapper">
    <h2 v-html="$t('digitalization.block3.title')"
        class="text-center title-big-3 font-bold lg:my-[110px] my-[50px]"></h2>
  </div>
  <div class="digitalization-desc__block-2">
    <div class="wrapper">
      <div class="digitalization-desc__block-2__inner">
        <p v-html="$t('digitalization.block3.desc1')" class="description"></p>
        <div class="gradient-color inline"></div>
      </div>
    </div>
  </div>


  <div class="lg:my-[100px] my-[50px]">
    <v-slider-big/>
  </div>
  <div class="digitalization-desc__block-3">
    <div class="wrapper">
      <div class="digitalization-desc__block-3__inner">
        <!--      <img src="/react99.png" alt="">-->
        <div class="gradient-color inline"></div>
        <p v-html="$t('digitalization.block3.desc2')" class="description"></p>
        <!--        <p v-html="$t('digitalization.block2.desc')" class="description-26 ml-[20px]">-->
      </div>

    </div>
  </div>

  <div class="lg:my-[100px] my-[50px]">
    <v-slider-big :slider=" [
        '/sl22.png', '/sl23.png', '/sl24.png',
        '/sl25.png', '/sl22.png', '/sl23.png',
        '/sl24.png', '/sl25.png'
      ]"/>
  </div>


  <div class="wrapper">
    <p v-html="$t('digitalization.block4.desc1')"
       class="text-center description-26 max-w-[840px] lg:my-[80px] my-[30px] mx-auto"></p>
  </div>


  <div class="w-full pt-[20px] bg-[#F8FEE2] ">
    <div class="wrapper">
      <!--      <div class="max-w-[1200px] m-auto">-->
      <h2 v-html="$t('digitalization.block5.desc1')" class="description-big-30 uppercase mb-[20px]"></h2>
      <v-video src="/video/reverse-engineering.mp4"/>
      <!--      </div>-->

    </div>
  </div>

  <div class="digitalization-block">
    <div class="wrapper">
      <div class=" xl:mt-[250px] mt-[40px]">
        <div class="digitalization-block__inner relative bg-[#F8FEE2] lg:px-[80px] pb-[40px] lg:pt-[180px]">
          <div class="digitalization-block__images-list">
            <img src="/sh1.png" class="digitalization-block__images absolute top-[-350px] left-[-300px]" alt="">
            <img src="/sh2.png" class="digitalization-block__images absolute top-[50px] right-[-200px]" alt="">
            <img src="/7%20copy%201.png" class="digitalization-block__images absolute bottom-[-150px] right-[150px]"
                 alt="">
          </div>
          <h2 v-html="$t('digitalization.block5.desc2')" class="description-big  max-w-[530px] uppercase"></h2>
        </div>
        <div class="mt-[80px]">
          <h2 v-html="$t('digitalization.block6.title')" class="title-big mb-[58px]"></h2>
          <div class="digitalization-last">
            <div class="digitalization-last__left">
              <p v-html="$t('digitalization.block6.desc1')" class="description">
              </p>
              <img src="/Rectangle%20165.png" class="w-full" alt="">
            </div>
            <div class="digitalization-last__right">
              <img src="/Rectangle%20164.png" class="w-full" alt="">
              <p v-html="$t('digitalization.block6.desc2')" class="description">
              </p>
            </div>
          </div>
          <button
              class="digitalization-images__btn flex items-center bg-[#CBE54E] lg:px-[50px] px-[30px] h-[50px] relative z-10 top-[-20px]">
            <img src="/Group%2091%20(2).svg" class="mr-[20px]" alt="">
            {{ $t('digitalization.block6.btn') }}
          </button>
          <div class="digitalization-images__list images__list  mt-[40px]">
            <div v-for="(item,index)  in 3" :key="index" class="images__list__item">
              <img src="/Rectangle%20170.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <Footer/>
</template>
<style lang="scss" scoped>
.swiper-slide {
  img {
    //transform: scale(0.8);
  }

  &.swiper-slide-active {
    img {

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