import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_LAPTOPS } from "Graphql/Queries";

const Button = styled.button`
  font-size: 15px;
  width: 80px;
  height: 30px;
  padding: 5px;
  background-color: ${props => props.theme.mainColor};
  border: none;
  border-radius: 2px;
  color: ${props => props.theme.whiteColor};
`;

const CompareBtn = () => (
  <Query query={GET_LAPTOPS}>
    {({ data }) => (data.laptops.length > 1 ? <Button>비교하기</Button> : null)}
  </Query>
);

export default CompareBtn;
