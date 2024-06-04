<template>
  <Header/>
  <div class="study">
    <div class="wrapper">
      <div class="study-inner">
        <div class="study-left">
          <h2 v-html="$t('study.title')" class="title-big ">
          </h2>
          <div class="flex items-center lg:mt-[80px] mt-[30px] relative">
            <img src="/Rectangle%20173%20(1).png" class="mr-[20px]" alt="">
            <p v-html="$t('study.desc1')" class="description lg:max-w-[495px]">
            </p>
          </div>
          <div v-html="$t('study.desc2')" class="xl:px-[60px] lg:px-[40px] sm:px-[30px] px-[20px] sm:py-[30px] py-[20px] description bg-[#CBE54E] xl:w-[800px] lg:w-[700px] w-[100%] lg:mt-[50px] mt-[30px]"></div>
        </div>
        <div class="study-right ">
          <img src="/bell.png" class="study-right__img "  alt="">
          <button class="study-right__btn">
            <img src="/Arr.svg" class="mr-[20px]" alt="">
            {{ $t('study.btn') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <Footer/>
</template>

<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>