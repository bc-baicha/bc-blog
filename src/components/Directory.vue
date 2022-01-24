<template>
  <aside v-if="list?.name" class="dir-aside">
    <h3 @click="onShowList">
      {{ list.name }}
      <svg
        class="dir-point"
        :style="show ? { transform: 'rotate(90deg)' } : ''"
      >
        <use xlink:href="#icon-xiajiantou" />
      </svg>
    </h3>
    <div :class="show ? 'show-dir-wrap' : 'hid-dir-wrap'" ref="heightContent">
      <div v-for="(item, i) in list.data" :key="i">
        <router-link @click="localStorageSet" :to="item.path">{{
          item.name
        }}</router-link>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    list: {
      type: Object,
      default: {},
    },
  },
  setup(props) {
    const { list } = props;
    const showKey = localStorage.getItem("showKey");
    const show = ref(showKey === list.key);
    const heightContent = ref<HTMLDivElement>(null);
    const localStorageSet = () => {
      localStorage.setItem("showKey", list.key);
    };
    const onShowList = () => {
      show.value = !show.value;
      if (show.value) {
        heightContent.value.style.height = list.data.length * 58 + "px";
      } else {
        heightContent.value.style.height = 0 + "px";
      }
    };
    return {
      show,
      onShowList,
      heightContent,
      localStorageSet,
    };
  },
};
</script>
<style lang="less" scoped>
.dir-aside {
  width: 14vw;
  min-width: 200px;
  overflow-x: auto;
  h3 {
    display: flex;
    align-items: center;
    margin: 10px 0px;
    padding-left: 20px;
    cursor: pointer;
    .dir-point {
      width: 15px;
      height: 15px;
      margin-left: 5px;
      transition: all 0.25s;
    }
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
