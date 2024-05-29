<template>
  <div
      class="mt-[20px] w-full h-fit relative"
  >
    <video width="320" height="240"
           ref="videoElement"
           poster="/Rectangle%20169.png"
           class="mt-[20px] w-full h-full"
           @ended="handleVideoEnded"
           @playing="handleVideoPlaying"
           muted
           playsinline
           controls
    >
      <source src="/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <svg
        v-show="start"
        class="cursor-pointer absolute right-4 bottom-4 opacity-70"
        width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" @click="play">
      <circle cx="23" cy="23" r="23" fill="#F2F2F2"/>
      <path
          d="M32 21.7679C33.3333 22.5377 33.3333 24.4623 32 25.2321L20.75 31.7272C19.4167 32.497 17.75 31.5348 17.75 29.9952L17.75 17.0048C17.75 15.4652 19.4167 14.503 20.75 15.2728L32 21.7679Z"
          fill="#6E7574"/>
    </svg>
  </div>

</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  data: () => {
    return {
      start: true
    }
  },
  methods: {
    play() {
      this.$refs.videoElement.play();
    },
    pause() {
      this.$refs.videoElement.pause();
    },
    handleVideoEnded() {
      this.start = true
      this.$refs.videoElement.load()
    },
    handleVideoPlaying() {
      this.start = false
    }
  },
})
</script>

<style>
</style>
