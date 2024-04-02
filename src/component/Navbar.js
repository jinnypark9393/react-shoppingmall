import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from '../redux/actions/authenticateAction'

// const Navbar = ({ authenticate, setAuthenticate }) => {
const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  // sideNav 표시/비표시를 위한 상태값 설정
  let [width, setWidth] = useState(0)

  const authenticate = useSelector((state) => state.auth.authenticate)
  const id = useSelector((state) => state.auth.id)
  const password = useSelector((state) => state.auth.password)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate == true) {
      navigate("/");
      // setAuthenticate(false);
      dispatch(authenticateAction.logout(id,password))
    } else {
      navigate("/login");
    }
  };
  const goToMain = () => {
    navigate("/");
  };

  const search = (event) => {
    // console.log("key press event")
    if (event.key === "Enter") {
      // console.log("we clicked: ", event.key)
      let keyword = event.target.value;
      // console.log("keyword: ", keyword)
      // 입력한 검색어 읽어서 URL 바꿔주기
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div>
        <div className="first-line">
          <div className="side-menu" style={{ width: width }}>
            <button className="close-btn" onClick={() => setWidth(0)}>&times;</button>
            <div className="side-menu-list">
              {menuList.map((menu, index) => (
                <li>{menu}</li>
              ))}
            </div>
          </div>
          <div className="menu-button-mobile" onClick={() => setWidth(250)}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div className="login-text">
              {authenticate == true ? "Logout" : "Login"}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
          onClick={goToMain}
          className="logo-image"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          {/* onKeyPress: 아무 키 입력하면 이벤트 발생(alt,ctrl,shift,esc제외) */}
          <input
            className="search-input"
            type="text"
            placeholder="제품 검색"
            onKeyPress={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
