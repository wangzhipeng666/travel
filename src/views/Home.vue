<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import axios from 'axios';
import HomeHeader from '../components/Home/Header.vue';
import HomeSwiper from '../components/Home/Swiper.vue';

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
  },
  methods: {
    getHomeInfo() {
      axios
        .get('/mock/index.json')
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>
