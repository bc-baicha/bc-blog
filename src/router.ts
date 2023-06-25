import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./view/Home.vue";
import DocPage from "./view/DocPage.vue";
/**这是js模块 */
import letConst from "./lib/JS/letConst.vue";
import Parameter from "./lib/JS/Parameter.vue";
import ClassArray from "./lib/JS/ClassArray.vue";
import Closure from "./lib/JS/Closure.vue";
import Prototype from "./lib/JS/Prototype.vue";
import PackAgeTool from "./lib/JS/PackAgeTool.vue";
import NewIntroduce from "./lib/JS/NewIntroduce.vue";
import FCExpress from "./lib/JS/FCExpress.vue";
import StackHeap from "./lib/JS/StackHeap.vue";
import ModuleLoaded from "./lib/JS/ModuleLoaded.vue";
import EventAgent from "./lib/JS/EventAgent.vue";
/** 这是CSS模块*/
import MultipleBorders from "./lib/CSS/MultipleBorders.vue";
import StripesBackground from "./lib/CSS/StripesBackground.vue";
import Ellipse from "./lib/CSS/Ellipse.vue";
import PopTip from "./lib/CSS/PopTip.vue";
import Interview from "./lib/CSS/Interview.vue";
import GridStudy from "./lib/CSS/GridStudy.vue";
import HtmlTag from "./lib/CSS/HtmlTag.vue";
import BgGradation from "./lib/CSS/BgGradation.vue";
import FlexStudy from "./lib/CSS/FlexStudy.vue";
/**这是React模块 */
import React from "./lib/React/index.vue";
import Introduce from "./lib/React/React-hooks/introduce.vue";
import ReactRedux from "./lib/React/React-redux/index.vue";
import EventProcess from "./lib/React/Event/EventProcess.vue";
import CompositeEvent from "./lib/React/Event/CompositeEvent.vue";
import Lifecycle from "./lib/React/Lifecycle.vue";
import FiberContrast from "./lib/React/FiberContrast.vue";
import ReactDiff from "./lib/React/ReactDiff.vue";
/**这是面试问题模块 */
import CrossDomain from "./lib/Interview/CrossDomain.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: DocPage,
      redirect: "/doc/letConst",
      children: [
        // 这是js模块
        { path: "letConst", component: letConst },
        { path: "parameter", component: Parameter },
        { path: "classArray", component: ClassArray },
        { path: "closure", component: Closure },
        { path: "prototype", component: Prototype },
        { path: "packAgeTool", component: PackAgeTool },
        { path: "newIntroduce", component: NewIntroduce },
        { path: "FCExPress", component: FCExpress },
        { path: "stackHeap", component: StackHeap },
        { path: "moduleLoaded", component: ModuleLoaded },
        { path: "eventAgent", component: EventAgent },
        // 这是CSS模块
        { path: "multipleBorders", component: MultipleBorders },
        { path: "stripesBackground", component: StripesBackground },
        { path: "ellipse", component: Ellipse },
        { path: "popTip", component: PopTip },
        { path: "interview", component: Interview },
        { path: "gridStudy", component: GridStudy },
        { path: "htmlTag", component: HtmlTag },
        { path: "bgGradation", component: BgGradation },
        { path: "flexStudy", component: FlexStudy },
        //这是react模块
        {
          path: "react",
          component: React,
          redirect: "/doc/react/introduce",
          children: [
            { path: "introduce", component: Introduce },
            { path: "redux", component: ReactRedux },
            { path: "eventProcess", component: EventProcess },
            { path: "compositeEvent", component: CompositeEvent },
            { path: "lifecycle", component: Lifecycle },
            { path: "fiberContrast", component: FiberContrast },
            { path: "reactDiff", component: ReactDiff },
          ],
        },
        //这是面试问题模块
        { path: "inter/crossDomain", component: CrossDomain },
      ],
    },
  ],
});
export { router };
