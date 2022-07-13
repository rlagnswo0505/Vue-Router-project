import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import IntroduceView from '../views/IntroduceView.vue';
import DataBindingListView from '../views/DataBindingListView.vue';
import RanderingView from '../views/RanderingView.vue';
import EventClickView from '../views/EventClickView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroduceView,
  },
  {
    path: '/databindinglist',
    name: 'databindinglist',
    component: DataBindingListView,
  },
  {
    path: '/randering',
    name: 'randering',
    component: RanderingView,
  },
  {
    path: '/eventclick',
    name: 'eventclick',
    component: EventClickView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
