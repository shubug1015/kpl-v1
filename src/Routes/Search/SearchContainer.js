import React from "react";
import SearchPresenter from "./SearchPresenter";
import { searchApi } from "api";

export default class extends React.Component {
  state = {
    searchResults: null,
    searchTerm: "",
    loading: false,
    error: null
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;

    this.setState({
      searchTerm: value
    });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: searchResults, count: itemNum }
      } = await searchApi.search(searchTerm, 1);

      this.setState({ searchResults });
    } catch {
      this.setState({ error: "검색결과를 찾을 수 없어요 :(" });
    } finally {
      this.setState({ loading: false });
    }
  };

  //handlesubmit : text를 입력하고 enter를 누르면
  // 그 정보가 넘어감
  render() {
    const { searchResults, searchTerm, loading, error } = this.state;
    // console.log("cont", searchResults);
    return (
      <SearchPresenter
        searchResults={searchResults}
        searchTerm={searchTerm}
        loading={loading}
        error={error}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
