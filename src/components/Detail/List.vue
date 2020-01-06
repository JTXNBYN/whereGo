<template>
  <div class="list">
    <div class="item" v-for="(item,index) in categoryList" :key="index">
      <div class="item-title">
        <i class="item-title-icon"></i>
        <span class="item-title-txt">{{item.title}}</span>
      </div>
      <!-- 为防止递归死循环，使用v-if为判断是否有children来结束 -->
      <div class="item-children" v-if="item.children">
        <!-- 使用递归组件 -->
        <DetailList :categoryList="item.children"></DetailList>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>
<style lang="scss" scoped>
.item-title {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  .item-title-icon {
    position: relative;
    width: 18px;
    height: 18px;
    display: inline-block;
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem
      no-repeat;
    background-size: 20px;
    top: 4px;
    left: 4px;
    margin-right: 10px;
  }
}
.item-children {
  padding: 0 10px;
}
</style>
