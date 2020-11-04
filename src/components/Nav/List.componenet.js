import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

function Nav() {
  const [isLogin, setIsLogin] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(true);
  const [isHotel, setIsHotel] = useState(false);
  // console.log(history.location.pathname, "sdfklsdlfjlksdfklsjf");

  //   useEffect(() => {
  //     console.log(history.location.pathname);
  //     if (history.location.pathname !== "/") {
  //       setIsSearchActive(false);
  //     }
  //   }, [history.location.pathname]);

  return (
    <>
      <List>
        <span>홈</span>
        <span
          onClick={() => {
            setIsHotel(false);
          }}
        >
          항공권
        </span>
        <span
          onClick={() => {
            setIsHotel(false);
          }}
        >
          호텔
        </span>
        <span>펜션&캠핑</span>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciIGZpbGw9IiNGQTVCNEEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjUxMiA5LjVWMy44Mkg1LjhsMi4yNjQgMy41MDQuMDE2LS4wMDhWMy44Mkg5LjRWOS41SDguMDcyTDUuODQ4IDYuMDkyaC0uMDE2VjkuNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
        <span>투어&티켓</span>
        <span>랜선투어</span>
        <span>국내골프</span>
        <span>할인혜택</span>
      </List>
    </>
  );
}

const List = styled.div`
  span {
    margin-right: 30px;
    padding-bottom: 10px;
    color: rgba(73, 80, 86, 0.7);
    font-size: 15px;
    position: relative;
    &:hover {
      color: black;
      cursor: pointer;
      font-weight: bold;
    }
    &:focus {
      color: black;
      font-weight: bold;
    }
  }
  img {
    position: absolute;
    top: 73px;
    left: 340px;
  }
`;
export default Nav;
