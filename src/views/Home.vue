<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from '../components/Home/Header.vue';
import HomeSwiper from '../components/Home/Swiper.vue';
import HomeIcons from '../components/Home/Icons.vue';
import HomeRecommend from '../components/Home/Recommend.vue';
import HomeWeekend from '../components/Home/Weekend.vue';

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get('/mock/index.json')
        .then((res) => {
          console.log(res.data);
          const info = res.data;
          if (info.ret === true) {
            this.city = info.data.city;
            this.swiperList = info.data.swiperList;
            this.iconList = info.data.iconList;
            this.recommendList = info.data.recommendList;
            this.weekendList = info.data.weekendList;
          }
        });
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
