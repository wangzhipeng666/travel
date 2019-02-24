<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hot="hotCities" :letter="letter"></city-list>
    <City-alphabet :cities="cities" @change="handleLetterChange"></City-alphabet>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from '../components/City/Header.vue';
import CitySearch from '../components/City/Search.vue';
import CityList from '../components/City/List.vue';
import CityAlphabet from '../components/City/Alphabet.vue';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    };
  },
  methods: {
    getCityInfo() {
      axios
        .get('./mock/city.json')
        .then((res) => {
          const info = res.data;
          if (info.ret && res.data) {
            this.cities = info.data.cities;
            this.hotCities = info.data.hotCities;
          }
        });
    },
    handleLetterChange(letter) {
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="less" scoped>

</style>
