<template>
  <Pagetitle text="JS 原型和原型链" />
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
  </Pagecontent>
</template>
