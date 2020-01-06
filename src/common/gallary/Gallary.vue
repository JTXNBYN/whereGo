<template>
  <div class="container" @click="closeSwiper">
     <div class="swiper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in gallaryImgs" :key="index">
          <img class="swiper-img" :src="gallaryImgs[index]" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    closeSwiper () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction:column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #000;
  .swiper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    img {
      width: 100%;
    }

  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    color: #fff;
  }
}
</style>
