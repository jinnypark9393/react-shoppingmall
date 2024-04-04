import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null,
}

// createAsyncThunk 사용
export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi)=> {
    try {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products?q=${searchQuery}`
        let response = await fetch(url)
        return await response.json()
    } catch(error) {
        thunkApi.rejectWithValue(error.message) // rejected case를 강제 호출 with value
    }
})

export const fetchSingleProduct = createAsyncThunk('product/fetchDetail', async (id, thunkApi)=> {
    try {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products/${id}`
        let response = await fetch(url)
        return await response.json()
    } catch(error) {
        thunkApi.rejectWithValue(error.message) // rejected case를 강제 호출 with value
    }
})

// function productReducer (state, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList: payload.data}
//         case "GET_DETAIL_PRODUCT_SUCCESS":
//             return {...state, selectedItem: payload.data}
//         default:
//             return {...state}
//     }
// }

// export default productReducer

// createSlice 활용
const productSlice = createSlice({
    name: "product",
    initialState,
    // redux에 의해 바로 호출: reducer에 정의
    // reducers: { // 함수가 들어가게 됨
    //     getSingleProduct(state, action) {
    //         state.selectedItem = action.payload.data
    //     }
    // },
    // 바로 호출하지는 않지만 thunk등 외부 라이브러리에 의해 호출(ex. createAsyncThunk 사용)
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchProducts.fulfilled, (state, action)=> {
            state.isLoading = false
            state.productList = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=> { // 에러핸들링
            state.isLoading = false
        })
        .addCase(fetchSingleProduct.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action)=> {
            state.isLoading = false
            state.selectedItem = action.payload
        })
        .addCase(fetchSingleProduct.rejected, (state, action) => {
            state.isLoading = false
        })
    }
})

// console.log("productSlice: ", productSlice)

export const productActions = productSlice.actions
export default productSlice.reducer