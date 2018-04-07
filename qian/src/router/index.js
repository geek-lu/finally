import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppIndex from '@/components/index'
import AppAbout from '@/components/about'
import AppNews from '@/components/news'
import AppNewsDetail from '@/components/newsDetails'
import AppProduct from '@/components/product'
import AppProductDetail from '@/components/productDetails'
import AppContact from '@/components/contact'
Vue.use(Router)

export default new Router({
  routes: [
    // { path: '/',name: 'HelloWorld',component: HelloWorld }
    {path : '/',component:AppIndex},
    {path : '/about',component:AppAbout},
    {path : '/news',component:AppNews},
    {path : '/news_detail',component:AppNewsDetail},
    {path : '/product',component:AppProduct},
    {path : '/product_details',component:AppProductDetail},
    {path : '/contact',component:AppContact}
  ]
})
