import React, { Component } from "react";
import LaptopPresenter from "./LaptopPresenter";
import { laptopApi } from "api";

export default class extends Component {
  state = {
    laptops: null,
    itemNum: null,
    error: null,
    loading: true,
    pagenum: null,
    url: null
  };

  async componentWillMount() {
    const {
      location: { search: pagestr }
    } = this.props;

    var pagenum_temp = null;
    if (pagestr !== "") {
      pagenum_temp = pagestr.split("=")[1];
    }

    try {
      const {
        data: { count: itemNum, results: laptops }
      } = await laptopApi.apiLaptops(pagestr);

      this.setState({
        laptops,
        itemNum,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        url: new URL(
          "http://localhost:3000" +
            this.props.location.pathname +
            this.props.location.search
        )
      });
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
    const { laptops, itemNum, error, loading, pagenum, url } = this.state;
    return (
      <LaptopPresenter
        laptops={laptops}
        itemNum={itemNum}
        error={error}
        loading={loading}
        page={pagenum}
        url={url}
      />
    );
  }
}
