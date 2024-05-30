<script setup lang="ts">
import Form from "~/components/Blocks/Form.vue";
import Green from "~/components/UI/Green.vue";
import {reactive,ref} from "vue";
import useVuelidate from "@vuelidate/core";
import {helpers, required, email} from "@vuelidate/validators";
const loading = ref(false)
const errors = ref(null)
const form = reactive({
  name: '',
  surname: '',
  city: '',
  company: '',
  email: '',
  message: ''
})
const v$ = useVuelidate({
  name: {
    required: helpers.withMessage('Введите имя', required),
  },
  surname: {
    required: helpers.withMessage('Введите фамилию', required),
  },
  city: {
    required: helpers.withMessage('Введите страну', required),
  },
  company: {
    required: helpers.withMessage('Введите компонию', required),
  },
  email: {
    required: helpers.withMessage('Введите почту', required),
    email: helpers.withMessage('Введите корректный email', email)
  },
  message: {
    required: helpers.withMessage('Напишите сообшения', required),
  }
}, form)

const send = (e) =>{
  e.preventDefault()
  if (loading.value) return
  errors.value = null
  v$.value.$touch()
  if (v$.value.$error) return
  const config = useRuntimeConfig()
  const TOKEN = config.public.TOKEN
  const CHAT_ID = config.public.CHAT_ID
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`
  let message =`<b>Имя</b>: ${form.name}\n`
  message+= `<b>Фамилия</b>: ${form.surname}\n`
  message+= `<b>Страна</b>: ${form.city}\n`
  message+= `<b>Компания</b>: ${form.company}\n`
  message+= `<b>Почта</b>: ${form.email}\n`
  message+= `<b>Сообшения</b>: ${form.message}`




  fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message
    })
  })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

}
</script>
<template>
  <h2 v-html="$t('home.form.title')" class="mt-6   lg:mt-[120px] title-big bold-block">
    </h2>
  <div class="flex items-center lg:mt-[60px] mt-4">
    <img src="/Rectangle%20135%20(1).png" class="mr-[10px]" alt="">
    <span class="description">{{$t('home.form.description') }}</span>
  </div>

  <div class="flex items-start justify-between lg:mt-[70px] mt-6 flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 lg:text-[22px] text-md">
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE.png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item1')}}</span>
      </p>
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE%20(1).png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item2')}}</span>
      </p>
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE%20(2).png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item3')}}</span>
      </p>
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE%20(3).png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item4')}}</span>
      </p>
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE%20(4).png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item5')}}</span>
      </p>
      <p class="flex lg:my-[15px] my-5 items-start">
        <img src="/TO%20LEARN%20MORE%20(5).png" class="mr-[15px] w-[40px] h-[40px]" alt="">
        <span class="font-semibold">{{$t('home.form.list.item6')}}</span>
      </p>
    </div>
    <form @submit="send" class="w-full lg:w-1/2">
      <h2 v-html="$t('home.form.inner.title')" class="lg:text-[20px] text-md"></h2>
      <div class="lg:mt-[10px] flex flex-col gap-3 mt-3 lg:grid-cols-2 lg:grid">
        <div class="lg:my-[5px] col-span-1 row-start-1">
          <input
              v-model="form.name"
              @blur="v$.name.$touch()"
              type="text" name="name" :placeholder="$t('home.form.inner.name')"
              class="px-[15px] py-[4px] text-black w-full  border "
              :class="v$.name.$error ? 'border-red-500' : 'border-black'"
          >
<!--          <span v-if="v$.name.$errors && v$.name.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.name.$errors[0].$message }}-->
<!--          </span>-->
        </div>
        <div class="lg:my-[5px] col-span-1 row-start-2 ">
          <input v-model="form.surname"
                 @blur="v$.surname.$touch()"
                 class="px-[15px] py-[4px] text-black w-full border"
                 :class="v$.surname.$error ? 'border-red-500' : 'border-black'"
                 type="text" name="surname"
                 :placeholder="$t('home.form.inner.surname')" >
<!--          <span v-if="v$.surname.$errors && v$.surname.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.surname.$errors[0].$message }}-->
<!--          </span>-->
        </div>

        <div class="lg:my-[5px]  col-span-1 row-start-2">
          <input v-model="form.city"
                 @blur="v$.city.$touch()"
                 class="px-[15px] py-[4px] text-black  border w-full" type="text"
                 :class="v$.city.$error ? 'border-red-500' : 'border-black'"
                 name="city"
                 :placeholder="$t('home.form.inner.city')">
<!--          <span v-if="v$.city.$errors && v$.city.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.city.$errors[0].$message }}-->
<!--          </span>-->
        </div>
        <div class="lg:my-[5px] col-span-1 row-start-3">
          <input v-model="form.company"
                 @blur="v$.company.$touch()"
                 class="px-[15px] py-[4px] text-black  border w-full"
                 :class="v$.company.$error ? 'border-red-500' : 'border-black'"
                 type="text" name=""
                 :placeholder="$t('home.form.inner.company')">
<!--          <span v-if="v$.company.$errors && v$.company.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.company.$errors[0].$message }}-->
<!--          </span>-->
        </div>
        <div class="lg:my-[5px]  col-span-1 row-start-3">
          <input v-model="form.email"
                 @blur="v$.email.$touch()"
                 class="px-[15px] py-[4px] text-black  border w-full"
                 :class="v$.email.$error ? 'border-red-500' : 'border-black'"
                 type="text" name="email"
                 :placeholder="$t('home.form.inner.email')">
<!--          <span v-if="v$.email.$errors && v$.email.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.email.$errors[0].$message }}-->
<!--          </span>-->
        </div>

      </div>
      <h2 v-html="$t('home.form.inner.subTitle')" class="lg:text-[23px] lg:mt-[25px] mt-6 text-md"></h2>
      <div class="flex items-center mt-[20px]">
        <input v-model="form.message"
               @blur="v$.message.$touch()"
               type="text" class="px-[15px] py-[4px] text-black flex-1 border border-r-0" name="message"
               :placeholder="$t('home.form.inner.message')"
               :class="v$.message.$error ? 'border-red-500' : 'border-black'"
        >
        <Green class="ml-auto">{{$t('home.form.inner.btn')}}
          <img src="/Group%2091%20(1).svg" class="w-[20px] ml-[10px]" alt="">
        </Green>
      </div>
<!--      <span v-if="v$.message.$errors && v$.message.$errors.length > 0" class=" text-xs  text-red-500">-->
<!--             {{ v$.message.$errors[0].$message }}-->
<!--          </span>-->
    </form>
  </div>
</template>
