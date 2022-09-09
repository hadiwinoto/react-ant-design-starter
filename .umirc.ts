import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'React Ant Design',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      name: 'Access',
      path: '/access',
      component: './Access',
    },
    {
      name: ' Starter Page',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'npm',
});
