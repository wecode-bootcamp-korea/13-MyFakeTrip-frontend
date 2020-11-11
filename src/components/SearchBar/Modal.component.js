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
              <td rowSpan="2">국내</td>
              <td>인천</td>
              <td>김포</td>
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
  margin-bottom: 10px;
`;
const Cities = styled.table`
  width: 100%;
`;

export default Modal;
