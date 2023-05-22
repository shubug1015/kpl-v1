import React, { Component } from "react";
import { laptopApi } from "api";
import LaptopFilterResultPresenter from "./LaptopFilterResultPresenter";
import styled from "styled-components";
import Message from "Components/Message";

export default class extends Component {
  state = {
    laptops: null,
    itemNum: null,
    filteredLaptops: null,
    error: null,
    loading: true,
    pagenum: null,
    url: null
  };

  async componentWillMount() {
    const url_temp = new URL(
      "http://localhost:3000" +
        this.props.location.pathname +
        this.props.location.search
    );
    var pagenum_temp = null;
    pagenum_temp = url_temp.searchParams.get("page");
    var pagestr = `page=${pagenum_temp}`;

    var brand = null;
    var min_price = null;
    var max_price = null;
    var processor = null;
    var memory = null;
    var storage = null;
    var weight = null;
    var inch = null;
    var purpose = null;

    brand = url_temp.searchParams.get("br");
    min_price = url_temp.searchParams.get("lp");
    max_price = url_temp.searchParams.get("mp");
    processor = url_temp.searchParams.get("pr");
    memory = url_temp.searchParams.get("me");
    storage = url_temp.searchParams.get("st");
    weight = url_temp.searchParams.get("we");
    inch = url_temp.searchParams.get("in");
    purpose = url_temp.searchParams.get("pu");

    try {
      const {
        data: { count: itemNum, results: filteredLaptops }
      } = await laptopApi.filterapiLaptops(
        brand,
        min_price,
        max_price,
        processor,
        memory,
        storage,
        weight,
        inch,
        purpose,
        pagestr
      );
      this.setState({
        filteredLaptops,
        itemNum,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        url: url_temp
      });
    } catch {
      this.setState({
        error: "정보를 불러올 수 없습니다.",
        itemNum: -1,
        url: url_temp
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const {
      filteredLaptops,
      error,
      loading,
      itemNum,
      pagenum,
      url
    } = this.state;

    if (filteredLaptops && filteredLaptops.length === 0) {
      return (
        <Message text="해당 조건에 만족하는 제품이 없어요" color="#95a5a6" />
      );
    }
    {
      return (
        <LaptopFilterResultPresenter
          filteredLaptops={filteredLaptops}
          error={error}
          loading={loading}
          itemNum={itemNum}
          page={pagenum}
          url={url}
        />
      );
    }
  }
}
