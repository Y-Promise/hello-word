<template lang="html">
	<div class="reg_user">
	<div class="main">
		<h1>登录</h1>
		<div class="m_div">
			<img src="../assets/img/img_1.gif" />
			<span><img src="../assets/img/img_2.gif"/></span>
		</div>
		<form>
		<div class="m_div2">
			<ul>
				<li>
					<span>昵称</span><input type="text" placeholder="请输入昵称" />
				</li>
				<li>
					<span>性别</span><input type="text" placeholder="你的性别" />
				</li>
				<li>
					<span>地区</span><input type="text" placeholder="你所在地" />
				</li>
				<li>
					<span>签名</span><input type="text" placeholder="总得说点什么..." />
				</li>
			</ul>
		</div>
		<input type="button" value="进入" class="input3_no" @click="User" />
	</form>
	</div>
	</div>
	
</template>

<script>
	
	export default{
		data(){
			
		},
		methods:{
			User(){
				this.$router.push({
					path:'/user'
				})
			}
		},
	}
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/Register_User.css");
	
</style>