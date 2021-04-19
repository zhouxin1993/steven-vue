import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Main from "../views/person";
import Login from "../views/Login";
import ListC from "../views/Task";
import Profile from "../views/Profile";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: { name: 'login' }
      // component: HelloWorld
    },
    {
      path: "/loginSuccess",
      component: Profile,
      redirect: { name: 'main' },
      children: [
        {
          path: "/user/profile",
          name:"main",
          component: Main,
        },
        {
          path: "/user/list",
          name:"list",
          component: ListC,
        },
      ]
    },
    {
      path: "/login", // 访问路径
      name: "login",
      component: Login // 组件
    }
  ]
})
