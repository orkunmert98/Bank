/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import "../src/global.css"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store,persistor } from './redux/store';

import Dash from "../src/components/Dashboard/Dashboard"
import Tr from "../src/components/Dashboard/Checkout"

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.1.0";
import "assets/demo/demo.css";
import ExamplesNavbar from "../src/components/Navbars/ExamplesNavbar";
import Login from "views/examples/login.js"
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <Provider store={store}>
     
  <BrowserRouter>
   <PersistGate persistor={persistor}>

    <Switch>
   
      <Route
      exact
        path="/"
        render={props => <LandingPage {...props} />}
      />
<Route
      
        path="/dash"
        render={props => <Dash {...props} />}
      />
<Route
      
      path="/Transfer"
      render={props => <Tr {...props} />}
    />

      <Route
        path="/login"
        render={props => <Login {...props} />}
      />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
    
    </Switch>
    </PersistGate>
  </BrowserRouter>
  </Provider>
  
  ,
  document.getElementById("root")
);
