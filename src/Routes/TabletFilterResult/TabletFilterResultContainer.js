import React, { Component } from "react";
import { tabletApi } from "api";
import TabletFilterResultPresenter from "./TabletFilterResultPresenter";
import styled from "styled-components";
import Message from "Components/Message";

export default class extends Component {
  state = {
    tablets: null,
    itemNum: null,
    filteredTablets: null,
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
    var os = null;
    var memory = null;
    var storage = null;
    var weight = null;
    var inch = null;

    brand = url_temp.searchParams.get("br");
    min_price = url_temp.searchParams.get("lp");
    max_price = url_temp.searchParams.get("mp");
    os = url_temp.searchParams.get("os");
    memory = url_temp.searchParams.get("me");
    storage = url_temp.searchParams.get("st");
    weight = url_temp.searchParams.get("we");
    inch = url_temp.searchParams.get("in");

    try {
      const {
        data: { count: itemNum, results: filteredTablets }
      } = await tabletApi.filterapiTablets(
        brand,
        min_price,
        max_price,
        os,
        memory,
        storage,
        weight,
        inch,
        pagestr
      );

      this.setState({
        filteredTablets,
        itemNum,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        url: url_temp
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
      filteredTablets,
      error,
      loading,
      itemNum,
      pagenum,
      url
    } = this.state;

    if (filteredTablets && filteredTablets.length === 0) {
      return (
        <Message text="해당 조건에 만족하는 제품이 없어요" color="#95a5a6" />
      );
    }
    {
      return (
        <TabletFilterResultPresenter
          filteredTablets={filteredTablets}
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
