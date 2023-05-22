import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_LAPTOPS } from "Graphql/Queries";
import CartPicture from "./CartPicture";
import CompareBtn from "./CompareBtn";

const BasketContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: -1px 4px 12px 1px rgba(0, 0, 0, 0.3);
  right: 0;
  top: 100px;
  width: 17vw;
  height: 650px;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 5px;
  overflow: auto;
  color: #333333;
`;

const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: ${props => props.theme.borderBtm};
  font-size: 20px;
`;

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  /* background-color: pink; */
`;

const CompareContainer = styled.div`
  margin-top: 40px;
`;

const SLink = styled(Link)``;

const Basket = () => {
  return (
    <BasketContainer>
      <Title>비교하기</Title>
      <Query query={GET_LAPTOPS}>
        {({ data }) =>
          data.laptops
            ? data.laptops.map(laptop => (
                <>
                  <CartContainer key={laptop.id}>
                    <CartPicture
                      key={laptop.id}
                      id={laptop.id}
                      imageUrl={laptop.image}
                      name={laptop.name}
                      isLaptop={true}
                    />
                  </CartContainer>
                </>
              ))
            : null
        }
      </Query>
      <CompareContainer>
        <SLink to="/compare">
          <CompareBtn />
        </SLink>
      </CompareContainer>
    </BasketContainer>
  );
};

export default Basket;
