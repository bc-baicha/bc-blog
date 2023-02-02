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
    <h3>文字渐变色</h3>
    <div class="textColor">文字渐变色</div>
    <heightcode>
      <pre>
        <code>
&lt;div class="textColor">文字渐变色&lt;/div>

.textColor {
  width: 200px;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    #4c83ff,
    #28c76f,
    #f067b4,
    #fcff00
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
        </code>
      </pre>
    </heightcode>
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

.textColor {
  width: 200px;
  font-weight: bold;
  background-image: linear-gradient(
    to right,
    #4c83ff,
    #28c76f,
    #f067b4,
    #fcff00
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
