<template>
  <PageTitle text="多重边框" />
  <Pagecontent>
    <Heightcode>
      <pre>
      <code>
{{divs}}

.multiple {
  padding: 0 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.one {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fafafa;
  margin: 105px 29px;
  box-shadow: 0 0 0 10px #e8e2d6, 0 0 0 20px #e1d9c9, 0 0 0 30px #d9cfbb,
    0 0 0 40px #d2c6ae, 0 0 0 50px #cabca0, 0 0 0 60px #c3b393,
    0 0 0 70px #bba985, 0 0 0 80px #b4a078;
}
.two {
  width: 200px;
  height: 120px;
  background: #efebe9;
  border: 5px solid #b4a078;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
  margin-left: 120px;
}
.three {
  width: 200px;
  height: 120px;
  background: #efebe9;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
  margin-left: 120px;
}
    </code>
  </pre>
    </Heightcode>
    <div class="multiple">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
    </div>
  </Pagecontent>
</template>
<script lang="ts" setup>
const divs = `<div class="multiple">
      <div class="one"></div>
      <div class="two"></div>
      <div class="three"></div>
</div>`;
</script>
<style lang="less" scoped>
.multiple {
  padding: 0 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.one {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fafafa;
  margin: 105px 29px;
  box-shadow: 0 0 0 10px #e8e2d6, 0 0 0 20px #e1d9c9, 0 0 0 30px #d9cfbb,
    0 0 0 40px #d2c6ae, 0 0 0 50px #cabca0, 0 0 0 60px #c3b393,
    0 0 0 70px #bba985, 0 0 0 80px #b4a078;
}
.two {
  width: 200px;
  height: 120px;
  background: #efebe9;
  border: 5px solid #b4a078;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
  margin-left: 120px;
}
.three {
  width: 200px;
  height: 120px;
  background: #efebe9;
  outline: #b4a078 dashed 1px;
  outline-offset: -10px;
  margin-bottom: 20px;
  margin-left: 120px;
}
</style>
