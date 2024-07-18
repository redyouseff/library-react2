import {combineReducers} from "redux"
import {productReducer} from "./productReducer"
import { orderReducer } from "./orderReducer"
export default combineReducers({
    allproduct:productReducer,
    allorder:orderReducer
})