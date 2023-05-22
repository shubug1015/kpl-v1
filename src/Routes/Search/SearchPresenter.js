import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import LaptopPicture from "Components/LaptopPicture";
import TabletPicture from "Components/TabletPicture";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 20px;
`;

const ItemContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  background-color: #ffffff;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 65vw;
  margin-top: 80px;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 65vw;
  height: 8vh;
  margin-left: 80px;
  border: 3px #161616 solid;
  border-radius: 3px;
  color: #161616;
  ::placeholder {
    color: #161616;
  }
`;

const ResultContainer = styled.div``;

const SearchPresenter = ({
  searchResults,
  loading,
  error,
  searchTerm,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <ResultContainer>
      <Helmet>
        <title>Search | IT다</title>
      </Helmet>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="원하는 상품명을 검색해 보세요!"
          value={searchTerm}
          onChange={updateTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {console.log(searchResults)}
          {searchResults && searchResults.length > 0 && (
            <ItemContainer>
              {console.log(searchResults)}
              {searchResults.map(item => (
                <>
                  {item.type == "laptop" ? (
                    <LaptopPicture
                      key={item.id}
                      id={item.id}
                      imageUrl={item.image}
                      brand={item.brand}
                      name={item.name}
                      price={item.price}
                      isLaptop={true}
                      inch={item.inch}
                      weight={item.weight}
                      processor={item.processor}
                      memory={item.memory}
                      graphics={item.graphics}
                      storage={item.storage}
                      display={item.display}
                      usb={item.usb}
                      webcam={item.webcam}
                      purpose={item.purpose}
                    />
                  ) : (
                    <TabletPicture
                      key={item.id}
                      id={item.id}
                      imageUrl={item.image}
                      brand={item.brand}
                      name={item.name}
                      price={item.price}
                      isTablet={true}
                      inch={item.inch}
                      width={item.width}
                      height={item.height}
                      weight={item.weight}
                      two_in_one={item.two_in_one}
                      os={item.os}
                      panel={item.panel}
                      display={item.display}
                      ppi={item.ppi}
                      ratio={item.ratio}
                      multi_touch={item.multi_touch}
                      front_cam={item.front_cam}
                      back_cam={item.back_cam}
                      processor={item.processor}
                      memory={item.memory}
                      graphics={item.graphics}
                      storage={item.storage}
                      pen={item.pen}
                      usb={item.usb}
                    />
                  )}
                </>
              ))}
            </ItemContainer>
          )}

          {error && <Message color="#e74c3c" text={error} />}
          {searchResults && searchResults.length === 0 && (
            <Message text="검색결과가 존재하지 않아요" color="#95a5a6" />
          )}
        </>
      )}
    </ResultContainer>
  </Container>
);

// searchTerm 이라는 요소를 갖기 위해 Input에 value추가

// Enter키의 기본 값은 submit. -> 브라우저가 페이지를
// 새로고침하고, state를 잃어버림
// -> onSubmit={handleSubmit}에서
// handleSubmit에 event.preventDefault(); 추가

SearchPresenter.propTypes = {
  searchResults: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
