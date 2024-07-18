import BaseUrl from "../api/BaseUrl";
const UseDeleteProduct=async(url,parmas)=>{
    const res=await BaseUrl.delete(url,parmas)
    return res.data;
}
export default UseDeleteProduct