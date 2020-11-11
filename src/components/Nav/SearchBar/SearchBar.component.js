import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal.component";
import styled from "styled-components";

function SearchBar() {
  let [modal, setModal] = useState(false);
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
        <input type="text" placeholder="서울(SEL)" />
        <input type="text" placeholder="도착지가 어디인가요?" />
        <input type="text" />
        <input type="text" placeholder="승객 1명, 일반석" />
        <input type="submit" value="검색" />
      </Form>
      <Check>
      <label><input type="checkbox">직항만</label>
      <label><input type="checkbox">무료 수하물 가능</label>
      </Check>
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
`;

export default SearchBar;
