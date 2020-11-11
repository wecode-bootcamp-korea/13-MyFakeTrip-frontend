import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.component";
import styled from "styled-components";
function SearchBar() {
  let [modal, setModal] = useState(false);
  let [destination, setDestination] = useState("서울(SEL)");

  return (
    <Wrapper>
      <Header>
        <div>
          <span>왕복</span>
          <span>편도</span>
          <span>다구간</span>
        </div>
        <div>
          <Link to="#">항공권 예약내역</Link>
          <Link to="#">비회원 예약내역</Link>
        </div>
      </Header>
      <Form>
        <div
          onClick={() => {
            setModal(!modal);
          }}
        ></div>
        <div></div>
        <div></div>
        <button>검색</button>
      </Form>
      {Modal ? <Modal /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 225px;
  padding: 20px 110px;
  background-color: black;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    padding: 0 10px 7px 10px;
    &:hover {
      color: #ffffff;
      border-bottom: 1px solid #ffffff;
    }
  }
  a {
    color: #ffffff;
  }
`;
const Form = styled.div`
  display: flex;
  div {
    background-color: #ffffff;
    height: 50px;
    border-radius: 2px;
    margin-right: 5px;
    padding: 10px;
    position: relative;
  }
  button {
    width: 70px;
    height: 50px;
    border: none;
    border-radius: 2px;
    margin-right: 5px;
    background-color: #51abf3;
    color: #ffffff;
    font-size: 16px;
    &:focus {
      outline: none;
    }
  }
`;

export default SearchBar;
