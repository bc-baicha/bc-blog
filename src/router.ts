import { createRouter, createWebHistory } from 'vue-router';
import Home from './view/Home.vue';
import Docpage from './view/Docpage.vue';
import letConst from './lib/JS/letConst.vue';
const history = createWebHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Docpage,
      redirect: '/doc/letConst',
      children: [
        { path: 'letConst', component: letConst },
      ]
    }
  ]
})
export { router };