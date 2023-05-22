import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const Container = styled.div`
  font-size: 12px;
  color: #ffffff;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 250px;
  width: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 4px;
  background-position: center center;
  transition: opacity 0.2s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
  }
  background-image: cover;
`;

const Company = styled.span`
  font-size: 18px;
  color: black;
`;

const Name = styled.span`
  display: block;
  margin-bottom: 12px;
  margin-top: 7px;
  font-size: 22px;
  color: black;
`;

const Price = styled.span`
  font-size: 14px;
  color: black;
`;

const Btns = styled.div`
  display: flex;
`;

const ExtraBtn = styled.div``;

const Youtube = styled.a`
  color: red;
  font-size: 25px;
  text-decoration: none;
  margin-right: 7px;
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

const ComparePrice = styled.a`
  font-size: 15px;
  color: #333333;
  padding: 2px;
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: none;
    color: #333333;
  }
`;

const SLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration: none;
    opacity: 0.3;
    color: #ffffff;
  }
`;

const PhonePicture = ({
  id,
  imageUrl,
  brand,
  name,
  price,
  processor,
  graphics,
  memory,
  storage,
  weight
}) => (
  <Container>
    <SLink to={`/phones/${id}`}>
      <ImageContainer>
        <Image bgUrl={`${imageUrl}`} />
      </ImageContainer>
      <Company>{brand}</Company>
      <Name>{name}</Name>
      <Price>정가: {price}만원</Price>
    </SLink>
    <Btns>
      <ExtraBtn>
        <Youtube
          href={`https://www.youtube.com/results?search_query=${name}`}
          target="_blank"
        >
          <FaYoutube />
        </Youtube>
        <ComparePrice
          href={`https://search.shopping.naver.com/search/all.nhn?query=${name}`}
          target="_blank"
        >
          <AiOutlineDollar size={30} color={"#FDE032"} />
        </ComparePrice>
      </ExtraBtn>
    </Btns>
  </Container>
);

PhonePicture.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  company: PropTypes.string.isRequired,
  name: PropTypes.string,
  price: PropTypes.number,
  isPhone: PropTypes.bool
};

export default PhonePicture;
