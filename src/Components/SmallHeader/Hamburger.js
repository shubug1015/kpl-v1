import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const HamburgerContainer = styled.button`
  position: relative;
  left: 15px;
  top: 25px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  span {
    width: 20px;
    height: 2px;
    background: ${props => props.theme.whiteColor};
    transition: all 0.3s linear;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Hamburger = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <HamburgerContainer
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </HamburgerContainer>
  );
};

Hamburger.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
};

export default Hamburger;
