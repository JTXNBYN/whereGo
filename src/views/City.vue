<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch :cityList="cityList"></CitySearch>
    <CityList
      :hotList="hotList"
      :cityList="cityList"
      :letter="letter"
      ></CityList>
    <CityAlphabet
      :cityList="cityList"
      @change="handleLetterChange"
      ></CityAlphabet>
  </div>
</template>
<script>
import CityHeader from '../components/City/Header'
import CitySearch from '../components/City/Search'
import CityList from '../components/City/List'
import CityAlphabet from '../components/City/Alphabet'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotList: [],
      cityList: {},
      letter: ''
    }
  },
  created () {
    this.getCityList()
  },
  methods: {
    async getCityList () {
      const res = await this.$axios.get('api/city.json')
      if (res.status === 200) {
        this.hotList = res.data.data.hotCities
        this.cityList = res.data.data.cities
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      // console.log(letter)
    }
  }
}
</script>
<style lang="scss">
html,body,#app,.city {
  height: 100%;
}
.city {
  padding-top: 79px;
  position: relative;
  box-sizing: border-box;
}
</style>
