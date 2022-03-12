<template>
    	<section>

    <header class="top_tips">
    <span class="num_tip"  v-if="fatherComponent == 'home'">{{level}}</span>
    <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <div v-if="fatherComponent== 'home'">
     <div class="home_logo item_container_style"></div>
     <router-link to = "item" class="start button_style"> </router-link>
    </div>
   <div v-if="fatherComponent == 'item'" > 
		 <div class="item_back item_container_style">
			 <div class="item_list_container"  v-if="itemDetail.length > 0" >
				 <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
				 <ul>
					 <li v-for= "(item,index) in itemDetail[itemNum-1].topic_answer " :key='index' @click="choosed(index,item.topic_answer_id)" class= "item_list" >
						 	<span class="option_style" :class="{'has_choosed':choosedNum==index}"></span>
						 <span class="option_detail" >{{item.answer_name}}</span>
					 </li>
				 </ul>
				  </div>


				 <span class="next_item button_style" @click="nextItem()"> </span>	





		 </div>

	 </div>



	</section>
</template>


<script>
import { mapState , mapActions } from 'vuex'
export default {
 name:"Iteam",
 data(){
   return {
     itemId:null,
		 choosedNum:null,
		 choosedId:null
   }
 },
  props:['fatherComponent'],
  computed:{...mapState([
		'itemDetail',
		'itemNum', 
		'level'
	])},
   methods: {
     ...mapActions(
			"addNum"
		 ),
			
	  choosed(num,id){
		this.choosedId = id;
		this.choosedNum = num;
		console.log(num,id);
	},

	 nextItem(){
		 if(this.choosedNum != null){
			 this.choosedNum = null;
			this.addNum(this.choosedId);
		 }else{
			 alert("请选择一个答案！")
		 }
	 }
   },

   created(){
    //  初始化
    if(this.fatherComponent == 'home'){

    }
   }
}
</script>


<style lang="less">
	.top_tips{
		position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background: url(../images/WechatIMG2.png) no-repeat;
		background-size: 100% 100%;
		z-index: 10;
		.num_tip{
			position: absolute;
			left: 0.48rem;
			bottom: 1.1rem;
			height: 0.7rem;
			width: 2.5rem;
			font-size: 0.6rem;
			font-family: '黑体';
			font-weight: 600;
			color: #a57c50;
			text-align: center;
		}
	}
	.item_container_style{
		height: 15.625rem;
    width: 17.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 9.1rem;
    left: 3rem;
    color: #fff !important;
	}	
	.home_logo{
		background-image: url(../images/1-2.png);
		background-size: 13.142rem 100%;
		background-position: right center;
	}
	.item_back{
		background-image: url(../images/2-1.png);
		background-size: 100% 100%;
	}
	.button_style{
        display: block;
        height: 2.1rem;
        width: 4.35rem;
        background-size: 100% 100%;
        position: absolute;
        top: 16.5rem;
        left: 50%;
        margin-left: -2.4rem;
        background-repeat: no-repeat;
	}
	.start{
        background-image: url(../images/1-4.png);
    }
    .next_item{
    	background-image: url(../images/2-2.png);
    }
    .submit_item{
    	background-image: url(../images/3-1.png);
    }
    .item_list_container{
    	position: absolute;
    	height: 7.0rem;
    	width: 8.0rem;
    	top: 2.4rem;
    	left: 3rem;
			color: #fff;
		-webkit-font-smoothing: antialiased;
    }
	.item_title{
		font-size: 0.65rem;
		color: #00e;
		line-height: 0.7rem;
	}
	.item_list{
		font-size: 0;
		margin-top: 0.4rem;
		width: 10rem;
		span{
			display: inline-block;
			font-size: 0.6rem;
			// color: #00e;
			vertical-align: middle;
		}
		.option_style{
			height: 0.725rem;
			width: 0.725rem;
			border: 1px solid #fff;
			border-radius: 50%;
			line-height: 0.725rem;
			text-align: center;
			margin-right: 0.3rem;
			font-size: 0.5rem;
			font-family: 'Arial';
		}
		.has_choosed{
			background-color: #ffd400;
			color: #575757;
			border-color: #ffd400;
		}
		.option_detail{
			width: 7.5rem;
			padding-top: 0.11rem;
		}
	}
</style>
