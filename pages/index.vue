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

const {locale } = useI18n()

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
        <span>{{$t('home.block1.title')}}</span>
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

  <div class="default-width mx-auto lg:mt-[160px] mt-10 px-2 lg:px-0">
    <h2 class="text-lg font-bold leading-normal lg:leading-[70px] lg:text-[89px]">
      {{$t('home.block2.title')}}
    </h2>
    <div class="flex items-end lg:mt-[30px] mt-2 flex-col lg:flex-row gap-4">
      <h2 class="lg:text-[20px] font-light lg:leading-[29.9px] leading-normal text-sm">
        {{$t('home.block2.description')}}</h2>
      <More class="ml-auto"/>
    </div>
    <h2 class="text-center mt-6 leading-normal text-lg lg:text-[60px] lg:leading-[70px] lg:mt-[40px]">
      <span class="font-bold">Digitalization of fashion</span> <br>
      and increased production efficiency
    </h2>

    <div class="bg-[#F8FEE2] lg:mt-[40px] mt-6">
      <h2 class="py-4 px-8 lg:px-[80px] lg:py-[40px]">
        Одним из ключевых моментов цифровизации моды является внедрение современных передовых технологий в сфере продаж
        и производства.
        <br><br>
        <span class="font-bold">OpenSize E-Fitting</span> — цифровая примерка основанная на методе сопоставления
        цифровых двойников: «электронного двойника покупателя» и «электронного двойника одежды и обуви»,
        <br><br>отличное решение для увеличения онлайн-продаж и значительного снижения возврата неподходящей одежды и
        обуви.
        Цифровые данные о комфортной и некомфортной одежде и обуви используются для последующего обратного инжиниринга,
        что значительно снижает перепроизводство и направляет бренды на целевое производство для покупателей на местных
        рынках.
      </h2>
      <More class="ml-auto"/>
    </div>

<!--    <Video/>-->
    <v-video />
  </div>

  <h2 class="text-center lg:text-[75px] lg:leading-[70px] lg:mt-[100px] mt-10 leading-normal text-lg font-bold ">
    Экосистема продуктов <br>
    <span class="font-bold">OpenSize</span>
  </h2>
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

  <div class="default-width mx-auto lg:mt-[80px] mt-6 overflow-hidden px-2 lg:px-0">
    <div class="flex lg:justify-between lg:flex-row flex-col gap-2">
      <div class="lg:w-[49%] flex-col">
        <h2 class="leading-normal text-lg hidden lg:block lg:text-[59px] lg:leading-[55px]">
            <span class="font-bold"> Attract and make
           <br>more customers
           <br>loyal</span>
          with the
          <br>OpenSize mobile
          <br>platform
        </h2>

        <h2 class="lg:text-[59px] lg:leading-[55px] leading-normal text-lg lg:hidden">
          <span class="font-bold"> Attract and make more customers loyal</span>
          <br/>
          with the
          OpenSize mobile platform
        </h2>


        <p class="relative mt-3 text-sm lg:mt-[70px] lg:text-[23px] lg:leading-7">OpenSize e-fitting tends to be
          comparable
          (competitive) in accuracy to
          physical fitting of clothing and shoes in a brick-and-mortar store. In the near future, online shopping for
          clothes and shoes will become the norm for most buyers.</p>
        <br>
        <p class="lg:text-[23px] text-sm lg:leading-7">
          The option to use the service entirely in the mobile version opens up wide opportunities for the brand to
          geographically scale the brand, plays a beneficial role in the growth of conversion and consumer loyalty, and
          significantly increases sales income.
        </p>
        <More class="lg:mt-[40px] mt-3"/>
      </div>
      <img src="/Rectangle%20113.png" class="w-full lg:w-[49%]" alt="">
    </div>

    <div class="flex justify-between lg:mt-[60px] mt-6 lg:flex-row flex-col gap-2 lg:gap-0">
      <img src="/Rectangle%20121.png" class="lg:h-[55%] w-full lg:w-[55%] order-2 lg:order-none" alt="">
      <div class="flex-col lg:w-[44%] w-full">
        <h2 class="lg:text-[80px] lg:leading-[78px] leading-normal text-lg hidden lg:block">
             <span class="font-bold">Digital twins
      <br>of shoes and
               <br>clothing</span>
        </h2>

        <h2 class="lg:text-[80px] lg:leading-[78px] leading-normal text-lg lg:hidden">
          <span class="font-bold">Digital twins of shoes and clothing</span>
        </h2>

        <p class="relative lg:mt-[20px] lg:text-[23px] text-sm mt-2 lg:leading-7">To study the digital comfort of brand
          products and
          subsequent reverse
          engineering, OpenSize carries out 3D digital measurements of the internal volumes of samples of manufactured
          clothing and shoes.</p>
        <br>
        <p class="lg:text-[23px] text-sm lg:leading-7">
          High-precision digital twins of the internal topology of clothing and footwear models are measured and created
          in OpenSize industrial certification labs immediately after production. Measurement labs are located in the
          places where shoes and clothing of world brands are produced, which simplifies logistics.
        </p>
        <More class="lg:mt-[40px] mt-3 lg:ml-auto"/>
      </div>
    </div>
    <h2 class="lg:text-center lg:text-[80px] lg:mt-[60px] font-semibold lg:leading-[88px] leading-normal mt-6 text-lg">
      <span class="font-bold">E-Comfort Certificate</span><br>for Clothing and Footwear</h2>
    <div class="lg:mt-[50px] mt-4 flex lg:items-end lg:flex-row flex-col gap-1">
      <h2 class="lg:w-[417px] font-light lg:leading-[58px] lg:text-[45px] leading-normal text-md">
        E-comfort certificate
        <br>for clothing and
        <br>footwear models
        <br>serves as additional
        <br>standards for efficient
        <br>production
      </h2>
      <img class="lg:w-[417px] lg:mx-[20px] w-full hidden lg:block" src="/Rectangle%20128.png" alt="">
      <img class="lg:w-[417px] w-full hidden lg:block" src="/Rectangle%20129.png" alt="">
    </div>
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
  <div class="justify-between w-fit mx-auto mt-1 items-end lg:hidden flex flex-row gap-1 overflow-hidden px-2 lg:px-0">
    <img src="/Rectangle%20135.png" class="w-1/2" alt="">
    <img src="/Rectangle%20134.png" class="w-1/2" alt="">
  </div>
  <More class="mt-1 ml-auto lg:hidden"/>
  <div class="bg-[#F8FEE2] w-full  mt-[20px] hidden lg:flex">
    <img src="/Rectangle%20130.png" class="mx-[10px] w-[417px]" alt="">
    <img src="/Rectangle%20131.png" class="mx-[10px] w-[417px]" alt="">
    <img src="/Rectangle%20132.png" class="mx-[10px] w-[417px]" alt="">
  </div>
  <div class="justify-center w-fit mx-auto mt-[20px] items-end hidden lg:flex ">
    <img src="/Rectangle%20135.png" alt="">
    <img src="/Rectangle%20134.png" class="mx-[20px]" alt="">
    <More class="ml-[80px]"/>
  </div>


  <div class="default-width mx-auto lg:mt-[80px] mt-6 px-2 lg:px-0">
    <div class="flex justify-between flex-col lg:flex-row">
      <div class="w-full lg:w-[49%] flex-col">
        <h2 class="lg:text-[59px] lg:leading-[67px] text-lg leading-normal hidden lg:block">
             <span class="font-bold"> OpenSize mobile
               <br>platform
               <br>is the path to the
               <br>world of e-fittings
               <br>and online shopping</span>
        </h2>
        <h2 class="lg:text-[59px] lg:leading-[67px] text-lg leading-normal lg:hidden">
          <span
              class="font-bold"> OpenSize mobile platform is the path to the world of e-fittings and online shopping</span>
        </h2>

        <p class="relative lg:text-[23px] lg:mt-[100px] mt-4 hidden lg:block">
          Try the 3D Foot Scanner mobile app from OpenSize, check the reliability of the digital try on and build trust
          in
          <br>the service
        </p>

        <p class="relative lg:text-[23px] lg:mt-[100px] mt-4 lg:hidden">
          Try the 3D Foot Scanner mobile app from OpenSize, check the reliability of the digital try on and build trust
          in the service
        </p>
        <br>

        <img src="/Rectangle%20113%20(2).png" class="w-full lg:hidden" alt="">

        <div class="flex items-center lg:mt-[75px] mt-2">
          <More class="mr-[20px]"/>
          <button class="text-white bg-[#5BA8A0] lg:px-[10px] py-1  lg:py-[10px] px-1  font-light">ЗАПРОСИТЬ
            ДЕМОНСТРАЦИЮ
          </button>
        </div>
      </div>
      <img src="/Rectangle%20113%20(2).png" class="w-[49%] hidden lg:block" alt="">
    </div>


    <h2 class="lg:text-[79px] font-bold text-center lg:mt-[120px] mt-6 text-lg">OpenSize, NFT and Meta-Universe</h2>
    <div class="flex justify-between items-center lg:mt-[60px] mt-4 flex-col gap-2 md:flex-row md:gap-0">
      <div class="flex items-center w-full">
        <img src="/Rectangle%20135%20(1).png" class="mr-[10px]" alt="">
        <span class="lg:text-[23px] text-sm md:text-md hidden lg:block">Open Size E-Comfort Certificate for clothing and footwear fits seamlessly into NFT, along with identification of the authenticity of products and manufacturing history</span>
        <span class="lg:text-[23px] text-sm md:text-md lg:hidden">Open Size E-Comfort Certificate for clothing and footwear fits seamlessly into NFT, along with identification of the authenticity of products and manufacturing history</span>
      </div>
      <div class="flex items-center w-full">
        <img src="/Rectangle%20135%20(1).png" class="mr-[10px]" alt="">
        <span class="lg:text-[23px] text-sm md:text-md hidden lg:block">E-comfort can play a significant role in the
                <br>overall process of digitalization of the fashion
                <br>industry and act as a bridging element in the
                <br>structure of the Meta-Universe</span>

        <span class="lg:text-[23px] text-sm md:text-md lg:hidden">E-comfort can play a significant role in the overall process of digitalization of the fashion industry and act as a bridging element in the structure of the Meta-Universe</span>
      </div>
    </div>
    <div class="flex lg:items-end mt-[60px] flex-col lg:flex-row items-center">
      <img src="/Rectangle%20137.png" class="w-full lg:w-[80%]" alt="">
      <More class="ml-auto lg:mt-0 lg:ml-4"/>
    </div>

<v-home-form />
  </div>
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
