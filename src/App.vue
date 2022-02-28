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
      document.getElementById("main-content").scrollTo(0, 0);
      if (width <= 550) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
