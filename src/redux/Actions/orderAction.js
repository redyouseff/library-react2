import { UseInsertData } from "../../Hooks/UseInsertData";
import UseGetData from "../../Hooks/UseGetData";
import UseDeleteProduct from "../../Hooks/UseDeleteData";
export const InsertOrder=(data)=>async(dispatch)=>{
    try{
        let res = await UseInsertData(`/order`,data)
            console.log(res)
        dispatch({
            type:"CREAT_ORDER",
            payload:res,
            loading:false
        })
    }
    catch(e){
        console.log(e)
        dispatch({
            type:"Get_Error",
            payload:"error" +e
        })

    }
}


export const GetOrder=async(dispatch)=>{
    try{
        let res = await UseGetData(`/order`)
            console.log(res)
        dispatch({
            type:"GET_ORDER",
            payload:res,
            loading:false
        })
    }
    catch(e){
        console.log(e)
        dispatch({
            type:"Get_Error",
            payload:"error" +e
        })

    }
}

export const DeleteOrders=async(dispatch)=>{
  

  try{
    const res=await UseDeleteProduct(`/order`)
            console.log(res)
        dispatch({
            type:"DELETE_ORDERS",
            payload:res,
            loading:false
        })
    }
    catch(e){
        console.log(e)
        dispatch({
            type:"Get_Error",
            payload:"error" +e
        })

    }
}

