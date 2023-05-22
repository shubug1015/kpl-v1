import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/Styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import Theme from "Components/Styles/Theme";
import "font.css";

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={Theme}>
          <Router />
          <GlobalStyles />
        </ThemeProvider>
      </>
    );
  }
}
export default App;
