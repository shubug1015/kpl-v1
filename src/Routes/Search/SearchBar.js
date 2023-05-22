import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";
import Loader from "Components/Loader";

const Container = styled.div`
  padding: 20px;
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

const SearchBar = ({ itemNum, page, url, searchTerm }) => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();

    if (term !== "") {
      history.push(`/search/?search=${term}&page=1`);
      window.location.reload();
    }
  };

  const updateTerm = event => {
    const {
      target: { value }
    } = event;

    setTerm(value);
  };

  return (
    // <>
    //   {searchTerm === "" ? (
    //     <Loader />
    //   ) : (
    <Container>
      <ResultContainer>
        <Helmet>
          <title>Search | IT다</title>
        </Helmet>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder={"원하는 상품명을 검색해 보세요!"}
            value={term}
            onChange={updateTerm}
          />
        </Form>
      </ResultContainer>
    </Container>
    //   )}
    // </>
  );
};

export default SearchBar;
