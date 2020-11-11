import React from "react";

function Modal() {
  return (
    <div>
      <Wrapper>
        <Search>
          <Head>도시 선택</Head>
          {/* <Input></Input> */}
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
const Head = styled.div`
  font-size: 27px;
`;
const Title = styled.div`
  font-size: 27px;
`;

export default Modal;
