import React, { useState } from "react";
import styled from "styled-components";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useHistory } from "react-router-dom";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const page_size = 12;

const PageBar = ({ itemNum, currentpage, url }) => {
  console.log(itemNum, currentpage, url);
  var url_page_needed = url.href.split("page=")[0];
  // ~~search=삼성&
  // url.href가 null로 나옴.
  const maxpage =
    itemNum !== -1
      ? itemNum % page_size > 0
        ? Math.floor(itemNum / page_size) + 1
        : Math.floor(itemNum / page_size)
      : -1;

  const history = useHistory();

  if (maxpage === -1) {
    history.push("/");
  }

  const [page, setPage] = useState(
    currentpage % 10 === 0
      ? currentpage - 10
      : Math.floor(currentpage / 10) * 10
  );

  const nextPage = () => {
    maxpage - page > 10 ? setPage(page + 10) : setPage(page);
  };
  const prePage = () => {
    if (page !== 0) {
      setPage(page - 10);
    }
    return;
  };
  return (
    <PaginationContainer>
      <Pagination aria-label="Page navigation example">
        <PaginationItem>
          <PaginationLink
            first
            href={`${url_page_needed}page=1`}
            style={{ color: "black" }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            onClick={prePage}
            style={{ color: "black" }}
          />
        </PaginationItem>

        {Array.apply(
          null,
          maxpage - page > 10 ? Array(10) : Array(maxpage - page)
        ).map((x, i) => {
          return (
            <PaginationItem>
              <PaginationLink
                href={
                  url_page_needed.includes("?")
                    ? `${url_page_needed}page=${i + 1 + page}`
                    : `${url_page_needed}?page=${i + 1 + page}`
                }
                style={{
                  backgroundColor:
                    currentpage == i + 1 + page ? "#e5e1d6" : "white",
                  color: "black"
                }}
              >
                {i + 1 + page}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink next onClick={nextPage} style={{ color: "black" }} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            last
            href={
              url_page_needed.includes("?")
                ? `${url_page_needed}page=${maxpage}`
                : `${url_page_needed}?page=${maxpage}`
            }
            style={{ color: "black" }}
          />
        </PaginationItem>
      </Pagination>
    </PaginationContainer>
  );
};

export default PageBar;
