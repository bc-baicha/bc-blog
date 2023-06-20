<template>
  <PageTitle text="JS闭包" />
  <Pagecontent>
    <h4>MDN对闭包的阐述：</h4>
    <Tagtext>
      一个函数和对其周围状态（lexica
      lenvironment，词法环境）的引用捆绑在一起（或者说函数被引用包围）,这样的组合就是闭包（closure）。<br />
      也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。<br />在
      JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。
    </Tagtext>
    <h4>红宝书的阐述：</h4>
    <Tagtext>
      匿名函数经常被认为是闭包(closure
      )，闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。
    </Tagtext>
    <br />
    <strong>example：</strong>
    <Heightcode>
      <pre>
        <code>
var a = 1;
function demo(){
  console.log(a);
}
demo();
//这里的输出结果是 1;
        </code>
      </pre>
    </Heightcode>
    <i>
      这里不难理解，通过JavaScript作用域链的知识就会知道这里的demo函数创建的时候，<br />
      会保存父变量对象到自己的[[scope]]中，而此时的父变量对象就是全局作用域，globalContent.VO，<br />
      而在全局作用域中所以可以访问到a这个变量，并输出值。
    </i>
    <h4>
      那么这里demo函数和函数内部对变量a的引用是否构成了闭包呢？<br />
      答案是：对的 <br />
      在《JavaScript权威指南》中就讲到：从技术的角度讲，所有的JavaScript函数都是闭包。<br />
      ECMAScript中，闭包指的是：
    </h4>
    <Tagtext>
      1、从理论角度：所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，<br />
      &emsp;&ensp;因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。<br /><br />
      2、从实践角度：以下函数才算是闭包：<br />
      &emsp;&ensp;1：即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）<br />
      &emsp;&ensp;2：在代码中引用了自由变量
    </Tagtext>
    <strong>example：</strong>
    <Heightcode>
      <pre>
        <code>
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
    myFunc();
//这里输出的结果是：Mozilla
        </code>
      </pre>
    </Heightcode>
    <span>
      1、首先进入全局代码，创建全局执行上下文，将全局执行上下文压入执行上下文栈中，执行makeFunc函数，创建makeFunc执行上下文，makeFunc执行上下文压入执行上下文栈中
    </span>
    <Heightcode>
      <pre>
        <code>
ECStack.push(makeFunc);

ECStack = [
 makeFuncContent,
 globalContext
];
        </code>
      </pre>
    </Heightcode>
    <span> 2、那么让我们看下此时的作用域链 </span>
    <Heightcode>
      <pre>
        <code>
makeFunc.[[scope]] = [
  globalContent.VO//全局作用域
]

//
makeContent = {
 AO: {
        arguments: {
            length: 0
        },
        name: 'Mozilla'
    },
 Scope: [AO, [[scope]]]
}
        </code>
      </pre>
    </Heightcode>
    <div>
      3、继续执行，makeFunc函数执行完毕，所以makeFunc执行上下文从执行上下文栈中弹出，
    </div>
    <span>
      myFunc函数执行，创建执行上下文，myFunc执行上下文压入执行上下文栈中。
    </span>
    <Heightcode>
      <pre>
        <code>
//执行过程是
ECStack.push(makeFunc);
ECStack.pop(makeFunc);
ECStack.push(myFunc);

ECStack = [
 myFuncContent,
 globalContext
];
        </code>
      </pre>
    </Heightcode>
    <span> 4、再让我们看下此时的作用域链 </span>
    <Heightcode>
      <pre>
        <code>
myFunc.[[scope]] = [
  makeContent.Scope
]
//这里的makeContent.Scope = [makeContet.AO，globalContent.VO]

//所以
myContent = {
 AO: {
        arguments: {
            length: 0
        }
    },
 Scope:[AO，makeContet.AO，globalContent.VO]
}
        </code>
      </pre>
    </Heightcode>
    <p>
      5、就是因为这个作用域链，myFunc 函数依然可以读取到 makeContent.AO
      的值，<br />
      说明当 myFunc 函数引用了 makeContent.AO 中的值的时候，即使 makeContent
      被销毁了，<br />
      但是 JavaScript 依然会让 makeContext.AO 活在内存中，myFunc函数依然可以通过
      myFunc 函数的作用域链找到它，<br />
      正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。
    </p>
    <Tagtext>
      到这里再让我们看一下这句话：<br />

      1、即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）<br />
      2、在代码中引用了自由变量 <br />
      是不是和上面的执行过程一致。
    </Tagtext>
    <h4>闭包的用途：</h4>
    <Tagtext>
      1、可以读取函数内部的变量，想要读取A函数内部的变量，就可以在A函数内部嵌套一个B函数形成闭包，通过B函数我们就可以读取到A函数中想要的变量。<br /><br />
      2、变量的值始终保持在内存中，形成私有化，上面可以看出，就算是函数的执行上下文销毁了，但是如果下面存在对该作用域的引用，JavaScript还是会让函数的AO存在内存中，这时我们通过维护的作用域链，就可以访问到它。
    </Tagtext>
    <h4>使用闭包需要注意的地方：</h4>
    <Tagtext>
      闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，导致内存泄露，<br />
      解决方法：在退出函数之前，将不使用的局部变量全部删除。
    </Tagtext>
    <h3>再次学习闭包：</h3>
    <Tagtext>
      闭包的定义：函数和函数内部能访问到的变量的总和，就是一个闭包。
    </Tagtext>
    <h4>闭包的目的：隐藏变量</h4>
    <Heightcode>
      <pre>
        <code>
function foo(){
  var local = 1
  function bar(){
    local++
    return local
  }
  return bar
}

var func = foo()
func()
        </code>
      </pre>
    </Heightcode>
    <h4>为什么要函数套函数？</h4>
    <div>
      是因为需要局部变量，所以把local放在了函数内部，如果不放在函数的内部，那么local就是全局变量了，就到不到我们想要的效果了。
    </div>
    <h4>为什么要return bar ?</h4>
    <div>
      因为如果不return，我们就无法访问到这个函数了，这里我们把return
      改为window.bar =
      bar也可以的，只要能保证我们在外部可以访问到这个函数就可以。
    </div>
    <h4>什么是隐藏变量？为什么要隐藏变量？</h4>
    下面我们写一个简单的游戏场景，控制游戏角色的等级。
    <Tagtext>
      window.level = 10; //等级为10级 <br />
      这个等级的变量我们设置为全局变量，那么我们在外部都可以修改这个值，这样显然是不合理的，<br />
      我们不能让人能够直接访问到这个变量。
    </Tagtext>
    <h4>此时我们就可以使用闭包：</h4>
    <Heightcode>
      <pre>
        <code>
!function(){

  let level = 10

  window.升级 = function(){
    level += 1
  }

  window.降级 = function(){
    level -= 1
  }

}()
        </code>
      </pre>
    </Heightcode>
    <div>我们把等级level字段设置为局部变量，然后暴露出访问函数，</div>
    <div>
      这样外部就不能够直接访问等级变量，我们想要升级或者降级可以通过暴露的函数来进行操作，就达到了隐藏变量的目的。
    </div>
  </Pagecontent>
</template>
