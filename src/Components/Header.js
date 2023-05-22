import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaSearch } from "react-icons/fa";
import SmallHeader from "./SmallHeader/SmallHeader";
import "./Header.css";

const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  background-color: ${(props) => props.theme.mainColor};
  box-shadow: 1px 4px 12px 1px rgba(0, 0, 0, 0.1);
  color: ${(props) => props.theme.whiteColor};
  width: 100vw;
  height: 60px;
  top: 0;
`;

const SmallHeaderContianer = styled.div`
  @media only screen and (min-width: 769px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 30px;
  text-align: right;
  width: 20vw;
  @media only screen and (max-width: 768px) {
    width: 50vw;
    margin-left: 20.5vw;
    text-align: center;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderList = styled.div`
  color: ${(props) => props.theme.whiteColor};
  font-weight: 200;
  width: 130px;
  text-align: center;
`;

const SectionContainer = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  top: -23px;
  background-color: ${(props) => props.theme.whiteColor};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Sections = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  width: 130px;
  text-align: center;
`;

const DropdownItemContainer = styled.div`
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

const Search = styled.div`
  text-align: left;
  width: 20vw;
  font-size: 20px;
  color: ${(props) => props.theme.whiteColor};
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const SLink = styled(Link)`
  &:focus,
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.whiteColor};
    opacity: 0.8;
  }
`;

const SearchLink = styled.a`
  &:focus,
  &:hover {
    text-decoration: none;
    color: ${(props) => props.theme.whiteColor};
    opacity: 0.8;
  }
`;

const Header = () => {
  const [laptopTab, setLaptopTab] = useState(false);
  const laptopToggle = () => setLaptopTab(!laptopTab);

  return (
    <HeaderContainer>
      <SmallHeaderContianer>
        <SmallHeader />
      </SmallHeaderContianer>
      <SLink to="/">
        <Title>노북다지</Title>
      </SLink>
      <Item>
        <ButtonDropdown
          isOpen={laptopTab}
          onMouseEnter={laptopToggle}
          onMouseLeave={laptopToggle}
        >
          <DropdownToggle
            caret
            color="white"
            style={{
              width: "60vw",
              height: "70px",
              display: "flex",
              justifyContent: "center",
              boxShadow: "none",
            }}
          >
            <HeaderList>노트북</HeaderList>
            <HeaderList>태블릿</HeaderList>
            <HeaderList>사용방법</HeaderList>
            {/* <HeaderList>스마트폰</HeaderList> */}
            {/* <HeaderList>기타 IT상품</HeaderList> */}
          </DropdownToggle>
          <DropdownMenu>
            <SectionContainer>
              <Sections>
                <Section>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/apple?page=1">
                      Apple
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/samsung?page=1">
                      Samsung
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/lg?page=1">LG</DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/microsoft?page=1">
                      Microsoft
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/hansung?page=1">
                      Hansung
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/hp?page=1">hp</DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/asus?page=1">
                      Asus
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/lenovo?page=1">
                      Lenovo
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/dell?page=1">
                      DELL
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/acer?page=1">
                      Acer
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/msi?page=1">MSI</DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/laptops/razer?page=1">
                      Razer
                    </DropdownItem>
                  </DropdownItemContainer>
                </Section>
                <Section>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/apple?page=1">
                      Apple
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/samsung?page=1">
                      Samsung
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/lg?page=1">LG</DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/microsoft?page=1">
                      Microsoft
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/acer?page=1">
                      Acer
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/asus?page=1">
                      Asus
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/dell?page=1">
                      DELL
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/hp?page=1">hp</DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/lenovo?page=1">
                      Lenovo
                    </DropdownItem>
                  </DropdownItemContainer>
                  <DropdownItemContainer>
                    <DropdownItem href="/tablets/huawei?page=1">
                      Huawei
                    </DropdownItem>
                  </DropdownItemContainer>
                </Section>
                <Section>
                  <DropdownItemContainer>
                    <DropdownItem href="/how_to_use">이용방법</DropdownItem>
                  </DropdownItemContainer>
                </Section>
                {/* <Sections>
                  <Section>
                    <DropdownItem href="/phones/apple?page=1">
                      Apple
                    </DropdownItem>
                    <DropdownItem href="/phones/samsung?page=1">
                      Samsung
                    </DropdownItem>
                    <DropdownItem href="/phones/lg?page=1">LG</DropdownItem>
                  </Section>
                </Sections> */}
                {/* <Sections>
                  <Section>
                    <DropdownItem href="/earphones">무선 이어폰</DropdownItem>
                    <DropdownItem href="/watches">스마트워치</DropdownItem>
                  </Section>
                </Sections> */}
              </Sections>
            </SectionContainer>
          </DropdownMenu>
        </ButtonDropdown>
      </Item>
      <SearchLink href="/search">
        <Search>
          <FaSearch /> 제품 검색하기
        </Search>
      </SearchLink>
    </HeaderContainer>
  );
};

export default Header;
