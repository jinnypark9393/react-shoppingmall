// 미들웨어 작성 (바로 reducer로 가지 않고 중간에 이 productAction을 거치게 됨)
// searchQuery의 값을 ProductAll에서 argument로 받아서 사용
function getProducts(searchQuery) {
    // getState: 현재 state 정보
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data)
        // 받은 내용을 reducer로 보내기
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}})
    }
}

// product detail 함수
function getProductDetail (id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/jinnypark9393/react-shoppingmall/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(data)
        // setProduct(data);
        dispatch({type: "GET_DETAIL_PRODUCT_SUCCESS", payload: {data}})
    }
  };

// 여러개의 함수를 객체에 담아서 줄 것
export const productAction={getProducts, getProductDetail}