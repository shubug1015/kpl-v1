import React from "react";
import styled from "styled-components";
import AddToCart from "Components/AddCart/AddToCart";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 75vw;
  padding-left: 10px;
  background-color: ${props => props.theme.whiteColor};
  color: ${props => props.theme.blackColor};
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.4);
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 80%;
  padding-top: 30px;
`;

const Cover = styled.div`
  width: 400px;
  height: 500px;
  background-image: url(${props => props.bgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 20px;
`;

const Title = styled.div`
  display: flex;
`;

const Name = styled.div`
  font-size: 30px;
  width: 35vw;
  margin-right: 30px;
`;

const AddBtn = styled.div``;

const ItemContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50vw;
`;

const Item = styled.div`
  width: 15vw;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 25px;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  padding: 5px;
  border-bottom: ${props => props.theme.grayBorder};
  text-align: center;
`;

const ItemText = styled.div`
  font-size: 25px;
  font-weight: 400;
  padding: 5px;
  height: 7vh;
  padding-top: 2vh;
  text-align: center;
`;

const LaptopDetail = ({
  id,
  bgUrl,
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
  purpose
}) => {
  return (
    <Container>
      <Content>
        <Cover bgUrl={`${bgUrl}`} />
        <Data>
          <Title>
            <Name>{name}</Name>
            <AddBtn>
              <AddToCart
                id={id}
                bgUrl={`${bgUrl}`}
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
              />
            </AddBtn>
          </Title>
          <ItemContainer>
            <Item>
              <ItemTitle>브랜드</ItemTitle>
              <ItemText>{brand}</ItemText>
            </Item>
            <Item>
              <ItemTitle>정가</ItemTitle>
              <ItemText>{price}만원</ItemText>
            </Item>
            <Item>
              <ItemTitle>크기</ItemTitle>
              <ItemText>{inch}인치</ItemText>
            </Item>
            <Item>
              <ItemTitle>무게</ItemTitle>
              <ItemText>{weight}</ItemText>
            </Item>
            <Item>
              <ItemTitle>CPU</ItemTitle>
              <ItemText>{processor}</ItemText>
            </Item>
            <Item>
              <ItemTitle>메모리</ItemTitle>
              <ItemText>{memory}</ItemText>
            </Item>
            <Item>
              <ItemTitle>그래픽</ItemTitle>
              <ItemText>{graphics}</ItemText>
            </Item>
            <Item>
              <ItemTitle>용량</ItemTitle>
              <ItemText>{storage}</ItemText>
            </Item>
            <Item>
              <ItemTitle>디스플레이</ItemTitle>
              <ItemText>{display}</ItemText>
            </Item>
            <Item>
              <ItemTitle>USB</ItemTitle>
              <ItemText>{usb}</ItemText>
            </Item>
            <Item>
              <ItemTitle>웹캠 유•무</ItemTitle>
              <ItemText>{webcam}</ItemText>
            </Item>
            <Item>
              <ItemTitle>용도</ItemTitle>
              <ItemText>{purpose}</ItemText>
            </Item>
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );
};

export default LaptopDetail;
