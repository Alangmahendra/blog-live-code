import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Mypage from '@/components/Mypage'
import OtherAuthor from '@/components/OtherAuthor'
import Article from '@/components/SeeOneArticle'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mypage',
      name: 'Mypage',
      component: Mypage
    },
    {
      path: '/article/author/:id',
      name: 'OtherAuthor',
      component: OtherAuthor
    },
    {
      path: '/reed/:id',
      name: 'Article',
      component: Article
    }
  ]
})
