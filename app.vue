<script setup lang="ts">
import CheckLang from "~/components/checkLang.vue";
const {locale} = useI18n()
const showPage = ref(false)
</script>
<template>
<div :class="locale">
  <div v-show="showPage">
    <NuxtPage  />
  </div>
  <div v-show="!showPage">
    <client-only >
      <check-lang @update="(val) => showPage = val" />
    </client-only>
  </div>

</div>

</template>
<style>
body{
  overflow-x: hidden;
}
img{
  max-width: none;
}

.default-width{
  max-width: 1680px;
  width: 100%;
}
</style>
