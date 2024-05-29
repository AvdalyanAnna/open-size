<script setup lang="ts">
import CheckLang from "~/components/checkLang.vue";
const {locale} = useI18n()
</script>
<template>
<div :class="locale">
  <NuxtPage />
  <client-only >
    <check-lang />
  </client-only>
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
