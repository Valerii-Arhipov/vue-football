import Vue from 'vue';
import VueRouter from 'vue-router';

import Matches from "@/Page/Matches";
import Standings from "@/Page/Standings";

const routes = [
  { path: '/', redirect: '/matches' },
  { path: '/matches', component: Matches },
  { path: '/standing', component:  Standings},
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  scrollBehavior(to) {
    if (to.path !== '/matches') {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
