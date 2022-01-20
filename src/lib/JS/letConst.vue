<template>
  <Pagetitle text="let 块级作用域和const" />
  <Pagecontent>
    <h3>为什么要使用块级作用域？</h3>
    <div>
      在es5中只有全局作用域和函数作用域，就会导致以下问题：<br />
      case1：内层变量覆盖外层变量<br />
      reason:函数作用域的声明，进行了变量提升，所以全局的变量被覆盖了
    </div>
    <Heightcode>
      <pre>
        <code>
var time = new Date();

function test(){
  console.log(time);
  var time = 'hello world';
}

test()//undefined
        </code>
      </pre>
    </Heightcode>
    <div>
      case2：用来计数的循环变量，泄漏为全局变量 <br />
      reason:本意是i只作为循环变量，循环结束之后，i消失，但是现在i并没有消失，成为了全局变量
    </div>
    <Heightcode>
      <pre>
        <code>
var s = 'hello';

for (var i = 0; i &lt; s.length; i++) {
  console.log(s[i]);
}

console.log(i);//5
        </code>
      </pre>
    </Heightcode>
    <div>case3：let 的出现使得匿名的立即执行函数，不在必要了</div>
    <h3>块级作用域和函数声明</h3>
    <div>
      在es5中函数的声明只能在顶部作用域和函数作用中声明，不能在块级作用域中声明。<br />
      但是浏览器为了兼容老代码，所以支持了在块级作用域中声明。<br />
      注意：let块级作用域的声明，必须要有{}包括，否则JavaScript引擎是不承认的
    </div>
    <Heightcode>
      <pre>
        <code>
// 第一种写法，报错
if (true) let x = 1;

// 第二种写法，不报错
if (true) {
  let x = 1;
}
        </code>
      </pre>
    </Heightcode>
    <h3>let 解析</h3>
    <div>
      声明的变量不会进行变量提升，称之为暂时性死区。<br />
      所以在我们使用这个变量的时候就会报错。<br />
      原因：只要块级作用域内存在let命令，它所声明的变量就会绑定这个作用域，不再受外部的影响。
    </div>
    <h3>const 解析</h3>
    <div>
      const的作用域和let一样，只能在当前作用域中使用。<br />
      const 声明的变量不支持改变，所以在声明的时候就必须要初始化赋值。<br />
      如果初始化没有进行赋值，就会报错。
    </div>
    <h3>const 数据修改</h3>
    <div>
      const声明的变量，不得改变，实际上是指，变量指向内存地址保存的数据不能更改，基本数据类型，存储在栈中，是一些简易的字段。<br />
      而引用数据类型，数据存储在堆内存中，声明的变量，只是一个指向堆内存空间的指针，<br />
      const只能保证指针不发生改变，但是堆内存中的数据结构和值是否发生改变，就不能完全控制了，因此，声明常量时要小心。
    </div>
    <Heightcode>
      <pre>
        <code>
const obj = {
   num: "1",
};

obj.num = "2";

console.log(obj.num); //2
        </code>
      </pre>
    </Heightcode>
  </Pagecontent>
</template>
<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
