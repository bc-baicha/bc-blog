<template>
  <Pagetitle text="hooks的使命" />
  <Pagecontent>
    <h4>逻辑组件复用</h4>
    <ul>
      <li>
        逻辑与UI组件分离<br />
        React 官方推荐在开发中将逻辑部分与视图部分结耦，便于定位问题和职责清晰
      </li>
      <li>
        使用特定的函数来声明state与声明周期<br />
        曾经的“无状态组件”由于没有“this”上下文的挂载，所以没有办法使用状态，但是在React中我们可以使用提供的内置函数来达到我们的目的。
      </li>
      <li>
        逻辑组件复用<br />
        社区一直致力于逻辑层面的复用，像 render props /
        HOC，不过它们都有对应的问题，Hooks是目前为止相对完美的解决方案。
      </li>
    </ul>
    <strong>react的核心思想是：</strong>
    <p>
      把一个页面拆分成多个独立，可复用的组件，并且使用自上而下的数据流串联起来，但是大型项目中会发现组件代码很冗长，想要去复用这些组件变得很难，尤其是那些类组件，因为它们本身就包含了状态(state)，所以复用这些组件很困难。
    </p>
  </Pagecontent>
</template>
