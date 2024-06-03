<script lang="ts" setup>
import {defineEmits} from 'vue';

const emit = defineEmits(['update'])
const {locale, setLocale} = useI18n()
const router = useRouter()
const hasCode = localStorage.getItem('code')
const codeError = ref(localStorage.getItem('codeError') || 0)
const config = useRuntimeConfig()
const CODE_LOGIN = config.public.CODE_LOGIN
const CODE_PASSWORD = config.public.CODE_PASSWORD
const error = ref('')
// const timer = ref(null)
const codeTimer = ref(new Date(localStorage.getItem('codeTimer') ?? null))
const repeatTime: Ref<number> = ref(60 * 15)
const currentTime: Ref<number> = ref(0)
const timer: Ref<any> = ref(null)


const startTimer = (repeatTime: number = 0) => {
  if (repeatTime) currentTime.value = repeatTime
  timer.value = setInterval(() => currentTime.value--, 1000)
}
const stopTimer = () => {
  clearInterval(timer.value)
}
watch(currentTime, (val) => {
  if (val === 0) stopTimer()
});

onBeforeUnmount(() => {
  stopTimer()
});

if (locale.value === 'ru' && !hasCode) {
  let date1 = new Date(localStorage.getItem('codeTimer'));
  let date2 = new Date();
  let time1 = date1.getTime();
  let time2 = date2.getTime();
  let differenceInMilliseconds = time1 - time2;
  let differenceInSeconds = differenceInMilliseconds / 1000;

  console.log('Разница в секундах:', differenceInSeconds);
  if (differenceInSeconds > 0) startTimer(differenceInSeconds)
  console.log(codeTimer.value, 'codeTimer')
} else {
  emit('update', true)
}
useHead({
  bodyAttrs: {
    class: `h-full`
  }
})
const form = reactive({
  login: '',
  password: '',
})
const send = (e) => {
  e.preventDefault()
  if (locale.value === 'ru' && !hasCode) {
    console.log(+codeError, '+codeError')
    // if (+codeError.value <= 3) {
    if (CODE_LOGIN === form.login && CODE_PASSWORD === form.password) {
      localStorage.setItem('code', '1')
      localStorage.removeItem('codeError')
      localStorage.removeItem('codeTimer')
      emit('update', true)
    } else {
      error.value = 'Не совподает с нашими данними'
      codeError.value = +codeError.value + 1
      localStorage.setItem('codeError', codeError.value)
      if (codeError.value > 3) {
        let now = new Date();
        let milliseconds = now.getTime();
        let newTime = milliseconds + (15 * 60 * 1000);
        let newDate = new Date(newTime);
        timer.value = newDate
        localStorage.setItem('codeTimer', timer.value)
        startTimer(repeatTime.value)
      }
      // setTimeout(()=>{
      //   setLocale('en')
      //   emit('update', true)
      // }, 5000)
    }
    // } else {
    //   // setLocale('en')
    //   // emit('update', true)
    // }
  } else {
    emit('update', true)
  }
}
const $getMinutes = (duration: number): string => {
  let mins: number | string = ~~((duration % 3600) / 60);
  let secs: number | string = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

const changeEng = () =>{
  setLocale('en')
    emit('update', true)
}
</script>

<template>
  <div class="flex min-h-[100vh] flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <div v-if="currentTime">
          <h2 class="text-center">Можете попробовать снова четез</h2>
          <p class="text-[100px] text-center"> {{ $getMinutes(currentTime) }}</p>
        </div>
        <form v-else class="space-y-6" @submit="send">
          <div v-if="error" class="rounded-md bg-red-50 p-4">
            <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
          </div>
          <div>
            <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
            <div class="mt-2">
              <input v-model="form.login" id="login" name="login" type="text" autocomplete="login" required=""
                     class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
            <div class="mt-2">
              <input v-model="form.password" id="password" name="password" type="password"
                     autocomplete="current-password" required=""
                     class="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>


          <div>
            <button type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Открыть
            </button>
          </div>
        </form>

      </div>
      <div @click="changeEng" class=" cursor-pointer text-blue-600 text-sm font-medium mx-auto mt-[20px] text-center">Посмотреть англискую версию</div>


    </div>
  </div>

</template>

