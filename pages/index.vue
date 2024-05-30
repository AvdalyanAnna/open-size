<script setup lang="ts">

import Header from "~/components/UI/Header.vue";
import Two from "~/components/Blocks/Two.vue";
import Footer from "~/components/UI/Footer.vue";
import Three from "~/components/Blocks/Three.vue";
import Slider from "~/components/Blocks/Slider.vue";
import Fourth from "~/components/Blocks/Fourth.vue";
import Five from "~/components/Blocks/Five.vue";
import Six from "~/components/Blocks/Six.vue";
import Seven from "~/components/Blocks/Seven.vue";
import Eight from "~/components/Blocks/Eight.vue";
import Nine from "~/components/Blocks/Nine.vue";
import NFTInfo from "~/components/Blocks/NFT-Info.vue";
import Form from "~/components/Blocks/Form.vue";
import Last from "~/components/Blocks/Last.vue";
import More from "~/components/UI/More.vue";
import Green from "~/components/UI/Green.vue";
import VideoPlayer from "~/components/Video.vue";
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import VHomeForm from "~/components/Blocks/Home/vHomeForm.vue";

const {locale} = useI18n()

</script>
<template>
  <Header/>
  <div class="home-gif ">
    <img :src="locale === 'ru'? '/img/home-gif-ru.png' :'/img/home-gif.png'" class="w-full" alt="Banner">
  </div>
  <div class="flex items-end justify-between lg:mt-[160px] mt-10 z-0 px-2 lg:px-0">
    <div class="w-[49%]">
      <h2 class="home-sliders-title w-fit ml-0 lg:ml-auto leading-normal mb-[20px] text-lg lg:text-[51px] lg:leading-[55px] ">
        <span v-html="$t('home.block1.titleBold')"></span>
        <span>{{ $t('home.block1.title') }}</span>
      </h2>
      <Swiper
          class="mx-auto w-full"
          :modules="[SwiperAutoplay]"
          :slides-per-view="1"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :center-insufficient-slides="true"
      >
        <SwiperSlide>
          <img src="/systems/shoes.png" class="w-full" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/systems/woman.png" class="w-full" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/systems/done-shoes.png" class="w-full" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
    <Swiper
        class="w-[49%]"
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :centered-slides="true"
        :centered-slides-bounds="true"
        :center-insufficient-slides="true"
    >
      <SwiperSlide>
        <img src="/cities/future.png" class="w-full" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/cities/palms.png" class="w-full" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/cities/down-town.png" class="w-full" alt="">
      </SwiperSlide>
    </Swiper>
  </div>

  <div class="home-block2 mx-auto  px-2 lg:px-0">
    <div class="wrapper">
      <h2 class="home-block2-title text-lg font-bold leading-normal lg:leading-[70px] lg:text-[89px]">
        {{ $t('home.block2.title') }}
      </h2>
      <div class="flex items-end justify-between  flex-col lg:flex-row gap-4">
        <p class="home-block2-desc lg:text-[20px] font-light lg:leading-[29.9px] leading-normal text-sm">
          {{ $t('home.block2.description') }}</p>
        <More class="home-block2-btn ml-auto"/>
      </div>

    </div>
    <div class="home-block3">
      <div class="wrapper">
        <h2
            v-html="$t('home.block3.title')"
            class="home-block3-title text-center mt-6 leading-normal text-lg lg:text-[60px] lg:leading-[70px]">
        </h2>
        <div class="bg-[#F8FEE2] home-block3-color">
          <div>
            <p v-html="$t('home.block3.description1')" class="home-block3-desc w-full ">
            </p>
          </div>
          <v-video/>
          <div class="home-block3-color home-block3-color-last">
            <p v-html="$t('home.block3.description2')" class="home-block3-desc w-full ">
            </p>
            <More class="home-block2-btn ml-auto"/>
          </div>
        </div>
      </div>
    </div>
    <!--    <Video/>-->
  </div>
  <div class="home-block4">
    <h2 v-html="$t('home.block4.title')" class="home-block4-title  text-center ">
    </h2>
  </div>


  <div class="mx-auto lg:mt-[50px] mt-6 swp relative overflow-hidden">
    <button class="arrow-left arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
    </button>
    <button class="arrow-right arrow">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right"
           viewBox="0 0 16 16">
        <path fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
      </svg>
    </button>
    <Swiper
        class="mx-auto w-full"
        :modules="[EffectCoverflow, Navigation, Pagination]"
        :effect="'coverflow'"
        :slides-per-view="3"
        :space-between="55"
        :centered-slides="true"
        :coverflow-effect="{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }"
        :navigation="{
          enabled:true,
           nextEl: '.arrow-left',
           prevEl: '.arrow-right'
        }"
        initial-slide="1"
        :pagination="true"
        :slide-active-class="'swiper-slide-active'"

    >
      <SwiperSlide>
        <img src="/ecosystem/SD1.png" class="swiper-slide" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/ecosystem/SD2.png" class="swiper-slide" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/ecosystem/SD3.png" class="swiper-slide" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/ecosystem/SD4.png" class="swiper-slide" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/ecosystem/SD5.png" class="swiper-slide" alt="">
      </SwiperSlide>
    </Swiper>
  </div>

  <div class="wrapper mx-auto lg:mt-[80px] mt-6 overflow-hidden px-2 lg:px-0">
    <div class="flex lg:justify-between lg:flex-row flex-col gap-2">
      <div class="lg:w-[49%] flex-col">
        <h2 v-html="$t('home.block5.title')" class="title lg:mb-[54px] mb-[30px]">
        </h2>
        <p v-html="$t('home.block5.desc')" class="description"></p>

        <More class="home-block2-btn lg:mt-[50px] mt-3"/>
      </div>
      <img src="/Rectangle%20113.png" class="w-full lg:w-[49%]" alt="">
    </div>
    <div class="flex justify-between lg:mt-[145px] mt-6 lg:flex-row flex-col gap-2 lg:gap-0">
      <img src="/Rectangle%20121.png" class="lg:h-[55%] w-full lg:w-[55%] order-2 lg:order-none" alt="">
      <div class="flex-col lg:w-[45%] lg:pl-[20px] w-full">
        <h2 v-html="$t('home.block6.title')" class="title-big lg:mb-[40px] mb-[30px]"></h2>
        <p v-html="$t('home.block6.desc')" class="description lg:w-[93%]"></p>
        <More class="home-block2-btn lg:mt-[40px] mt-3 lg:ml-auto"/>
      </div>
    </div>

    <div>
      <h2 v-html="$t('home.block7.title')" class="title-big text-center bold-block"></h2>
      <div class="lg:mt-[50px] mt-4 flex lg:items-end lg:flex-row flex-col gap-1">
        <h2 v-html="$t('home.block7.desc')" class="lg:w-[487px] title-sub"></h2>
        <img class="lg:w-[417px] lg:mx-[20px] w-full hidden lg:block" src="/Rectangle%20128.png" alt="">
        <img class="lg:w-[417px] w-full hidden lg:block" src="/Rectangle%20129.png" alt="">
      </div>
      <div class="w-full lg:hidden flex flex-row gap-1 justify-between overflow-hidden px-2 lg:px-0 mt-1">
        <img class="w-1/2" src="/Rectangle%20128.png" alt="">
        <img class="w-1/2" src="/Rectangle%20129.png" alt="">
      </div>
      <div class="bg-[#F8FEE2] w-full mt-1 lg:hidden flex flex-row gap-1 overflow-hidden px-2 lg:px-0">
        <img src="/Rectangle%20130.png" class="w-1/3" alt="">
        <img src="/Rectangle%20131.png" class="w-1/3" alt="">
        <img src="/Rectangle%20132.png" class="w-1/3" alt="">
      </div>
    </div>
  </div>
  <div class="justify-between w-fit mx-auto mt-1 items-end lg:hidden flex flex-row gap-1 overflow-hidden px-2 lg:px-0">
    <img src="/Rectangle%20135.png" class="w-1/2" alt="">
    <img src="/Rectangle%20134.png" class="w-1/2" alt="">
  </div>
  <More class="home-block2-btn mt-1 ml-auto lg:hidden"/>
  <div class="bg-[#F8FEE2] w-full  mt-[20px] hidden lg:flex">
    <img src="/Rectangle%20130.png" class="mx-[10px] w-[417px]" alt="">
    <img src="/Rectangle%20131.png" class="mx-[10px] w-[417px]" alt="">
    <img src="/Rectangle%20132.png" class="mx-[10px] w-[417px]" alt="">
  </div>
  <div class="justify-center w-fit mx-auto mt-[20px] items-end hidden lg:flex ">
    <img src="/Rectangle%20135.png" alt="">
    <img src="/Rectangle%20134.png" class="mx-[20px]" alt="">
    <More class="home-block2-btn ml-[80px]"/>
  </div>


  <div class="default-width mx-auto lg:mt-[140px] mt-6 px-2 lg:px-0">
    <div class="flex justify-between flex-col lg:flex-row">
      <div class="w-full lg:w-[49%] flex-col">
        <h2 v-html="$t('home.block8.title')"
            class="title">
        </h2>
        <p v-html="$t('home.block8.desc')" class="relative  lg:mt-[100px] mt-4 description"></p>
        <br>
        <img src="/Rectangle%20113%20(2).png" class="w-full lg:hidden" alt="">
        <div class="flex items-center lg:mt-[75px] mt-2">
          <More class="home-block2-btn mr-[20px]"/>
          <button class=" text-white uppercase bg-[#5BA8A0] lg:px-[20px] py-1  lg:py-[10px] px-1  font-light">
            {{ $t('home.block8.btn') }}
          </button>
        </div>
      </div>
      <img src="/Rectangle%20113%20(2).png" class="w-[49%] hidden lg:block" alt="">
    </div>
    <div class="lg:mt-[130px] mt-6">
      <h2 v-html="$t('home.block9.title')" class="title-big text-center"></h2>
      <div class="flex justify-between items-center lg:mt-[60px] mt-4 flex-col gap-2 md:flex-row md:gap-0">
        <div class="flex items-center w-full">
          <img src="/Rectangle%20135%20(1).png" class="mr-[10px]" alt="">
          <span class="description">{{$t('home.block9.desc1')}}</span>
        </div>
        <div class="flex items-center w-full">
          <img src="/Rectangle%20135%20(1).png" class="mr-[10px]" alt="">
          <span class="description">{{ $t('home.block9.desc2')}}</span>
        </div>
      </div>
      <div class="flex lg:items-end mt-[60px] flex-col lg:flex-row items-center">
        <img src="/Rectangle%20137.png" class="w-full lg:w-[80%]" alt="">
        <More class="ml-auto lg:mt-0 lg:ml-4"/>
      </div>
    </div>
    <v-home-form />
  </div>



  <!--  </div>-->
    <div class="overflow-hidden w-full px-2 lg:px-0">
      <Last/>
    </div>
    <Footer/>
</template>

<style>
body {
  overflow-x: hidden;
}

img {
  max-width: none;
}

.default-width {
  max-width: 1280px;
  width: 100%;
}

.swiper {
  margin-right: 0;
}

.swiper-pagination-bullet-active {
  background-color: #CBE54E;
  transform: scale(1);
}

.swp > div {
  overflow: hidden;
  z-index: 2;
  padding-bottom: 40px;
  transform: scale(1.1);
}

.arrow {
  position: absolute;
  z-index: 3;
  color: white;
  top: 10px;
}

.arrow.swiper-button-disabled {
  color: rgba(255, 255, 255, 0.2);

}

.arrow-right {
  transform: rotateZ(180deg);
  right: calc(50% + 170px);
}

.arrow-left {
  right: calc(50% - 200px);
}

@media (max-width: 600px) {
  .swiper-pagination-bullet {
    display: none;
  }

  .arrow {
    display: none;
  }

  .swp > div {
    padding-bottom: 20px;
  }
}

@media (max-width: 1200px) {
  .arrow-right {
    right: calc(50% + 100px);
  }

  .arrow-left {
    right: calc(50% - 130px);
  }
}


@media (max-width: 800px) {
  .arrow-right {
    right: calc(50% + 70px);
  }

  .arrow-left {
    right: calc(50% - 100px);
  }
}

</style>
