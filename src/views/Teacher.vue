<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h1>教师功能页面</h1>
      <p>欢迎，{{ username }}！</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: localStorage.getItem('username') || '教师',
      };
    },
  };
  </script>
  