<template>
  <Topnav :showColor="true" />
  <div class="layout">
    <Menu />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import Menu from "../components/Menu.vue";
export default {
  components: {
    Topnav,
    Menu,
  },
};
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  main {
    flex-grow: 1;
    max-height: calc(100vh - 90px);
    overflow: auto;
    margin: 5px 0;
    padding-left: 15px;
  }
}
</style>
