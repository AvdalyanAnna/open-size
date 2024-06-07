<script setup lang="ts">

import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
import Last from "~/components/Blocks/Last.vue";
import More from "~/components/UI/More.vue";
import VHomeForm from "~/components/Blocks/Home/vHomeForm.vue";
import VSliderBig from "~/components/Sliders/vSliderBig.vue";
import VSliderTwo from "~/components/Sliders/vSliderTwo.vue";

const {locale} = useI18n()

</script>
<template>
  <Header/>
<!--  <div class="lg:mt-[100px] mt-[80px]"></div>-->
    <div class="home-gif ">
      <img :src="locale === 'ru'? '/img/home-gif-ru.png' :'/img/home-gif.png'" class="w-full" alt="Banner">
    </div>

  <v-slider-two/>

  <div class="home-block2 home-page__block mx-auto  px-2 lg:px-0">
    <div class="wrapper">
      <h2 class="home-block2-title">
        <b>{{ $t('home.block2.title') }}</b>
      </h2>
      <div class="home-page__block-inner">
        <p class="description">
          {{ $t('home.block2.description') }}
        </p>
        <More class="home-block2-btn ml-auto"/>
      </div>
    </div>
  </div>

  <div class="home-block3">
    <h2
        v-html="$t('home.block3.title')"
        class="home-block3-title text-center mt-6 leading-normal text-lg lg:text-[60px] lg:leading-[70px]">
    </h2>
    <div class="wrapper">

      <div class="bg-[#F8FEE2] home-block3-color">
        <div>
          <p v-html="$t('home.block3.description1')" class="description home-block3-desc w-full ">
          </p>
        </div>
        <v-video/>
        <div class="home-block3-color home-block3-color-last">
          <p v-html="$t('home.block3.description2')" class="description home-block3-desc w-full ">
          </p>
          <More class="home-block2-btn ml-auto"/>
        </div>
      </div>
    </div>
  </div>
  <!--          <Video/>-->
  <!--    </div>-->


  <div class="wrapper">
    <div class="home-block4">
      <h2 v-html="$t('home.block4.title')" class="home-block2-title   text-center ">
      </h2>
    </div>
  </div>

  <div class="lg:my-[100px] mt-[50px] lg:mt-[50px]">
    <v-slider-big :slider="[
         '/ecosystem/SD1.png','/ecosystem/SD2.png','/ecosystem/SD3.png',
         '/ecosystem/SD4.png','/ecosystem/SD5.png','/ecosystem/SD1.png',
         '/ecosystem/SD2.png','/ecosystem/SD3.png','/ecosystem/SD4.png',
         '/ecosystem/SD5.png'
     ]"/>
  </div>


  <div class="wrapper mx-auto lg:mt-[80px] mt-6 overflow-hidden px-2 lg:px-0">

    <div class="home-page__abc ">
      <div class="home-page__abc-left ">
        <h2 v-html="$t('home.block5.title')" class="title lg:mb-[54px] mb-[30px]">
        </h2>
        <p v-html="$t('home.block5.desc')" class="description"></p>

        <More class="home-block2-btn lg:mt-[50px] mt-3"/>
      </div>
      <div class="home-page__abc-right">
        <img src="/Rectangle%20113.png" alt="">
      </div>
    </div>
    <div class="home-page__abc reverse lg:mt-[70px] mt-[30px]">
      <div class="home-page__abc-left ">
        <h2 v-html="$t('home.block6.title')" class="title-big lg:mb-[40px] mb-[30px]"></h2>
        <p v-html="$t('home.block6.desc')" class="description lg:w-[93%]"></p>
        <More class="home-block2-btn lg:mt-[40px] mt-3 lg:ml-auto"/>
      </div>
      <div class="home-page__abc-right">
        <img src="/Rectangle%20121.png" alt="">

      </div>
    </div>
    <div>
      <h2 v-html="$t('home.block7.title')" class="title-big text-center bold-block mt-[20px]"></h2>
      <div class="home-page__abs-1 lg:mt-[50px] mt-[20px] ">
        <div class="home-page__abs-1-text">
            <h2 v-html="$t('home.block7.desc')" class=" title-sub"></h2>
        </div>
        <div class="home-page__abs-1-images">
          <img class="home-page__abs-1-images-img w-1/2" src="/Rectangle%20128.png" alt="">
          <img class="home-page__abs-1-images-img w-1/2" src="/Rectangle%20129.png" alt="">
        </div>
      </div>
      </div>
  </div>
    <div class="home-page__abs-1-images bg-[#F8FEE2] w-full  mt-[20px] hidden lg:flex">
      <img src="/Rectangle%20130.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
      <img src="/Rectangle%20131.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
      <img src="/Rectangle%20132.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
    </div>
    <div class="home-page__abs-1-images justify-center w-fit mx-auto mt-[20px] items-end hidden lg:flex ">
      <img class="home-page__abs-1-images-img" src="/Rectangle%20135.png" alt="">
      <img class="home-page__abs-1-images-img mx-[20px]" src="/Rectangle%20134.png" alt="">
      <More class="home-block2-btn ml-[80px]"/>
    </div>
  <div class="home-page__abs-1-images home-page__abs-1-images__mobile">
    <div class="home-page__abs-1-images__mobile-inner">
      <img class="home-page__abs-1-images-img w-1/2" src="/Rectangle%20128.png" alt="">
      <img class="home-page__abs-1-images-img w-1/2" src="/Rectangle%20129.png" alt="">
      <img src="/Rectangle%20130.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
      <img src="/Rectangle%20131.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
      <img src="/Rectangle%20132.png" class="home-page__abs-1-images-img mx-[10px] w-1/3" alt="">
      <img class="home-page__abs-1-images-img" src="/Rectangle%20135.png" alt="">
      <img class="home-page__abs-1-images-img mx-[20px]" src="/Rectangle%20134.png" alt="">
    </div>
    <div class="home-page__abs-1-images__mobile-inner__btn">
      <More class="home-block2-btn ml-[80px]"/>
    </div>
  </div>


  <div class="wrapper">
    <div class=" mx-auto lg:mt-[140px] mt-6 px-2 lg:px-0">
      <div class="home-page__opensize">
        <div class="home-page__opensize-left">
          <h2 v-html="$t('home.block8.title')" class="title">
          </h2>
          <p v-html="$t('home.block8.desc')" class="relative  lg:mt-[50px] mt-4 description"></p>
          <div class="home-page__opensize-btns lg:mt-[75px] mt-2">
            <More class="home-block2-btn mr-[20px]"/>
            <button class=" text-white uppercase bg-[#5BA8A0] lg:px-[20px] py-1  lg:py-[10px] px-1  font-light">
              {{ $t('home.block8.btn') }}
            </button>
          </div>
        </div>
        <div class="home-page__opensize-right">
          <img src="/Rectangle%20113%20(2).png" alt="">
        </div>
      </div>
    </div>
  </div>

  <div class="lg:mt-[130px] mt-6">
<div class="px-[15px]">
  <h2 v-html="$t('home.block9.title')" class="title-big text-center lg:mb-[60px] mb-[20px]"></h2>
</div>
        <div class="wrapper">

        <div class="home-page__abs">
          <div class="home-page__abs-item">
            <div class="gradient-color"></div>
            <span class="description">{{ $t('home.block9.desc1') }}</span>
          </div>
          <div class="home-page__abs-item">
            <div class="gradient-color"></div>
            <span class="description">{{ $t('home.block9.desc2') }}</span>
          </div>
        </div>
        <div class="home-page__abs-img lg:mt-[50px] mt-[30px]">
          <img class="home-page__abs-img-1" src="/Rectangle%20137.png" alt="">
          <More class="ml-auto lg:mt-0 lg:ml-4"/>
        </div>
        </div>
      </div>
  <div class="wrapper">
    <v-home-form/>
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
