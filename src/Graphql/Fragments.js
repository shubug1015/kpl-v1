import gql from "graphql-tag";

export const LAPTOP_FRAGMENT = gql`
  fragment LaptopParts on Laptop {
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
`;
