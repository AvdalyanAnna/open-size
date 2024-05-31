<template>
  <Header/>
  <div class="wrapper">
    <div class="flex lg:mt-[80px] mt-5">
      <div class="relative z-10">
        <h2 v-html="$t('identification.block1.title')" class="title-big relative">
        </h2>
        <div class="flex lg:mt-[100px] mt-[40px] relative">
          <img src="/Rectangle%20173.png" class="mr-[20px]" alt="">
          <p v-html="$t('identification.block1.desc')" class="description lg:max-w-[387px]">
          </p>
        </div>
      </div>
      <div class="w-[700px] mt-[120px]">
        <img src="/JKO.png" class="w-[850px] relative left-[-70px]"  alt="">
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-center">
    <img src="/rty2%20(1).png" class="w-[32%] mx-[10px]" alt="">
    <img src="/rty2%20(2).png" class="w-[32%]  mx-[10px]" alt="">
    <img src="/rty2%20(3).png" class="w-[32%]  mx-[10px]" alt="">
    <img src="/rty2%20(4).png" class="w-[32%]  mx-[10px] mt-[20px]" alt="">
    <img src="/rty2%20(5).png" class="w-[32%]  mx-[10px] mt-[20px]" alt="">
  </div>
  <h2 v-html="$t('identification.block2.title')" class="text-center lg:mt-[90px] mt-[20px] title-big lg:mb-[60px] mb-[ 30px]">
   </h2>
  <div class="wrapper flex items-center">
    <div class="relative">
      <p v-html="$t('identification.block2.desc1')" class="description"></p>
      <p v-html="$t('identification.block2.desc2')" class="px-[40px] py-[44px] bg-[#CBE54E] description w-[115%] mt-[40px]">
      </p>
      <button class="flex items-center uppercase mt-[50px] bg-[#CBE54E] h-[46px] px-[70px]   "><img src="/Arr.svg" class="mr-[20px]" alt="">
        {{ $t('identification.block2.btn') }}</button>

    </div>
    <img src="/neuraldiscovery_%201.png" alt="">
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>