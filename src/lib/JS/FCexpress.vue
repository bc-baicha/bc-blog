<template>
  <PageTitle text="函数声明和函数表达式" />
  <PageContent>
    <h3>函数声明：</h3>
    <TagText>
      function 函数名(参数) { <br />
      &nbsp;&nbsp;&nbsp;&nbsp;要执行的代码<br />
      }
    </TagText>
    <h4>调用：</h4>
    <ul>
      <li>1、函数名.call(函数名,参数)</li>
      <li>2、函数名.apply(函数名,[参数])</li>
      <li>3、new 函数名(参数)</li>
      <li>4、定时器</li>
      <li>5、把函数声明变成函数表达式再调用</li>
      <li>6、ES6里的模版字符串</li>
    </ul>
    <HeightCode>
      <pre>
        <code>
function fn(text){
    console.log(text);
}

fn('直接调用');

fn.call(fn,'用call调用');

fn.apply(fn,['用apply调用']);

new fn('用new调用');

setTimeout(fn('用定时器调用'));

(function fn(text){
    console.log(text);
})('转成函数表达式后调用');

fn`用模版字符串调用`;   //ES6里语法
        </code>
      </pre>
    </HeightCode>
    <h3>函数表达式:</h3>
    <TagText>
      var/let/const 变量=function (参数) { <br />
      &nbsp;&nbsp;&nbsp;&nbsp;要执行的代码<br />
      }
    </TagText>
    <h4>调用:</h4>
    <ul>
      <li>1、函数名.call(函数名,参数)</li>
      <li>2、函数名.apply(函数名,[参数])</li>
      <li>3、new 函数名(参数)</li>
      <li>4、直接在后面加上一对小括号</li>
      <li>5、定时器</li>
      <li>6、ES6里的模版字符串</li>
      <li>7、以被赋值的形式出现（根据具体形式调用）</li>
    </ul>
    <HeightCode>
      <pre>
        <code>
const fn=function(text){
    console.log(text);
};

fn('直接调用');

fn.call(fn,'用call调用');

fn.apply(fn,['用apply调用']);

new fn('用new调用');

const fn2=function(text){
    console.log(text);
}('直接在后面加小括号调用');

setTimeout(fn('用定时器调用'));

fn`用模版字符串调用`;

document.onclick=function(){
    console.log('以被赋值的形式出现也是一个函数表达式');
};
        </code>
      </pre>
    </HeightCode>
    <h3>函数声明和函数表达式的区别：</h3>
    <ul>
      <li>1、函数声明必须带有标示符，函数表达式不用</li>
      <li>2、函数声明有变量提升，函数表达式没有</li>
      <li>
        3、函数声明不能出现在判断语句或者循环语句中 try/catch，函数表达式可以
      </li>
      <li>
        4、函数表达式在代码执行到的时候才会执行，并且在赋值完成之后才能调用该函数
      </li>
    </ul>
  </PageContent>
</template>
