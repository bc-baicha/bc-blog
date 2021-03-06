import { createApp } from 'vue'
import App from './App.vue'
import './index.less';
import 'highlight.js/styles/monokai-sublime.css'
import hljs from 'highlight.js'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer';
import Heightcode from './components/Heightcode.vue';
import Pagetitle from './components/Pagetitle.vue';
import Pagecontent from './components/Pagecontent.vue';
import Tagtext from './components/Tagtext.vue';
import Tablevue from './components/Table.vue';
import Playtext from './components/Playtext.vue';
import { router } from './router';
const app = createApp(App);
app.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block: any) => {
    hljs.highlightBlock(block)
  })
});
app.use(router);
app.use(Viewer);
app.mount('#app');
app.component('Heightcode', Heightcode);
app.component('Pagetitle', Pagetitle);
app.component('Pagecontent', Pagecontent);
app.component('Tagtext', Tagtext);
app.component('Tablevue', Tablevue);
app.component('Playtext', Playtext);
