<template>
  <div class="layout">
    <Topnav :showColor="true" />
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
};
</script>
<style lang="less" scoped>
.layout {
  // display: flex;
  // flex-direction: column;
}
</style>
