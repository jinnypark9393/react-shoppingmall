import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"
// import productReducer from "./reducer/productReducer"
import rootReducer from "./reducer" // index를 입력 안해줘도 알아서 들고옴
import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit";

import productSlice from "./reducer/productSlice";
import authenticateReducer from "./reducer/authenticateReducer";

// let store = createStore(productReducer, applyMiddleware(thunk))
// let store = createStore(rootReducer,
//     composeWithDevTools(applyMiddleware(thunk)))

const store = configureStore({
    reducer: {
        auth : authenticateReducer,
        product : productSlice,
    }
})

export default store