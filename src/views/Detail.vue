<template>
  <div class="detail">
    <DetailHeader></DetailHeader>
    <DetailBanner :sightName='sightName' :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></DetailBanner>
    <DetailList :categoryList="categoryList"></DetailList>
  </div>
</template>
<script>
import DetailHeader from '../components/Detail/Header'
import DetailBanner from '../components/Detail/Banner'
import DetailList from '../components/Detail/List'
export default {
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  created () {
    this.getDetailList()
  },
  methods: {
    async getDetailList () {
      const res = await this.$axios('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      const { data } = res.data
      if (res.status === 200) {
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
      console.log(res)
    }
  }
}
</script>
<style lang="">

</style>
