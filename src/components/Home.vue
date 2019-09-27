<template>
	<div>
		<h3>首页</h3>
        <h2>url:{{testurl}}</h2>
        <div>{{domaininfo}}</div>
		<router-link to="/home/news" tag="button">新闻</router-link>
		<!-- <router-link to="/home/message" tag="button">消息</router-link> -->
		<button @click="msgClick">消息</button>

		<router-view></router-view>
	</div>
</template>

<script>
    import {domainget,GetDomain,apiconfig} from '../network/api'
    export default{
        name:"Home",
        data(){
            return{
                domaininfo:"",
                code:"",
                errmsg:"",
                testurl:apiconfig
            }
        },
        methods:{
            msgClick(){
                this.$router.push({path:"/home/message",query:{country:"China"}})
            }
        },
        destroyed() {
            console.log("home destroyed")
        },
        created() {
            domainget({
                params:{page:3}
            },res => {this.domaininfo = res.data},err => {this.errmsg = err})
        }
    }
</script>

<style>
.router-link-active{
	background:#32CD32
}
</style>
