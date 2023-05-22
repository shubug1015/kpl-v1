import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const PlusLabBtn = styled.button`
  display: raw;
  width: 45vw;
  height: 50vh;
  margin-left: 22px;
  border-radius: 8px;
  background-color: rgba(156, 165, 121, 0.7);
`;

const DefaultTab = styled.button`
  display: raw;
  width: 45vw;
  height: 50vh;
  margin-left: 22px;
  border-radius: 8px;
  background-color: rgba(156, 165, 121, 0.7);
`;

const TabContainer = styled.div`
  margin: 15px 15px;
`;

const PlusTabBtn = styled.button`
  margin-bottom: 15px;
  margin-right: 15px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
`;

const MinusTabBtn = styled.button`
  margin-right: 15px;
  width: 100px;
  height: 50px;
  border-radius: 5px;
`;

const Imogi = styled.div`
  font-size: 50px;
`;

const SLink = styled(Link)``;

const Compare = styled.button``;

const Home = () => {
  const [plusTab, setPlusTab] = useState([]);

  const onPlusBtnClick = () => {
    setPlusTab(
      plusTab.concat(
        <SLink to="/select">
          <PlusLabBtn key={plusTab.length}>
            <Imogi>
              <span role="img" aria-label="loading">
                ➕
              </span>
            </Imogi>
          </PlusLabBtn>
        </SLink>
      )
    );
  };

  const onMinusBtnClick = () => {
    setPlusTab(plusTab.slice(1));
  };

  return (
    <>
      <Container>
        <TabContainer>
          <PlusTabBtn onClick={onPlusBtnClick}>탭 추가하기</PlusTabBtn>
          <MinusTabBtn onClick={onMinusBtnClick}>탭 삭제하기</MinusTabBtn>
        </TabContainer>
        {plusTab}
        <SLink to="/select">
          <DefaultTab>
            <Imogi>
              <span role="img" aria-label="loading">
                ➕
              </span>
            </Imogi>
          </DefaultTab>
        </SLink>
        <SLink to="/select">
          <DefaultTab>
            <Imogi>
              <span role="img" aria-label="loading">
                ➕
              </span>
            </Imogi>
          </DefaultTab>
        </SLink>
        <Compare>
          <SLink to="/compare">비교하기</SLink>
        </Compare>
      </Container>
    </>
  );
};

export default Home;
