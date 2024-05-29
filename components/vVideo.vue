<script>
export default {
  name: 'VideoPlayer',
  props:{
    src:{
      type:String,
      default:'/video/Open_Size_4.mp4'
    },
    mobileSrc:{
      type:String,
      default:'/video/mobileVideo.MOV'
    }
  },
  data(){
    return{
      startVideo:false,
      isChange:false,
      windowWidth:600
    }
  },
  watch:{
    windowWidth(width){
      if(this.startVideo){
        setTimeout(()=>{
          this.$refs.video.play();
        },100)
      }
    }
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.windowWidth = window.innerWidth
      if(this.isChange) return false
      if(this.startVideo) return false
      const {scrollY,innerHeight} = window
      const videoContainer = this.$refs.video;
      const offsetTop = videoContainer.offsetTop
      if(scrollY + (innerHeight / 2) >  offsetTop){
        this.playVideo()
      }
    },
    playVideo() {
      this.startVideo = true
       this.$refs.video.play();
    },
    pauseVideo() {
      this.startVideo = false
      this.isChange = true
     this.$refs.video.pause();
    }
  }
}
</script>
<template>
  <div>
    <div class="video">
        <video v-if="windowWidth > 600" ref="video" width="320" height="240" muted loop playsinline>
          <source :src="src" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <video v-else ref="video" width="320" height="240" muted loop playsinline>
          <source :src="mobileSrc" type="video/mp4">
          Your browser does not support the video tag.
        </video>

      <div class="video-button-container">
        <button class="video-button" v-if="!startVideo" @click="playVideo">
          <svg   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="control-centered-small-icon">
            <path class="control-icon-play" d="M5 15.25V4.77a1.44 1.44 0 0 1 1.44-1.62 1.86 1.86 0 0 1 1.11.31l8.53 5c.76.44 1.17.8 1.17 1.51s-.41 1.07-1.17 1.51l-8.53 5a1.86 1.86 0 0 1-1.11.31A1.42 1.42 0 0 1 5 15.25Z"></path>
          </svg>
        </button>
        <button class="video-button" v-else @click="pauseVideo">
          <svg    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="control-centered-small-icon">
            <g class="control-icon-pause">
              <rect width="4.5" height="14" x="3.75" y="3" rx="1.5"></rect>
              <rect width="4.5" height="14" x="11.75" y="3" rx="1.5"></rect>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.video{
  max-width: 100%;
  height: 730px;
  margin: 0 auto;
}
.video video{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.video-button-container{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  margin-top: -66px;
  position: relative;
  z-index: 999;
}
.video-button{
  width: 46px;
  height: 46px;
  border: none;
  background: #F2F2F2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.video-button svg{
  width: 23px;
  height: 23px;
}
.video-button path,
.video-button rect{
  fill: #6E7574;
}
.video-inner{
  height: 100%;
}
@media screen and (max-width: 600px) {
  .video{
    height: 70vh;
    min-height: 500px;
  }
  .video video{
    height: inherit;
  }
}
</style>