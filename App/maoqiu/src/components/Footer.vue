<template lang="html">
	<div class="footer">
		<ul class="F_div">
			<li>
				<span>&#xe7bd;</span>
				<p>榜单</p>
			</li>
			<li>
				<span>&#xe606;</span>
				<p>圈子</p>
			</li>
			<li>
				<span>&#xe611;</span>
				<p>消息</p>
			</li>
			<li>
				<span>&#xe603;</span>
				<p>我的</p>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style>
	* {
		border: 0;
		padding: 0;
		margin: 0;
		text-decoration: none;
		list-style: none;
	}
	.footer {
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(14,14,14,0.9);
		z-index: 9999;
	}

	.F_div {
		padding: 15px 0px;
		width: 720px;
		display: flex;
		color: #ffffff;
		font-size: 24px;
		justify-content: space-around;
		align-items: center;
	}

	.F_div span {
		font-size: 36px;
	}
</style>
