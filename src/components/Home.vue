<template>
	<div>
		<h3>首页</h3>
		<router-link to="/home/news" tag="button">新闻</router-link>
		<!-- <router-link to="/home/message" tag="button">消息</router-link> -->
		<button @click="msgClick">消息</button>
		<router-view></router-view>
	</div>
</template>

<script>
export default{
	name:"Home",
	methods:{
		msgClick(){
			this.$router.push({path:"/home/message",query:{country:"China"}})
		}
	},
	created(){
		console.log("home created")
	},
	destroyed() {
		console.log("home destroyed")
	}
}
</script>

<style>
.router-link-active{
	background:#32CD32
}
</style>
