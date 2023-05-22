import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import PhonePicture from "Components/PhonePicture";
import PageBar from "Components/PageBar";
import PhoneSearchFilter from "Components/PhoneSearchFilter";

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
const PhoneBrandPresenter = ({
  brandPhone,
  error,
  loading,
  brand,
  itemNum,
  page,
  url
}) => (
  <>
    <Helmet>
      <title>Phone | {`${brand}`} | IT다</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <PhoneSearchFilter brand={`${brand}`} />
        </FilterContainer>
        {brandPhone && brandPhone.length > 0 && (
          <ItemContainer>
            {brandPhone.map(brand => (
              <PhonePicture
                key={brand.id}
                id={brand.id}
                imageUrl={brand.image}
                brand={brand.brand}
                name={brand.name}
                price={brand.price}
                isPhone={true}
                processor={brand.processor}
                graphics={brand.graphics}
                memory={brand.memory}
                storage={brand.storage}
                weight={brand.weight}
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

PhoneBrandPresenter.propTypes = {
  brandPhone: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default PhoneBrandPresenter;
