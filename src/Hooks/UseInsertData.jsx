import BaseUrl from "../api/BaseUrl";
export const UseInsertData=async(url,parmas)=>{
    const res=await BaseUrl.post(url,parmas)
    return res
}