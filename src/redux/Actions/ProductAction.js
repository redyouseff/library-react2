import { type } from "@testing-library/user-event/dist/type";
import UseGetData from "../../Hooks/UseGetData";
import { UseInsertData } from "../../Hooks/UseInsertData";
import UseDeleteProduct from "../../Hooks/UseDeleteData";
import { UseUpdateData } from "../../Hooks/UseUpdateData";
export  const GetAllProduct=async (dispatch)=>{
    try {
        let res = await UseGetData(`/product`)
       
      
            dispatch({
                type:"GET_ALLPRODUCT",
                payload:res.data,
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
export const GetProductDetails=(id)=> async(dispatch)=>{

    try {
        let res = await UseGetData(`/product/${id}`)
            
            dispatch({
                type:"GET_ALLPRODUCT_DETAILS",
                payload:res.data,
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
export const InsertProduct=(data)=>async(dispatch)=>{
    try{
        let res = await UseInsertData(`/product`,data)
            
        dispatch({
            type:"CREATE_PRODUCT",
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


export const DeleteProductById=(id)=>async(dispatch)=>{
    try{
        let res = await UseDeleteProduct(`/product/${id}`)
        console.log(res)
        dispatch({
            type:"DELETE_PRODUCT",
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

export const UpdateProductById=(id,parmas)=>async(dispatch)=>{
    try{
        const res=await UseUpdateData(`/product/${id}`,parmas)
       
        console.log(res)
        dispatch({
            type:"Update_PRODUCT",
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