<template>
  
<div>
  <itemIndex  fatherComponent = "item"></itemIndex>
</div>

</template>


<script>

import ItemIndex from "@/components/ItemIndex.vue"

export default {
  setup() {
    
  },
  name:"item",
  components:{
    ItemIndex
  },
  created(){
    this.$store.commit("REMBER_TIME");
  }

}
</script>