import React, { Component } from "react";
import TabletPresenter from "./TabletPresenter";
import { tabletApi } from "api";

export default class extends Component {
  state = {
    tablets: null,
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
        data: { count: itemNum, results: tablets }
      } = await tabletApi.apiTablets(pagestr);

      await this.setState({
        tablets,
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
    const { tablets, itemNum, error, loading, pagenum, url } = this.state;
    return (
      <TabletPresenter
        tablets={tablets}
        itemNum={itemNum}
        error={error}
        loading={loading}
        page={pagenum}
        url={url}
      />
    );
  }
}
