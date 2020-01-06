<template>
  <div class="home-swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="scss" scoped>
.home-swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
  .swiper-pagination {
    width: 100%;
    // height: 20px;
    bottom: 10px;
    ::v-deep .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
}

</style>
