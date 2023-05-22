import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
`;

const HowToUse = () => {
  return (
    <>
      <Helmet>
        <title>노북다지 | 이용방법</title>
      </Helmet>
      <Container></Container>
    </>
  );
};

export default HowToUse;
