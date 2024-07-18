const initail={
    order:[],
    allorder:[],
    deleteorder:[],
    
    loading:true
}
export const orderReducer=(state=initail,action)=>{
    switch(action.type){
        case "CREAT_ORDER":
            return{
                loading :true,
                order:action.payload
            }
            case "GET_ORDER" :{
                return{
                    loading :true,
                    order:action.payload
                }
            }
            case "DELETE_ORDERS" :{
                return{
                    loading :true,
                    deleteorder:action.payload
                }
            }
      case "Get_Error":
                return{
                    loading :true,
                    order:action.payload
                }
           
            default:
                return state
    }       
           
}

