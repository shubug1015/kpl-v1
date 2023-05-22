import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Collapse, Button, CardBody, Card } from "reactstrap";

const FilterItem = styled.div`
  margin-bottom: 20px;
`;
const BrandBtn = styled.button`
  border: 0.5px solid lightgray;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: bold;
  width: 12vw;
`;

const ProcessorBtn = styled.button`
  border: 0.5px solid lightgray;
  margin-bottom: 10px;
  padding: 5px;
  font-weight: bold;
  color: white;
  width: 12vw;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 220px);
`;

const PriceInputContainer = styled.div`
  display: flex;
`;

const PriceInput = styled.input`
  width: 12vw;
  height: 25px;
  font-size: 10px;
  border: 0.5px solid lightgray;
  padding: 5px;
  font-weight: bold;
  text-align: center;
`;

const PriceText1 = styled.span`
  font-size: 10px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;
const PriceText2 = styled.span`
  font-size: 20px;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 5px;
`;

const ItemName = styled.div`
  margin-bottom: 10px;
`;
const ApplyBtnContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;
const ApplyBtn = styled(Link)`
  background-color: #333333;
  color: #e5e1d6;
  border: 0.3px solid lightgray;
  border-radius: 3px;
  padding: 5px;
`;

const PhoneSearchFilter = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [brandList, setBrandList] = useState(props.brand ? [props.brand] : []);

  const passBrand = brand => {
    if (brandList.includes(brand)) {
      setBrandList(brandList.filter(item => item !== brand));
      return;
    }
    setBrandList([...brandList, brand]);
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const updateMinPrice = e => {
    setMinPrice(e.target.value);
  };
  const updateMaxPrice = e => {
    setMaxPrice(e.target.value);
  };

  const [processorList, setProcessorList] = useState([]);
  const passProcessor = processor => {
    if (processorList.includes(processor)) {
      setProcessorList(processorList.filter(item => item !== processor));
      return;
    }
    setProcessorList([...processorList, processor]);
  };

  useEffect(
    () => console.log("update", brandList, minPrice, maxPrice, processorList),
    [brandList, minPrice, maxPrice, processorList]
  );

  const brands = ["apple", "samsung", "lg"];

  const processors = ["i3", "i5", "i7"];

  return (
    <div>
      <Button
        onClick={toggle}
        style={{ backgroundColor: "#333333", marginBottom: "1rem" }}
      >
        검색필터
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <FilterItem>
              <ItemName>브랜드</ItemName>
              <BtnContainer>
                {brands.map(brand => (
                  <BrandBtn
                    style={{
                      backgroundColor: brandList.includes(brand)
                        ? "#333333"
                        : "#E5E1D6",
                      color: brandList.includes(brand) ? "#E5E1D6" : "#333333",
                      borderRadius: "3px"
                    }}
                    onClick={() => {
                      passBrand(brand);
                    }}
                  >
                    {brand}
                  </BrandBtn>
                ))}
              </BtnContainer>
            </FilterItem>
            <FilterItem>
              <ItemName>가격</ItemName>
              <PriceInputContainer>
                <PriceInput
                  placeholder="최소금액을 입력하세요!"
                  value={minPrice}
                  onChange={updateMinPrice}
                  style={{
                    backgroundColor: minPrice !== "" ? "#333333" : "#E5E1D6",
                    color: "#E5E1D6",
                    borderRadius: "3px"
                  }}
                />
                <PriceText1>만원</PriceText1>
                <PriceText2>~</PriceText2>

                <PriceInput
                  placeholder="최대금액을 입력하세요!"
                  value={maxPrice}
                  onChange={updateMaxPrice}
                  style={{
                    backgroundColor: maxPrice !== "" ? "#333333" : "#E5E1D6",
                    color: "#E5E1D6",
                    borderRadius: "3px"
                  }}
                />
                <PriceText1>만원</PriceText1>
              </PriceInputContainer>
            </FilterItem>
            <FilterItem>
              <ItemName>프로세서</ItemName>
              <BtnContainer>
                {processors.map(processor => (
                  <ProcessorBtn
                    style={{
                      backgroundColor: processorList.includes(processor)
                        ? "#333333"
                        : "#E5E1D6",
                      color: processorList.includes(processor)
                        ? "#E5E1D6"
                        : "#333333",
                      borderRadius: "3px"
                    }}
                    onClick={() => {
                      passProcessor(processor);
                    }}
                  >
                    {processor}
                  </ProcessorBtn>
                ))}
              </BtnContainer>
            </FilterItem>
            <ApplyBtnContainer>
              <ApplyBtn
                to={`/phone/filtered/?brand=${brandList}&min_price=${minPrice}&max_price=${maxPrice}&processor=${processorList}&page=1`}
              >
                적용하기
              </ApplyBtn>
            </ApplyBtnContainer>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default PhoneSearchFilter;
