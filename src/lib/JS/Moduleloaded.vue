<template>
  <PageTitle text="JS模块加载" />
  <Pagecontent>
    <h3>前言</h3>
    <div>本文主要学习四种模块加载规范：</div>
    <ul>
      <li>1、AMD</li>
      <li>2、CMD</li>
      <li>3、CommonJS</li>
      <li>4、ES6 module语法</li>
    </ul>
    <div>
      其中AMD，CMD，CommonJs不会详细学习，只是学习下它们的概念，做一些比较。
    </div>
    <p>想要详细学习的同学可以点击下面的链接：</p>
    <ul>
      <li>
        <router-link
          to="https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)"
          target="_blank"
          >AMD</router-link
        >
      </li>
      <li>
        <router-link
          to="https://github.com/seajs/seajs/issues/242"
          target="_blank"
          >CMD</router-link
        >
      </li>
      <li>
        <router-link
          to="https://javascript.ruanyifeng.com/nodejs/module.html"
          target="_blank"
          >阮一峰CommonJS规范学习</router-link
        >
      </li>
    </ul>
    <h3>AMD和CMD的区别：</h3>
    <ul>
      <li>1、AMD推崇依赖前置，在定义模块的时候就要声明其依赖的模块</li>
      <li>2、CMD推崇就近依赖，只有在用到某个模块的时候再去require</li>
    </ul>
    <p>
      AMD 是将需要使用的模块先加载完再执行代码，而 CMD 是在 require
      的时候才去加载模块文件，加载完再接着执行。
    </p>
    <h3>CommonJS与AMD的区别：</h3>
    <Tagtext>
      <ul>
        <li>
          1、CommonJS
          规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。
          AMD规范则是非同步加载模块，允许指定回调函数。
        </li>
        <li>
          2、由于 Node.js
          主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以
          CommonJS 规范比较适用。
          但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式，因此浏览器端一般采用
          AMD 规范。
        </li>
      </ul>
    </Tagtext>
    <h3>ES6与CommonJS的三个重大差异：</h3>
    <ul>
      <li>1、CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。</li>
      <li>2、CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。</li>
      <li>
        3、CommonJS 模块的require()是同步加载模块，ES6
        模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。
      </li>
    </ul>
    <h4>加载时的区别：</h4>
    <Tagtext>
      CommonJS
      加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而
      ES6
      模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。
    </Tagtext>
    <h3>我们重点要了解的是第一个差异：</h3>
    <Tagtext
      >CommonJS
      模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。</Tagtext
    >
    <Heightcode>
      <pre>
        <code>
let current = 1;
function addCurrent() {
  current++
}
module.exports = {
  current: current,
  addCurrent: addCurrent
}

//在文件中引入
let num = require('./Democlass.js');
console.log(num.current) //1
num.addCurrent();
console.log(num.current);//1
        </code>
      </pre>
    </Heightcode>
    <h4>
      从上面的例子中我们看到，两次输出的结果是一致的，current的值并未改变，这是为什么呢？
    </h4>
    <div>这是因为num.current是一个基本类型的值，会被缓存。</div>
    <h4>如果按照这种写法我们该怎么获取它改变之后的值呢？</h4>
    <Heightcode>
      <pre>
        <code>
//这里就直接写改变之后的导出对象了
module.exports = {
  get current() {
    return current
  },
  addCurrent: addCurrent
}
        </code>
      </pre>
    </Heightcode>
    <Heightcode>
      <pre>
        <code>
//使用引用数据类型
let current = {
  name:'白茶'
};
function addCurrent() {
  current.name='爱喝茶'
}
module.exports = {
  current: current,
  addCurrent: addCurrent
}

let num = require('./Democlass');
console.log(num.current) //{name: "白茶"}
num.addCurrent();
console.log(num.current);//{name: "爱喝茶"}
        </code>
      </pre>
    </Heightcode>
    <div>上面的结果是会发生改变的，可以看出这是浅拷贝。</div>
    <h4>下面我们将这个例子改为ES6的引入方式看下：</h4>
    <Heightcode>
      <pre>
      <code>
let current = 1;
let obj = { name: '白茶' };
function addCurrent() {
  current++;
  obj.name = '爱喝茶';
}
export {
  current,
  obj,
  addCurrent
}

import { current, obj, addCurrent } from './data.js';
console.log(current);//1
console.log(obj);//{name: "白茶"}
addCurrent();
console.log(current);//2
console.log(obj);//{name: "爱喝茶"}
      </code>
    </pre>
    </Heightcode>
    <h4>从输出结果可以看出上面的数据都发生了变化，这是为什么？</h4>
    <Tagtext>
      ES6 模块的运行机制与 CommonJS 不一样。JS
      引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6
      的import有点像 Unix
      系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6
      模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。
    </Tagtext>
    <h3>export 命令</h3>
    <p>
      一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。下面是一个
      JS 文件，里面使用export命令输出变量。
    </p>
    <Heightcode>
      <pre>
        <code>
//常见的几种写法
//输出多个变量
export let a = 1;
export let b = 2;
//等同于下方
export {a,b};

//输出函数
export function demo(){return 1};
//等同于
function demo(){return 1};
export {demo};

//关键字命名
function demo(){return 1};
export {demo};

//如果我们想要把对外输出的命名修改下，就可以使用as进行操作
function demo(){return 1};
export {demo as demo2};//demo 是我们的函数名称，demo2是我们修改后的名称



//import命令
使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
function demo(){return 1};
let a =1;
let b =2;
export {demo,a,b};

import {demo} from './demo.js';

//import中也有as关键字，同样也是修改命名
import {demo as demo2} from './demo.js';

//修改全部命名
import * as num from './demo.js';
console.log(num.a);//1
//这里的num就是导入的全部模块变量，是一个对象
        </code>
      </pre>
    </Heightcode>
    <h4>export default 命令</h4>
    <div>
      使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载，这里的export
      default命令，就是为模块指定默认输出。
    </div>
    <Heightcode>
      <pre>
        <code>
//第一种写法
export default function () {
  return 'demo';
};
//第二种写法
function demo(){return 'demo'};
export default demo;
//引入函数引用
import foo from './demo.js';
console.log(foo()) // demo

//这种写法是错误的
export default const a = 1;
        </code>
      </pre>
    </Heightcode>
    <div>
      从上面的例子中我们看到，我在使用export命令导出的demo函数，在引用的时候，使用的命名是foo但是还是可以执行函数，并且输出正确的值。这是为什么呢？
    </div>
    <p>原因：</p>
    <Tagtext>
      export
      default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。<br />
      export default命令的本质是将后面的值，赋给default变量
    </Tagtext>
    <p>赋给default变量这句话让我们举例子解释下，更清楚一点：</p>
    <Tagtext>
      function demo(){return 'demo'};<br />
      export default demo; <br /><br />
      1、首先声明了一个函数demo，紧接着使用了export default命令<br />
      2、这里并不是把demo函数输出了，而是进行了赋值，default = demo；
    </Tagtext>
    <h3>下面是export default 命令的几个注意的地方：</h3>
    <Tagtext>
      export
      default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export
      default命令只能使用一次。<br />
      因为export
      default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。</Tagtext
    >
  </Pagecontent>
</template>
<style lang="less" scoped>
a {
  text-decoration: none;
}
</style>
