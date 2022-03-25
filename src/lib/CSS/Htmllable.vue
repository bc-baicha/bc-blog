<template>
  <Pagetitle text="你不知道的html" />
  <Pagecontent>
    <h3>1、input标签：输入验证</h3>
    <p>html提供的原生检验方式</p>
    <div v-viewer>
      <img src="../../assets/input.png" alt="" />
    </div>
    <h3>meta标签：自动跳转/刷新</h3>
    <Tagtext>
      &lt;meta http-equiv="Refresh" content="5; URL=page2.html" >
    </Tagtext>
    <p>
      上面的代码会在 5s 之后自动跳转到同域下的 page2.html 页面。要实现 PPT
      自动播放的功能，只需要在每个页面的 meta 标签内设置好下一个页面的地址即可。
    </p>
    <Tagtext> &lt;meta http-equiv="Refresh" content="60" > </Tagtext>
    <p>
      另一种场景，比如每隔一分钟就需要刷新页面的大屏幕监控，也可以通过 meta
      标签来实现，只需去掉后面的 URL 即可：
    </p>
    <div>
      需要注意的是：刷新和跳转操作是不可取消的，所以对刷新时间间隔或者需要手动取消的，还是推荐使用
      JavaScript
      定时器来实现。但是，如果只是想实现页面的定时刷新或跳转（比如某些页面缺乏访问权限，在
      x 秒后跳回首页这样的场景）建议可以实践下 meta 标签的用法。
    </div>
    <h3>3. title 标签：消息提醒</h3>
    <div>
      下面代码中，通过定时修改 title 标签内容，模拟了类似消息提醒的闪烁效果：
    </div>
    <Heightcode>
      <pre>
        <code>
let count = 5;
let num = ref(0);
const timer = setInterval(() => {
  num = num + 1;
  count--;
  if (count &lt; 0) {
    clearInterval(timer);
    return;
  }
  document.title = `新消息(${num})测试`;
}, 2000);
        </code>
      </pre>
    </Heightcode>
    <div>title文字滚动效果：</div>
    <Heightcode>
      <pre>
        <code>
setInterval(function () {
    var tag = document.getElementById("title"); //根据id获取元素,要给title标签设置id
    var content = tag.innerText; // 获取title标签的文本内容
    var firstStr = content.charAt(0); // 获取第一个字
    var surplue = content.substring(1, content.length); // 删除第一个字
    var new_content = surplue + firstStr; // 把第一个字加到最后面
    tag.innerText = new_content;
}, 250);
        </code>
      </pre>
    </Heightcode>
    <h3>4.script 标签：调整加载顺序提升渲染速度</h3>
    <p>
      由于浏览器的底层运行机制，渲染引擎在解析 HTML 时，若遇到 script
      标签引用文件，则会暂停解析过程，同时通知网络线程加载文件，文件加载后会切换至
      JavaScript
      引擎来执行对应代码，代码执行完成之后切换至渲染引擎继续渲染页面。
    </p>
    <div>为了减少这些时间损耗，可以借助 script 标签的 3 个属性来实现。</div>
    <ul>
      <li>
        1、async属性：为了减少这些时间损耗，可以借助 script 标签的 3
        个属性来实现。
      </li>
      <li>
        2、defer属性：立即请求文件，但不阻塞渲染引擎，等到解析完 HTML
        之后再执行文件内容。
      </li>
      <li>
        3、HTML5标准type属性：对应值为“module”。让浏览器按照 ECMA Script 6
        标准将文件当作模块进行解析，默认阻塞效果同 defer，也可以配合 async
        在请求完成后立即执行。
      </li>
    </ul>
    <h3>5.link 标签：通过预处理提升渲染速度</h3>
    <ul>
      <li>
        1、dns-prefetch：当 link 标签的 rel
        属性值为“dns-prefetch”时，浏览器会对某个域名预先进行 DNS
        解析并缓存。这样，当浏览器在请求同域名资源的时候，能省去从域名查询 IP
        的过程，从而减少时间损耗。下图是淘宝网设置的 DNS 预解析。
      </li>
      <li>
        2、preconnect：让浏览器在一个 HTTP
        请求正式发给服务器前预先执行一些操作，这包括 DNS 解析、TLS 协商、TCP
        握手，通过消除往返延迟来为用户节省时间。
      </li>
      <li>
        3、prefetch/preload：两个值都是让浏览器预先下载并缓存某个资源，但不同的是，prefetch
        可能会在浏览器忙时被忽略，而 preload 则是一定会被预先下载。
      </li>
      <li>
        4、prerender：浏览器不仅会加载资源，还会解析执行页面，进行预渲染。
      </li>
    </ul>
    <div v-viewer>
      <img src="../../assets/link.png" alt="" />
    </div>
    <h3>6.picture标签：响应式图像</h3>
    <p>
      picture标签可以根据屏幕匹配的不同尺寸显示不同图片，如果没有匹配到或浏览器不支持
      picture 属性则使用 img 元素：
    </p>
    <Tagtext>
      &lt;picture><br />
      &lt;source media="(min-width: 968px)" srcset="large_img.jpg"/><br />
      &lt;source media="(min-width: 360px)" srcset="small_img.jpg" /><br />
      &lt;img src="default_img.jpg" alt="avatar" /> &lt;/picture><br />
    </Tagtext>
    <h3>7.input标签：颜色选择器</h3>
    <p>
      可以通过value给颜色选择器设置初始值，也可以通过value属性获取颜色选择器的颜色。
    </p>
    <input type="color" id="color-picker" name="color-picker" value="#e66465" />
    <h3>8.base 标签：在新标签页打开</h3>
    <div>
      我们可以将base元素的target属性设置为_black，这样当用户单击链接时，它始终会在新选项卡中打开。如果想避免用户无意中离开某个页面，这样做会很有用。
    </div>
    <Heightcode>
      <pre>
        <code>
&lt;head>
   &lt;base target="_blank" />
&lt;/head>

&lt;div>
  &lt;a href="https://www.baidu.com/">百度一下&lt;/a>
&lt;/div>
        </code>
      </pre>
    </Heightcode>
    <h3>9.placeholder 样式</h3>
    <p>可以使用::placeholder CSS 选择器更改占位符文本的样式</p>
    <input class="test" type="text" placeholder="测试1" /><br />
    <input type="text" placeholder="测试2" />
    <Heightcode>
      <pre>
        <code>
&lt;input class="test" type="text" placeholder="测试1" />
&lt;input type="text" placeholder="测试2" />    

.test::placeholder {
  color: red;
}    
        </code>
      </pre>
    </Heightcode>
  </Pagecontent>
</template>
<style lang="less" scoped>
.test::placeholder {
  color: red;
}
</style>
