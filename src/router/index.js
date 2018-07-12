import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/controllers/Index';
import Login from '@/controllers/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
