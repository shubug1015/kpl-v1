import React from "react";
import TabletDetailPresenter from "./TabletDetailPresenter";
import { tabletApi } from "api";

export default class extends React.Component {
  state = {
    detail: null,
    error: null,
    loading: true
  };

  async componentWillMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const detail = await tabletApi.showDetail(id);
      this.setState({
        detail
      });
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false });
    }
  }

  // 함수를 종료시키기 위해 return 명령 사용

  render() {
    const { detail, error, loading } = this.state;

    return (
      <TabletDetailPresenter detail={detail} error={error} loading={loading} />
    );
  }
}
