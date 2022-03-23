<template>
  <Pagetitle text="JS原型和原型链" />
  <Pagecontent>
    <h4>JS 创建对象：</h4>
    <Tagtext>
      常见的几种创建方法：构造函数创建，字面量表示法创建，Object构造函数创建
    </Tagtext>
    <h4>首先我们要明确：</h4>
    <Tagtext>
      1、__proto__和construtor是对象独有的<br />
      2、prototype属性是函数独有的；<br />
    </Tagtext>
    <strong>example：</strong>
    <Heightcode>
      <pre>
        <code>
function Person() {

}
// prototype是函数才会有的属性
Person.prototype.name = 'Kevin';
var person1 = new Person();
var person2 = new Person();
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
        </code>
      </pre>
    </Heightcode>
    <h4>那这个函数的 prototype 属性到底指向的是什么呢？是这个函数的原型吗？</h4>
    <Tagtext>
      其实，函数的 prototype
      属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，<br />
      也就是这个例子中的 person1 和 person2 的原型。
    </Tagtext>
    <h4>那什么是原型呢？</h4>
    <Tagtext>
      每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，<br />
      这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。
    </Tagtext>
    <p>让我们用一张图表示构造函数和实例原型之间的关系：</p>
    <div v-viewer>
      <img
        src="https://pic3.zhimg.com/80/v2-2e0ceb648664fc4a11628be87f1041fe_1440w.jpg"
        alt="error"
      />
    </div>
    <i>在这张图中我们用 Person.prototype 表示实例原型。</i>
    <p>
      那么我们该怎么表示实例与实例原型，也就是 person 和 Person.prototype
      之间的关系呢，<br />
      这时候我们就要讲到第二个属性：
    </p>
    <h4>__proto__</h4>
    <Tagtext>
      这是每一个JavaScript对象(除了 null
      )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。
    </Tagtext>
    <Heightcode>
      <pre>
        <code>
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
        </code>
      </pre>
    </Heightcode>
    <div v-viewer>
      <img
        src="https://pic4.zhimg.com/80/v2-b0519c9619ffb110a88de331ab31837f_1440w.jpg"
        alt="error"
      />
    </div>
    <strong>规范里面的解释是：</strong>
    <Tagtext>
      object that provides shared properties for other objects<br />
      为其它对象提供共享属性的对象
    </Tagtext>
    <h4>
      既然实例对象和构造函数都可以指向原型，那么原型是否有属性指向构造函数或者实例呢？
    </h4>
    <h4>constructor</h4>
    <i>
      指向实例倒是没有，因为一个构造函数可以生成多个实例，但是原型指向构造函数倒是有的，<br />
      这就要讲到第三个属性：constructor，每个原型都有一个 constructor
      属性指向关联的构造函数。</i
    >
    <Heightcode>
      <pre>
        <code>
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
        </code>
      </pre>
    </Heightcode>
    <div v-viewer>
      <img
        src="https://pic4.zhimg.com/80/v2-e6de0af33b148a1c5c90cfbd871a08bf_1440w.jpg"
        alt="error"
      />
    </div>
    <Heightcode>
      <pre>
        <code>
综上所得
function Person() {

}
var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
        </code>
      </pre>
    </Heightcode>
    <h4>实例与原型：</h4>
    <i>
      从上面的图上可以看出如果我们在实例对象中找不到属性，就会查找与对象关联的原型中的属性，如果还查找不到就会去原型中的原型查找，直到最顶层为止。
    </i>
    <Heightcode>
      <pre>
        <code>
  function demo() {

  }
  demo.prototype.name = '白茶'
  const demoTest = new demo();
  demoTest.name = '白茶--白茶'
  console.log(demoTest.name); //白茶--白茶
  delete demoTest.name;
  console.log(demoTest.name); //白茶
        </code>
      </pre>
    </Heightcode>
    <p>
      上面的例子中首先给原型添加了一个name=白茶，之后又在实例对象中添加了一个name=白茶--白茶。
    </p>
    <ul>
      <li>
        当我们执行第一个log这时，会去实例对象中去查找name属性，发现有值，就会返回，所以是白茶--白茶
      </li>
      <li>这时向下执行，删除掉了实例对象中的name属性，执行第二个log</li>
      <li>
        再次去实例对象中去查找，结果没有找到，那么就会从demoTest的原型中去查找，也就是demoTest.__proto__
        === demo.prototype中查找，然后就找到了name属性，值为白茶，返回
      </li>
    </ul>
    <h4>原型的原型：</h4>
    <div>
      前面有说到，原型也是一个对象，那么我们就可以用最原始的方式创建它，那就是：
    </div>
    <Heightcode>
      <pre>
        <code>
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
        </code>
      </pre>
    </Heightcode>
    <p>
      其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 __proto__
      指向构造函数的 prototype ，所以我们再更新下关系图：
    </p>
    <div v-viewer>
      <img
        src="https://pic4.zhimg.com/80/v2-76e891ac46dde8b2bbf7d8a321dd02d7_1440w.jpg"
        alt="error"
      />
    </div>
    <h4>原型链</h4>
    <p>那 Object.prototype 的原型呢？null，我们可以打印：</p>
    <Heightcode>
      <pre>
      <code>
        console.log(Object.prototype.__proto__ === null) // true
      </code>
      </pre>
    </Heightcode>
    <p>然而 null 究竟代表了什么呢？</p>
    <Tagtext>null 表示“没有对象”，即该处不应该有值。</Tagtext>
    <div>
      所以 Object.prototype.__proto__ 的值为 null 跟 Object.prototype
      没有原型，其实表达了一个意思。
    </div>
    <div>
      所以查找属性的时候查到 Object.prototype 就可以停止查找了。<br />
      最后一张关系图也可以更新为：
    </div>
    <div v-viewer>
      <img
        src="https://pic2.zhimg.com/80/v2-f19e63a863f3c99619b3c5fd7da3a091_1440w.jpg"
        alt="error"
      />
    </div>
    <strong>原型链：相互关联的原型组成的链状结构，也就是蓝色的这条线。</strong>
    <div>首先是 constructor 属性，我们看个例子：</div>
    <Heightcode>
      <pre>
        <code>
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
        </code>
      </pre>
    </Heightcode>
    <p>
      当获取 person.constructor 时，其实 person 中并没有 constructor 属性,<br />
      当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype
      中读取，<br />
      正好原型中有该属性，所以：
    </p>
    <Tagtext>person.constructor === Person.prototype.constructor</Tagtext>
    <p>
      其次是 __proto__ ，绝大部分浏览器都支持这个非标准的方法访问原型，<br />
      然而它并不存在于Person.prototype 中，<br />
      实际上，它是来自于 Object.prototype，与其说是一个属性，<br />
      不如说是一个 getter/setter，当使用 obj.__proto__ 时，可以理解成返回了
      Object.getPrototypeOf(obj)。
    </p>
  </Pagecontent>
</template>
