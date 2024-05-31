<template>
  <Header/>
  <div class="wrapper">
    <div class="flex lg:mt-[100px] mt-[40px]">
      <div class="relative z-10">
        <h2 v-html="$t('study.title')" class="title-big  relative">
        </h2>
        <div class="flex items-center mt-[80px] relative">
          <img src="/Rectangle%20173%20(1).png" class="mr-[20px]" alt="">
          <p v-html="$t('study.desc1')" class="description max-w-[495px]">
          </p>
        </div>
        <div v-html="$t('study.desc2')" class="px-[60px] py-[30px] description bg-[#CBE54E] w-[800px] mt-[50px]"></div>
      </div>
      <div class="w-[1000px] mt-[120px] relative">
        <img src="/bell.png" class="max-w-[none] w-[800px] relative left-[-200px]"  alt="">
        <button class="flex items-center mt-[50px] bg-[#CBE54E] h-[46px] px-[70px]  absolute bottom-[100px] right-[250px]"><img src="/Arr.svg" class="mr-[20px]" alt="">
          {{ $t('study.btn') }}</button>

      </div>

    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>