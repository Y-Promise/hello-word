<template lang="html">
	<div class="user iconfont">
		<div class="u_div">
			<router-link to="/" class="span iconfont">&#xe649;</router-link>
			<router-link to="/" class="span iconfont">&#xe61d;</router-link>
			<router-link to="/" class="span iconfont">&#xe748;</router-link>
		</div>
		<router-link to="/">
			<div class="div">
				<img src="../assets/img/tx_1.jpg" />
				<p>玖 <span>&#xe64e;</span></p>
			</div>
		</router-link>
		
		<div class="u_div2">
			<ul class="ul">
				<router-link to="/" >
					<li >
						<span>&#xe616;</span>发布<span>0 &#xe617;</span>
					</li>
				</router-link>
				<router-link to="/" >
					<li>
						<span>&#xe612;</span>评论<span>0 &#xe617;</span>
					</li>
				</router-link>
				<router-link to="/" >
					<li>
						<span>&#xe618;</span>收藏夹<span>0 &#xe617;</span>
					</li>
				</router-link>
			</ul>
			<br />
			<br />
			<br />
			<ul class="ul">
				<router-link to="/" >
					<li>
						<span>&#xe610;</span>邀请好友得奖励<span> &#xe617;</span>
					</li>
				</router-link>
			</ul>
		</div>
		<div>
			<common-footer>
			</common-footer>
		</div>
		router.go(1);
	</div>
</template>

<script>
	import CommonFooter from './Footer.vue'
	export default{
		components:{
			CommonFooter,
		},
	}
	
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/User.css");
	
</style>
