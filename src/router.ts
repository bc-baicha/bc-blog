import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/Home.vue';
import Docpage from './view/Docpage.vue';
/**这是js模块 */
import letConst from './lib/JS/letConst.vue';
import Parameter from './lib/JS/Parameter.vue';
import ClassArray from './lib/JS/ClassArray.vue';
import Closure from './lib/JS/Closure.vue';
import Prototype from './lib/JS/Prototype.vue';
/** 这是CSS模块*/
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
        // 这是js模块
        { path: 'letConst', component: letConst },
        { path: 'parameter', component: Parameter },
        { path: 'classArray', component: ClassArray },
        { path: 'closure', component: Closure },
        { path: 'prototype', component: Prototype },
        // 这是CSS模块
        { path: 'multipleborders', component: Multipleborders },
        { path: 'stripesbackground', component: Stripesbackground },
        { path: 'ellipse', component: Ellipse },
        { path: 'poptip', component: Poptip }
      ]
    }
  ]
})
export { router };