<template>
  <Pagetitle text="Grid 学习" />
  <Pagecontent>
    <h3>Grid 的布局属性</h3>
    <Tagtext>
      一类定义在容器上面，称为容器属性；另一类定义在项目上面，称为项目属性。
    </Tagtext>
    <h4>1、display 属性</h4>
    <Tagtext
      >display: grid
      指定一个容器采用网格布局。默认情况下，容器元素都是块级元素，但也可以设成行内元素。
      display: inline-grid;<br /><br />
      注意，设为网格布局以后，容器子元素（项目）的float、display:
      inline-block、display:
      table-cell、vertical-align和column-*等设置都将失效。
    </Tagtext>
    <h4>2、grid-template-columns 属性，grid-template-rows 属性</h4>
    <p>case1:</p>
    <div class="container">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <p>case2:</p>
    <div class="container2">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.pubilcDiv {
  div {
    margin: 0px 0px 2px 2px;
    background-color: green;
  }
}
.container {
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
  .pubilcDiv();
}
.container2 {
  display: grid;
  grid-template-columns: 50px 50px 50px;
  grid-template-rows: 50px 50px;
  .pubilcDiv();
}     
        </code>
      </pre>
    </Heightcode>
    <h4>1.repeat()</h4>
    <div>
      repeat()接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。
    </div>
    <p>case1：这样定义的就是三行三列，每一行每一列所占据的都是三分之一。</p>
    <div class="container3">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <p>case2：//把3种设置乘以2 6列 2行</p>
    <div class="container4">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container3 {
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(3, 33.3%);
  .pubilcDiv();
}
.container4 {
  display: grid;
  grid-template-columns: repeat(2, 100px 20px 80px); //2*3种设置  6列
  grid-template-rows: repeat(2, 100px);
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h4>2.auto-fill 关键字</h4>
    <div>
      有时，单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充。
    </div>
    <div class="container5">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container5 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: 50px 50px;
  .pubilcDiv();
}        
        </code>
      </pre>
    </Heightcode>
    <h4>3.fr关键字</h4>
    <div>比例关系：如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。</div>
    <div class="container6">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container6 {
  display: grid;
  grid-template-columns: 100px 2fr 1fr;
  grid-template-rows: 50px 50px;
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h3>4.minmax()</h3>
    <div>
      minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值
    </div>
    <div class="container7">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container7 {
  display: grid;
  grid-template-columns: 3fr 3fr minmax(50px, 1fr);
  grid-auto-rows: 50px 50px;
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h3>5.auto关键字</h3>
    <div>自适应填充宽度</div>
    <div class="container8">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <h3>6.grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性</h3>
    <div>
      row-gap属性设置行与行的间隔（行间距），column-gap属性设置列与列的间隔（列间距）。
    </div>
    <div class="container9">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container9 {
  display: grid;
  grid-template-columns: 100px auto 100px;
  // row-gap: 10px; //行间距
  // column-gap: 5px; // 列间距
  grid-gap: 10px 5px; //如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h3>7.grid-auto-flow 属性</h3>
    <div>
      划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行。这个顺序由grid-auto-flow属性决定，默认值是row，即"先行后列"。也可以将它设成column，变成"先列后行"。
    </div>
    <div class="container10">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <h3>8.dense属性</h3>
    <div>
      这个值还可以设成row dense和column
      dense。这两个值主要用于，某些项目指定位置以后，剩下的项目怎么自动放置。尽可能紧密填满，尽量不出现空格。
    </div>
    <div class="container11">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container11 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row dense;
  :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  :nth-child(2) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .pubilcDiv();
}   
        </code>
      </pre>
    </Heightcode>
    <h3>9.grid-auto-columns 属性，grid-auto-rows 属性</h3>
    <div>
      有时候，一些项目的指定位置，在现有网格的外部。比如网格只有3列，但是某一个项目指定在第5行。这时，浏览器会自动生成多余的网格，以便放置项目。<br />
      grid-auto-columns属性和grid-auto-rows属性用来设置，浏览器自动创建的多余网格的列宽和行高。它们的写法与grid-template-columns和grid-template-rows完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高。
    </div>
    <div class="container12">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <h3>10.grid-area 属性</h3>
    <div>grid-area属性指定项目放在哪一个区域。</div>
    <div class="container15">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container15 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-template-areas:
    "a b c"
    "d e f"
    "g h i";
  :nth-child(1) {
    grid-area: e;
  }
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h3>case1:</h3>
    <div class="container13">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container13 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  :nth-child(1) {
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .pubilcDiv();
}
        </code>
      </pre>
    </Heightcode>
    <h3>case2:</h3>
    <div class="container14">
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="item">
        {{ item }}
      </div>
    </div>
    <Heightcode>
      <pre>
        <code>
.container14 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  :nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  // grid-column: 1 / 3;
  // grid-row: 2 / 4;
  }
  .pubilcDiv();
}    
        </code>
      </pre>
    </Heightcode>
  </Pagecontent>
</template>
<style lang="less" scoped>
@import "./girdstudy.less";
</style>
