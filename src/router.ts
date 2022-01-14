import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/Home.vue';
import Doc from './view/Doc.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      // redirect: '/doc/doctwo',
      // children: [
      //   { path: 'doctwo', component: Doctwo },
      //   { path: 'doctwo2', component: Doctwo2 },
      //   { path: 'doctwo3', component: Doctwo3 }
      // ]
    }
  ]
})
export { router };