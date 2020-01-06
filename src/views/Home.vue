<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeNav :iconList="iconList"></HomeNav>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>
<script>
import HomeHeader from '../components/Home/Header'
import HomeSwiper from '../components/Home/Swiper'
import HomeNav from '../components/Home/Nav'
import HomeRecommend from '../components/Home/Recommend'
import HomeWeekend from '../components/Home/Weekend'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  created () {
    this.getHomeInfo()
  },
  methods: {
    async getHomeInfo () {
      const res = await this.$axios.get('/api/index.json')
      const { data } = res.data
      if (res.status === 200) {
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['defaultCity'])
  },
  mounted () {
    this.lastCity = this.defaultCity
  },
  activated () {
    if (this.lastCity !== this.defaultCity) {
      this.lastCity = this.defaultCity
      this.getHomeInfo()
    }
  }
}
</script>
<style lang="stylus" scoped></style>
