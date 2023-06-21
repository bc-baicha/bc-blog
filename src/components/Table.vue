<template>
  <table class="TableVue">
    <tbody>
      <slot />
    </tbody>
  </table>
</template>
<style lang="less">
.TableVue {
  border-collapse: collapse;
  background-color: #ebebeb;
  table,
  td,
  th {
    border: 1px solid #ccc;
  }
  th {
    min-width: 300px;
    padding: 15px 5px;
    white-space: pre-wrap;
    text-align: center;
    vertical-align: middle;
  }
  td {
    padding: 15px 15px;
    width: 500px;
    white-space: pre-wrap;
    text-align: left;
    vertical-align: middle;
  }
}
</style>
