<template>
  <div class="box_wrap">
    <div :style="{ width: `${widthes * 30}px` }" class="introduce">
      {{ text }}
    </div>
    <span class="point">_</span>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
    toColor: {
      type: String,
      default: "#784BA0",
    },
    endColor: {
      type: String,
      default: "#2B86C5",
    },
  },
  setup(props) {
    const { toColor, endColor, text } = props;
    const toColores = toColor;
    const endColores = endColor;
    let widthes = computed(() => {
      let letterLength = text.replace(/[^a-zA-Z]/g, "").length;
      return text.length - letterLength + Math.ceil(letterLength / 2);
    });
    return { toColores, endColores, widthes };
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
  color: transparent;
  // text-shadow: 1px 1px v-bind(colores), 2px 2px v-bind(colores),
  //   3px 3px v-bind(colores), 4px 4px v-bind(colores);
  background-image: linear-gradient(
    160deg,
    v-bind(toColores) 0%,
    v-bind(endColores) 100%
  );
  -webkit-background-clip: text;
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
