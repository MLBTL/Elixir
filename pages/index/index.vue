<template>
	<view class="top img-con">
		<view class="top-search discb">
			<view class="left disflex disali-cen">
				<view class="left-box img-con"></view>
				<input type="text" placeholder="搜索作品/艺术家关键词" placeholder-style="color:#D22F27;font-size:14px;">
				<image src="../../static/home/search.png" mode=""></image>
			</view>
			<image class="right" src="../../static/home/camera.png"></image>
		</view>
	</view>

</template>

<script setup lang="ts">
	import { testApi } from '@/api/home'

	testApi()
</script>

<style lang="scss">
	.top {
		height: 251px;
		width: 375px;
		background-image: url(@/static/home/bg.png);
		padding-top: 44px;

		.top-search {
			height: 38px;
			width: 343px;
			margin: 0 auto;

			.left {
				height: 38px;
				width: 300px;
				border: 4px solid #FF9F9A;
				border-radius: 20px;
				box-sizing: border-box;
				position: relative;
				background-color: #fff;

				.left-box {
					height: 38px;
					width: 38px;
					border: 4px solid #FF9F9A;
					border-radius: 100%;
					box-sizing: border-box;
					background-image: url(@/static/home/logo.png);
					position: absolute;
					left: -4px;
					top: -4px;
				}

				input {
					width: 200px;
					font-size: 14px;
					margin-left: 45px;
					color: #D22F27;
					margin-right: 18px;
				}

				image {
					height: 16px;
					width: 16px;
				}
			}

			.right {
				height: 24px;
				width: 27px;
			}
		}
	}
</style>