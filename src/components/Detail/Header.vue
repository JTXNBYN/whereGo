<template>
<div>
  <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
  </router-link>
  <div class="detail-header" v-show="!showAbs">
    <span>景点详情</span>
    <router-link to="/">
      <i class="iconfont header-back">&#xe624;</i>
    </router-link>
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      showAbs: true
    }
  }
}
</script>
<style lang="scss" scoped>
.header-abs {
    position: absolute;
    text-align: center;
    background: rgba(0,0,0,0.8);
    z-index: 2;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    top: 10px;
    left: 10px;
    .header-abs-back {
      font-size: 20px;
    }
}
.detail-header {
  height: 43px;
  background-color:#00bcd4;
  line-height: 43px;
  color: #fff;
  text-align: center;
  position: fixed;
  top:0;
  width: 100%;
  font-size: 16px;
  z-index: 2;
  .header-back {
    color:#fff;
    font-size: 24px;
    position: absolute;
    top:0;
    left: 0;
    width: 32px;
  }
}
</style>
