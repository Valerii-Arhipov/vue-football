import Vue from 'vue';
import VueRouter from 'vue-router';

import Matches from "@/Page/Matches";

const routes = [
  { path: '/', component: Matches },
  { path: '/match', component: Matches },
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

export default router;
