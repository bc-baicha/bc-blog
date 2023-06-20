<template>
  <PageTitle text="JavaScript参数传递" />
  <Pagecontent>
    <h4>在《JavaScript高级程序设计》第三版 4.1.3，讲到传递参数：</h4>
    <Tagtext>ECMAScript中所有函数的参数都是按值传递的。</Tagtext>
    <h4>什么是按值传递呢？</h4>
    <Tagtext>
      把函数外部的值复制给函数内部变量，大致于把值从一个变量复制到另一个变量。
    </Tagtext>
    <Heightcode>
      <pre>
        <code>
let num = 1;

function foo(v) {
      v = 2
      console.log(v);//2
}

foo(num);

console.log(num)//1
        </code>
      </pre>
    </Heightcode>
    <div>
      这样看的话，就是变量的赋值，函数中修改变量的值不会影响到外部变量的值。
    </div>
    <h3>共享传递</h3>
    <div>
      那么如果我们传入的值是一个引用数据类型的值，在函数内部改变它的值，外部的变量，会受到影响吗？
    </div>
    <Heightcode>
      <pre>
        <code> 
var arr = { name: '白茶' }

function foo(v) {
      v['age'] = 23
      console.log(v);
}

foo(arr);

console.log(arr)
//这里的输出结果是：arr={name: "白茶", age: 23} v={name: "白茶", age: 23}
        </code>
      </pre>
    </Heightcode>
    <div :style="{ marginBottom: '10px' }">
      从这里看的话，函数内部修改了变量的值，外部的变量也受到了影响，这是为什么呢？
    </div>
    <Tagtext
      >这是因为：这里的复制相当于是一个浅拷贝，基本数据类型，存储在栈中，<br />
      所以相互之间不会受到影响，但是当我们传入的是一个引用数据类型的时候，<br />
      这里我们拷贝的就是栈中的指针，我们在函数内部修改值的时候，如果是通过拷贝的引用，<br />
      去进行内部值的修改操作，那么就会改变堆内存中的数据，影响到原来的对象。
    </Tagtext>
    <Heightcode>
      <pre>
        <code>
let arr = { name: '白茶' };

function foo(v) {
        v = 0
        console.log(v);
}

foo(arr);

console.log(arr)

//这里的输出结果是：arr={name:'白茶'}  v=0;
        </code>
      </pre>
    </Heightcode>
    <h4>那么这里为什么arr的值没有改变呢？</h4>
    <div>
      Stack Overflow上Community Wiki
      对上述的回答是：对于传递到函数参数的对象类型，如果直接改变了拷贝的引用的指向地址，那是不会影响到原来的那个对象；<br />

      我们上面的代码是直接改变了拷贝引用的指针，使它指向了一个新的地址，所以它不会影响到外部变量的值。
    </div>
  </Pagecontent>
</template>
