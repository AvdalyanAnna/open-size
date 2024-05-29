<script lang="ts" setup>

const {locale, setLocale} = useI18n()
const router = useRouter()
const hasCode = localStorage.getItem('code')
const config = useRuntimeConfig()
const CODE = config.public.CODE
if (locale.value === 'ru' && !hasCode) {
  const code = prompt('code')
  if (+code !== +CODE) setLocale('en')
  else localStorage.setItem('code', '1')

}
</script>

<template>
  <div></div>

</template>

