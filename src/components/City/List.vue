<template>
  <div class="home-list" ref="wrapper">
   <div class="scroll">
      <ul class="area">
        <p class="title">当前城市</p>
        <ul class="city-item">
          <li class="item-info">
            <span>{{this.currentCity}}</span>
          </li>
        </ul>
      </ul>
      <ul class="area">
        <p class="title">热门城市</p>
        <ul class="city-item">
          <li class="item-info" v-for="item in hotList" :key="item.id" @click="handelClickCity(item.name)">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </ul>

      <ul class="area" v-for="(city,key) in cityList" :key="key" :ref="key">
        <p class="title">{{ key }}</p>
        <ul class="city-list">
          <li class="item-list" v-for="item in city" :key="item.id" @click="handelClickCity(item.name)">
          <span>{{ item.name }}</span>
          </li>
        </ul>
      </ul>

    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    hotList: Array,
    cityList: Object,
    letter: String
  },
  data () {
    return {
      scroll: ''
    }
  },
  computed: {
    ...mapState(
      { currentCity: 'defaultCity' }
    )
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true }) //  实例化better-scroll
  },
  methods: {
    handelClickCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])// 将 `this.changeCity()` 映射为 `this.$store.commit('changeCity')`
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]// 获取对应字母的ref
        this.scroll.scrollToElement(element) // 利用better-scroll插件 滚动到指定元素element
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.home-list{
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
   .area {
  font-size: 14px;
  .title {
    height: 27px;
    background-color: #eee;
    line-height: 27px;
    padding-left: 10px;
  }
  .city-item {
    overflow: hidden;
    padding: 5px 30px 5px 5px;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    .item-info {
      width: 33.3%;
      float: left;
      text-align: center;
      span {
        border: 1px solid #ccc;
        padding: 5px 0;
        margin: 5px;
        display: block;
        border-radius: 5px;
      }
    }

  }
  .city-list
  .item-list {
      padding-left: 10px;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
