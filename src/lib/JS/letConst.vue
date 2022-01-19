<template>
  <Heightcode>
    <pre>
      <code>
function f(x) {
    let x = 100; 
    // Uncaught SyntaxError: Identifier 'x' has already been declared
  }

function g() {
    let x = 100;
    var x = 100; 
    // Uncaught SyntaxError: Identifier 'x' has already been declared
}
      </code>
    </pre>
  </Heightcode>
  <Pagetitle text="这是测试" />
</template>
<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
<style lang="less" scoped></style>
