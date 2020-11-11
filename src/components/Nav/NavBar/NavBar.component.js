import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Wrapper>
      <Header>
        <div>
          <img src="./data/whitefaketrip.png" alt="myfaketrip logo white" />
          <input type="text" placeholder="여행지나 상품을 검색해보세요" />
        </div>
        <Linkto>
          <a href="#">파트너 등록하기</a>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </Linkto>
      </Header>
      <List>
        <a href="#">홈</a>
        <a href="#">항공권</a>
        <a href="#">호텔</a>
        <a href="#">펜션&캠핑</a>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iNyIgY3k9IjciIHI9IjciIGZpbGw9IiNGQTVCNEEiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjUxMiA5LjVWMy44Mkg1LjhsMi4yNjQgMy41MDQuMDE2LS4wMDhWMy44Mkg5LjRWOS41SDguMDcyTDUuODQ4IDYuMDkyaC0uMDE2VjkuNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" />
        <a href="#">투어&티켓</a>
        <a href="#">랜선투어</a>
        <a href="#">국내골프</a>
        <a href="#">할인혜택</a>
      </List>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 120px;
  padding: 20px 110px;
  background-color: black;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  img {
    width: 150px;
    margin-right: 30px;
  }
  input {
    width: 340px;
    height: 45px;
    border-radius: 4px;
    border: none;
    padding-left: 10px;
    :focus {
      outline: none;
    }
  }
`;
const Linkto = styled.div`
  margin-top: 15px;
  a {
    color: #ffffff;
    font-size: 15px;
    padding: 7px 25px;
    &:last-child {
      border: 1px solid #ffffff;
      border-radius: 3px;
    }
  }
`;
const List = styled.div`
  a {
    margin-right: 30px;
    padding-bottom: 5px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    position: relative;
    :hover {
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
    }
  }
  img {
    position: absolute;
    top: 73px;
    left: 340px;
  }
`;
export default NavBar;
