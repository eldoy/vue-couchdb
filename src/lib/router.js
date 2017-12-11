import Vue from '@/lib/setup'
import Router from 'vue-router'
import ProjectList from '@/components/project/List'
import NewAccount from '@/components/account/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/account/new',
      name: 'NewAccount',
      component: NewAccount
    }
  ],
  mode: 'history'
})
