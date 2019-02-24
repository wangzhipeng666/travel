<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont back-icon">&#xe624;</span>
    </router-link>
    <p class="city-header">城市选择</p>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
};
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/varibles.less';
  .header {
    position:relative;
    overflow: hidden;
    height:@headerHeight;
    line-height:@headerHeight;
    text-align:center;
    color:#fff;
    background: @bgColor;
    font-size:.32rem;
    .back-icon {
      position:absolute;
      top:0;
      left:0;
      width:.64rem;
      font-size:.4rem;
      text-align:center;
      color:#fff;
    }
  }
</style>
