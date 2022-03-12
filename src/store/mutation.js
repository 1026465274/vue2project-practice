const ADD_ITEMNUM  = "ADD_ITEMNUM" ;
const REMBER_ANSWER = "REMBER_ANSWER";
const REMBER_TIME = "REMBER_ANSWER" ; 
const INITIALIZE_DATA = "INITIALIZE_DATA";

export default{
  [ADD_ITEMNUM](state,num){
    state.itemNum += num;
  },
  [REMBER_ANSWER](){}
}