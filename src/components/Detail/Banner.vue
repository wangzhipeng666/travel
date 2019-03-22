<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        :src="bannerImg"
        class="banner-img"
      >
      <div class="banner-info">
        <p class="banner-title">{{ sightName }}</p>
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xeac4;</span>
          {{ gallaryImgs.length}}
        </p>
      </div>
    </div>
    <fade-animation>
      <detail-gallery
        :imgs="gallaryImgs"
        v-show="showGallery"
        @close="handleGalleryClose"
      ></detail-gallery>
    </fade-animation>
  </div>
</template>

<script>
import DetailGallery from './Gallery.vue';
import FadeAnimation from './Fade.vue';

export default {
  name: 'DetailBanner',
  components: {
    DetailGallery,
    FadeAnimation,
  },
  data() {
    return {
      showGallery: false,
      imgs: [],
    };
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  methods: {
    handleBannerClick() {
      this.showGallery = true;
    },
    handleGalleryClose() {
      this.showGallery = false;
    },
  },
};
</script>

<style lang="less" scoped>
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    .banner-img {
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        line-height: .32rem;
        height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0, 0, 0, 0.8);
        font-size: .24rem;
        .banner-icon {
          font-size: .24rem;
          padding-right: .1rem;
        }
      }
    }
  }
</style>
