<template>
  <div class="home-recommend">
    <p class="hot">热门推荐</p>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id " class="rec-item" v-for="item in recommendList" :key="item.id">
        <img :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>

export default {
  props: {
    recommendList: Array
  }
}
</script>
<style lang="scss" scoped>
.home-recommend {
  .hot {
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    padding-left: 10px;
    margin-top: 15px;
  }
  .rec-item {
    height: 95px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    img {
      width: 95px;
      height: 95px;
      padding: 5px;
      box-sizing: border-box;
    }
    .item-info {
      flex: 1;
      padding: 5px;
      box-sizing: border-box;
      .title{
        font-size: 18px;
        // font-weight: bold;
        line-height: 26px;
      }
      .item-desc {
        font-size: 14px;
        line-height: 20px;
        color: #ccc;
      }
      .item-button {
        padding: 3px 10px;
        border-radius: 5px;
        margin-top: 10px;
        color: #fff;
        background-color: #ff9300;
      }
    }
  }
}
</style>
