<template>
  <Header/>
  <h2 v-html="$t('certefication.block1.title')" class="lg:mt-[100px] mt-[40px] lg:mb-[52px] mb-[20px] title-big text-center"></h2>
  <div class="wrapper">
    <img src="/zaratros.png" alt="">
    <div class="lg:max-w-[985px] flex items-center ml-auto w-fit mt-[40px]">
      <img src="/joojnjack.png" class="mx-[30px]" alt="">
      <p v-html="$t('certefication.block1.desc')" class="description"></p></div>
  </div>
  <img src="/Group%20186.png" class="w-full mt-[80px] mb-[24px]" alt="">
  <div class="flex justify-between wrapper mt-[20px]">
    <img src="/Rectangle%20184.png" class="w-[49%]" alt="">
    <img src="/Rectangle%20185.png" class="w-[49%]" alt="">
  </div>
  <div class="wrapper">
    <div class=" flex justify-between items-center mt-[67px]">
      <p v-html="$t('certefication.block2.desc')" class="lg:max-w-[714px] pr-[16px] description-big-30"></p>
      <button class="flex items-center  bg-[#CBE54E] h-[46px] px-[70px]"><img src="/Arr.svg" class="mr-[20px]" alt="">
        {{ $t('certefication.block2.btn') }}
      </button>
    </div>
  </div>

  <div class="flex flex-wrap justify-between mt-[40px]">
    <img src="/Rectangle%20190.png" class="w-[32%]" alt="">
    <img src="/Rectangle%20190.png" class="w-[32%]" alt="">
    <img src="/Rectangle%20190.png" class="w-[32%]" alt="">
    <img src="/Rectangle%20190.png" class="w-[32%] mt-[25px]" alt="">
    <img src="/Rectangle%20190.png" class="w-[32%] mt-[25px]" alt="">
    <img src="/Rectangle%20190.png" class="w-[32%] mt-[25px]" alt="">
  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>