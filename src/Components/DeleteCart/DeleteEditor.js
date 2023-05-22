import React from "react";
import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Button = styled.button`
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export default class DeleteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
  }
  render() {
    return (
      <>
        <Button onClick={this._onUpdate}>
          <IoIosCloseCircleOutline size={20} color={"#333333"} />
        </Button>
      </>
    );
  }
  _onUpdate = () => {
    const { onUpdate } = this.props;
    const { id } = this.state;
    onUpdate(id);
  };
}
