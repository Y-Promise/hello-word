<template lang="html">
	<div class="Set_up iconfont">
		<router-link to="/" class="span">&#xe608;</router-link>
		<h1>
			登录
		</h1>
		<div class="u_div2">
			<ul class="ul">
				<router-link to="/">
					<li>
						<!-- <span>&#xe610;</span> -->更换手机号(15023654852)
						<span>&#xe617;</span>
					</li>
				</router-link>
			</ul>
			<br />
			<ul class="ul">
				<router-link to="/">
					<li>
						帮助与反馈
						<span>&#xe617;</span>
					</li>
				</router-link>
				<router-link to="/">
					<li>
						关于毛球
						<span>&#xe617;</span>
					</li>
				</router-link>
					<li>
						清除缓存 (44M)
					</li>
					<li>
						检查更新 (v3.1.0)
					</li>
			</ul>
			<br />
			<button @click="out">退出</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			
		},
		methods:{
			out(){
				this.$router.push({
					path:'/login'
				})
			}
		}
	}
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/Set_up.css");
</style>
