<template>
  <div class="bc-topnav">
    <div class="left" @click="onRouterHome">
      <svg>
        <use xlink:href="#icon-home"></use>
      </svg>
    </div>
    <div>
      <a target="_blank" href="https://bc-baicha.github.io/baicha-ui-website/#/"
        >BC-UI</a
      >
      <a target="_blank" href="https://github.com/bc-baicha/bc-blog">Github</a>
    </div>
  </div>
</template>
<script lang="ts">
import { router } from "../router";
export default {
  setup() {
    const onRouterHome = () => {
      router.push("/");
    };
    return {
      onRouterHome,
    };
  },
};
</script>
<style lang="less" scoped>
.bc-topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 100px;
  box-shadow: 0 5px 5px rgba(#333, 0.1);
  z-index: 10;
  .left {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    margin-right: 20px;
  }
  a:hover {
    color: #1890ff;
  }
}
</style>
