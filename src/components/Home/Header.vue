<template>
  <div class="home-header">
    <i class="iconfont back-icon">&#xe624;</i>
    <div class="search">
      <i class="icon-search iconfont">&#xe632;</i>
      <input type="text" placeholder="输入城市/景点/游玩主题" />
    </div>
    <router-link to="/city" class="home-left">
      <div class="local">
        {{this.currentCity}}
        <i class="iconfont arrow-icon">&#xe64a;</i>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(
      { currentCity: 'defaultCity' }
    )
  }
}
</script>
<style lang="scss" scoped>
.home-header {
  width: 100%;
  height: 43px;
  background-color: #00bcd4;
  color: #fff;
  display: flex;
  text-align: center;

  .back-icon {
    width: 32px;
    height: 100%;
    float: left;
    font-size: 22px;
    line-height: 43px;
  }
  .search {
    flex: 1;
    margin-left: 10px;
    position: relative;
    color: #ccc;
    input {
      width: 100%;
      padding-left: 30px;

      height: 32px;
      margin-top: 5px;
      border-radius: 5px;
      &::-webkit-input-placeholder {
        color: #ccc;
      }
    }
    .icon-search {
      position: absolute;
      left: 10px;
      top: 13px;
    }
  }
  .local {
    line-height: 43px;
    float: right;
    color: #fff;
    // width: 65px;
    padding: 0 5px;
  }
}
</style>
