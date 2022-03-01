import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/home.vue'
import App from '../App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: App,
      children:[
         {
           path:"",
           name:"home",
           component:Home,
         },
      ]
    }
  ]
})
