const showList = {
  javascript: {
    name: "JavaScript",
    key: 'JavaScript',
    data: [
      {
        name: "let 块级作用域和const",
        path: "/doc/letConst",
      },
      {
        name: "参数传递",
        path: "/doc/parameter",
      },
      {
        name: "类数组对象的定义",
        path: "/doc/classArray",
      },
      {
        name: "JS 闭包阐释",
        path: "/doc/closure",
      },
      {
        name: "JS原型和原型链",
        path: "/doc/prototype",
      },
      {
        name: "npm Yarn cnpm总结",
        path: "/doc/packagetool",
      },
      {
        name: 'New 的作用',
        path: '/doc/newintroduce'
      }
    ],
  },
  css: {
    name: 'CSS',
    key: 'CSS',
    data: [
      {
        name: "多重边框",
        path: '/doc/multipleborders'
      },
      {
        name: '条纹背景',
        path: '/doc/stripesbackground'
      },
      {
        name: '圆与半圆',
        path: '/doc/ellipse'
      },
      {
        name: '提示气泡',
        path: '/doc/poptip'
      }
    ]
  },
  react: {
    name: 'React',
    key: 'React',
    data: [
      {
        name: "Hooks",
        path: '/doc/react/introduce',
        children: [
          {
            name: 'hooks使命',
            path: '/doc/react/introduce',
          },
        ]
      },
      // {
      //   name: "react-redux",
      //   path: '/doc/react/redux',
      //   children: [
      //     {
      //       name: 'redux',
      //       path: '/doc/react/redux',
      //     },
      //   ]
      // },
    ]
  }
}

export { showList };