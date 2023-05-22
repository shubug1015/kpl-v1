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

const Button = styled.div``;

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
  width: 10vw;
  display: inline-block;
  &:focus,
  &:hover {
    text-decoration: none;
    color: black;
    opacity: 0.3;
  }
`;

export default class OthersSmallHeader extends Component {
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
            light
          >
            <MDBContainer
              style={{
                padding: 0
              }}
            >
              <ButtonContainer onClick={this.toggleCollapse("navbarCollapse1")}>
                <Button>기타 IT상품</Button>
              </ButtonContainer>
              <MDBCollapse
                id="navbarCollapse1"
                isOpen={this.state.collapseID}
                navbar
              >
                <MenuContainer>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <SLink href="/earphones">무선이어폰</SLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <SLink href="/watches">스마트워치</SLink>
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
