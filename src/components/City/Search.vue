<template>
  <div class="search">
    <div class="city-serach">
      <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword" />
    </div>
    <div class="search-content" v-show="keyword" ref="wrapper">
      <ul>
        <li class="search-item" v-for="item in list" :key="item.id" @click="handelClickCity(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="listLength">没有更多数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: {
    cityList: Object
  },
  data () {
    return {
      list: [],
      keyword: '',
      timeId: null,
      scroll: ''
    }
  },
  computed: {
    listLength () {
      return !this.list.length
    }
  },
  methods: {
    handelClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])// 将 `this.add()` 映射为 `this.$store.commit('increment')`
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
  },
  watch: {
    keyword () {
      if (this.timeId) {
        clearTimeout(this.timeId)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timeId = setTimeout(() => {
        let result = []
        for (let key in this.cityList) {
          this.cityList[key].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }, 100)
    }
  }
}
</script>
<style lang="scss" scoped>
.city-serach {
  position: absolute;
  top: 43px;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  background-color: #00bcd4;
  padding: 0 5px;
  .search-input {
    width: 100%;
    height: 31px;
    text-align: center;
    color: #666;
    border-radius: 5px;
  }
}
.search-content {
  z-index: 3;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
    border-bottom: 1px solid #eee;
  }
}
</style>
