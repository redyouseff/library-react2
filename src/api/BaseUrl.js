import axios from "axios";
const BaseUrl=axios.create({baseURL:"http://localhost:1000"})
export default BaseUrl;