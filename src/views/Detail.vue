<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import axios from 'axios';
import DetailBanner from '../components/Detail/Banner.vue';
import DetailHeader from '../components/Detail/Header.vue';
import DetailList from '../components/Detail/List.vue';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get('/mock/detail.json', {
          params: {
            id: this.$route.params.id,
          },
        })
        .then((res) => {
          const info = res.data;
          if (info.ret === true) {
            this.sightName = info.data.sightName;
            this.bannerImg = info.data.bannerImg;
            this.gallaryImgs = info.data.gallaryImgs;
            this.list = info.data.categoryList;
          }
        });
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="less" scoped>
 .content {
   height: 50rem;
 }
</style>
