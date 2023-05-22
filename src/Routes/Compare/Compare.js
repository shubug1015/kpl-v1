import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_LAPTOPS } from "Graphql/Queries";
import ComparePicture from "./ComparePicture";
import LaptopComparePicture from "./LaptopComparePicture";
import TabletComparePicture from "./TabletComparePicture";

const CompareContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Compare = () => {
  var flag1 = 0;
  var flag2 = 0;
  return (
    <CompareContainer>
      <Query query={GET_LAPTOPS}>
        {({ data }) => {
          for (var l in data.laptops) {
            if (data.laptops[l].item === "laptop") {
              flag1 = 1;
            } else if (data.laptops[l].item === "tablet") {
              flag2 = 1;
            }
          }

          if (flag1 === 1 && flag2 === 1) {
            return data.laptops
              ? data.laptops.map(laptop =>
                  laptop !== null ? (
                    <>
                      <ComparePicture
                        key={laptop.id}
                        id={laptop.id}
                        imageUrl={laptop.image}
                        name={laptop.name}
                        brand={laptop.brand}
                        price={laptop.price}
                        inch={laptop.inch}
                        weight={laptop.weight}
                        processor={laptop.processor}
                        memory={laptop.memory}
                        graphics={laptop.graphics}
                        storage={laptop.storage}
                        display={laptop.display}
                        usb={laptop.usb}
                      />
                    </>
                  ) : null
                )
              : null;
          } else if (flag1 === 1) {
            return data.laptops
              ? data.laptops.map(laptop =>
                  laptop !== null ? (
                    <>
                      <LaptopComparePicture
                        key={laptop.id}
                        id={laptop.id}
                        imageUrl={laptop.image}
                        name={laptop.name}
                        brand={laptop.brand}
                        price={laptop.price}
                        inch={laptop.inch}
                        weight={laptop.weight}
                        processor={laptop.processor}
                        memory={laptop.memory}
                        graphics={laptop.graphics}
                        storage={laptop.storage}
                        display={laptop.display}
                        usb={laptop.usb}
                        webcam={laptop.webcam}
                        purpose={laptop.purpose}
                      />
                    </>
                  ) : null
                )
              : null;
          } else {
            return data.laptops
              ? data.laptops.map(laptop =>
                  laptop !== null ? (
                    <>
                      <TabletComparePicture
                        key={laptop.id}
                        id={laptop.id}
                        imageUrl={laptop.image}
                        name={laptop.name}
                        brand={laptop.brand}
                        price={laptop.price}
                        inch={laptop.inch}
                        width={laptop.width}
                        height={laptop.height}
                        weight={laptop.weight}
                        two_in_one={laptop.two_in_one}
                        os={laptop.os}
                        panel={laptop.panel}
                        display={laptop.display}
                        ppi={laptop.ppi}
                        ratio={laptop.ratio}
                        multi_touch={laptop.multi_touch}
                        front_cam={laptop.front_cam}
                        back_cam={laptop.back_cam}
                        processor={laptop.processor}
                        memory={laptop.memory}
                        graphics={laptop.graphics}
                        storage={laptop.storage}
                        pen={laptop.pen}
                        usb={laptop.usb}
                        item={laptop.item}
                        isLaptop={true}
                      />
                    </>
                  ) : null
                )
              : null;
          }
        }}
      </Query>
    </CompareContainer>
  );
};

export default Compare;
