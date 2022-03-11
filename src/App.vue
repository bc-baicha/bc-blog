<template>
  <router-view />
</template>
<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const show = width <= 500 ? false : true;
    const menuVisible = ref(show);
    provide("width", menuVisible);
    router.afterEach(() => {
      const divEle = document.getElementById("main-content");
      if (divEle) {
        divEle.scrollTo(0, 0);
      }
      if (width <= 550) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
