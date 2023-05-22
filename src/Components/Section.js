import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.div`
  height: 5vh;
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: 900;
  margin-top: 30px;
  background-color: #f9e7bc;
`;

const Grid = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 77vw;
`;

const Section = ({ brand, children }) => (
  <Container>
    <Title>{brand}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  brand: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
