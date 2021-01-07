import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Blog from "./component/navBar/Blog";
import Solutions from "./component/navBar/Solutions";
import ScheduleDemo from "./component/navBar/ScheduleDemo";
import Review from "./component/navBar/Review";
import ReferUs from "./component/navBar/ReferUs";
import Resources from "../src/resource/Resource";
import Pricing from "./component/navBar/Pricing";
import Footer from "./component/navBar/Footer";
import Video from "./resource/childComponent/Video";
import Literature from "./resource/childComponent/Literature";
import Faq from "./resource/FAQ/Faq";
import ManagedServices from "./component/navBar/Managed Services/ManagedServices";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Route exact path="/" component={Solutions} />
      <Route path="/Blog" component={Blog} />
      <Route path="/ScheduleDemo" component={ScheduleDemo} />
      <Route path="/ReviewUs" component={Review} />
      <Route path="/Resources" component={Resources} />
      <Route path="/Resources/video" component={Video} />
      <Route path="/Resources/literature" component={Literature} />
      <Route path="/ReferUs" component={ReferUs} />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/FAQ" component={Faq} />
      <Route path="/ManagedServices" component={ManagedServices} />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
