<template>
  <header class="header  drop-shadow-md bg-white">
    <div class="header-inner  ">
      <div class="w-full  flex items-center   z-10">
        <img src="/logo.png" alt="Logo" width="84" height="56" class="w-[40px] lg:w-[84px]">
        <div class="flex items-center gap-3 ml-auto">
          <div
              class="duration-100 absolute lg:static lg:w-auto w-full lg:h-auto h-[100vh] bg-white flex lg:items-center gap-[1.5vw] top-[100%] left-[-100%]   y-  flex-col lg:flex-row"
              :class="{'left-[0%]':isActive}"
          >
            <ul class="header-menu flex lg:flex-row flex-col lg:items-center  text-[#505050]">
              <li v-for="(item,index) in menu" :key="index" class="header-menu-item relative max-w-fit pr-3 lg:pr-0 py-1 after:bg-gradient-to-r  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <nuxt-link :href="item.link">{{ $t(item.text )}}</nuxt-link></li>
            </ul>
            <button class="text-white uppercase bg-[#5BA8A0] px-[10px] py-[10px] font-light lg:hidden mt-2">
              {{$t('menu.menuBtn')}}
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button class="header-menu-btn ml-[20px]  hidden lg:block">
              {{$t('menu.menuBtn')}}
            </button>
            <button class="text-[30px] cursor-pointer lg:hidden" @click="toggle">
              <svg
                  v-if="!isActive"
                  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

              <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                <path
                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                    fill="#0F0F0F"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  </header>
<!--  <p>{{$t('menu.menuItem1')}} - {{locale}}</p>-->
</template>
<script setup lang="ts">
import {onMounted, ref} from 'vue';
// import {local} from "#i18n";

const isActive = ref(false);
// const $t = useI18n()
const { locale, locales } = useI18n()
const menu = [
  {
    text:'menu.menuItem1',
    link:'#',
  },
  {
    text:'menu.menuItem2',
    link:'#',
  },
  {
    text:'menu.menuItem3',
    link:'#',
  },
  {
    text:'menu.menuItem4',
    link:'#',
  },
]

const toggle = () => {
  const swiper = document.getElementsByClassName('swiper')
  isActive.value = !isActive.value;

  if (isActive.value) {
    document.body.style.overflow = "hidden";
    for (const swiperElement of swiper) {
      swiperElement.style.zIndex = "-1";
    }
  } else {
    document.body.removeAttribute("style")
    for (const swiperElement of swiper) {
      swiperElement.removeAttribute("style")
    }
  }

};
onMounted(()=>{
  console.log(locale.value)
  console.log(locales.value)
})
</script>
