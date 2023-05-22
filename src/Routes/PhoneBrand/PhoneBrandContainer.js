import React, { Component } from "react";
import PhoneBrandPresenter from "./PhoneBrandPresenter";
import { phoneApi } from "api";

export default class extends Component {
  state = {
    brandPhone: null,
    error: null,
    loading: true,
    itemNum: null,
    pagenum: null,
    brand: null,
    url: null
  };

  async componentDidMount() {
    const {
      location: { pathname: pathstr, search: pagestr }
    } = this.props;

    const brand_temp = pathstr.split("/")[2];

    var pagenum_temp = null;
    if (pagestr !== "") {
      pagenum_temp = pagestr.split("=")[1];
    }

    try {
      const {
        data: { count: itemNum, results: brandPhone }
      } = await phoneApi.brandPhone(brand_temp, pagestr);

      await this.setState({
        brandPhone,
        itemNum,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        brand: brand_temp,
        url: new URL(
          "http://localhost:3000" +
            this.props.location.pathname +
            this.props.location.search
        )
      });
    } catch {
      this.setState({
        error: "정보를 불러올 수 없습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {
      brandPhone,
      error,
      loading,
      itemNum,
      pagenum,
      brand,
      url
    } = this.state;

    return (
      <PhoneBrandPresenter
        brandPhone={brandPhone}
        error={error}
        loading={loading}
        itemNum={itemNum}
        page={pagenum}
        brand={brand}
        url={url}
      />
    );
  }
}
