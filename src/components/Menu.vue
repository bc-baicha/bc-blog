<template>
  <Directory :list="showList.one" />
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
    });

    return {
      showList,
    };
  },
};
</script>
<style lang="less" scoped></style>
