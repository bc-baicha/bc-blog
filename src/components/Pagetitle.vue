<template>
  <div class="page-title">{{ text }}</div>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.page-title {
  position: relative;
  display: flex;
  align-items: center;
  width: 60vw;
  border-bottom: solid 1px #ddd;
  font-weight: bold;
  font-size: 25px;
  padding: 0px 0px 5px 20px;
  margin-top: 10px;
  &::before {
    content: "#";
    width: 10px;
    height: 10px;
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0;
  }
}
.page-title:hover {
  &::before {
    opacity: 1;
    color: #1890ff;
  }
}
</style>
