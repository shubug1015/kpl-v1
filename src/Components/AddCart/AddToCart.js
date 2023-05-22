import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import AddEditor from "./AddEditor";

const ADD_LAPTOP = gql`
  mutation createLaptop(
    $image: String!
    $name: String!
    $brand: String!
    $price: String!
    $inch: String!
    $weight: String!
    $processor: String!
    $memory: String!
    $graphics: String!
    $storage: String!
    $display: String!
    $usb: String!
    $webcam: String!
    $purpose: String!
    $width: String!
    $height: String!
    $two_in_one: String!
    $os: String!
    $panel: String!
    $ppi: String!
    $ratio: String!
    $multi_touch: String!
    $front_cam: String!
    $back_cam: String!
    $pen: String!
    $item: String!
  ) @client {
    createLaptop(
      image: $image
      name: $name
      brand: $brand
      price: $price
      inch: $inch
      weight: $weight
      processor: $processor
      memory: $memory
      graphics: $graphics
      storage: $storage
      display: $display
      usb: $usb
      webcam: $webcam
      purpose: $purpose
      width: $width
      height: $height
      two_in_one: $two_in_one
      os: $os
      panel: $panel
      ppi: $ppi
      ratio: $ratio
      multi_touch: $multi_touch
      front_cam: $front_cam
      back_cam: $back_cam
      pen: $pen
      item: $item
    ) {
      id
      image
      name
      brand
      price
      inch
      weight
      processor
      memory
      graphics
      storage
      display
      usb
      webcam
      purpose
      width
      height
      two_in_one
      os
      panel
      ppi
      ratio
      multi_touch
      front_cam
      back_cam
      pen
      item
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <>
        <Mutation mutation={ADD_LAPTOP}>
          {createLaptop => {
            this.createLaptop = createLaptop;
            return (
              <AddEditor
                onSave={this._onSave}
                id={this.props.id}
                image={this.props.bgUrl}
                name={this.props.name}
                brand={this.props.brand}
                price={this.props.price}
                inch={this.props.inch}
                weight={this.props.weight}
                processor={this.props.processor}
                memory={this.props.memory}
                graphics={this.props.graphics}
                storage={this.props.storage}
                display={this.props.display}
                usb={this.props.usb}
                webcam={this.props.webcam}
                purpose={this.props.purpose}
                width={this.props.width}
                height={this.props.height}
                two_in_one={this.props.two_in_one}
                os={this.props.os}
                panel={this.props.panel}
                ppi={this.props.ppi}
                ratio={this.props.ratio}
                multi_touch={this.props.multi_touch}
                front_cam={this.props.front_cam}
                back_cam={this.props.back_cam}
                pen={this.props.pen}
                item={this.props.item}
              />
            );
          }}
        </Mutation>
      </>
    );
  }
  _onSave = (
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
    item
  ) => {
    this.createLaptop({
      variables: {
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
        item
      }
    });
  };
}
