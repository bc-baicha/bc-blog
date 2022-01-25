<template>
  <Pagetitle text="圆与半圆" />
  <Pagecontent>
    <Heightcode>
      <pre>
        <code>
{{divs}}

main {
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.ellipse {
  width: 200px;
  height: 150px;
  background: #b4a078;
  margin-bottom: 60px;
}
.ellipse:nth-of-type(1) {
  width: 300px;
  height: 150px;
  border-radius: 50% / 100% 100% 0 0;
}
.ellipse:nth-of-type(2) {
  width: 150px;
  height: 150px;
  border-radius: 100% 0 0 0;
}
.ellipse:nth-of-type(3) {
  border-radius: 50% / 100% 100% 0 0;
}
.ellipse:nth-of-type(4) {
  width: 100px;
  border-radius: 100% 0 0 0;
}
.ellipse:nth-of-type(5) {
  width: 300px;
  border-radius: 50% / 0 100%;
}
.ellipse:nth-of-type(6) {
  width: 300px;
  border-radius: 50% / 100% 0;
}
        </code>
      </pre>
    </Heightcode>
    <main>
      <div class="ellipse"></div>
      <div class="ellipse"></div>
      <div class="ellipse"></div>
      <div class="ellipse"></div>
      <div class="ellipse"></div>
      <div class="ellipse"></div>
    </main>
  </Pagecontent>
</template>
<script lang="ts">
export default {
  setup() {
    const divs = `<main>
  <div class="ellipse"></div>
  <div class="ellipse"></div>
  <div class="ellipse"></div>
  <div class="ellipse"></div>
  <div class="ellipse"></div>
  <div class="ellipse"></div>
</main>`;
    return { divs };
  },
};
</script>
<style lang="less" scoped>
main {
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.ellipse {
  width: 200px;
  height: 150px;
  background: #b4a078;
  margin-bottom: 60px;
}
.ellipse:nth-of-type(1) {
  width: 300px;
  height: 150px;
  border-radius: 50% / 100% 100% 0 0;
}
.ellipse:nth-of-type(2) {
  width: 150px;
  height: 150px;
  border-radius: 100% 0 0 0;
}
.ellipse:nth-of-type(3) {
  border-radius: 50% / 100% 100% 0 0;
}
.ellipse:nth-of-type(4) {
  width: 100px;
  border-radius: 100% 0 0 0;
}
.ellipse:nth-of-type(5) {
  width: 300px;
  border-radius: 50% / 0 100%;
}
.ellipse:nth-of-type(6) {
  width: 300px;
  border-radius: 50% / 100% 0;
}
</style>
