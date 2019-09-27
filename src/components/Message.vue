<template>
	<div class="msg">
		<h2>当前为{{$route.query.country}}消息</h2>
		<ul>
			<li>消息1</li>
			<li>消息2</li>
			<li>消息3</li>
			<li>消息4</li>
		</ul>
	</div>
</template>

<script>
export default{
	name:"Message"
}
</script>

<style>
.msg{
	color:purple;
	font-size: 25px;
}
</style>