<template>
  <div class="home-nav">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(page,index) in pages" :key='index'>
        <div class="nav-item" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeNav',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        // autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="scss" scoped>
  .home-nav {
    width: 100%;
    margin-top: 5px;
    .swiper-container {
      padding-bottom: 50%;
      height: 0;
    }
    .nav-item {
      position: relative;
      width: 25%;
      height: 0;
      padding-bottom: 25%;
      float: left;
      .icon-img {
        position:absolute;
        top:0;
        left:0;
        right: 0;
        bottom: 22px;
        padding:5px;
        box-sizing: border-box;
        img {
          height: 100%;
          margin: 0 auto;
          display: block;
        }
      }
      p {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
      }
    }
  }
</style>
