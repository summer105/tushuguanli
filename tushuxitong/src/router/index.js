import Vue from 'vue'
import Router from 'vue-router'
import mainnav from '@/components/mainnav'
import home from '@/components/home'
import evencreate from '@/components/even/evencreate'
import evenlist from '@/components/even/evenlist'
import yhguanli from '@/components/xitongguanli/yhguanli'
import bookguanli from '@/components/xitongguanli/bookguanli'
import denglu from '@/components/denglu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
      // children: [
      //   {
      //     path: '',
      //     component: home,
      //   }
      // ]
    },
    {
      path: '/even',
      name: '图书查询与借阅',
      component: mainnav,
      children: [
        {
          path: 'even',
          redirect: 'create',
          // hidden: true
        },
        {
          path: 'create',
          name: '图书查询',
          component: evencreate
        },
        {
          path: 'list',
          name: '图书借阅',
          component: evenlist,
        },

      ]
    },



    {
      path: '/xitongguanli',
      name: '系统管理页面',
      component: mainnav,
      children: [
        {
          path: 'xitongguanli',
          redirect: 'yhguanli',
          // hidden: true
        },
        {
          path: 'yhguanli',
          name: '用户管理',
          component: yhguanli
        },
        {
          path: 'bookguanli',
          name: '图书管理',
          component: bookguanli,
        },
      ]
    },
    {
      path: 'denglu',
      name: '登录',
      component:denglu,
    }
  ]
})
