import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import EarphonePicture from "Components/EarphonePicture";
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

const EarphonePresenter = ({
  earphones,
  itemNum,
  error,
  loading,
  page,
  url
}) => (
  <>
    <Helmet>
      <title>Wireless Earphone | IT다</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {earphones && earphones.length > 0 && (
          <ItemContainer>
            {earphones.map(earphone => (
              <EarphonePicture
                key={earphone.id}
                id={earphone.id}
                imageUrl={earphone.image}
                brand={earphone.brand}
                name={earphone.name}
                price={earphone.price}
                isEarphone={true}
                processor={earphone.processor}
                graphics={earphone.graphics}
                memory={earphone.memory}
                storage={earphone.storage}
                weight={earphone.weight}
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

EarphonePresenter.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default EarphonePresenter;
