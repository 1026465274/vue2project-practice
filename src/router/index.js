import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/Home.vue'
import Item from '@/page/item/Item.vue'
import Score from  '@/page/score/Score.vue'
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
         {
           path:"/item",
           name:"item",
           component:Item
         },
         {
           path:"/score",
           name:"score",
           component:Score
         }
      ]
    }
  ]
})
