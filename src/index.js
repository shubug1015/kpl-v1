import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { ApolloProvider } from "react-apollo";
import client from "./Graphql/Apollo";
import "./Components/Styles/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
