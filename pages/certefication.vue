<template>
  <Header/>
  <div class="certefication lg:mt-[100px] mt-[80px]">
    <div class="wrapper">
      <h2 v-html="$t('certefication.block1.title')"
          class=" lg:mb-[52px] mb-[20px] title-big text-center"></h2>
    </div>
    <div class="wrapper">
      <div class="certefication__inner">
        <img src="/zaratros.png" alt="">
        <div class="lg:max-w-[985px] flex ml-auto w-fit mt-[40px]">
         <div class="gradient-color mr-[16px]"></div>
          <p v-html="$t('certefication.block1.desc')" class="description py-[10px]"></p>
        </div>
      </div>
    </div>
  </div>


  <img src="/Group%20186.png" class="w-full mt-[80px] mb-[24px]" alt="">
  <div class="wrapper">
    <div class="certefication-images flex justify-between mt-[20px]">
      <div class="certefication-images__item mx-[10px]">
        <img src="/Rectangle%20184.png"  alt="">
      </div>
      <div class="certefication-images__item mx-[10px]">
        <img src="/Rectangle%20185.png"  alt="">
      </div>
    </div>
  </div>

  <div class="wrapper">
    <div class=" flex md:flex-row flex-col justify-between md:items-center items-start lg:mt-[67px] mt-[30px]">
      <p v-html="$t('certefication.block2.desc')" class="lg:max-w-[714px] pr-[16px] description-big-30 md:mb-0 mb-[20px]"></p>
      <button class="flex items-center  bg-[#CBE54E] h-[46px] md:px-[70px] px-[30px]">
        <img src="/Arr.svg" class="mr-[20px]" alt="">
        {{ $t('certefication.block2.btn') }}
      </button>
    </div>
  </div>

  <div class="images__list  mt-[40px]">
    <div v-for="(item,index)  in 6" :key="index" class="images__list__item">
      <img src="/Rectangle%20190.png" alt="">
    </div>

  </div>
  <Footer/>
</template>
<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>