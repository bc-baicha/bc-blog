<template>
  <div class="bc-wrap">
    <Topnav />
    <main>
      <img class="bc-home-img" src="../assets/home.gif" alt="" />
      <Playtext text="今天也是元气满满的一天~~" />
      <div class="text"><a>简单的记录点东西</a></div>
      <div @click="onPush" class="btn-grad">Get Started -></div>
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { router } from "../router";
export default {
  components: { Topnav },
  setup() {
    const onPush = () => {
      const showKey = localStorage.getItem("showKey");
      if (!showKey) {
        localStorage.setItem("showKey", "JavaScript");
      }
      router.replace("/doc");
    };
    return { onPush };
  },
};
</script>
<style lang="less" scoped>
@import "./home.less";
</style>
