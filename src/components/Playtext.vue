<template>
  <div class="box_wrap">
    <div :style="{ width: `${width}px` }" class="introduce">{{ text }}</div>
    <span class="point">_</span>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 100,
    },
  },
};
</script>
<style lang="less" scoped>
.box_wrap {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.introduce {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  font-size: 30px;
  font-weight: bold;
  animation: typing 1s steps(10, end) 1;
  color: #003973;
  text-shadow: 1px 1px rgba(0, 173, 181, 0.2882),
    2px 2px rgba(0, 173, 181, 0.2882), 3px 3px rgba(0, 173, 181, 0.2882),
    4px 4px rgba(0, 173, 181, 0.2882);
}
.point {
  margin-left: 5px;
  font-size: 2.3rem;
  font-weight: 800;
  color: #1890ff;
  animation: pointMove 1s linear infinite;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes pointMove {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
