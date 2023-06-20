<template>
  <div class="menu_wrap">
    <Directory :list="showList.javascript" />
    <Directory :list="showList.css" />
    <Directory :list="showList.react" />
    <Directory :list="showList.interview" />
  </div>
</template>
<script lang="ts">
import { showList } from "./showList";
import Directory from "./Directory.vue";
export default {
  components: {
    Directory,
  },
  setup() {
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
}
</style>
