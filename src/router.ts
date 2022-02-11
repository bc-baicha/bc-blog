import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/Home.vue';
import Docpage from './view/Docpage.vue';
import letConst from './lib/JS/letConst.vue';
import Parameter from './lib/JS/Parameter.vue';
import ClassArray from './lib/JS/ClassArray.vue';
import Multipleborders from './lib/CSS/Multipleborders.vue';
import Stripesbackground from './lib/CSS/Stripesbackground.vue';
import Ellipse from './lib/CSS/Ellipse.vue';
import Poptip from './lib/CSS/Poptip.vue';
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Docpage,
      redirect: '/doc/letConst',
      children: [
        { path: 'letConst', component: letConst },
        { path: 'parameter', component: Parameter },
        { path: 'classArray', component: ClassArray },
        { path: 'multipleborders', component: Multipleborders },
        { path: 'stripesbackground', component: Stripesbackground },
        { path: 'ellipse', component: Ellipse },
        { path: 'poptip', component: Poptip }
      ]
    }
  ]
})
export { router };