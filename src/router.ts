import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './view/Home.vue';
import Docpage from './view/Docpage.vue';
const history = createWebHashHistory();
const pathFC = (value) => {
  return import(`./lib/${value}.vue`)
}
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Docpage,
      redirect: '/doc/letConst',
      children: [
        // 这是js模块
        { path: 'letConst', component: pathFC('JS/LetConst') },
        { path: 'parameter', component: pathFC('JS/Parameter') },
        { path: 'classArray', component: pathFC('JS/ClassArray') },
        { path: 'closure', component: pathFC('JS/Closure') },
        { path: 'prototype', component: pathFC('JS/Prototype') },
        { path: 'packagetool', component: pathFC('JS/Packagetool') },
        { path: 'newintroduce', component: pathFC('JS/Newintroduce') },
        { path: 'fcexpress', component: pathFC('JS/FCexpress') },
        { path: 'stackHeap', component: pathFC('JS/Stackheap') },
        { path: 'moduleLoaded', component: pathFC('JS/Moduleloaded') },
        // 这是CSS模块
        { path: 'multipleborders', component: pathFC('CSS/Multipleborders') },
        { path: 'stripesbackground', component: pathFC('CSS/Stripesbackground') },
        { path: 'ellipse', component: pathFC('CSS/Ellipse') },
        { path: 'poptip', component: pathFC('CSS/Poptip') },
        { path: 'interview', component: pathFC('CSS/Interview') },
        {
          path: 'react', component: import('./lib/React/index.vue'),
          redirect: '/doc/react/introduce',
          children: [
            { path: 'introduce', component: pathFC('React/React-hooks/Introduce') },
            { path: 'redux', component: import('./lib/React/React-redux/index.vue') },
            { path: 'eventprocess', component: import('./lib/React/Event/Eventprocess.vue') },
            { path: 'syntheticevent', component: import('./lib/React/Event/Syntheticevent.vue') },
            { path: 'lifecycle', component: pathFC('React/Lifecycle') }
          ]
        }
      ]
    }
  ]
})
export { router };