<template lang="html">
	<div class="register">
	<div class="main">
		<router-link to="/login" class="span iconfont">&#xe60c;</router-link>
		<h1>注册</h1>
		<div class="div">
			<span class="position1"> +86</span>
			<input type="text" placeholder="输入手机号" class="input1" />
			<input type="text" placeholder="输入6-16位密码" />
			<input type="text" placeholder="输入验证码" class="input2" /><input type="button" value="发送验证码" class="input4" />
			<p>
				<router-link to="/" class="position2">
				忘记密码?
				</router-link>
			</p>
			<input type="button" value="进入" class="input3_no" @click="Register" />
		</div>
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
			Register(){
				this.$router.push({
					path:'/register_user'
				})
			}
		}
	}
	
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/Register.css");

</style>