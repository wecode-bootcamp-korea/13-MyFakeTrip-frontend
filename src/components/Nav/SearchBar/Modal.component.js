import React, { useState } from "react";
import styled from "styled-components";

function Modal() {
  return (
    <div>
      <Wrapper>
        <Search>
          <div>
            <h2>도시 선택</h2>
            <span>X</span>
          </div>
          <input type="text" placeholder="도시명을 입력하세요" />
          <button type="submit" value="검색">
            검색
          </button>
        </Search>
        <Select>
          <h2>주요도시 바로 선택</h2>
          <table>
            <tr>
              <th scope="row" rowSpan="2">
                국내
              </th>
              <td>인천</td>
              <td>김포</td>
              <td>부산</td>
              <td>제주</td>
            </tr>
            <tr>
              <td>무안</td>
              <td>청주</td>
              <td>대구</td>
              <td>양양</td>
            </tr>
          </table>
        </Select>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 750px;
  height: 280px;
  padding: 20px 40px;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  position: absolute;
  z-index: 1;
`;
const Search = styled.div`
  margin-bottom: 20px;
  div {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #343a40;
      margin-bottom: 15px;
    }
  }

  input {
    width: 551px;
    height: 40px;
    color: #777;
    border: 1px solid #ced4da;
    border-radius: 2px 0 0 2px;
    font-size: 14px;
    padding-left: 10px;
    :focus {
      outline: none;
    }
  }
  button {
    width: 100px;
    height: 40px;
    background-color: #51abf3;
    font-size: 16px;
    color: #ffffff;
    border-radius: 0 2px 2px 0;
    border: none;
  }
`;
const Select = styled.div`
  margin-bottom: 20px;
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #343a40;
    margin-bottom: 15px;
  }
  table {
    border-top: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    width: 100%;
    text-align: left;
    th {
      font-size: 14px;
      padding: 10px;
      font-weight: 600;
    }
    td {
      color: #343a40;
      padding: 10px;
    }
  }
`;

export default Modal;
