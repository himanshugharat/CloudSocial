import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blog from "./component/navBar/Blog";
import Solutions from "./component/navBar/Solutions";
import ScheduleDemo from "./component/navBar/ScheduleDemo";
import Review from "./component/navBar/Review";
import ReferUs from "./component/navBar/ReferUs";
import Resources from "../src/resource/Resource";
import Pricing from "./component/navBar/Pricing";
import Footer from "./component/navBar/Footer";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path="/Solutions" component={Solutions} />
        <Route path="/Blog" component={Blog} />
        <Route path="/ScheduleDemo" component={ScheduleDemo} />
        <Route path="/ReviewUs" component={Review} />
        <Route path="/Resources" component={Resources} />
        <Route path="/ReferUs" component={ReferUs} />
        <Route path="/Pricing" component={Pricing} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
