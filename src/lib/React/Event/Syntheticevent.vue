<template>
  <Pagetitle text="自述合成事件" />
  <Pagecontent>
    <h4>
      首先React的所有事件并没有绑定到具体的DOM节点，而是绑定到了document上，<br />
      然后由统一的事件处理程序来处理，同时也是基于浏览器的冒泡捕获机制，所有的节点都会在document上触发。
    </h4>
    <h4>统一事件处理的优点：</h4>
    <ul>
      <li>减少内存消耗、提高性能，避免事件频繁的创建和销毁。</li>
      <li>统一规范，用于解决浏览器的兼容性问题，简化事件逻辑。</li>
      <li>方便事件的统一管理和事务机制</li>
    </ul>
    <h4>合成事件对原生事件的合成和处理：</h4>
    <i
      >对原生事件的升级和改造：比如input的onChange事件，是blur，keyup，keydown，change，focus，都进行了注册，并且合成为onChange事件</i
    >
    <h4>事件的注册：</h4>
    <ul>
      <li>
        组件在挂载阶段，根据组件内声明的事件类型：onclick，onchange，给document添加事件监听，并且制定统一的事件处理程序dispatchEvent。
      </li>
      <li>
        事件存储：把React组件内的事件统一存储在一个数组内，事件触发调用时从数组内部弹出，避免频繁的事件注册和销毁。
      </li>
    </ul>
    <h4>事件执行的顺序是：</h4>
    <ul>
      <li>当真实DOM原生触发，然后冒泡到document，合成事件触发</li>
      <li>原生事件先执行</li>
      <li>react合成事件后执行</li>
    </ul>
  </Pagecontent>
</template>
