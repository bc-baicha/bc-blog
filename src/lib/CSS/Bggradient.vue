<template>
  <Pagetitle text="背景动态渐变色" />
  <Pagecontent>
    <div class="box">Gradient Background Animation</div>
    <Heightcode>
      <pre>
        <code>
&lt;div class="box">Gradient Background Animation&lt;/div>

.box {
  width: 500px;
  height: 500px;
  margin-top: 30px;
  text-align: center;
  line-height: 500px;
  font-family: "montserrat";
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  background-image: linear-gradient(125deg, #4c83ff, #28c76f, #f067b4, #fcff00);
  background-size: 400%;
  animation: bganimation 5s infinite;
}

@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
        </code>
      </pre>
    </Heightcode>
  </Pagecontent>
</template>
<style lang="less" scoped>
.box {
  width: 500px;
  height: 500px;
  margin-top: 30px;
  text-align: center;
  line-height: 500px;
  font-family: "montserrat";
  text-transform: uppercase;
  font-size: 20px;
  color: #fff;
  background-image: linear-gradient(125deg, #4c83ff, #28c76f, #f067b4, #fcff00);
  background-size: 400%;
  animation: bganimation 5s infinite;
}
@keyframes bganimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
