<template>
  <Header/>
  <div class="px-[17%]">
    <h1 class="text-[89px] font-semibold font-[Familjen Grotesk] leading-[89px]">Reduce your carbon footprint and reduce costs</h1>
    <h2 class="mt-[20px] font-light text-[23px] font-['Wix Madefor Text'] leading-[29.9px]">The fashion industry accounts for about 10% of global carbon emissions. In 2022, this is 5.8 billion tons. A significant part of carbon emissions comes from the overproduction of clothing and shoes, as well as from returns from online trading.</h2>
    <img src="/maxresdefault%20copy%201.png" class="w-full mt-[20px]" alt="">
    <div class="flex items-end">
      <img src="/c02.png" class="mr-[20px]" alt="">
      <h2 class="text-[41px] leading-[45.9px]"><span class="font-bold">More than 200 megatons of CO2 emissions</span> from overproduction, subsequent recycling and returns of ill-fitting clothing and footwear annually</h2>
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
    <div  class="flex justify-between items-end mt-[40px]">
      <div class="text-[23px] mr-[20px]">
        <h2 class="text-[74px]  leading-[70px]">
          <span class="font-bold"> 1.9 Billion</span>
          <br>ill-fitting
          <br>shoe
          <br>returned
          <br>annually
        </h2>

        <p class="relative mt-[20px]">
          Consumers worldwide buy between 14.5 and 19 billion pairs per year. Online trading accounts for up to 20% of the shoe market. It is known that online shoe sales provide 40-50% of returns of ill-fitting shoes, which is at least 1.9 billion pairs.
        </p>
        <br>
        <p class="mb-[20px]">
          Every pair of shoes returned emit 850g of CO2. As a result, returns annually emit at least
          2 megatons of CO2.</p>
        <img src="/wf.png" class="w-full relative" alt="">
      </div>
      <img src="/neuraldiscovery_Photographic_image%201.png" class="w-[60%]" alt="">
    </div>
    <img src="/SN%203%201.png" class="mt-[40px] w-full" alt="">
    <div class="flex items-end relative top-[-50px]">
      <button class="flex items-center bg-[#CBE54E] h-[46px] px-[30px]"><img src="/Arr.svg" class="mr-[20px]" alt=""> BACK</button>
      <div class="bg-[#CBE54E] text-[20px] font-bold px-[60px] py-[30px] w-fit ml-auto">
        Open Size Digital technologies are opening up new opportunities
        <br>for brands to improve their carbon handprint metrics and
        <br>improve the efficiency of production in the fashion industry
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
</script>
<style>
.swiper-button-next:after {
  color: white;
  margin-bottom: 650px;
}

.swiper-button-prev:after  {
  color: white;
  margin-bottom: 650px
}
</style>