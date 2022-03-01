<template>
  
  <div class="content">
    <header class="top_tips">

    <span class="top_tips"  v-if="fatherComponent == 'home'">{{}}</span>
    <span class="top_tips" v-if="fatherComponent == 'item'">题目{{}}</span>
  
    </header>

  </div>

</template>


<script>
import { mapState , mapActions } from 'vuex'
export default {
 name:"Iteam",
 data(){
   return {
     
   }
 },
  props:['fatherComponent'],
  computed:{...mapState([])},
   methods: {
     ...mapActions([
  		]),
   },
   created(){
    //  初始化
    if(this.fatherComponent == 'home'){

    }
   }
}
</script>


<style >
  .top_tips{
    position: absolute;
		height: 7.35rem;
		width: 3.25rem;
		top: -1.3rem;
		right: 1.6rem;
		background-size: 100% 100%;
		z-index: 10;
  }


</style>