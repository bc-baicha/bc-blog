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
</style>
