<template lang="html">
	<div class="Circle iconfont">
		<div class="C_div1">
			<div>
				<span class="span_position">&#xe637;</span>
				<input type="text" placeholder="搜索圈子" class="input" />
			</div>
			<h1>推荐</h1>
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide>
					<img class="swiper_img" src="../assets/img/C_nav_2.gif" />
				</swiper-slide>
				<swiper-slide>
					<img class="swiper_img" src="../assets/img/C_nav_2.gif" />
				</swiper-slide>
				<swiper-slide>
					<img class="swiper_img" src="../assets/img/C_nav_2.gif" />
				</swiper-slide>
				<swiper-slide>
					<img class="swiper_img" src="../assets/img/C_nav_2.gif" />
				</swiper-slide>
				<!-- 这是轮播的小圆点 -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<ul class="C_ul1">
				<li>
					<div class="C_div1_1">
						<img src="../assets/img/C_img_1.gif" />
					</div>
					<p>圈子</p>
				</li>
				<li>
					<div class="C_div1_2">
						<img src="../assets/img/C_img_2.gif" />
					</div>
					<p>圈子</p>
				</li>
				<li>
					<div class="C_div1_3">
						<img src="../assets/img/C_img_3.gif" />
					</div>
					<p>圈子</p>
				</li>
			</ul>
		</div>
		<div class="C_div2">
			<br />
			<h1>活跃圈子</h1>
			<br />
			<ul class="C_ul2">
				<li>
					<div>
						<img src="../assets/img/C_img_4.gif" />
					</div>
					<div>
						<h2>动次打次</h2>
						<p>生命在于运动</p>
						<p>
							<span>
								<img src="../assets/img/C_img.gif" />
							</span> 26 | 动态</p>
					</div>
				</li>
				<li>
					<div>
						<img src="../assets/img/C_img_5.gif" />
					</div>
					<div>
						<h2>娱乐一箩筐</h2>
						<p>搜罗娱乐资讯</p>
						<p>
							<span>
								<img src="../assets/img/C_img.gif" />
							</span> 45 | 动态</p>
					</div>
				</li>
				<li>
					<div>
						<img src="../assets/img/C_img_6.gif" />
					</div>
					<div>
						<h2>喵了个汪</h2>
						<p>大型运动场</p>
						<p>
							<span>
								<img src="../assets/img/C_img.gif" />
							</span> 12 | 动态</p>
					</div>
				</li>
				<li>
					<div>
						<img src="../assets/img/C_img_7.gif" />
					</div>
					<div>
						<h2>黄黄</h2>
						<p>黄天下之大稽</p>
						<p>
							<span>
								<img src="../assets/img/C_img.gif" />
							</span> 22 | 动态</p>
					</div>
				</li>
				<li>
					<div>
						<img src="../assets/img/C_img_8.gif" />
					</div>
					<div>
						<h2>懂球第</h2>
						<p>键盘侠</p>
						<p>
							<span>
								<img src="../assets/img/C_img.gif" />
							</span> 45 | 动态</p>
					</div>
				</li>
			</ul>
		</div>
		<common-footer class="aaaaa"></common-footer>
	</div>
</template>

<script>
	import CommonFooter from './Footer.vue'

	export default {
		components:{
			CommonFooter,
		},
		data() {
			return {
				swiperOption: {

				},
			}
		},
		

	}
</script>

<style lang="css" scoped="scoped">
	@import url("../assets/style/Circle.css");
</style>
