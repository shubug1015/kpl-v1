import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import TabletPicture from "Components/TabletPicture";
import TabletSearchFilter from "Components/TabletSearchFilter";
import PageBar from "Components/PageBar";

const Container = styled.div`
  padding: 20px;
`;

const FilterContainer = styled.div`
  padding: 20px;
  margin-top: 30px;
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

const TabletFilterResultPresenter = ({
  filteredTablets,
  error,
  loading,
  itemNum,
  page,
  url,
}) => (
  <>
    <Helmet>
      <title>노북다지 | Tablets</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <FilterContainer>
          <TabletSearchFilter />
        </FilterContainer>
        {filteredTablets && filteredTablets.length > 0 && (
          <ItemContainer>
            {filteredTablets.map((tablet) => (
              <TabletPicture
                key={tablet.id}
                id={tablet.id}
                imageUrl={tablet.image}
                name={tablet.name}
                brand={tablet.brand}
                price={tablet.price}
                inch={tablet.inch}
                width={tablet.width}
                height={tablet.height}
                weight={tablet.weight}
                two_in_one={tablet.two_in_one}
                os={tablet.os}
                panel={tablet.panel}
                display={tablet.display}
                ppi={tablet.ppi}
                ratio={tablet.ratio}
                multi_touch={tablet.multi_touch}
                front_cam={tablet.front_cam}
                back_cam={tablet.back_cam}
                processor={tablet.processor}
                memory={tablet.memory}
                graphics={tablet.graphics}
                storage={tablet.storage}
                pen={tablet.pen}
                usb={tablet.usb}
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

TabletFilterResultPresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default TabletFilterResultPresenter;
