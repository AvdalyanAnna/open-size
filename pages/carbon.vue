<template>
  <Header/>
  <div class="carbon">
    <div class="wrapper ">
      <div class="lg:mt-[100px] mt-[80px]">
      </div>
      <h2 v-html="$t('carbon.block1.title')" class="title-big-2"></h2>
      <p v-html="$t('carbon.block1.desc')" class="mt-[20px] description"></p>
      <img src="/maxresdefault%20copy%201.png" class="w-full mt-[20px]" alt="">
      <div class="flex items-end co2-content">
        <div class="co2 mr-[20px]">CO<sub>2</sub></div>
        <p v-html="$t('carbon.block2.desc')" class="font-f description-big-40 uppercase"></p>
      </div>
      <div class="carbon-slider">
        <Swiper
            class="mx-auto w-full lg:mt-[50px] mt-[30px]"
            :modules="[Pagination,Autoplay]"
            :autoplay="{
          delay: 3000,
          // disableOnInteraction: false,
        }"
            :slides-per-view="1"
            :centered-slides="true"
            :loop="true"
            :navigation="true"
            :pagination="{
              dynamicBullets: true,
            }"
        >
          <SwiperSlide class="carbon-slider__item">
            <div class="carbon-slider__text">
              <p class="description-big-40">
                {{ $t('carbon.block2.slider[0].text') }}
              </p>
            </div>
            <div class="carbon-slider__img">
              <img src="/infograph-1.png" alt="">
            </div>
          </SwiperSlide>
          <SwiperSlide class="carbon-slider__item">
            <div class="carbon-slider__text">
              <p class="description-big-40">
                {{ $t('carbon.block2.slider[1].text') }}
              </p>
            </div>
            <div class="carbon-slider__img">
              <img src="/infograph-2.png" alt="">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="carbon-inner">
        <div class="carbon-left mr-[20px]">
          <h2 v-html="$t('carbon.block3.title')" class="title-big"></h2>

          <p v-html="$t('carbon.block3.desc')" class="relative mt-[20px] description">
          </p>
          <div class="gradient-color inline"></div>
        </div>
        <div class="carbon-right">
          <img src="/neuraldiscovery_Photographic_image%201.png" class="w-[60%]" alt="">
        </div>
      </div>
      <div class="carbon-abs">
        <img src="/SN%203%201.png" class="mt-[40px] w-full" alt="">
        <div class="carbon-abs__inner flex items-end relative top-[-50px]">
          <button class="carbon-abs__inner-btn flex items-center bg-[#CBE54E] h-[46px] px-[30px]"><img src="/Arr.svg"
                                                                                                       class="mr-[20px]"
                                                                                                       alt="">
            {{ $t('carbon.block4.btn') }}
          </button>
          <div v-html="$t('carbon.block4.desc')"
               class="carbon-abs__inner-desc bg-[#CBE54E] description bold px-[60px] py-[30px] max-w-[825px] w-fit ml-auto"></div>

        </div>
      </div>

    </div>
  </div>


  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
import More from "~/components/UI/More.vue";
import Green from "~/components/UI/Green.vue";
import {Pagination,Autoplay} from "swiper/modules";
</script>
<style lang="scss">
.carbon-slider {
  .swiper-button-next {
    top: 150px;
    right: 36px;
    @media screen and (max-width: 1500px) {
      top: 140px;
    }

    @media screen and (max-width: 1100px) {
      top: 110px;
    }
    @media screen and (max-width: 900px) {
      right: 16px;
      top: 100px;
    }
    @media screen and (max-width: 900px) {
      top: 120px;
    }
    @media screen and (max-width: 480px) {
      right: 8px;
      top: 140px;
      &:after {
        font-size: 32px;
      }
    }
    &:after {
      color: white;
    }
  }

  .swiper-button-prev {
    top: 150px;
    left: 36px;
    @media screen and (max-width: 1500px) {
      top: 140px;
    }
    @media screen and (max-width: 1100px) {
      top: 110px;
    }
    @media screen and (max-width: 900px) {
      left: 16px;
      top: 100px;
    }
    @media screen and (max-width: 900px) {
      top: 120px;
    }
    @media screen and (max-width: 480px) {
      left: 8px;
      top: 140px;
      &:after {
        font-size: 32px;
      }
    }
    &:after {
      color: white;
    }
  }
}

</style>