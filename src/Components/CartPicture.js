import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import DeleteFromCart from "./DeleteCart/DeleteFromCart";

const Container = styled.div`
  font-size: 12px;
  width: 12vw;
  height: 128px;
`;

const BtnContainer = styled.div`
  /* background-color: red; */
  text-align: left;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  /* background-color: blue; */
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 80px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
`;

const Name = styled.span`
  margin-bottom: 3px;
  margin-right: 30px;
  font-size: 16px;
`;

const CartPicture = ({ id, imageUrl, name, brand }) => {
  return (
    <>
      <Container key={id} id={id}>
        {brand}
        <BtnContainer>
          <DeleteFromCart key={id} id={id} bgUrl={`${imageUrl}`} name={name} />
        </BtnContainer>
        <ImageContainer>
          <Image bgUrl={`${imageUrl}`} />
        </ImageContainer>
        <Name>{name}</Name>
      </Container>
    </>
  );
};

CartPicture.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string
};

export default CartPicture;
