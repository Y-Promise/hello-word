import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/Login'
import register from '@/components/Register'
import register_user from '@/components/Register_User'
import user from '@/components/User'
import CommonFooter from '@/components/Footer.vue'
import news from '@/components/News.vue'
import Set_up from '@/components/Set_up.vue'
import Circle from '@/components/Circle.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
		{
			path: '/Login',
			component: login
		},
		{
			path: '/Register',
			component: register
		},
		{
			path: '/Register_User',
			component: register_user
		},
		{
			path: '/User',
			component: user
		},
		{
			path: '/Footer',
			component: CommonFooter
		},
		{
			path: '/News',
			component: news
		},
		{
			path: '/Set_up',
			component: Set_up
		},
		{
			path: '/Circle',
			component: Circle
		}
  ]
})
