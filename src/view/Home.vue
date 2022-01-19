<template>
  <div class="bc-wrap">
    <Topnav />
    <main>
      <img class="bc-home-img" src="../assets/home.gif" alt="" />
      <Playtext text="今天也是元气满满的一天~~" :width="370" />
      <div class="text"><a>简单的记录点东西</a></div>
      <router-link to="/doc" class="btn-grad">Get Started -></router-link>
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Playtext from "../components/Playtext.vue";
export default {
  components: { Topnav, Playtext },
};
</script>
<style lang="less" scoped>
.bc-wrap {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  main {
    margin-top: 4%;
    text-align: center;
    .bc-home-img {
      width: 700px;
      margin-bottom: 4%;
    }
    .text {
      width: 150px;
      // background: rgba(217, 175, 217, 0.3);
      color: white;
      font-size: 18px;
      margin: 0 auto;
      margin-top: 20px;
      padding: 0.3em 1em 0.5em;
      border-radius: 3px;
      // box-shadow: inset 0 0 0.5em #fff;
      animation: shake-baidu 2s ease 0s infinite;
      animation-play-state: paused;
      cursor: default;
    }
    .text:hover {
      animation-play-state: running;
    }
    @keyframes shake-baidu {
      from {
        transform: rotate(0deg);
      }
      4% {
        transform: rotate(5deg);
      }
      12.5% {
        transform: rotate(-5deg);
      }
      21% {
        transform: rotate(5deg);
      }
      29% {
        transform: rotate(-5deg);
      }
      37.5% {
        transform: rotate(5deg);
      }
      46% {
        transform: rotate(-5deg);
      }
      50%,
      to {
        transform: rotate(0deg);
      }
    }
    .btn-grad {
      width: 180px;
      margin: 0 auto;
      margin-top: 40px;
      font-size: 20px;
      background-image: linear-gradient(
        to right,
        #314755 0%,
        #26a0da 51%,
        #314755 100%
      );
      padding: 30px 30px;
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #eee;
      border-radius: 10px;
      display: block;
      text-decoration: none;
    }

    .btn-grad:hover {
      background-position: right center; /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
  }
}
</style>
