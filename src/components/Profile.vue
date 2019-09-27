<template>
	<div>
		<h2>我是Profile</h2>
		<h3>{{$route.query.name}}个人档案</h3>
		<ul>
			<li>name:{{$route.query.name}}</li>
			<li>age:{{$route.query.age}}</li>
			<li>city:{{$route.query.city}}</li>
		</ul>
		
	</div>
</template>
<script>
export default{
	name:"Profile",
	created(){
		console.log("Profile created")
	},
	destroyed() {
		console.log("Profile destroyed")
	}
}
</script>

<style>
</style>
