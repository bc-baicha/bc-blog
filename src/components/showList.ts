const showList = {
  javascript: {
    name: "JavaScript",
    key: 'JavaScript',
    data: [
      {
        name: "let 块级作用域和const",
        path: "/letConst",
      },
      {
        name: "参数传递",
        path: "/parameter",
      },
      {
        name: "类数组对象的定义",
        path: "/classArray",
      },
      {
        name: "JS 闭包阐释",
        path: "/closure",
      },
      {
        name: "JS原型和原型链",
        path: "/prototype",
      },
      {
        name: "npm Yarn cnpm总结",
        path: "/packagetool",
      },
      {
        name: 'New 的作用',
        path: '/newintroduce'
      },
      {
        name: '函数声明 / 表达式',
        path: '/fcexpress'
      },
      {
        name: '堆和栈',
        path: '/stackHeap'
      },
      {
        name: 'JS 模块加载',
        path: '/moduleLoaded'
      }
    ],
  },
  css: {
    name: 'CSS',
    key: 'CSS',
    data: [
      {
        name: "多重边框",
        path: '/multipleborders'
      },
      {
        name: '条纹背景',
        path: '/stripesbackground'
      },
      {
        name: '圆与半圆',
        path: '/ellipse'
      },
      {
        name: '提示气泡',
        path: '/poptip'
      },
      {
        name: 'CSS 经典题',
        path: '/interview'
      },
      {
        name: 'Grid 学习',
        path: '/gridstudy'
      },
      {
        name: '你不知道的HTML',
        path: '/htmllable'
      }
    ]
  },
  react: {
    name: 'React',
    key: 'React',
    data: [
      {
        name: "Hooks",
        path: '/react/introduce',
        children: [
          {
            name: 'hooks使命',
            path: '/react/introduce',
          },
        ]
      },
      {
        name: 'React事件',
        path: '/react/eventprocess',
        children: [
          {
            name: '事件处理',
            path: '/react/eventprocess',
          },
          {
            name: '自述合成事件',
            path: '/react/syntheticevent'
          }
        ]
      },
      {
        name: 'React 生命周期',
        path: '/react/Lifecycle'
      }
      // {
      //   name: "react-redux",
      //   path: '/react/redux',
      //   children: [
      //     {
      //       name: 'redux',
      //       path: '/react/redux',
      //     },
      //   ]
      // },
    ]
  }
}

export { showList };