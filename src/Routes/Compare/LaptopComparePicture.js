import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  margin-top: 90px;
  :not(:last-child) {
    margin-right: 80px;
  }
  text-align: center;
  width: 20vw;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 12vw;
  width: 20vw;
  background-size: cover;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  transition: opacity 0.2s linear;
  text-align: center;
  display: inline-block;
`;

const Name = styled.div`
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 30px;
  height: 12vh;
`;

const Brand = styled.div`
  margin-bottom: 70px;
`;

const ItemContainer = styled.div`
  margin-bottom: 70px;
  font-size: 30px;
  font-weight: 600;
  height: 12vh;
`;

const Item = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-top: 15px;
`;

const TabletComparePicture = ({
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
  return (
    <>
      <Container key={id} id={id}>
        <ImageContainer>
          <Image bgUrl={`${imageUrl}`} />
        </ImageContainer>
        <Name>{name}</Name>
        <Brand>{brand}</Brand>
        <ItemContainer>{price}만원</ItemContainer>
        <ItemContainer>
          {inch}
          <Item>인치</Item>
        </ItemContainer>
        <ItemContainer>{weight}</ItemContainer>
        <ItemContainer>
          {processor}
          <Item>프로세서</Item>
        </ItemContainer>
        <ItemContainer>
          {memory}
          <Item>메모리</Item>
        </ItemContainer>
        <ItemContainer>
          {graphics}
          <Item>그래픽</Item>
        </ItemContainer>
        <ItemContainer>
          {storage}
          <Item>저장공간</Item>
        </ItemContainer>
        <ItemContainer>
          {display}
          <Item>디스플레이</Item>
        </ItemContainer>
        <ItemContainer>
          {usb}
          <Item>USB</Item>
        </ItemContainer>
        <ItemContainer>
          {webcam}
          <Item>웹캠 유무</Item>
        </ItemContainer>
        <ItemContainer>
          {purpose}
          <Item>용도</Item>
        </ItemContainer>
      </Container>
    </>
  );
};

TabletComparePicture.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string
};

export default TabletComparePicture;
