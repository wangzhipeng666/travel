import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('./views/City.vue'),
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('./views/Detail.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
