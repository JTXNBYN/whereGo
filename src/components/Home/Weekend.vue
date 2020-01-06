<template>
  <div class="home-weekend">
    <p class="wee-title">周末去哪儿</p>
    <ul class="wee-content">
      <li class="content-item" v-for="item in weekendList" :key="item.id">
        <div class="item-img" >
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    weekendList: Array
  }
}
</script>
<style lang="scss" scoped>
.home-weekend {
  .wee-title {
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    padding-left: 10px;
  }
  .item-img {
    overflow: hidden;
    height: 0;
    padding-bottom: 37%;
    background-color: red;
    img {
      width: 100%;
    }
  }
  .item-info {
    padding: 5px;
    .item-title {
      font-size: 16px;
      line-height: 24px;
    }
    .item-desc {
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
