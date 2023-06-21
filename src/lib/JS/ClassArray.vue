<template>
  <PageTitle text="JavaScript类数组" />
  <PageContent>
    <h3>定义：</h3>
    <TagText>
      可以通过索引访问元素，并且拥有length属性。<br />
      没有数组的其它方法,例如:push，forEach，indexOf等
    </TagText>
    <h4>下面让我们从读写，长度，遍历这三个方面看看：</h4>
    <h4>读写：</h4>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
};

let arr = ['白茶', 23, 'man'];
console.log(foo[0]) //白茶
console.log(arr[0]) //白茶
        </code>
      </pre>
    </HeightCode>
    <h4>长度：</h4>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
  };

let arr = ['白茶', 23, 'man'];
console.log(foo.length) //3
console.log(arr.length) //3
        </code>
      </pre>
    </HeightCode>
    <h4>遍历：</h4>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
  };

let arr = ['白茶', 23, 'man'];

for (let i = 0; i &lt; foo.length; i++) {
  console.log(foo[i])
}

for (let i = 0; i &lt; arr.length; i++) {
  console.log(arr[i])
}

//遍历结果是一样的
        </code>
      </pre>
    </HeightCode>
    <div>以上三个方面都是一样的。</div>
    <h3>那么类数组可以使用数组的方法吗？</h3>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
};
foo.push('添加1')

//报错：Uncaught TypeError: foo.push is not a function
        </code>
      </pre>
    </HeightCode>
    <div>
      显然类数组是不能直接使用数组的方法的，那我们就是想要使用呢？<br />
      既然我们无法直接使用，我们可以借助，Function.all间接调用。
    </div>
    <h4>例如：</h4>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
};
Array.prototype.push.call(foo, '添加1')
console.log(foo) //{0: "白茶", 1: 23, 2: "man", 3: "添加1", length: 4}
        </code>
      </pre>
    </HeightCode>
    <h3>那我们怎样使一个类数组变为数组呢？</h3>
    <div>
      上面我们使用Function.all间接调用数组的方法，这里我们还可以使用它：
    </div>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
  };
let arr = Array.prototype.slice.call(foo)
console.log(arr) //["白茶", 23, "man"]
        </code>
      </pre>
    </HeightCode>
    <TagText>
      首先：foo这个类数组是没有slice这个方法的，Array.prototype.slice.call(foo)这个表达式相当于赋予foo这个对象slice方法。
    </TagText>
    <TagText>
      其次：Array.prototype.slice.call(foo);相当于Array.prototype.slice.call(foo,
      0);是把取一个数组（或者类数组）的子集，并作为一个数组返回。所以当后面的作用对象是一个类数组时，就会把这个类数组对象转换为了一个新的数组。
    </TagText>
    <div>所以上面的代码也等同于下面：</div>
    <HeightCode>
      <pre>
        <code>
let foo = {
    0: '白茶',
    1: 23,
    2: 'man',
    length: 3
};

foo.slice = Array.prototype.slice;
foo.slice();
        </code>
      </pre>
    </HeightCode>
    <h4>下面我们再补充几个转化的方法：</h4>
    <TagText>
      let arr = Array.prototype.slice.call(foo); <br />
      let arr2 = Array.from(foo);
    </TagText>
  </PageContent>
</template>
