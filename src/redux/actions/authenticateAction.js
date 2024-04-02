// 다른 기능을 하는 함수를 다른 파일에 작성

function login(id, password) {
  return (dispatch, getState) => {
    console.log("login success action")
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout(id, password) {
  return (dispatch, getState) => {
    console.log("logout successful")
    dispatch({ type: "LOGOUT_SUCCESS", payload: { id, password }})
  }
}

export const authenticateAction = { login, logout };
