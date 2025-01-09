import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Student from 'd:/teach/education-system/src/views/Student.vue';
import Teacher from 'd:/teach/education-system/src/views/Teacher.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/student',
    name: 'Student',
    component: Student,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('role') !== 'student') {
        return next('/');
      }
      next();
    },
  },
  {
    path: '/teacher',
    name: 'Teacher',
    component: Teacher,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('role') !== 'teacher') {
        return next('/');
      }
      next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

