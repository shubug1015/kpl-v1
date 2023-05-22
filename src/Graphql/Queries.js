import gql from "graphql-tag";
import { LAPTOP_FRAGMENT } from "./Fragments";

export const GET_LAPTOPS = gql`
  {
    laptops @client {
      ...LaptopParts
    }
  }
  ${LAPTOP_FRAGMENT}
`;

export const GET_LAPTOP = gql`
  query getLaptop($id: Int!) {
    laptop(id: $id) @client {
      ...LaptopParts
    }
  }
  ${LAPTOP_FRAGMENT}
`;
