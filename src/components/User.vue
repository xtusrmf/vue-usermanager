<template>
	<div>
		<h4>当前用户:{{$route.params.userName}}</h4>
		<h3>通过computed方法获取{{getname}}</h3>
		<h3>通过普通methods方法获取{{getusername()}}</h3>
		<button @click="routeClick">routeinfo</button>
	</div>
	
</template>

<script>
export default{
	name:"User",
	methods:{
		getusername(){
			return this.$route.params.userName
		},
		routeClick(){
			console.log(this.$route)
		}
	},
	computed:{
		getname(){
			return this.$route.params.userName
		}
	},
	created(){
		console.log("User created")
	},
	destroyed() {
		console.log("User destroyed")
	}
}
</script>

<style>
</style>
