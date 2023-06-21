<template>
  <div class="page-title">
    <PlayText :text="text" toColor="#1E2AD2" endColor="#FFA6B7" />
  </div>
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
    left: 0%;
    top: 30%;
    transform: translate(-0%, -50%);
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
