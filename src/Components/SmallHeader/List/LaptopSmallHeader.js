import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBContainer
} from "mdbreact";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
`;

const MenuContainer = styled.div`
  background-color: #ffffff;
  width: 50vw;
  margin-top: 10px;
`;

const Button = styled.div`
  margin-top: 25px;
`;

const ButtonContainer = styled.div`
  color: #ffffff;
  font-weight: 600;
  margin-left: 2vw;
  cursor: pointer;
  &:hover {
    ${Button} {
      opacity: 0.3;
    }
  }
`;

const SLink = styled.a`
  font-size: 15px;
  text-decoration: none;
  color: black;
  margin-left: 5vw;
  margin-top: 10px;
  width: 0;
  display: inline-block;
  &:focus,
  &:hover {
    text-decoration: none;
    color: black;
    opacity: 0.3;
  }
`;

export default class LaptopSmallHeader extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <Container>
        <MDBContainer
          style={{
            padding: 0
          }}
        >
          <MDBNavbar
            style={{
              padding: 0,
              marginTop: "40px"
            }}
          >
            <MDBContainer
              style={{
                padding: 0
              }}
            >
              <ButtonContainer onClick={this.toggleCollapse("navbarCollapse1")}>
                <Button>노트북</Button>
              </ButtonContainer>
              <MDBCollapse
                id="navbarCollapse1"
                isOpen={this.state.collapseID}
                navbar
              >
                <MenuContainer>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <SLink href="/laptops/apple?page=1">Apple</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/samsung?page=1">Samsung</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/lg?page=1">LG</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/microsoft?page=1">Microsoft</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/hansung?page=1">Hansung</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/hp?page=1">hp</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/asus?page=1">Asus</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/lenovo?page=1">Lenovo</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/dell?page=1">Dell</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/acer?page=1">Acer</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/msi?page=1">MSI</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/laptops/razer?page=1">Razer</SLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MenuContainer>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Container>
    );
  }
}
