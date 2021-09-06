<template>
	<div class="OrganizeChart">
		<div class="OrganizeChart_info">
			<van-cell center>
				<template #title>
					<span class="custom-title">Name: Trust</span>
				</template>
				<template #default>
				</template>
			</van-cell>

			<div class="chartBox" id="chart"></div>
			
			<div class="fca">
				<van-button style="width: 45%;" square type="info" @click="changChart(1)">Month</van-button>
				<van-button style="width: 45%;" square type="info" @click="changChart(2)">Year</van-button>
			</div>

			<van-cell center>
				<template #title>
					<span class="custom-title">Trust</span>
				</template>
				<template #default>
					<div class="fcb"><span>Account:</span><span>12345678</span></div>
					<div class="fcb"><span>Date:</span><span>2021-08-01 14:30:00</span></div>
					<div class="fcb"><span>Sales ID:</span><span>$999</span></div>
				</template>
			</van-cell>
			<van-cell center>
				<template #title>
					<span class="custom-title">Trust</span>
				</template>
				<template #default>
					<div class="fcb"><span>Account:</span><span>12345678</span></div>
					<div class="fcb"><span>Date:</span><span>2021-08-01 14:30:00</span></div>
					<div class="fcb"><span>Sales ID:</span><span>$999</span></div>
				</template>
			</van-cell>
			<van-cell center>
				<template #title>
					<span class="custom-title">Trust</span>
				</template>
				<template #default>
					<div class="fcb"><span>Account:</span><span>12345678</span></div>
					<div class="fcb"><span>Date:</span><span>2021-08-01 14:30:00</span></div>
					<div class="fcb"><span>Sales ID:</span><span>$999</span></div>
				</template>
			</van-cell>
			<van-cell center>
				<template #title>
					<span class="custom-title">Trust</span>
				</template>
				<template #default>
					<div class="fcb"><span>Account:</span><span>12345678</span></div>
					<div class="fcb"><span>Date:</span><span>2021-08-01 14:30:00</span></div>
					<div class="fcb"><span>Sales ID:</span><span>$999</span></div>
				</template>
			</van-cell>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				options:{
					title: {
						text: '月销售报表'
					},
					color: ['red'],
					tooltip: {},
					
					xAxis: {
						name:'月',
						data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
						axisTick: {
							alignWithLabel: true,
						},
						axisLabel:{
							interval:0,
							rotate:0
						}
					},
					yAxis: {
						name:'金额(/千)',
					},
					grid: {
						left: '5.5%',
						// right: '1%',
						bottom: '10%',
						containLabel: true
					},
					series: [{
						name: '金额',
						type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						},
						data: [10, 20, 15, 30, 40, 10,5,30,50,16,28,60],
					}]
				},
				monthData:[],
				monthChart:'',
				year:new Date().getFullYear(),
			}
		},
		mounted(){
			// 基于准备好的dom，初始化echarts实例
			// let myChart = this.$echarts.init(document.getElementById('mychart'))
			// 绘制图表
			// myChart.setOption({
			//     title: { text: '在Vue中使用echarts' },
			//     tooltip: {},
			//     xAxis: {
			//         data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			//     },
			//     yAxis: {},
			//     series: [{
			//         name: '销量',
			//         type: 'bar',
			//         data: [5, 20, 36, 10, 10, 20]
			//     }]
			// });
			this.monthChart=this.$echarts.init(document.getElementById("chart"));
			this.monthChart.setOption(this.options);
	    },
		methods:{
			changChart(type){
				if(type==1){
					this.options = {
						title: {
							text: '月销售报表'
						},
						color: ['red'],
						tooltip: {},
						
						xAxis: {
							name:'月',
							data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12'],
							axisTick: {
								alignWithLabel: true,
							},
							axisLabel:{
								interval:0,
								rotate:0
							}
						},
						yAxis: {
							name:'金额(/千)',
						},
						grid: {
							left: '5.5%',
							// right: '1%',
							bottom: '10%',
							containLabel: true
						},
						series: [{
							name: '金额',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
							data: [10, 20, 15, 30, 40, 10,5,30,50,16,28,60],
						}]
					};
				}else{
					this.options = {
						title: {
							text: '年销售报表'
						},
						color: ['red'],
						tooltip: {},
						
						xAxis: {
							name:'年',
							data: ['2010','2011', '2012', '2013', '2014', '2015', '2016','2017', '2018', '2019', '2020', '2021'],
							axisTick: {
								alignWithLabel: true,
							},
							axisLabel:{
								interval:0,
	                       		rotate:40
							}
						},
						yAxis: {
							name:'金额(/千)',
						},
						grid: {
							left: '5.5%',
							// right: '1%',
							bottom: '10%',
							containLabel: true
						},
						series: [{
							name: '金额',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'top'
								}
							},
							data: [40, 20, 15, 10, 5, 10,25,30,20,16,28,55],
						}]
					};
				}
				this.monthChart.setOption(this.options);
			}
		}
	}
</script>
<style>
.van-field .van-icon{
	font-size: 20px;
}

</style>
<style scoped>
/deep/ .van-cell__title{width: 30%;flex:none;text-align: left;}
/deep/ .van-cell__value{color: #323233;}
.OrganizeChart{
	width: 100%;
}
.OrganizeChart_title{font-weight: 500;text-align: left;background-color: #FFC80B;line-height: 35px;text-indent: 20px;}
.OrganizeChart_info .ad_icon{width: 20vw;height: 20vw;/*background-color: #CBCDCE;*/margin: 20px auto 10px;border-radius: 10px;}
.inputBox{
	width: 90%;
	margin: 30px auto;
}
.chartBox{
	width: 100%;
	min-height: 240px;
	background-color: #fff;
	padding-top: 20px;
}
</style>
