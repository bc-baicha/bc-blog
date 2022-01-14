<template>
  <div class="bc-wrap">
    <Topnav />
    <main>
      <img class="bc-home-img" src="../assets/home.gif" alt="" />
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="less" scoped>
.bc-wrap {
  width: 100%;
  height: 100vh;
  background-color: #d9afd9;
  background-image: linear-gradient(0deg, #d9afd9 0%, #97d9e1 100%);
  main {
    margin-top: 20px;
    text-align: center;
    .bc-home-img {
      width: 700px;
    }
  }
}
</style>
