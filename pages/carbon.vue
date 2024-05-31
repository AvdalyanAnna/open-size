<template>
  <Header/>
  <div class="wrapper ">
    <div class="lg:mt-[100px] mt-[40px]">

    </div>
    <h2 v-html="$t('carbon.block1.title')" class="title-big-2"></h2>
    <p v-html="$t('carbon.block1.desc')" class="mt-[20px] description"></p>
    <img src="/maxresdefault%20copy%201.png" class="w-full mt-[20px]" alt="">
    <div class="flex items-end">
      <img src="/c02.png" class="mr-[20px]" alt="">
      <p v-html="$t('carbon.block2.desc')" class="description-big-40"></p>
    </div>
    <Swiper
        class="mx-auto w-full mt-[20px]"
        :modules="[SwiperAutoplay]"
        :slides-per-view="1"
        :centered-slides="true"
        :loop="true"
        :navigation="true"
        :thumbs="true"
        :centered-slides-bounds="true"
        :center-insufficient-slides="true"
        :additional-slide="1"
    >
      <SwiperSlide>
        <img src="/infograph.png" alt="">
      </SwiperSlide>
      <SwiperSlide>
        <img src="/Property%201=Variant2%20(1).png" alt="">
      </SwiperSlide>
    </Swiper>
    <div class="flex justify-between items-end mt-[40px]">
      <div class="text-[23px] mr-[20px]">
        <h2 v-html="$t('carbon.block3.title')" class="title-big"></h2>

        <p v-html="$t('carbon.block3.desc')" class="relative mt-[20px] description">
        </p>
        <img src="/wf.png" class="w-full relative" alt="">
      </div>
      <img src="/neuraldiscovery_Photographic_image%201.png" class="w-[60%]" alt="">
    </div>
    <img src="/SN%203%201.png" class="mt-[40px] w-full" alt="">
    <div class="flex items-end relative top-[-50px]">
      <button class="flex items-center bg-[#CBE54E] h-[46px] px-[30px]"><img src="/Arr.svg" class="mr-[20px]" alt="">
        {{ $t('carbon.block4.btn') }}
      </button>
      <div v-html="$t('carbon.block4.desc')" class="bg-[#CBE54E] description bold px-[60px] py-[30px] max-w-[825px] w-fit ml-auto"></div>

    </div>
  </div>

  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
import More from "~/components/UI/More.vue";
import Green from "~/components/UI/Green.vue";
</script>
<style>
.swiper-button-next:after {
  color: white;
  margin-bottom: 650px;
}

.swiper-button-prev:after {
  color: white;
  margin-bottom: 650px
}
</style>