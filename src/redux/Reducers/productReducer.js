const initail={
    product:[],
    allProducts:[],
    oneProduct:[],
    deleteproduct:[],
    updateproduct:[],
    loading:true
}

export const productReducer=(state=initail,action)=>{
    switch(action.type){
        case "GET_ALLPRODUCT":
            return{
                loading :false,
                allProducts:action.payload
            }
            case "GET_ALLPRODUCT_DETAILS":{
                return({
                    loading :false,
                    oneProduct:action.payload
                })
            }
            
                case "CREATE_PRODUCT":{
                    return{
                        loading:false,
                        product:action.payload
                    }
                }
                case "DELETE_PRODUCT":{
                    return{
                        loading:false,
                        product:action.payload
                    }
                }
                case "Update_PRODUCT":{
                    return{
                        loading:false,
                        product:action.payload
                        
                    }
                }
                case "Get_Error":
                return{
                    loading :true,
                    product:action.payload
                }
           
            default:
                return state
    }       
           
}

