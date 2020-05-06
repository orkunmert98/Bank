import React from "react"
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "../Navbars/ExamplesNavbar"
import Dashborad from "./Dashboard"
import Tr from "./Checkout"






const DashR=()=>{
    
    return(<div>

        
   
      <Switch>
      <Route
        exact
          path="/transfer"
          render={props => <Tr {...props} />}
        />

        <Route
     exact
          path="/dash"
          render={props => <Dashborad {...props} />}
        />
     
      
      </Switch>
      </div>    
    )}
  

export default DashR
