<template>
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallery-img" :src="item" >
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGallery',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true,
      },
    };
  },
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    handleGalleryClick() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="less" scoped>
  .container /deep/ .swiper-container {
    overflow: inherit;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: #000;
    .wrapper {
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .gallery-img {
        width: 100%;
      }
    }
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
</style>
