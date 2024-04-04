import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer"
// import productReducer from "./productReducer"
import productSlice from "./productSlice"

export default combineReducers({
    auth : authenticateReducer,
    // product : productReducer,
    // product: productSlice.reducer,
})