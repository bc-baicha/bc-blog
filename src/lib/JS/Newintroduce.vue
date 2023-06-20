<template>
  <PageTitle text="JS 中New的作用" />
  <Pagecontent>
    <h4>MDN上的介绍：</h4>
    <Tagtext>
      new
      运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。</Tagtext
    >
    <h4>接下来使用一个例子说明：</h4>
    <div>
      我们在做一个攻防游戏，在游戏中可以造士兵去进行攻击，下面我们就研究下造兵的过程
    </div>
    <p>一个士兵的属性在计算机中都是一堆数据：</p>
    <Heightcode>
      <pre>
        <code>
士兵 = {
  ID:1,
  兵种:步兵,
  攻击力:20,
  生命值:40,
  移动:function(){//移动的代码},
  死亡:function(){//死亡的代码},
  攻击:function(){//攻击的代码},
}
兵营.制造(士兵);
//这样我们就造好了一个士兵;
        </code>
      </pre>
    </Heightcode>
    <div>
      如果我们需要建造一百个这样的士兵呢？<br />
      循环100次吧！
    </div>
    <Heightcode>
      <pre>
        <code>
let warriores = []; //士兵总数
for (let i = 0; i &lt; 100; i++) {
  士兵 = {
  ID:i,
  兵种:步兵,
  攻击力:20,
  生命值:40,
  移动:function(){//移动的代码},
  死亡:function(){//死亡的代码},
  攻击:function(){//攻击的代码},
  }
  warriores.push(士兵);
}
兵营.批量制造(warriores)
//这样我们就创造了100个士兵;
        </code>
      </pre>
    </Heightcode>
    <div>
      但是我们发现，每个士兵的兵种，攻击力，生命值，移动，死亡，攻击这些属性都是相同的，<br />
      只有ID是不同的，因为每个士兵都有自己的ID，<br />
      但是我们使用循环创建的时候这些代码执行了100次，这就是性能资源的浪费~~
    </div>
    <p>
      这时就要进行代码的优化，我们知道通过原型链可以解决重复创建的问题，<br />
      我们先创建一个士兵的原型，然后让士兵的__proto__指向士兵的原型;
    </p>
    <Heightcode>
      <pre>
        <code>
士兵原型 = {
  兵种:步兵,
  攻击力:20,
  生命值:40,
  移动:function(){//移动的代码},
  死亡:function(){//死亡的代码},
  攻击:function(){//攻击的代码},
}

let warriores = []; //士兵总数

for (let i = 0; i &lt; 100; i++) {
  士兵 = {
  ID:i,
  }
  士兵.__proto__ = 士兵原型; //但是在实际开发中我们是不能这样写的，因为不支持
  warriores.push(士兵);
}

兵营.批量制造(warriores);

        </code>
      </pre>
    </Heightcode>
    <div>可以看出还有优化的空间，使用函数封装下：</div>
    <Heightcode>
      <pre>
        <code>
士兵原型 = {
  兵种:步兵,
  攻击力:20,
  生命值:40,
  移动:function(){//移动的代码},
  死亡:function(){//死亡的代码},
  攻击:function(){//攻击的代码},
}

function 士兵(id){

  let 临时对象 ={};
  临时对象.__proto__ = 士兵原型;
  指定 this = 临时对象;
  临时对象.ID = id;

  return 临时对象;
}

let warriores = []; //士兵总数

for (let i = 0; i &lt; 100; i++) {
  warriores.push(士兵(i));
}

兵营.批量制造(warriores);
        </code>
      </pre>
    </Heightcode>
    <div>使用new来进行创造士兵：</div>
    <Heightcode>
      <pre>
        <code>
士兵原型 = {
  兵种:步兵,
  攻击力:20,
  生命值:40,
  移动:function(){//移动的代码},
  死亡:function(){//死亡的代码},
  攻击:function(){//攻击的代码},
}

function 士兵(id){
  this.ID = id;
}

let warriores = []; //士兵总数

for (let i = 0; i &lt; 100; i++) {
  warriores.push(new 士兵(i));
}

兵营.批量制造(warriores);
        </code>
      </pre>
    </Heightcode>
    <div>从上面的代码我们可以看出new帮我们做了哪些事情:</div>
    <div>1、创建临时对象</div>
    <div>2、绑定原型</div>
    <div>3、指定当前this为临时对象</div>
    <div>4、执行构造函数</div>
    <div>5、返回临时对象</div>
    <h4>这里需要注意constructor</h4>
    <Heightcode>
      <pre>
        <code>
//new 操作为了记录「临时对象是由哪个函数创建的」，
//所以预先给「士兵.prototype」加了一个 constructor 属性：

士兵.prototype = {
  constructor: 士兵
}

//如果你重新对「士兵.prototype」赋值，那么这个 constructor 属性就没了，
所以你应该这么写：
士兵.prototype.兵种 = '炮兵';
士兵.prototype.攻击力 = 25;
士兵.prototype.生命值 = 30;
        </code>
      </pre>
    </Heightcode>
  </Pagecontent>
</template>
