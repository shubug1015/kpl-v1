import React from "react";
import SearchPresenter2 from "./SearchPresenter2";
import SearchBar from "./SearchBar";
import { searchApi } from "api";
import Message from "Components/Message";
import Loader from "Components/Loader";

export default class extends React.Component {
  state = {
    searchResults: null,
    searchTerm: "",
    loading: true,
    error: null,
    itemNum: null,
    pagenum: null,
    url: null
  };

  async componentWillMount() {
    const url_temp = new URL(
      "http://localhost:3000" +
        this.props.location.pathname +
        this.props.location.search
    );
    console.log(url_temp);
    // "/search/?search=apple&page=1"
    var pagenum_temp = url_temp.searchParams.get("page");
    // 1
    const searchTerm = url_temp.searchParams.get("search");
    // apple

    try {
      const {
        data: { results: searchResults, count: itemNum }
      } = await searchApi.search(searchTerm, pagenum_temp);

      this.setState({
        searchResults,
        itemNum,
        searchTerm,
        pagenum: pagenum_temp === null ? 1 : pagenum_temp,
        url: url_temp,
        loading: false
      });
    } catch {
      this.setState({
        error: "검색결과를 찾을 수 없어요 :(",
        itemNum: -1,
        url: url_temp
      });
    } finally {
      // this.setState({ loading: false });
    }
  }

  //handlesubmit : text를 입력하고 enter를 누르면
  // 그 정보가 넘어감
  render() {
    const {
      searchResults,
      searchTerm,
      loading,
      error,
      itemNum,
      pagenum,
      url
    } = this.state;

    if (searchResults && searchResults.length === 0) {
      return (
        <>
          <SearchPresenter2
            searchResults={searchResults}
            searchTerm={searchTerm}
            loading={loading}
            error={error}
            //   handleSubmit={this.handleSubmit}
            //   updateTerm={this.updateTerm}
            itemNum={itemNum}
            page={pagenum}
            url={url}
          />
          {/* <Message text="검색결과를 찾을 수 없습니다." color="#95a5a6" /> */}
        </>
      );
    }
    {
      console.log(loading);
      return (
        <>
          {searchResults === null ? (
            <>
              <SearchBar />
              {/* <Loader /> */}
            </>
          ) : loading ? (
            <Loader />
          ) : (
            <SearchPresenter2
              searchResults={searchResults}
              searchTerm={searchTerm}
              loading={loading}
              error={error}
              //   handleSubmit={this.handleSubmit}
              //   updateTerm={this.updateTerm}
              itemNum={itemNum}
              page={pagenum}
              url={url}
            />
          )}
        </>
      );
    }
  }
}
