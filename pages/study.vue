<template>
  <Header/>
  <div class="px-[17%]">
    <div class="flex">
      <div class="relative z-10">
        <h2 class="text-[89px]  font-bold leading-[90px] relative">Study of E-comfort
          <br>and
          <br>reverse
          <br>engineering</h2>
        <div class="flex mt-[80px] relative">
          <img src="/Rectangle%20173%20(1).png" class="mr-[20px]" alt="">
          <h2 class="text-[23px]">
            Patented industrial technology for creating
            <br>digital twins of the internal volumes of
            <br>clothing and shoes is based on direct 3D
            <br>measurements in static and dynamic modes,
            <br>taking into account all deformations and
            <br>stretches of materials

          </h2>
        </div>
        <div class="px-[60px] py-[30px] text-[23px] bg-[#CBE54E] w-[800px] mt-[50px]">
          Having the parameters of these digital measurements, the brand is able to reverse engineer products to optimize its production order, create more comfortable products and subsequently switch to targeted production
        </div>
      </div>
      <div class="w-[1000px] mt-[120px] relative">
        <img src="/bell.png" class="max-w-[none] w-[800px] relative left-[-200px]"  alt="">
        <button class="flex items-center mt-[50px] bg-[#CBE54E] h-[46px] px-[70px]  absolute bottom-[100px] right-[250px]"><img src="/Arr.svg" class="mr-[20px]" alt=""> BACK</button>

      </div>

    </div>
  </div>
  <Footer/>
</template>

<script setup lang="ts">
import Header from "~/components/UI/Header.vue";
import Footer from "~/components/UI/Footer.vue";
</script>