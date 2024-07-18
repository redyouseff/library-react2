import { createStore,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import RootRedux from "./Reducers/RootRedux";
import { composeWithDevTools } from '@redux-devtools/extension';
const initailState={}
const middleware=[thunk]

// initailState the Object which contains all of data
const store =createStore(RootRedux,initailState,composeWithDevTools(applyMiddleware(...middleware)))
export default store;