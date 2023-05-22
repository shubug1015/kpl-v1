import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { FaYoutube } from "react-icons/fa";
import { FaWonSign } from "react-icons/fa";
const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 15px;
  padding-top: 20px;
  padding-left: 40px;
`;

const ItemContainer = styled.div`
  margin-top: 40px;
  display: grid;
`;

const Item = styled.span`
  font-size: 24px;
  font-weight: bord;
  margin-bottom: 15px;
  margin-left: 50px;
`;

const BtnContainer = styled.div`
  display: flex;
`;

const BtnText = styled.div`
  color: black;
  font-size: 20px;
  margin-left: 20px;
  padding-top: 15px;
  display: flex;
  &:focus,
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const Youtube = styled.a`
  font-size: 50px;
  color: red;
  margin-left: 50px;
  &:focus,
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

const ComparePrice = styled.a`
  font-size: 35px;
  color: black;
  margin-left: 50px;
  &:focus,
  &:hover {
    text-decoration: none;
    color: yellow;
  }
`;

const PhoneDetailPresenter = ({ imageUrl, detail, loading, error, name }) => {
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <Content>
        <Cover bgUrl={detail.data.image} />
        <Data>
          <Title>{detail.data.name}</Title>
          <ItemContainer>
            <Item>회사 : {detail.data.brand}</Item>
            <Item>정가 : {detail.data.price}만원</Item>
            <Item>Processor : {detail.data.processor}</Item>
            <Item>Graphic : {detail.data.graphics}</Item>
            <Item>Memory : {detail.data.memory}</Item>
            <Item>Storage : {detail.data.storage}</Item>
            <Item>무게 : {detail.data.weight}</Item>
            <Item>
              <Youtube
                href={`https://www.youtube.com/results?search_query=${detail.data.name}`}
                target="_blank"
              >
                <BtnContainer>
                  <FaYoutube />
                  <BtnText>이 제품! 유튜브에서 보고싶으세요?</BtnText>
                </BtnContainer>
              </Youtube>
            </Item>
            <Item>
              <ComparePrice
                href={`https://search.shopping.naver.com/search/all.nhn?query=${detail.data.name}`}
                target="_blank"
              >
                <BtnContainer>
                  <FaWonSign />
                  <BtnText>네이버에서 가격비교 해보세요!</BtnText>
                </BtnContainer>
              </ComparePrice>
            </Item>
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );
};

PhoneDetailPresenter.propTypes = {
  detail: PropTypes.object,
  imageUrl: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default PhoneDetailPresenter;
