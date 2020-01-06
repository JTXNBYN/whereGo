<template>
  <div class="banner">
    <div class="banner-info" @click="showSwiper">
      <img :src="bannerImg" alt="">
      <div class="info">
        <div class="info-title">
          {{sightName}}
        </div>
        <div class="info-number">
          <span  class="iconfont info-icon">&#xe692;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <Gallary v-show="show" @close="closeClick" :gallaryImgs="gallaryImgs"></Gallary>
    </FadeAnimation>
  </div>
</template>
<script>
import Gallary from '../../common/gallary/Gallary'
import FadeAnimation from '../../common/fade/FadeAnimation'

export default {
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    Gallary,
    FadeAnimation
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showSwiper () {
      this.show = true
    },
    closeClick () {
      this.show = false
      console.log(this.show)
    }
  }

}
</script>
<style lang="scss">
.banner-info{
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  img {
    width: 100%;
  }
  .info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 18px;
    color: #fff;
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.8)));
    .info-title {
      font-size: 16px;
      margin-left: 10px;
      flex: 1;
    }
    .info-number {
      padding: 0 20px;
      margin-bottom: 5px;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, .8);
      .info-icon{
        font-size: 12px;
      }
    }
  }
}
</style>
