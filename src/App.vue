<template>
  <div id="app">
	  <h2 class="maintile">我是APP组件 的入口</h2>
	<!-- replace 属性是让用户不能在网页中点返回就跳转到上一个页面，必须通过相应的点击才能进行跳转 -->
	
<!-- 	<router-link to="/home" tag="button" replace>首页</router-link>&nbsp;
	<router-link to="/user" tag="button" replace>用户</router-link>&nbsp;
	<router-link to="/about" tag="button" replace>关于</router-link>&nbsp; -->
<!-- 	<button @click="homeClick">首页</button>
	<button @click="userClick">用户</button>
	<button @click="aboutClick">关于</button> -->
	<router-link to="/home" tag="button" replace>首页</router-link>&nbsp;
	<router-link v-bind:to="'/user/'+userName" tag="button" replace>用户</router-link>&nbsp;
	<router-link to="/about" tag="button" replace>关于</router-link>&nbsp;
	<router-link v-bind:to="{path:'/profile',query:{name:'zhangxincai',age:30,city:'BJ'}}" tag="button" replace>档案</router-link>&nbsp;
    <keep-alive exclude="Profile,User">
		<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  data(){
	  return{
		  userName:"zhangxincai"
	  }
  },
  methods:{
	  homeClick(){
		  // 通过代码修改路由
		  this.$router.push("/home")
	  },
	  userClick(){
		  this.$router.push("/user")
	  },
	  aboutClick(){
	  	   this.$router.push("/about")
	  }
  },
  created() {
  	// console.log(this.$router)
  }
}
</script>

<style scoped>
.router-link-active{
	background: #42B983;
}

.maintile{
	background: greenyellow;
	margin: 10px auto;
	width:300px;
	height: 50px;
}
</style>
