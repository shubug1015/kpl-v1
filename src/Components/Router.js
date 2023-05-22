import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CompareHome from "Routes/CompareHome";
import Home from "Routes/Home";
import HowToUse from "Routes/HowToUse";
import Laptop from "Routes/Laptop/index";
// import Phone from "Routes/Phone/index";
import Tablet from "Routes/Tablet/index";
// import Earphone from "Routes/Earphone/index";
// import Watch from "Routes/Watch/index";
// import LaptopDetail from "Routes/LaptopDetail";
// import TabletDetail from "Routes/TabletDetail";
// import PhoneDetail from "Routes/PhoneDetail";
import Header from "./Header";
import Basket from "./Basket";
import Search from "Routes/Search";
import LaptopFilterResult from "Routes/LaptopFilterResult/index";
import TabletFilterResult from "Routes/TabletFilterResult/index";
// import PhoneFilterResult from "Routes/PhoneFilterResult/index";
import LaptopBrand from "Routes/LaptopBrand";
import TabletBrand from "Routes/TabletBrand";
// import PhoneBrand from "Routes/PhoneBrand";
import Compare from "Routes/Compare/Compare";

export default () => (
  <Router>
    <Header />
    <Route
      render={(props) =>
        props.location.pathname === "/" ||
        props.location.pathname === "/compare" ? null : (
          <Basket />
        )
      }
    />

    <Switch>
      <Route path="/comparehome" exact component={CompareHome} />
      <Route path="/" exact component={Home}></Route>
      <Route path="/search" exact component={Search} />
      <Route path="/compare" exact component={Compare} />
      <Route path="/how_to_use" exact component={HowToUse} />
      <Route path="/laptops" exact component={Laptop} />
      <Route path="/laptops/apple" exact component={LaptopBrand} />
      <Route path="/laptops/acer" exact component={LaptopBrand} />
      <Route path="/laptops/asus" exact component={LaptopBrand} />
      <Route path="/laptops/dell" exact component={LaptopBrand} />
      <Route path="/laptops/hansung" exact component={LaptopBrand} />
      <Route path="/laptops/hp" exact component={LaptopBrand} />
      <Route path="/laptops/lenovo" exact component={LaptopBrand} />
      <Route path="/laptops/lg" component={LaptopBrand} />
      <Route path="/laptops/microsoft" exact component={LaptopBrand} />
      <Route path="/laptops/msi" exact component={LaptopBrand} />
      <Route path="/laptops/razer" exact component={LaptopBrand} />
      <Route path="/laptops/samsung" exact component={LaptopBrand} />
      <Route path="/tablets" exact component={Tablet} />
      <Route path="/tablets/acer" exact component={TabletBrand} />
      <Route path="/tablets/apple" exact component={TabletBrand} />
      <Route path="/tablets/asus" exact component={TabletBrand} />
      <Route path="/tablets/dell" exact component={TabletBrand} />
      <Route path="/tablets/hp" exact component={TabletBrand} />
      <Route path="/tablets/lg" exact component={TabletBrand} />
      <Route path="/tablets/microsoft" exact component={TabletBrand} />
      <Route path="/tablets/mpgio" exact component={TabletBrand} />
      <Route path="/tablets/teclast" exact component={TabletBrand} />
      <Route path="/tablets/lenovo" exact component={TabletBrand} />
      <Route path="/tablets/samsung" exact component={TabletBrand} />
      <Route path="/tablets/huawei" exact component={TabletBrand} />
      <Route path="/laptops/filtered" exact component={LaptopFilterResult} />
      <Route path="/tablets/filtered" exact component={TabletFilterResult} />
      {/* <Route path="/phones" component={Phone} />
      <Route path="/phones/samsung" exact component={PhoneBrand} />
      <Route path="/phones/apple" exact component={PhoneBrand} />
      <Route path="/phones/lg" exact component={PhoneBrand} />
      <Route path="/earphones" component={Earphone} />
      <Route path="/watches" component={Watch} /> */}
      {/* <Route path="/phones/filtered" exact component={PhoneFilterResult} /> */}

      {/* <Route path="/laptops/:id" exact component={LaptopDetail} />
      <Route path="/tablets/:id" exact component={TabletDetail} />
      <Route path="/phones/:id" exact component={PhoneDetail} /> */}
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
