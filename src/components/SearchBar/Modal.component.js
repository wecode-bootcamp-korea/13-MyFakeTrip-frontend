import React from "react";
import styled from "styled-components";

function Modal() {
  return (
    <div>
      <Wrapper>
        <Search>
          <Head>도시 선택</Head>
          <input type="text" placeholder="도시명을 입력하세요" />
          <input type="submit" value="검색" />
        </Search>
        <Select>
          <Title>주요도시 바로 선택</Title>
          {/* <Cities></Cities> */}
        </Select>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 750px;
  height: 280px;
  padding: 30px;
`;
const Search = styled.div`
  margin-bottom: 20px;
`;
const Head = styled.div`
  font-size: 27px;
`;
const Title = styled.div`
  font-size: 27px;
`;

export default Modal;
