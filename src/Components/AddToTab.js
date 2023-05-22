import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button``;

const AddToTab = () => {
  const [addToTab, setAddToTab] = useState([]);

  const onAddToTab = () => {
    setAddToTab(
      addToTab.concat(
        <span role="img" aria-label="loading">
          ➕
        </span>
      )
    );
  };

  return (
    <>
      <Button onClick={onAddToTab}>add</Button>
      {addToTab}
    </>
  );
};

export default AddToTab;
