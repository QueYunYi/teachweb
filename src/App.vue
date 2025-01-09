<template>
  <div id="app">
    <h1>智慧助教</h1>
    <router-view /> <!-- 根据路由显示不同的页面 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 全局样式 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #42b983; /* 标题颜色 */
}
</style>