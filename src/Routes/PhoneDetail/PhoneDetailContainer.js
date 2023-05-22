import React from "react";
import PhoneDetailPresenter from "./PhoneDetailPresenter";
import { phoneApi } from "api";

export default class extends React.Component {
  state = {
    detail: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    try {
      const detail = await phoneApi.showDetail(id);
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
      <PhoneDetailPresenter detail={detail} error={error} loading={loading} />
    );
  }
}
