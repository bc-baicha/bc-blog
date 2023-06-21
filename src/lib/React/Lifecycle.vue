<template>
  <PageTitle text="React 生命周期" />
  <PageContent>
    <h4>最适合和服务端进行交互的周期函数是：componentDidmount</h4>
    <TagText>
      在这个时候，组件完成挂载，代表的Dom也已经挂载到了页面的Dom树上，即使获取到的数据需要直接操作Dom数，这时也是安全的
    </TagText>
    <h4>更新阶段方法的调用：</h4>
    <TagText>
      声明周期的调用：<br /><br />
      componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate
      -> render -> componentDidUpdate <br />
      <br />
      组件收到新的props（props中的数据并不一定真正发生变化）->
      决定是否需要继续执行更新过程 -> 组件代表的虚拟DOM即将更新 ->
      组件重新计算出新的虚拟DOM -> 虚拟DOM对应的真实DOM更新到真实DOM树中
    </TagText>
    <h4>父组件更新或者自身调用setState进行的更新操作：</h4>
    <TagText>
      shouldComponentUpate -> componentWillUpdate -> render ->
      componentDidUpdate
      <br /><br />
      这里并没有调用componentWillReceiveProps，只有当传入的props值发生变化时，才会调用该声明周期函数
    </TagText>
    <h4>需要注意的点：</h4>
    <ul>
      <li>
        componentWillMount
        中同步调用setState不会导致组件进行额外的渲染，组件经历的生命周期方法依次是componentWillMount
        -> render ->
        componentDidMount，组件并不会因为componentWillMount中的setState调用再次进行更新操作。如果是异步调用setState，组件是会进行额外的更新操作。不过实际场景中很少在componentWillMount中调用setState，一般可以通过直接在constructor中定义state的方式代替。
      </li>
      <li>
        一般情况下，当调用setState后，组件会执行一次更新过程，componentWillReceiveProps等更新阶段的方法会再次被调用，但如果在componentWillReceiveProps中调用setState，并不会额外导致一次新的更新过程，也就是说，当前的更新过程结束后，componentWillReceiveProps等更新阶段的方法不会再被调用一次。（注意，这里仍然指同步调用setState，如果是异步调用，则会导致组件再次进行渲染）
      </li>
      <li>
        componentDidUpdate中调用setState要格外小心，在setState前必须有条件判断，只有满足了相应条件，才setState，否组组件会不断执行更新过程，进入死循环。因为setState会导致新一次的组件更新，组件更新完成后，componentDidUpdate被调用，又继续setState，死循环就产生了。
      </li>
    </ul>
    <h4>其它生命周期不能调用setState的原因：</h4>
    <ul>
      <li>
        产生死循环。例如，shouldComponentUpdate、componentWillUpdate 和 render
        中调用setState，组件本次的更新还没有执行完成，又会进入新一轮的更新，导致不断循环更新，进入死循环。
      </li>
      <li>
        无意义。componentWillUnmount
        调用时，组件即将被卸载，setState是为了更新组件，在一个即将卸载的组件上更新state显然是无意义的。实际上，在componentWillUnmount中调用setState也是会抛出异常的。
      </li>
    </ul>
    <h4>forceUpdate()强制更新，不更改任何数据的状态</h4>
    <h3>React 17版本</h3>
    <h4>react 17 版本删除的三个生命周期：</h4>
    <ul>
      <li>componentWillmount</li>
      <li>componentWillReceiveProps</li>
      <li>componentWillUpdate</li>
    </ul>
    <h4>新增的生命周期函数有：</h4>
    <TagText>
      getDerviedStateFromPops<br /><br />
      此生命周期函数是在state的值在任何时候都取决于props的时候使用。<br />
      因为它可以取到props和state的值，返回的结果值会直接替换掉state的值。<br /><br />
      getSnapshotBrforeUpdate<br /><br />
      此生命周期的执行时间是在render和componentDidUpdate之间执行的，<br />
      它返回的值，可以作为componentDidupdate的第三个参数使用。
    </TagText>
    <h4>React 17生命周期流程：</h4>
    <div v-viewer>
      <img src="../../assets/React/3.png" alt="error" />
    </div>
    <h4>React 16.8 生命周期流程：</h4>
    <div v-viewer>
      <img src="../../assets/React/4.png" alt="error" />
    </div>
  </PageContent>
</template>
