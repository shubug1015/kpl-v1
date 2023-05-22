import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import Theme from "Components/Styles/Theme";

const CardContainer = styled.div`
  width: 78vw;
  margin-top: 10px;
  border: 1px solid lightgray;
`;

const FilterItem = styled.div`
  margin-bottom: 20px;
`;
const FilterBtn = styled.button`
  border: none;
  margin-bottom: 20px;
  padding: 5px;
  width: 120px;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
`;

const PriceInputContainer = styled.div`
  display: flex;
`;

const PriceInput = styled.input`
  width: 12vw;
  height: 25px;
  font-size: 13px;
  border: 0.5px solid lightgray;
  padding: 5px;
  text-align: center;
`;

const PriceText1 = styled.span`
  font-size: 13px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 10px;
`;
const PriceText2 = styled.span`
  font-size: 13px;
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

const ApplyBtn = styled.a`
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.whiteColor};
  border: none;
  border-radius: 1px;
  padding: 5px;
  &:focus,
  &:hover {
    text-decoration: none;
    color: ${props => props.theme.whiteColor};
  }
`;

const LaptopSearchFilter = props => {
  var url = new URL(window.location.href);

  // for (var p in params ){
  //   var tmp=url.searchParams.get(p)
  //   if(tmp !=null ){
  //     tmp=tmp.split(",")
  //   }
  // }
  var br = url.searchParams.get("br");
  if (br != null) {
    br = br.split(",");
  } else {
    if (props.brand) {
      br = [props.brand];
    } else {
      br = [""];
    }
  }
  var lp = url.searchParams.get("lp");
  if (lp != null) {
    lp = lp.split(",");
  } else {
    lp = [""];
  }
  var mp = url.searchParams.get("mp");
  if (mp != null) {
    mp = mp.split(",");
  } else {
    mp = [""];
  }
  var pr = url.searchParams.get("pr");
  if (pr != null) {
    pr = pr.split(",");
  } else {
    pr = [""];
  }
  var me = url.searchParams.get("me");
  if (me != null) {
    me = me.split(",");
  } else {
    me = [""];
  }
  var st = url.searchParams.get("st");
  if (st != null) {
    st = st.split(",");
  } else {
    st = [""];
  }
  var we = url.searchParams.get("we");
  if (we != null) {
    we = we.split(",");
  } else {
    we = [""];
  }
  var i_n = url.searchParams.get("in");
  if (i_n != null) {
    i_n = i_n.split(",");
  } else {
    i_n = [""];
  }

  var pu = url.searchParams.get("pu");
  if (pu != null) {
    pu = pu.split(",");
  } else {
    pu = [""];
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [brandList, setBrandList] = useState(br[0] == "" ? [] : br);

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

  const [inchList, setInchList] = useState(i_n[0] == "" ? [] : i_n);
  const passInch = inch => {
    if (inchList.includes(inch)) {
      setInchList(inchList.filter(item => item !== inch));
      return;
    }
    setInchList([...inchList, inch]);
  };

  const [weightList, setWeightList] = useState(we[0] == "" ? [] : we);
  const passWeight = weight => {
    weight = weight.replace(/\s/g, "");
    if (weightList.includes(weight)) {
      setWeightList(weightList.filter(item => item !== weight));
      return;
    }
    setWeightList([...weightList, weight]);
  };

  const [processorList, setProcessorList] = useState(pr[0] == "" ? [] : pr);
  const passProcessor = processor => {
    if (processorList.includes(processor)) {
      setProcessorList(processorList.filter(item => item !== processor));
      return;
    }
    setProcessorList([...processorList, processor]);
  };

  const [memoryList, setMemoryList] = useState(me[0] == "" ? [] : me);
  const passMemory = memory => {
    if (memoryList.includes(memory)) {
      setMemoryList(memoryList.filter(item => item !== memory));
      return;
    }
    setMemoryList([...memoryList, memory]);
  };

  const [storageList, setStorageList] = useState(st[0] == "" ? [] : st);
  const passStorage = storage => {
    if (storageList.includes(storage)) {
      setStorageList(storageList.filter(item => item !== storage));
      return;
    }
    setStorageList([...storageList, storage]);
  };

  const [purposeList, setPurposeList] = useState(pu[0] == "" ? [] : pu);
  const passPurpose = purpose => {
    if (purposeList.includes(purpose)) {
      setPurposeList(purposeList.filter(item => item !== purpose));
      return;
    }
    setPurposeList([...purposeList, purpose]);
  };

  useEffect(
    () =>
      console.log(
        "update sf",
        brandList,
        minPrice,
        maxPrice,
        processorList,
        weightList,
        inchList,
        memoryList,
        storageList,
        purposeList
      ),
    [
      brandList,
      minPrice,
      maxPrice,
      processorList,
      weightList,
      inchList,
      memoryList,
      storageList,
      purposeList
    ]
  );

  const brands = [
    "apple",
    "samsung",
    "lg",
    "microsoft",
    "hansung",
    "lenovo",
    "asus",
    "acer",
    "msi",
    "hp",
    "dell",
    "razer",
    "gigabyte"
  ];

  const processors = [
    "i3-8세대",
    "i3-9세대",
    "i3-10세대",
    "i5-8세대",
    "i5-9세대",
    "i5-10세대",
    "i7-8세대",
    "i7-9세대",
    "i7-10세대",
    "i9-8세대",
    "i9-9세대",
    "라이젠 5",
    "라이젠 7",
    "펜티엄 실버",
    "펜티엄 골드"
  ];

  const memories = ["4GB", "8GB", "16GB", "32GB", "64GB"];

  const storages = ["128GB", "256GB", "512GB", "1TB"];

  const weights = [
    "~ 1kg",
    "1kg ~ 1.5kg",
    "1.5kg ~ 2kg",
    "2.5kg ~ 3kg",
    "3kg ~"
  ];

  const inches = ["13인치", "14인치", "15인치", "16인치", "17인치"];

  const purposes = ["사무/인강용", "휴대용", "게임용", "그래픽작업용"];

  return (
    <div>
      <Button
        onClick={toggle}
        style={{
          backgroundColor: Theme.mainColor,
          color: "#fafafa",
          border: "none",
          borderRadius: Theme.filterRadius,
          boxShadow: "none"
        }}
      >
        검색필터
      </Button>
      <Collapse isOpen={isOpen}>
        <CardContainer>
          <Card>
            <CardBody>
              <FilterItem>
                <ItemName>브랜드</ItemName>
                <BtnContainer>
                  {brands.map(brand => (
                    <FilterBtn
                      style={{
                        backgroundColor: brandList.includes(brand)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: brandList.includes(brand)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passBrand(brand);
                      }}
                    >
                      {brand}
                    </FilterBtn>
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
                      backgroundColor:
                        // minPrice !== "" ? Theme.mainColor :
                        Theme.transparent,
                      color: Theme.blackColor,
                      borderRadius: Theme.filterRadius,
                      border: "none",
                      borderBottom: Theme.filterBorderBtm,
                      outline: "none"
                    }}
                  />
                  <PriceText1>만원</PriceText1>
                  <PriceText2>~</PriceText2>

                  <PriceInput
                    placeholder="최대금액을 입력하세요!"
                    value={maxPrice}
                    onChange={updateMaxPrice}
                    style={{
                      backgroundColor:
                        // minPrice !== "" ? Theme.mainColor :
                        Theme.transparent,
                      color: Theme.blackColor,
                      borderRadius: Theme.filterRadius,
                      border: "none",
                      borderBottom: Theme.filterBorderBtm,
                      outline: "none"
                    }}
                  />
                  <PriceText1>만원</PriceText1>
                </PriceInputContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>크기</ItemName>
                <BtnContainer>
                  {inches.map(inch => (
                    <FilterBtn
                      style={{
                        backgroundColor: inchList.includes(inch)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: inchList.includes(inch)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passInch(inch);
                      }}
                    >
                      {inch}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>무게</ItemName>
                <BtnContainer>
                  {weights.map(weight => (
                    <FilterBtn
                      style={{
                        backgroundColor: weightList.includes(
                          weight.replace(/\s/g, "")
                        )
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: weightList.includes(weight.replace(/\s/g, ""))
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passWeight(weight);
                      }}
                    >
                      {weight}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>CPU</ItemName>
                <BtnContainer>
                  {processors.map(processor => (
                    <FilterBtn
                      style={{
                        backgroundColor: processorList.includes(processor)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: processorList.includes(processor)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passProcessor(processor);
                      }}
                    >
                      {processor}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>메모리</ItemName>
                <BtnContainer>
                  {memories.map(memory => (
                    <FilterBtn
                      style={{
                        backgroundColor: memoryList.includes(memory)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: memoryList.includes(memory)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passMemory(memory);
                      }}
                    >
                      {memory}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>용량</ItemName>
                <BtnContainer>
                  {storages.map(storage => (
                    <FilterBtn
                      style={{
                        backgroundColor: storageList.includes(storage)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: storageList.includes(storage)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passStorage(storage);
                      }}
                    >
                      {storage}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <FilterItem>
                <ItemName>용도</ItemName>
                <BtnContainer>
                  {purposes.map(purpose => (
                    <FilterBtn
                      style={{
                        backgroundColor: purposeList.includes(purpose)
                          ? Theme.mainColor
                          : Theme.filterColor,
                        color: purposeList.includes(purpose)
                          ? Theme.whiteColor
                          : Theme.blackColor,
                        border: Theme.filterBorder,
                        borderRadius: Theme.filterRadius,
                        outline: "none"
                      }}
                      onClick={() => {
                        passPurpose(purpose);
                      }}
                    >
                      {purpose}
                    </FilterBtn>
                  ))}
                </BtnContainer>
              </FilterItem>
              <ApplyBtnContainer>
                {(brandList.length === 0 &&
                  minPrice.length === 0 &&
                  maxPrice.length === 0 &&
                  processorList.length === 0 &&
                  weightList.length === 0 &&
                  inchList.length === 0 &&
                  memoryList.length === 0 &&
                  storageList.length === 0 &&
                  purposeList.length === 0) || (
                  <ApplyBtn
                    href={`/laptops/filtered/?br=${brandList}&lp=${minPrice}&mp=${maxPrice}&pr=${processorList}&me=${memoryList}&st=${storageList}&we=${weightList}&in=${inchList}&pu=${purposeList}&page=1`}
                  >
                    적용하기
                  </ApplyBtn>
                )}
              </ApplyBtnContainer>
            </CardBody>
          </Card>
        </CardContainer>
      </Collapse>
    </div>
  );
};

export default LaptopSearchFilter;
