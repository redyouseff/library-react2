import BaseUrl from "../api/BaseUrl";
const UseGetData=async(url,parmas)=>{
    const res=await BaseUrl.get(url,parmas)
    return res.data;
}
export default UseGetData