import Vue from 'vue'
import VueRouter from 'vue-router'
// const Home = () => import('../views/Home.vue')
// const todolist = () => import('../views/todolist.vue')
// const notFound = () => import('../views/404/notFound.vue')

import View from '../views/KOL/View.vue'
import Database from '../views/KOL/Database'
import DatabaseAnalyze from '../views/KOL/DatabaseAnalyze'
import KOLDetail from '../views/KOL/KOLDetail'
import subjectAnalyze from '../views/KOL/subjectAnalyze'
import subjectContrast from '../views/KOL/subjectContrast'
import homePage from '@/components/backStageManagement/homePage'
import userManage from '../views/KOL/userManage'
import myProject from '../views/KOL/myProject'
import quoteList from '../views/KOL/quoteList'
import login from '../views/KOL/login'
import subjectAnalyzeDetail from '../views/KOL/subjectAnalyzeDetail'


Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  // {
  //   path: '/todolist/:id',
  //   name: 'todolist',
  //   component: todolist,
  //   meta:{
  //     title:"todolist"
  //   }
  // },
  // {
  //   path: '/404/notFound',
  //   name: 'notFound',
  //   component: notFound,
  //   meta:{
  //     title:"404notFound"
  //   }
  // },
  {
    path: '/View',
    component: View,
    redirect:'/View/homePage',
    children:[
      {
        path:'homePage',
        name:homePage,
        component:homePage
      },
      {
        path:'userManage',
        name:userManage,
        component:userManage
      },
      {
        path:'Database',
        name:Database,
        component:Database
      },
      {
        path:'DatabaseAnalyze',
        name:DatabaseAnalyze,
        component:DatabaseAnalyze
      },
      {
        path:'subjectAnalyze',
        name:subjectAnalyze,
        component:subjectAnalyze
      },
      {
        path:'myProject',
        name:myProject,
        component:myProject
      },
    ]
  },
  {
    path: '/login',
    component: login,
  },
  {
    path: '/quoteList',
    component: quoteList,
  },
  {
    path: '/KOLDetail',
    component: KOLDetail,
  },
  {
    path: '/subjectContrast',
    component: subjectContrast,
  },
  {
    path: '/subjectAnalyzeDetail',
    component: subjectAnalyzeDetail,
  },
  {
    path: " ",redirect: '/404/notFound'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
