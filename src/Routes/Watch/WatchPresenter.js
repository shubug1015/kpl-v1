import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import WatchPicture from "Components/WatchPicture";
import PageBar from "Components/PageBar";

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

const WatchPresenter = ({ watches, itemNum, error, loading, page, url }) => (
  <>
    <Helmet>
      <title>Smart Watch | IT다</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {watches && watches.length > 0 && (
          <ItemContainer>
            {watches.map(watch => (
              <WatchPicture
                key={watch.id}
                id={watch.id}
                imageUrl={watch.image}
                brand={watch.brand}
                name={watch.name}
                price={watch.price}
                isWatch={true}
                processor={watch.processor}
                graphics={watch.graphics}
                memory={watch.memory}
                storage={watch.storage}
                weight={watch.weight}
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

WatchPresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default WatchPresenter;
