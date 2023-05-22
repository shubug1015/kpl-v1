import React, { Component } from "react";
import WatchPresenter from "./WatchPresenter";
import { watchApi } from "api";

export default class extends Component {
  state = {
    watches: null,
    itemNum: null,
    error: null,
    loading: true,
    pagenum: null,
    url: null
  };

  async componentDidMount() {
    const {
      location: { search: pagestr }
    } = this.props;

    var pagenum_temp = null;
    if (pagestr !== "") {
      pagenum_temp = pagestr.split("=")[1];
    }

    try {
      const {
        data: { count: itemNum, results: watches }
      } = await watchApi.rawapiWatch(pagestr);

      await this.setState({
        watches,
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
        error: "정보를 불러올 수 없습니다."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { watches, itemNum, error, loading, pagenum, url } = this.state;
    return (
      <WatchPresenter
        watches={watches}
        itemNum={itemNum}
        error={error}
        loading={loading}
        page={pagenum}
        url={url}
      />
    );
  }
}
