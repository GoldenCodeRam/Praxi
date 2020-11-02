import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/guide/java',
    name: 'Java',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/guide/Java.vue'),
  },
  {
    path: '/guide/programming',
    name: 'Programming',
    component: () => import('@/views/guide/Programming.vue'),
  },
  {
    path: '/codeFormatter',
    name: 'Code Formatter',
    component: () => import('@/views/codeFormatter.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
