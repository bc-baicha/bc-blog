<template>
  <div class="layout">
    <ul>
      <li>
        <!-- <router-link to="/doc/doctwo">这是doctwo</router-link> -->
      </li>
    </ul>
    <main>
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style lang="less" scoped>
.layout {
  display: flex;
  flex-direction: column;
}
</style>
