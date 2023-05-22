import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import TabletPicture from "Components/TabletPicture";
import PageBar from "Components/PageBar";
import TabletSearchFilter from "Components/TabletSearchFilter";

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
  background-color: #ffffff;
`;
const TabletBrandPresenter = ({
  brandTablet,
  error,
  loading,
  brand,
  itemNum,
  page,
  url,
}) => (
  <>
    <Helmet>
      <title>노북다지 | Tablets | {`${brand}`}</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <TabletSearchFilter brand={`${brand}`} />
        </FilterContainer>
        {brandTablet && brandTablet.length > 0 && (
          <ItemContainer>
            {brandTablet.map((brand) => (
              <TabletPicture
                key={brand.id}
                id={brand.id}
                imageUrl={brand.image}
                name={brand.name}
                brand={brand.brand}
                price={brand.price}
                inch={brand.inch}
                width={brand.width}
                height={brand.height}
                weight={brand.weight}
                two_in_one={brand.two_in_one}
                os={brand.os}
                panel={brand.panel}
                display={brand.display}
                ppi={brand.ppi}
                ratio={brand.ratio}
                multi_touch={brand.multi_touch}
                front_cam={brand.front_cam}
                back_cam={brand.back_cam}
                processor={brand.processor}
                memory={brand.memory}
                graphics={brand.graphics}
                storage={brand.storage}
                pen={brand.pen}
                usb={brand.usb}
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

TabletBrandPresenter.propTypes = {
  brandTablet: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TabletBrandPresenter;
