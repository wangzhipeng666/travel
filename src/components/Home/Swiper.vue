<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" >
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
      },
    };
  },
  props: {
    list: Array,
  },
  computed: {
    showSwiper() {
      return this.list.length;
    },
  },
};
</script>

<style lang="less" scoped>
  .swiper-pagination /deep/ .swiper-pagination-bullet {
    background: #fff;
  };
  .wrapper {
    overflow:hidden;
    width: 100%;
    height: 0;
    padding-bottom:31.25%;
    background: #eee;
    .swiper-img {
      width:100%;
    }
  }
</style>
