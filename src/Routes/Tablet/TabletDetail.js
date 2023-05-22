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

const TabletDetail = ({
  id,
  bgUrl,
  name,
  brand,
  price,
  inch,
  width,
  height,
  weight,
  two_in_one,
  os,
  panel,
  display,
  ppi,
  ratio,
  multi_touch,
  front_cam,
  back_cam,
  processor,
  memory,
  graphics,
  storage,
  pen,
  usb
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
                width={width}
                height={height}
                weight={weight}
                two_in_one={two_in_one}
                os={os}
                panel={panel}
                display={display}
                ppi={ppi}
                ratio={ratio}
                multi_touch={multi_touch}
                front_cam={front_cam}
                back_cam={back_cam}
                processor={processor}
                memory={memory}
                graphics={graphics}
                storage={storage}
                pen={pen}
                usb={usb}
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
              <ItemTitle>가로/세로 길이</ItemTitle>
              <ItemText>{width}</ItemText>
              <ItemText>{height}</ItemText>
            </Item>
            <Item>
              <ItemTitle>2in1</ItemTitle>
              <ItemText>{two_in_one}</ItemText>
            </Item>
            <Item>
              <ItemTitle>운영체제</ItemTitle>
              <ItemText>{os}</ItemText>
            </Item>
            <Item>
              <ItemTitle>패널</ItemTitle>
              <ItemText>{panel}</ItemText>
            </Item>
            <Item>
              <ItemTitle>디스플레이</ItemTitle>
              <ItemText>{display}</ItemText>
            </Item>
            <Item>
              <ItemTitle>ppi</ItemTitle>
              <ItemText>{ppi}</ItemText>
            </Item>
            <Item>
              <ItemTitle>화면비율</ItemTitle>
              <ItemText>{ratio}</ItemText>
            </Item>
            <Item>
              <ItemTitle>멀티터치</ItemTitle>
              <ItemText>{multi_touch}</ItemText>
            </Item>
            <Item>
              <ItemTitle>카메라 화소</ItemTitle>
              <ItemText>{front_cam}</ItemText>
              <ItemText>{back_cam}</ItemText>
            </Item>
            <Item>
              <ItemTitle>프로세서</ItemTitle>
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
              <ItemTitle>펜</ItemTitle>
              <ItemText>{pen}</ItemText>
            </Item>
            <Item>
              <ItemTitle>USB</ItemTitle>
              <ItemText>{usb}</ItemText>
            </Item>
          </ItemContainer>
        </Data>
      </Content>
    </Container>
  );
};

export default TabletDetail;
