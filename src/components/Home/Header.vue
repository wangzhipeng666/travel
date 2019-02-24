<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">{{ city }}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: ['city'],
};
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/varibles.less';

  .header {
    height: @headerHeight;
    line-height:@headerHeight;
    display:flex;
    background: @bgColor;
    color:#fff;
    .herader-left {
      width:.64rem;
      .back-icon {
        text-align:center;
        font-size:.4rem;
      }
    }
    .header-input {
      flex:1;
      margin-top:.12rem;
      height:.64rem;
      line-height:.64rem;
      margin-left:.2rem;
      padding-left:.2rem;
      background: #fff;
      border-radius:.1rem;
      color:#ccc;
    }
    .header-right{
      width:1.24rem;
      text-align:center;
      color:#fff;
      .arrow-icon{
        margin-left:-.08rem;
        font-size:.24rem;
      }
    }
  }
</style>
