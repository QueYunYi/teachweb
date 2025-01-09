<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="login-container">
    <h1>智慧助教登录</h1>

    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">用户名</label>
        <input type="text" v-model="username" id="username" required />
      </div>

      <div>
        <label for="password">密码</label>
        <input type="password" v-model="password" id="password" required />
      </div>

      <div>
        <label for="role">身份</label>
        <select v-model="role" id="role" required>
          <option value="student">学生</option>
          <option value="teacher">教师</option>
        </select>
      </div>

      <button type="submit">登录</button>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: '',
      role: 'student', // 默认角色为学生
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      try {
        // 发送登录请求
        const response = await axios.post('/auth/login/', {
          username: this.username,
          password: this.password,
        });

        // 登录成功后，根据角色跳转到不同的页面
        if (response.data.message) {
          // 存储用户名和角色信息，方便后续请求
          localStorage.setItem('username', this.username);
          localStorage.setItem('role', this.role);

          // 跳转到学生或教师页面
          this.$router.push(this.role === 'student' ? '/student' : '/teacher');
        }
      } catch (error) {
        // 处理错误
        if (error.response && error.response.data) {
          this.errorMessage = error.response.data.message || '登录失败，请重试';
        } else {
          this.errorMessage = '网络错误，请稍后再试';
        }
      }
    },
  },
};
</script>

<style scoped>
/* 可以根据需要修改样式 */
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

form div {
  margin-bottom: 12px;
}

form label {
  display: block;
}

form input, form select {
  width: 100%;
  padding: 8px;
  margin-top: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
