import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LaptopSmallHeader from "./List/LaptopSmallHeader";
import TabletSmallHeader from "./List/TabletSmallHeader";
import PhoneSmallHeader from "./List/PhoneSmallHeader";
import OthersSmallHeader from "./List/OthersSmallHeader";

const MenuContainer = styled.nav`
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 50vw;
  height: ${({ open }) => (open ? "180vw" : 0)};
  transition: transform 0.5s ease-in-out;
  background-color: ${props => props.theme.mainColor};
  position: absolute;
  top: 7.5vh;
`;

const Div = styled.div`
  outline: none;
  &:hover {
    outline: none;
  }
`;

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <MenuContainer open={open} aria-hidden={!isHidden} {...props}>
      <Div tabIndex={tabIndex}>
        <LaptopSmallHeader />
      </Div>
      <Div tabIndex={tabIndex}>
        <TabletSmallHeader />
      </Div>
    </MenuContainer>
  );
};

Menu.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Menu;
