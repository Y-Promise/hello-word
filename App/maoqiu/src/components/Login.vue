<template lang="html">
	<div class="login">
	<div class="main">
		<router-link to="/" class="span iconfont">&#xe60c;</router-link>
		<h1>
			登录
		</h1>
		<form class="div">
			<span class="position1"> +86</span>
			<input type="text" placeholder="输入手机号" class="input1" pattern="(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$" required="required" />
			<input type="text" placeholder="输入6-16位密码" class="input2" />
			<p>
				<router-link to="/" class="position2">
				忘记密码?
				</router-link>
			</p>
			<input type="button" value="进入" class="input3_no" @click="login" />
		</form>
		<p class="position3">
			登录或注册即同意<span>《毛球用户服务协议》</span>
		</p>
	</div>

	</div>
</template>

<script>
	export default{
		data(){
			
		},
		methods:{
			login(){
				this.$router.push({
				path: '/register',
				});
				router.go(1);

			}
		},
		
	}
	
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/Login.css");
</style>