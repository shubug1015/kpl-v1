import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 30px;
  background-color: ${(props) => props.theme.homeBgColor};
  background-image: url(${(props) => props.bgUrl});
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center;
`;

const TopContainer = styled.div`
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

const ItemContainer = styled.div``;

const Button = styled.button`
  position: relative;
  width: 24vw;
  height: 15vh;
  margin-top: 10vh;
  font-size: 22px;
  background-color: transparent;
  border: none;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

const BtnText = styled.span`
  display: block;
  color: ${(props) => props.theme.whiteColor};
`;

const BtnUnderline = styled.div`
  display: inline-block;
  width: 105px;
  /* border: ${(props) => props.theme.borderBtm}; */
`;

const SummuryContainer = styled.div`
  width: 68vw;
  height: 60vh;
  margin-left: 16vw;
  font-size: 30px;
`;

const Summury = styled.div`
  font-size: 20px;
`;

const SLink = styled(Link)``;

const Home = () => {
  return (
    <>
      <Helmet>
        <title> 노북다지</title>
      </Helmet>
      <Container bgUrl={require("Components/assets/itda3.jpg")}>
        <TopContainer>
          <ItemContainer>
            <SLink to="/laptops">
              <Button>
                <BtnText>노트북 비교하기</BtnText>
                <BtnUnderline />
              </Button>
            </SLink>
          </ItemContainer>
          <ItemContainer>
            <SLink to="/tablets">
              <Button>
                <BtnText>태블릿 비교하기</BtnText>
                <BtnUnderline />
              </Button>
            </SLink>
          </ItemContainer>
        </TopContainer>
        <SummuryContainer>{/* <Example /> */}</SummuryContainer>
      </Container>
    </>
  );
};

export default Home;
