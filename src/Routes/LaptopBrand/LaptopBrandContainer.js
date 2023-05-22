import React, { Component } from "react";
import LaptopBrandPresenter from "./LaptopBrandPresenter";
import { laptopApi } from "api";

export default class extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    brandLaptops: null,
    error: null,
    loading: true,
    itemNum: null,
    pagenum: null,
    brand: null,
    url: null
  };

  async componentWillMount() {
    const {
      location: { pathname: pathstr, search: pagestr }
    } = this.props;
    // constructor, super로 props 확인하고, props 안, location 안에 있는 것들 다른 이름으로 정의
    // {}:object

    const brand_temp = pathstr.split("/")[2];

    // 그 안에 있는거 필요에 따라 바꿔서 정의

    var pagenum_temp = null;
    if (pagestr !== "") {
      pagenum_temp = pagestr.split("=")[1];
    }

    try {
      const {
        data: { count: itemNum, results: brandLaptops }
        // 함수를 실행시켜서 받아온 data 안 count, results 다른 이름으로 정의
      } = await laptopApi.brandLaptops(brand_temp, pagestr);
      // (page, brand) 자리에 각각 (pagestr, brand_temp)를 넘겨줌

      await this.setState({
        brandLaptops,
        itemNum,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        brand: brand_temp,
        url: new URL(
          "http://localhost:3000" +
            this.props.location.pathname +
            this.props.location.search
        )
      });
      // console.log(this.props.location.pathname); = /laptop/apple
      // 위에서 정의한 것들 setState
    } catch {
      this.setState({
        error: "정보를 불러올 수 없습니다.",
        itemNum: -1,
        url: new URL(
          "http://localhost:3000" +
            this.props.location.pathname +
            this.props.location.search
        )
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {
      brandLaptops,
      error,
      loading,
      itemNum,
      pagenum,
      brand,
      url
    } = this.state;

    return (
      <LaptopBrandPresenter
        brandLaptops={brandLaptops}
        error={error}
        loading={loading}
        itemNum={itemNum}
        page={pagenum}
        brand={brand}
        url={url}
      />

      // setState 해준 것들을 LaptopBrandPresenter에 props(?)로 넘겨줌
      // page={pagenum}는 {pagenum}가 page 이름으로 넘어감
    );
  }
}
