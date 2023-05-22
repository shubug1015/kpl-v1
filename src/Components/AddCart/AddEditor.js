import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const Button = styled.button`
  border: none;
  color: black;
  background-color: transparent;
  font-size: 15px;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

export default class AddEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image || "",
      name: props.name || "",
      brand: props.brand || "",
      price: props.price || "",
      inch: props.inch || "",
      weight: props.weight || "",
      processor: props.processor || "",
      memory: props.memory || "",
      graphics: props.graphics || "",
      storage: props.storage || "",
      display: props.display || "",
      usb: props.usb || "",
      webcam: props.webcam || "",
      purpose: props.purpose || "",
      width: props.width || "",
      height: props.height || "",
      two_in_one: props.two_in_one || "",
      os: props.os || "",
      panel: props.panel || "",
      ppi: props.ppi || "",
      ratio: props.ratio || "",
      multi_touch: props.multi_touch || "",
      front_cam: props.front_cam || "",
      back_cam: props.back_cam || "",
      pen: props.pen || "",
      item: props.item || "",
      id: props.id || null
    };
  }
  render() {
    return (
      <>
        <Button onClick={this._onSave}>
          <AiOutlinePlus size={25} color={"black"} />
        </Button>
      </>
    );
  }
  _onSave = () => {
    const { onSave } = this.props;
    const {
      image,
      name,
      brand,
      price,
      inch,
      weight,
      processor,
      memory,
      graphics,
      storage,
      display,
      usb,
      webcam,
      purpose,
      width,
      height,
      two_in_one,
      os,
      panel,
      ppi,
      ratio,
      multi_touch,
      front_cam,
      back_cam,
      pen,
      item,
      id
    } = this.state;
    onSave(
      image,
      name,
      brand,
      price,
      inch,
      weight,
      processor,
      memory,
      graphics,
      storage,
      display,
      usb,
      webcam,
      purpose,
      width,
      height,
      two_in_one,
      os,
      panel,
      ppi,
      ratio,
      multi_touch,
      front_cam,
      back_cam,
      pen,
      item,
      id
    );
  };
}
