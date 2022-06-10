<template>
  <Pagetitle text="CSS 例题" />
  <Pagecontent>
    <h3>1、有两个元素，左边元素宽度固定，右边元素宽度自适应，写出实现方法？</h3>
    <Heightcode>
      <pre>
        <code>
&lt;div class="wrap">
    &lt;div>这是左边&lt;/div>
    &lt;div>这是右边&lt;/div>
&lt;/div>

//case1：使用定位
.wrap {
  width: 300px;
  position: relative;
  :nth-child(1) {
    position: absolute;
    width: 100px;
    background-color: rebeccapurple;
  }
  :nth-child(2) {
    margin-left: 100px;
    background-color: salmon;
  }
}

//case2：使用flex布局（推荐使用）
.wrap {
  width: 300px;
  display: flex;
  :nth-child(1) {
    flex: 0 0 100px;
    background-color: rebeccapurple;
  }
  :nth-child(2) {
    flex: 1 0 auto;
    background-color: salmon;
  }
}

//case3：使用float
.wrap {
  width: 300px;
  overflow: hidden;
  :nth-child(1) {
    float: left;
    width: 100px;
    background-color: rebeccapurple;
  }
  :nth-child(2) {
    margin-left: 100px;
    background-color: salmon;
  }
}
        </code>
      </pre>
    </Heightcode>
    <div class="wrap" id="link1">
      <div>这是左边</div>
      <div>这是右边</div>
    </div>
    <h3>2、子元素在父元素内部上下左右都居中，css样式该怎么写？</h3>
    <Heightcode>
      <pre>
        <code>
&lt;div class='father'>
  &lt;div class='child'>&lt;/div>
&lt;/div>
//case1：使用定位
.father {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
  .child {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    background-color: darkcyan;
  }
}

//case2：使用flex布局（推荐使用）
//第一种flex实现
.father {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: red;
  .child {
    width: 50px;
    height: 50px;
    background-color: rebeccapurple;
  }
}
//第二种flex实现
.father {
  display: grid;
  place-items: center;
  width: 100px;
  height: 100px;
  background-color: red;
  .child {
    width: 50px;
    height: 50px;
    background-color: rebeccapurple;
  }
}



//case3：使用绝对定位+transform
.father {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: red;
  .child {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    background-color: rebeccapurple;
  }
}
        </code>
      </pre>
    </Heightcode>
    <div class="father">
      <div class="child"></div>
    </div>
    <h3>3、使用纯CSS创建一个三角形</h3>
    <Heightcode>
      <pre>
        <code>
&lt;div className={styles.triangle}>&lt;/div>

.triangle {
  width: 0px;
  height: 0px;
  border-top: 50px solid transparent;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid #ff0000;
}

 //border: solid 54px;
 //border-color: transparent transparent red transparent;
        </code>
      </pre>
    </Heightcode>
    <div class="triangle"></div>
    <h3>4、CSS属性overflow属性定义溢出元素内容区的内容会如何处理?</h3>
    <Tagtext>
      参数是scroll时候，必会出现滚动条。<br />
      参数是auto时候，子元素内容大于父元素时出现滚动条。<br />
      参数是visible时候，溢出的内容出现在父元素之外。<br />
      参数是hidden时候，溢出隐藏。
    </Tagtext>
    <h3>5、display:inline-block 什么时候会显示间隙？</h3>
    <Tagtext>
      有空格时候会有间隙 解决：移除空格<br />
      margin正值的时候 解决：margin使用负值<br />
      使用font-size时候 解决：font-size:0、letter-spacing、word-spacing
    </Tagtext>
    <h3>6、上下margin重合的问题</h3>
    <div>出现的原因：BFC规范(块级格式化上下文：block formatting context)</div>
    <Tagtext>
      内部的Box会在垂直方向上一个接一个放置。<br />
      Box垂直方向的距离由margin决定，属于同一个BFC的两个相邻Box的margin会发生重叠。
    </Tagtext>
    <Heightcode>
      <pre>
        <code>
//case1：在外面添加一个div，通过改变此div的属性使两个盒子分属于两个不同的BFC，以此来阻止margin重叠
&lt;div class="styles.wrapContent">
	&lt;div class=childOne>第一个&lt;/div>
	&lt;div class=text>&lt;/div>
	&lt;div class=childTwo>第二个&lt;/div>
&lt;/div>

.wrapContent {
  .childOne {
    width: 100px;
    background-color: rebeccapurple;
    margin-bottom: 30px;
  }
  .childTwo {
    width: 100px;
    background-color: saddlebrown;
    margin-top: 30px;
  }
  .text {
    overflow: hidden;
  }
}
//case2：使用flex布局消除（推荐使用）
//case3：将其中一个元素变为行内块元素
        </code>
      </pre>
    </Heightcode>
    <h3>7、opacity和rgba区别？</h3>
    <Tagtext>
      opacity:0 //这里它的子元素的透明度也是0<br />
      background-color: rgba(0, 0, 0, 0);//这里子元素不会受影响，透明度还是1
    </Tagtext>
    <h3>8、css中可以继承的属性和不可继承</h3>
    <Tagtext>
      可继承：font-size, color, font-family<br />
      不可继承：padding, margin, border
    </Tagtext>
    <h3>9、清除浮动</h3>
    <Tagetext>
      clearfix:{ content:'', display:block, clear:both }<br />
      //加入到父元素上，子元素的浮动就会被清除
    </Tagetext>
    <h3>10、盒模型</h3>
    <Tagtext>
      标准盒模型 content-box：宽度==内容的宽度， 高度==内容的高度 ; <br />
      IE盒模型 border-box：宽度==内容的宽度+border+padding,
      高度==内容的高度+border+padding ;
    </Tagtext>
  </Pagecontent>
</template>
<style lang="less" scoped>
.wrap {
  width: 300px;
  display: flex;
  :nth-child(1) {
    flex: 0 0 100px;
    background-color: rgb(170, 53, 53);
  }
  :nth-child(2) {
    flex: 1 0 auto;
    background-color: rgb(31, 109, 31);
  }
}
.father {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
  .child {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    background-color: darkcyan;
  }
}
.triangle {
  width: 0px;
  height: 0px;
  border: solid 50px;
  border-color: transparent transparent yellowgreen transparent;
}
</style>
