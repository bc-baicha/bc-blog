<template>
  <div class="menu_wrap">
    <Directory :list="showList.one" />
    <Directory :list="showList.two" />
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import Directory from "./Directory.vue";
export default {
  components: {
    Directory,
  },
  setup() {
    const showList = reactive({
      one: {
        name: "这是目录",
        show: false,
        data: [
          {
            name: "第一第一",
            path: "/doc/one",
          },
          {
            name: "第二第二",
            path: "/doc/two",
          },
        ],
      },
      two: {
        name: "这是目录",
        show: false,
        data: [
          {
            name: "第一第一",
            path: "/doc/three",
          },
        ],
      },
    });

    return {
      showList,
    };
  },
};
</script>
<style lang="less" scoped>
.menu_wrap {
  height: calc(100vh - 80px);
  box-shadow: 5px 0px 5px rgba(#333, 0.1);
  overflow: scroll;
  padding-left: 3px;
  &::-webkit-scrollbar {
    width: 2px;
    background: white;
  }
  &::-webkit-scrollbar-corner, /* 滚动条角落 */
&::-webkit-scrollbar-thumb,
&::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar-corner,
  &::-webkit-scrollbar-track {
    /* 滚动条轨道 */
    background-color: #fff;
    // box-shadow: inset 0 0 1px rgba(180, 160, 120, 0.5);
  }
  &::-webkit-scrollbar-thumb {
    /* 滚动条手柄 */
    background-color: #00adb5;
  }
}
</style>
