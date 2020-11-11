import React from "react";
import styled from "styled-components";

function Modal() {
  return (
    <div>
      <Wrapper>
        <Search>
          <Head>도시 선택</Head>
          <Input type="text" placeholder="도시명을 입력하세요" />
          <Button type="submit" value="검색">
            검색
          </Button>
        </Search>
        <Select>
          <Title>주요도시 바로 선택</Title>
          <Cities>
            <tr>
              <th scope="row" rowSpan="2">
                국내
              </th>
              <td>
                <a href="#">인천</a>
              </td>
              <td>
                <a href="#">김포</a>
              </td>
              <td>
                <a href="#">부산</a>
              </td>
              <td>
                <a href="#">제주</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#">무안</a>
              </td>
              <td>
                <a href="#">청주</a>
              </td>
              <td>
                <a href="#">대구</a>
              </td>
              <td>
                <a href="#">양양</a>
              </td>
            </tr>
          </Cities>
        </Select>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 750px;
  height: 280px;
  padding: 30px;
  background-color: #ffffff;
  border: 1px solid #ced4da;
  position: absolute;
  z-index: 1;
`;
const Search = styled.div`
  margin-bottom: 20px;
`;
const Head = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 10px;
`;
const Input = styled.input`
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
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #51abf3;
  font-size: 16px;
  color: #ffffff;
  border-radius: 0 2px 2px 0;
  border: none;
`;
const Select = styled.div`
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #343a40;
  margin-bottom: 20px;
`;
const Cities = styled.table`
  padding: 5px 0;
  border-top: 1px solid #ced4da;
  border-bottom: 1px solid #ced4da;
  width: 100%;
  text-align: left;
`;

export default Modal;
