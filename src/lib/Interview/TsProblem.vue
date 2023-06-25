<template>
  <PageTitle text="TS-问题" />
  <PageContent>
    <h3>什么是TS？</h3>
    <p>
      是一个强类型的JavaScript超集，支持es6语法，但是不能直接在浏览器上运行，需要使用编译器编译成js代码运行
    </p>
    <h3>有什么好处？</h3>
    <p>
      1、增加了类型校验，在开发时可以检测错误，使代码质量更好更健壮<br /><br />
      2、类型一定程度上可以充当文档
    </p>
    <h3>常用的类型</h3>
    <p>
      number，string，Boolean，Object，Array，void，any，unknown，never，null，undefined
      <br />
      任何类型都可以赋值给unknown类型，unknown只能赋值给unknown类型和any类型
    </p>
    <h3>declare</h3>
    <p>
      1、declare 是用来定义全局变量、全局函数、全局命名空间等<br />
      2、declare global 为全局对象 window 增加新的属性
    </p>
    <h3>接口类型定义的两种方式？</h3>
    <p>
      type和interface <br />
      共同点：都可以用来定义对象或者函数的属性，都可以进行拓展 <br />
      不同点： <br />
      1、type可以声明基本类型、联合类型、元组类型<br /><br />
      2、type只能声明一次。多次声明会出现错误，interface声明的变量可以声明
      多个，多个interface会基于规则进行合并。
    </p>
  </PageContent>
</template>
