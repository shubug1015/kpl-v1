import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoIosLaptop } from "react-icons/io";
import AddToCart from "./AddCart/AddToCart";
import LaptopDetail from "Routes/Laptop/LaptopDetail";

const Container = styled.div`
  font-size: 12px;
  color: #ffffff;
  width: 305px;
  height: 395px;
  margin-bottom: 50px;
  background-color: #ffffff;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 4px 12px 1px rgba(2, 8, 53, 0.5);
`;

const DetailTab = styled.div`
  cursor: pointer;
`;

const DetailContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 93vh;
  left: 0;
  top: 7vh;
  color: #333333;
  background-color: rgba(255, 255, 255, 0.85);
  z-index: 2;
`;

const CompanyTitle = styled.div`
  display: flex;
  margin-top: -15px;
  margin-left: 16px;
`;

const Company = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: black;
  margin-top: 3.3px;
  margin-left: 10px;
`;

const Item = styled.div`
  &:hover {
    text-decoration: none;
    opacity: 0.5;
  }
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 200px;
  width: 300px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  background-image: cover;
  margin-bottom: -12px;
  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
`;

const Name = styled.div`
  height: 40px;
  font-size: 21px;
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-size: 16px;
  color: black;
  margin-left: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 100px;
  margin-left: 20px;
`;

const IconUnderline = styled.span`
  position: absolute;
  border-top: ${props => props.theme.grayBorder};
  width: 265px;
`;

const Icon = styled.div`
  color: #161616;
  margin-right: 15px;
  margin-top: 12px;
  font-size: 15.5px;
  color: #053569;
  &:hover {
    text-decoration: none;
    opacity: 0.7;
  }
`;

const Youtube = styled.a`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

const ComparePrice = styled.a`
  color: #333333;
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: none;
    color: #333333;
  }
`;

const AddBtn = styled.span`
  position: relative;
  left: 258px;
  top: 12px;
`;

const LaptopPicture = ({
  id,
  imageUrl,
  name,
  brand,
  price,
  inch,
  weight,
  processor,
  memory,
  graphics,
  storage,
  display,
  usb,
  webcam,
  purpose,
  item
}) => {
  const [detail, setDetail] = useState(false);
  const toggleDetail = () => setDetail(!detail);

  return (
    <Container>
      <AddBtn>
        <AddToCart
          id={id}
          bgUrl={`${imageUrl}`}
          name={name}
          brand={brand}
          price={price}
          inch={inch}
          weight={weight}
          processor={processor}
          memory={memory}
          graphics={graphics}
          storage={storage}
          display={display}
          usb={usb}
          webcam={webcam}
          purpose={purpose}
          item={item}
        />
      </AddBtn>
      <CompanyTitle>
        <IoIosLaptop size={27} color={"black"} />
        <Company>{brand}</Company>
      </CompanyTitle>
      <DetailTab onClick={toggleDetail}>
        {detail ? (
          <>
            <DetailContainer>
              <LaptopDetail
                id={id}
                bgUrl={`${imageUrl}`}
                name={name}
                brand={brand}
                price={price}
                inch={inch}
                weight={weight}
                processor={processor}
                memory={memory}
                graphics={graphics}
                storage={storage}
                display={display}
                usb={usb}
                webcam={webcam}
                purpose={purpose}
                item={item}
              />
            </DetailContainer>
            <ImageContainer>
              <Image bgUrl={`${imageUrl}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Price>정가: {price}만원</Price>
            <IconContainer>
              <IconUnderline />
              <Youtube
                href={`https://www.youtube.com/results?search_query=${name}`}
                target="_blank"
              >
                <Icon>#유튜브로 둘러보기</Icon>
              </Youtube>
              <ComparePrice
                href={`https://search.shopping.naver.com/search/all.nhn?query=${name}`}
                target="_blank"
              >
                <Icon>#최저가 비교하기</Icon>
              </ComparePrice>
            </IconContainer>
          </>
        ) : (
          <>
            <Item>
              <ImageContainer>
                <Image bgUrl={`${imageUrl}`} />
              </ImageContainer>
              <Name>{name}</Name>
              <Price>정가: {price}만원</Price>
            </Item>
            <IconContainer>
              <IconUnderline />
              <Youtube
                href={`https://www.youtube.com/results?search_query=${name}`}
                target="_blank"
              >
                <Icon>#유튜브로 둘러보기</Icon>
              </Youtube>
              <ComparePrice
                href={`https://search.shopping.naver.com/search/all.nhn?query=${name}`}
                target="_blank"
              >
                <Icon>#최저가 비교하기</Icon>
              </ComparePrice>
            </IconContainer>
          </>
        )}
      </DetailTab>
    </Container>
  );
};

LaptopPicture.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  inch: PropTypes.string,
  weight: PropTypes.string,
  processor: PropTypes.string,
  memory: PropTypes.string,
  graphics: PropTypes.string,
  storage: PropTypes.string,
  display: PropTypes.string,
  usb: PropTypes.string,
  webcam: PropTypes.string,
  purpose: PropTypes.string,
  isLaptop: PropTypes.bool
};

export default LaptopPicture;
