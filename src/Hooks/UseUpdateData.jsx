import BaseUrl from "../api/BaseUrl";
export const UseUpdateData=async(url,parmas)=>{
    const res=await BaseUrl.patch(url,parmas)
    return res
}

