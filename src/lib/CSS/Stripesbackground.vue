<template>
  <Pagetitle text="条纹背景" />
  <Pagecontent>
    <h3>进度条</h3>
    <Heightcode>
      <pre>
        <code>
{{progress}}

main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.progress-outer {
  width: 60%;
  height: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.progress-enter {
  height: inherit;
  background: rgba(180, 160, 120, 0.2);
}

.progress-bg {
  width: 60%;
  height: inherit;
  border-radius: 6px;
  background: repeating-linear-gradient(
    -45deg,
    #d9cfbb 25%,
    #c3b393 0,
    #c3b393 50%,
    #d9cfbb 0,
    #d9cfbb 75%,
    #c3b393 0
  );
  background-size: 16px 16px;
  animation: panoramic 20s linear infinite;
}

@keyframes panoramic {
  to {
    background-position: 200% 0;
  }
}
        </code>
      </pre>
    </Heightcode>
    <main>
      <div class="progress-outer">
        <div class="progress-enter">
          <div class="progress-bg"></div>
        </div>
        <!-- <span>60%</span> -->
      </div>
    </main>
    <h3>不规则卡片</h3>
    <Heightcode>
      <pre>
        <code>
{{cards}}

.no-rule-card {
  display: flex;
  flex-wrap: wrap;
}

.coupon-card {
  width: 200px;
  height: 120px;
  background-image: radial-gradient(
    circle at 100px -8px,
    transparent 20px,
    #b4a078 21px
  );
}
        </code>
      </pre>
    </Heightcode>
    <div class="no-rule-card">
      <div class="coupon-card"></div>
    </div>
  </Pagecontent>
</template>
<script lang="ts">
export default {
  setup() {
    const progress = `<main>
    <div class="progress-outer">
      <div class="progress-enter">
      <div class="progress-bg">
        </div>
        </div>
        <!-- <span>60%</span> -->
        </div>
</main>`;
    const cards = `
<div class="no-rule-card">
  <div class="coupon-card">
  </div>
</div>`;
    return { progress, cards };
  },
};
</script>
<style lang="less" scoped>
main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.progress-outer {
  width: 60%;
  height: 12px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}
.progress-enter {
  height: inherit;
  background: rgba(180, 160, 120, 0.2);
}
.progress-bg {
  width: 60%;
  height: inherit;
  border-radius: 6px;
  background: repeating-linear-gradient(
    -45deg,
    #d9cfbb 25%,
    #c3b393 0,
    #c3b393 50%,
    #d9cfbb 0,
    #d9cfbb 75%,
    #c3b393 0
  );
  background-size: 16px 16px;
  animation: panoramic 20s linear infinite;
}
@keyframes panoramic {
  to {
    background-position: 200% 0;
  }
}
.no-rule-card {
  display: flex;
  flex-wrap: wrap;
  .coupon-card {
    width: 200px;
    height: 120px;
    background-image: radial-gradient(
      circle at 100px -8px,
      transparent 20px,
      #b4a078 21px
    );
  }
}
</style>
