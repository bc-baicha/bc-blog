import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/Home.vue';
import Docpage from './view/Docpage.vue';
import one from './lib/one.vue';
import two from './lib/two.vue';
import three from './lib/three.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Docpage,
      redirect: '/doc/one',
      children: [
        { path: 'one', component: one },
        { path: 'two', component: two },
        { path: 'three', component: three },
      ]
    }
  ]
})
export { router };