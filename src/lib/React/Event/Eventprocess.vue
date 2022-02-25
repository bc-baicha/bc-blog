<template>
  <Pagetitle text="React 事件处理" />
  <Pagecontent>
    <h4>react事件和DOM事件</h4>
    <Tablevue>
      <tr>
        <th>react事件</th>
        <th>DOM事件</th>
      </tr>
      <tr>
        <th>onClick</th>
        <th>onclick</th>
      </tr>
      <tr>
        <th>onClick={eventListener}</th>
        <th>onclick="eventListener()"</th>
      </tr>
      <tr>
        <th>e.preventDefalut</th>
        <th>onclick="javascript"</th>
      </tr>
    </Tablevue>
    <Heightcode>
      <pre>
      <code>
class ListItem extends Component {
    constructor(props){
    super(props) //子类中调用父类构造函数
    }
  doSomethind(){

  }
  handleClick(e){
      console.log(e)
      this.doSomethind() //报错，会说找不到这个方法
  }
  render(){
    return (
      &lt;div className='listItem'>
        &lt;span onclick={this.handleClick}>header&lt;span>
      &lt;div>
    )
  }
}
      </code>
    </pre>
    </Heightcode>
    <i>
      在面向对象的编程中，this的使用方法会随着引用对象的差别而不同，当被对象引用时指向的是对象，<br />
      单独函数引用指向的是window，严格模式是undefined，那我们在react中怎么解决这个问题呢？
    </i>
    <h4>this关键字的处理</h4>
    <ul>
      <li>在jsx中使用bind方法</li>
      <li>在构造函数中使用bind方法</li>
      <li>使用箭头函数</li>
    </ul>
    <Heightcode>
      <pre>
        <code>
class ListItem extends Component {
     constructor(props){
     super(props) //子类中调用父类构造函数
     // 方法2
     this.handleClick=this.handleClick.bind(this)
      }
    doSomethind(){

      }
    // 方法3，推荐使用，箭头函数的this总是指向定义时的对象，而不是运行时
    handleClick=(e)=>{
        console.log(e)
        this.doSomethind() //报错，会说找不到这个方法
    }
   render(){
    return (
      &lt;div className='listItem'>
        {/*方法1*/}
        &lt;span onclick={this.handleClick.bind(this)}>header&lt;span>   
      &lt;div>
    )
   }
}
        </code>
      </pre>
    </Heightcode>
    <h4>react事件机制</h4>
    <p>DOM事件</p>
    <div v-viewer>
      <img
        :style="{ width: '600px' }"
        src="../../../assets/React/1.png"
        alt="error"
      />
    </div>
    <p>
      在js的事件触发经过3个阶段，事件的捕获->目标对象事件的处理->事件冒泡，<br />
      假设在text中触发了事件，会经过一个捕获的阶段，父级元素将事件一直传递到本身发生的元素上，<br />
      在经过本身的事件处理之后，会经历冒泡饿阶段，事件从子元素向父元素冒泡；<br />
      就因为这样，事件委托成为了可能，就是将子元素的事件处理委托给父元素。
    </p>
    <h4>react事件</h4>
    <div v-viewer>
      <img
        :style="{ width: '600px' }"
        src="../../../assets/React/2.png"
        alt="error"
      />
    </div>
    <p>
      react会将所有的事件都绑定到document上，而不是某个元素上面，统一的使用事件监听，<br />
      并在冒泡阶段处理事件，当挂载和卸载组件的时候 只需在统一的事件监听位置，<br />
      增加或删除对象，因此极大的提高效率；当事件触发的时候，我们的组件会生成一个合成事件，<br />
      然后传递到documennt中，doucument会通过DispatchEvent回调函数依次执行DispatchEvent中同类型的事件监听函数，<br />事件注册是在组件生成的时候，我们将vDom中所有的事件的原生事件documennt中的一个监听器当中，<br />
      也就是所有的事件处理函数都存在ListenerBank中
      并以key作为索引，这样的好处是将可能要触发的事件分门别类。
    </p>
    <h4>react事件要素</h4>
    <ul>
      <li>react事件是合成事件，不是DOM原生事件</li>
      <li>在document监听所有支持的事件</li>
      <li>使用统一的分发函数dispatchEvent</li>
    </ul>
  </Pagecontent>
</template>
