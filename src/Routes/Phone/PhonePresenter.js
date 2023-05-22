import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import PhoneSearchFilter from "Components/PhoneSearchFilter";
import Loader from "Components/Loader";
import Message from "Components/Message";
import PhonePicture from "Components/PhonePicture";
import PageBar from "Components/PageBar";

const Container = styled.div`
  padding: 20px;
`;

const FilterContainer = styled.div`
  padding: 20px;
  margin-top: 50px;
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

const PhonePresenter = ({ phones, itemNum, error, loading, page, url }) => (
  <>
    <Helmet>
      <title>Phone | IT다</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <PhoneSearchFilter />
        </FilterContainer>
        {phones && phones.length > 0 && (
          <ItemContainer>
            {phones.map(phone => (
              <PhonePicture
                key={phone.id}
                id={phone.id}
                imageUrl={phone.image}
                brand={phone.brand}
                name={phone.name}
                price={phone.price}
                isPhone={true}
                processor={phone.processor}
                graphics={phone.graphics}
                memory={phone.memory}
                storage={phone.storage}
                weight={phone.weight}
              />
            ))}
          </ItemContainer>
        )}

        <PageBar itemNum={itemNum} currentpage={page} url={url} />
        {error && <Message color="e74c3c" text={error} />}
      </Container>
    )}
  </>
);

PhonePresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default PhonePresenter;
