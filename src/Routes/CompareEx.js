import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
`;

const Image = styled.div`
  height: 50vh;
  width: 30vw;
`;

const InfoContainer = styled.div`
  height: 50vh;
  width: 30vw;
  display: flex;
  align-items: center;
  padding-top: 80px;
`;
const InfoBox = styled.div`
  height: 50vh;
  width: 10vw;
  display: grid;
`;
const Info = styled.div`
  height: 8vh;
  width: 10vw;
  margin-right: 1px;
  margin-left: 1px;
`;

const SummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleCompanyBox = styled.div`
  width: 30vw;
  height: 10vh;
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
`;

const Title = styled.span``;
const Company = styled.span``;

const Compare = () => (
  <Container>
    <ImageContainer>
      <Image>사진1</Image>
      <InfoContainer>
        <InfoBox>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
        </InfoBox>
        <InfoBox>
          <Info>프로세서</Info>
          <Info>정가</Info>
          <Info>크기(inch)</Info>
          <Info>Graphic</Info>
          <Info>Memory</Info>
          <Info>Storage</Info>
          <Info>무게</Info>
        </InfoBox>
        <InfoBox>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
          <Info></Info>
        </InfoBox>
      </InfoContainer>

      <Image>사진2</Image>
    </ImageContainer>
    <SummaryContainer>
      <TitleCompanyBox>
        <Title>이름</Title>
        <Company>회사</Company>
      </TitleCompanyBox>
      <TitleCompanyBox>
        <Title>이름</Title>
        <Company>회사</Company>
      </TitleCompanyBox>
    </SummaryContainer>
  </Container>
);

export default Compare;
