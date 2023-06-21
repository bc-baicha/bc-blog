<template>
  <PageTitle text="Flex 学习" />
  <PageContent>
    <h3>骰子布局</h3>
    <div class="box">
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.pubilc {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  padding: 10px 10px;
  border-radius: 10px;
  display: flex;
  div {
    width: 30px;
    height: 30px;
    border-radius: 50% 50%;
    background-color: #000;
  }
}
.box {
  .pubilc();
  justify-content: space-between;
  :nth-child(2) {
    align-self: flex-end;
  }
}
        </code>
      </pre>
    </HeightCode>
    <div class="box2">
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.box2 {
  .pubilc();
  :nth-child(2) {
    align-self: center;
  }
}
        </code>
      </pre>
    </HeightCode>
    <div class="box3">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.box3 {
  .pubilc();
  :nth-child(2) {
    align-self: center;
  }
  :nth-child(3) {
    align-self: flex-end;
  }
}
        </code>
      </pre>
    </HeightCode>
    <div class="box4">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.box4 {
  .pubilc();
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
}
        </code>
      </pre>
    </HeightCode>
    <div class="box5">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.box5 {
  .pubilc();
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
}
        </code>
      </pre>
    </HeightCode>
    <div class="box6">
      <div>1</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <HeightCode>
      <pre>
        <code>
.box6 {
  width: 800px;
  height: 100px;
  padding: 10px 10px;
  background-color: #ccc;
  overflow-y: auto;
  display: flex;
  div {
    flex: 0 0 100px;
    margin: 0 10px;
    background-color: #fff;
  }
  :nth-child(1) {
    flex-grow: 1;
    text-align: right;
  }
  div:nth-of-type(2) {
    flex-shrink: 0; //空间不足，是否缩放，0不缩放
    background-color: red;
  }
}
        </code>
      </pre>
    </HeightCode>
  </PageContent>
</template>
<style lang="less" scoped>
@import "./flexstudy.less";
</style>
