<template>
  <PageTitle text="Hooks解决了什么问题" />
  <PageContent>
    <h4>
      React一直在解决一个问题：如何实现业务代码的分离，实现内部相关业务逻辑组件的复用。
    </h4>
    <h4>React Hooks：</h4>
    <p>
      hooks的出现使得我们在react函数组件中，也可以使用state和生命周期函数，而不需要在函数组件、高阶组件、render和props之间来回的切换，使得函数组件的功能更加完善，更加方便我们在组件中实现业务逻辑代码的分离和组件的复用。
    </p>
    <strong>react的核心思想是：</strong>
    <p>
      把一个页面拆分成多个独立，可复用的组件，并且使用自上而下的数据流串联起来，但是大型项目中会发现组件代码很冗长，想要去复用这些组件变得很难，尤其是那些类组件，因为它们本身就包含了状态(state)，所以复用这些组件很困难。
    </p>
    <strong>解决方法：</strong>
    <p>
      之后出现了HOC(高阶组件)和无状态组件试图解决上面的问题，但是出现多层嵌套问题，react官方推荐多使用无状态组件以此达到组件的复用和独立性，但是当我们书写了一个简洁完美的无状态组件时，后面因为需求的改动，使得这个组件必须要有自己的state，那我们就必须要把这个无状态组件改为状态组件，这样开发消耗是很大的。
    </p>
    <h4>useEffect</h4>
    <p>
      是componentDidMount、componentDidUpdate、componentWillUnmount三个生命周期函数的集合
    </p>
  </PageContent>
</template>
