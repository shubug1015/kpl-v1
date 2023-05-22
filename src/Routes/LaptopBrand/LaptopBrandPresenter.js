import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import LaptopPicture from "Components/LaptopPicture";
import PageBar from "Components/PageBar";
import LaptopSearchFilter from "Components/LaptopSearchFilter";

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
const LaptopBrandPresenter = ({
  brandLaptops,
  error,
  loading,
  brand,
  itemNum,
  page,
  url,
}) => (
  <>
    <Helmet>
      <title>노북다지 | Laptops | {`${brand}`}</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <LaptopSearchFilter brand={`${brand}`} />
        </FilterContainer>
        {brandLaptops && brandLaptops.length > 0 && (
          <ItemContainer>
            {brandLaptops.map((brand) => (
              <LaptopPicture
                key={brand.id}
                id={brand.id}
                imageUrl={brand.image}
                name={brand.name}
                brand={brand.brand}
                price={brand.price}
                inch={brand.inch}
                weight={brand.weight}
                processor={brand.processor}
                memory={brand.memory}
                graphics={brand.graphics}
                storage={brand.storage}
                display={brand.display}
                usb={brand.usb}
                webcam={brand.webcam}
                purpose={brand.purpose}
                item={brand.item}
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
// {itemNum}과 {page}를 itemNum과 currentpage 이름으로 넘겨줌 (PageBar로)
LaptopBrandPresenter.propTypes = {
  brandLaptops: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default LaptopBrandPresenter;
