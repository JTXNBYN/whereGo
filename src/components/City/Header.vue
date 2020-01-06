<template>
  <div class="city-header">
    <span>城市选择</span>
    <router-link to="/">
      <i class="iconfont header-back">&#xe624;</i>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.city-header {
  height: 43px;
  background-color:#00bcd4;
  line-height: 43px;
  color: #fff;
  text-align: center;
  position: absolute;
  top:0;
  width: 100%;
  font-size: 16px;
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
