import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import LaptopSearchFilter from "Components/LaptopSearchFilter";
import Loader from "Components/Loader";
import Message from "Components/Message";
import LaptopPicture from "Components/LaptopPicture";
import PageBar from "Components/PageBar";

const Container = styled.div`
  padding-top: 40px;
  padding-left: 20px;
`;

const FilterContainer = styled.div`
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 30px;
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
`;

const LaptopPresenter = ({ laptops, itemNum, error, loading, page, url }) => (
  <>
    <Helmet>
      <title>노북다지 | Laptops</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <LaptopSearchFilter />
        </FilterContainer>
        {laptops && laptops.length > 0 && (
          <ItemContainer>
            {laptops.map((laptop) => (
              <LaptopPicture
                key={laptop.id}
                id={laptop.id}
                imageUrl={laptop.image}
                name={laptop.name}
                brand={laptop.brand}
                price={laptop.price}
                inch={laptop.inch}
                weight={laptop.weight}
                processor={laptop.processor}
                memory={laptop.memory}
                graphics={laptop.graphics}
                storage={laptop.storage}
                display={laptop.display}
                usb={laptop.usb}
                webcam={laptop.webcam}
                purpose={laptop.purpose}
                item={laptop.item}
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

LaptopPresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default LaptopPresenter;
