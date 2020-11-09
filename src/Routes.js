import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav.component";
import Footer from "./components/Footer/Footer.component";
import AirTickets from "./pages/AirTickets/AirTickets.component";
// import Login from "./pages/Login/Login.component";
import Main from "./pages/Main/Main.component";
import Purchase from "./pages/Purchase/Purchase.component";
import Signup from "./pages/Signup/Signup.component";

function Routes() {
  return (
    <div className="Routes">
      {/* <Nav /> */}
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/purchase" component={Purchase} />
          <Route exact path="/airtickets" component={AirTickets} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default Routes;
