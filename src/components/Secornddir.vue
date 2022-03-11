<template>
  <div @click="onShowchildren" class="title">
    {{ item?.name }}
    <svg
      class="dir-point"
      :style="showChildren ? { transform: 'rotate(90deg)' } : ''"
    >
      <use xlink:href="#icon-xiajiantou" />
    </svg>
  </div>
  <div
    :class="showChildren ? 'show-dir-wrap' : 'hid-dir-wrap'"
    ref="childrenHeight"
  >
    <div v-for="(item, i) in item?.children" :key="i" class="dir_wrap">
      <router-link @click="changePath" :to="`/doc${item.path}`">{{
        item.name
      }}</router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    item: {
      type: Object,
      default: {},
    },
    onChange: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    const { item, onChange } = props;
    const showName = localStorage.getItem("childrenName");
    const showChildren = ref(showName === item?.name);
    const childrenHeight = ref<HTMLDivElement>(null);
    const onShowchildren = () => {
      showChildren.value = !showChildren.value;
      if (showChildren.value) {
        let num = item.children.length;
        childrenHeight.value.style.height = num * 58 + "px";
      } else {
        childrenHeight.value.style.height = 0 + "px";
      }
    };
    const changePath = () => {
      onChange();
      localStorage.setItem("childrenName", item.name);
    };
    return {
      showChildren,
      childrenHeight,
      onShowchildren,
      changePath,
    };
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  height: 30px;
  padding-left: 30px;
  font-weight: bold;
  cursor: pointer;
}
.dir-point {
  width: 15px;
  height: 15px;
  margin-left: 5px;
  transition: all 0.25s;
}
.show-dir-wrap {
  width: 100%;
}
.hid-dir-wrap {
  width: 100%;
  height: 0px;
  transition: all 0.25s;
  overflow: hidden;
}
a {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  text-decoration: none;
  color: #2c3e50;
  margin: 5px 0px;
  font-size: 0.9em;
  font-weight: 400;
}
a:hover {
  background-color: #e6f7ff;
  color: #1890ff;
}
.router-link-active {
  color: #1890ff;
  background-color: #e6f7ff;
  &::after {
    content: "";
    display: block;
    animation: bdrolate 0.8s;
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: 48px;
    background-color: #1890ff;
  }
}
@keyframes bdrolate {
  0% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(0deg);
  }
}
</style>
