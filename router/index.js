import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../src/components/Home'
// import User from '../src/components/User'
// import About from '../src/components/About'
Vue.use(VueRouter)
// 懒路由的加载方法
const Home = () => import("../src/components/Home")
const User = () => import("../src/components/User")
const About = () => import("../src/components/About")
const Profile = () => import("../src/components/Profile")
const News = () => import("../src/components/News")
const Message = () => import("../src/components/Message")
const routes = [
	{
		path:"",
		// 重定向到其它的url上
		redirect:'/home',
	},
	{
		path:"/home",
		component:Home,
		meta:{
			title:"首页"
		},
		children:[
			{
				path:"",
				redirect:'news',
			},
			{
				path:"news",
				component:News
			},
			{
				path:"message",
				component:Message
			}
		]
	},
	{
		path:"/user/:userName",
		component:User,
		meta:{
			title:"用户"
		}
	},
	{
		path:"/about",
		component:About,
		meta:{
			title:"关于"
		}
	},
	{
		path:"/profile",
		component:Profile,
		meta:{
			title:"档案"
		}
	},
	
]
const router = new VueRouter({
	routes,
	mode:"history"
})
router.beforeEach((to,from,next) =>{
	
	document.title = to.matched[0].meta.title;
	// console.log(to);
	next()
})
export default router