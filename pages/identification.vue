<template>
  <Header/>
  <div class="identification">
    <div class="wrapper">
      <div class="identification-block1 ">
        <div class="identification-block1__left">
          <h2 v-html="$t('identification.block1.title')" class="title-big relative">
          </h2>
          <div class="flex lg:mt-[100px] mt-[40px] relative">
            <div class="identification-block1__left-img gradient-color mr-[16px]">
<!--              <img src="/Rectangle%20173.png" class="" alt="">-->
            </div>
            <p v-html="$t('identification.block1.desc')" class="description py-[7px] lg:max-w-[387px]">
            </p>
          </div>
        </div>
        <div class="identification-block1__right">
          <img src="/JKO.png" class="identification-block1__img "  alt="">
        </div>
      </div>
    </div>
    <div class="identification-images flex flex-wrap justify-center">
      <div class="identification-images__item mx-[10px]">
        <img src="/rty2%20(1).png"  alt="">
      </div>
      <div class="identification-images__item mx-[10px]">
        <img src="/rty2%20(2).png"  alt="">
      </div>
      <div class="identification-images__item mx-[10px]">
        <img src="/rty2%20(3).png"  alt="">
      </div>
      <div class="identification-images__item mx-[10px] mt-[20px]">
        <img src="/rty2%20(4).png"  alt="">
      </div>
      <div class="identification-images__item mx-[10px] mt-[20px]">
        <img src="/rty2%20(5).png"  alt="">
      </div>
    </div>
    <div class="identification-block2">
      <div class="wrapper">
        <h2 v-html="$t('identification.block2.title')" class="text-center lg:mt-[90px] mt-[20px] title-big lg:mb-[60px] mb-[30px]">
        </h2>
        <div class="identification-block2__inner ">

          <div class="identification-block2__left relative">
            <p v-html="$t('identification.block2.desc1')" class="description"></p>
            <p v-html="$t('identification.block2.desc2')" class="identification-block2__green xl:px-[40px] xl:py-[44px] lg:px-[30px] lg:py-[30px] px-[20px] py-[20px] bg-[#CBE54E] description w-[115%] mt-[40px]">
            </p>
            <button class="flex items-center uppercase mt-[50px] bg-[#CBE54E] h-[46px] px-[70px]   "><img src="/Arr.svg" class="mr-[20px]" alt="">
              {{ $t('identification.block2.btn') }}</button>

          </div>
          <div class="identification-block2__right">
            <img class="identification-block2__right-img" src="/neuraldiscovery_%201.png" alt="">
          </div>
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