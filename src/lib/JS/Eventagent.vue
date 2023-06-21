<template>
  <PageTitle text="事件代理-应用场景" />
  <PageContent>
    <h3>一、是什么？</h3>
    <ul>
      <li>
        1、事件代理，俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素
      </li>
      <li>
        2、事件流都会经过三个阶段：捕获阶段 -> 目标阶段 ->
        冒泡阶段，而事件委托就是在冒泡阶段完成的。
      </li>
      <li>
        3、事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素。
      </li>
      <li>
        4、当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素绑定事件，然后在外层元素上执行函数
      </li>
    </ul>
    <h4>举个例子：</h4>
    <ul>
      <li>比如一个宿舍六个人，快递同时到达了，一种方法就是一个一个的去取</li>
      <li>
        还有一种方法是把这件事委托给宿舍长，让他一个人去拿所有快递，然后根据收件人的姓名分发给每个人。
      </li>
      <li>
        在这里，取快递就是一个事件，每个同学指的就是需要响应事件的DOM元素，而出去统一拿取快递的宿舍长就是代理的元素。
      </li>
      <li>
        所以真正绑定事件的是这个元素，按照收件人分发快递的过程就是事件执行中，需要判断当前响应的事件应该分配到被代理元素中的哪一个或者哪几个。
      </li>
    </ul>
    <h3>二、应用场景</h3>
    <div>
      如果我们有一个list列表，列表之中有很多列表项，我们需要在点击列表项时，响应一个事件。
    </div>
    <HeightCode>
      <pre>
        <code>
&lt;ul id="list">
  &lt;li>item 1&lt;/li>
  &lt;li>item 2&lt;/li>
  &lt;li>item 3&lt;/li>
  ......
  &lt;li>item n&lt;/li>
&lt;/ul>
        </code>
      </pre>
    </HeightCode>
    <p>如果给每个列表项都一一绑定一个函数，那么对于内存的消耗是非常大的。</p>
    <HeightCode>
      <pre>
        <code>
//获取到所有的目标元素
const lis = document.getElementsByTagName("li");

//给每个元素添加点击事件
for (let index = 0; index &lt; lis.length; index++) {
  lis[index].onclick = function (e) {
    console.log(e.target.innerHTML);
  };
}
        </code>
      </pre>
    </HeightCode>

    <div>
      这时候就可以事件委托，把点击事件绑定在父级元素ul上面，然后执行事件的时候再去匹配目标元素
    </div>
    <HeightCode>
      <pre>
      <code>
// 给父层元素绑定事件
document.getElementById('list').addEventListener('click', function (e) {
    // 兼容性处理
    var event = e || window.event;
    var target = event.target || event.srcElement;
    console.log(target.innerHTML);
});
      </code>
    </pre>
    </HeightCode>
    <ul>
      <li>如果列表项不多，我们可以给每个列表项都绑定一个事件。</li>
      <li>
        但是如果用户能够随时动态的增加或者去除列表项元素，那么在每一次改变的时候都需要重新给新增的元素绑定事件，给即将删去的元素解绑事件
      </li>
      <li>
        如果用了事件委托就没有这种麻烦了，因为事件是绑定在父层的，和目标元素的增减是没有关系的，执行到目标元素是在真正响应执行事件函数的过程中去匹配的
      </li>
    </ul>
    <h3>举个例子：点击input可以动态添加元素</h3>
    <HeightCode>
      <pre>
        <code>
&lt;h1 id="btn">点击&lt;/h1>
&lt;ul id="hhh">
  &lt;li>item 1&lt;/li>
  &lt;li>item 2&lt;/li>
  &lt;li>item 3&lt;/li>
  &lt;li>item 4&lt;/li>
&lt;/ul>

let num = 4;
const onadd = document.getElementById("btn");
const oLi = document.getElementById("hhh");

onadd.addEventListener("click", function () {
  num++;
  const li = document.createElement("li");
  li.innerHTML = `item ${num}`;
  oLi.appendChild(li);
});

oLi.addEventListener("click", function (e) {
  const target = e.target || e.srcElement;
  console.log(target.innerHTML);
});
        </code>
      </pre>
    </HeightCode>
    <div>
      可以看到使用事件委托，在动态绑定事件的情况下是可以减少很多重复工作。
    </div>
    <p>
      适合事件委托的事件有：click，mousedown，mouseup，keydown，keyup，keypress
    </p>
    <div>从上面应用场景中，我们就可以看到使用事件委托存在两大优点：</div>
    <ul>
      <li>1、减少整个页面所需的内存，提升整体性能</li>
      <li>2、减少整个页面所需的内存，提升整体性能</li>
    </ul>
    <p>但是使用事件委托也是存在局限性：</p>
    <ul>
      <li>1、focus、blur这些事件没有事件冒泡机制，所以无法进行委托绑定事件</li>
      <li>
        2、mousemove、mouseout这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的
      </li>
    </ul>
  </PageContent>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
export default {
  setup() {
    const num = ref(4);
    onMounted(() => {
      const onadd = document.getElementById("btn");
      const oLi = document.getElementById("hhh");
      onadd.addEventListener("click", function () {
        num.value = num.value + 1;
        const li = document.createElement("li");
        li.innerHTML = `item ${num.value}`;
        oLi.appendChild(li);
      });
      oLi.addEventListener("click", function (e) {
        const target = e.target || e.srcElement;
        console.log(target.innerHTML);
      });
    });
  },
};
</script>
