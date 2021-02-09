import React from "react";
import { Router } from 'react-router';
import { Route, Switch,Redirect, Link} from "react-router-dom";
import User from "../Modules/User/user";
import Login from "./Login/login";
import history from "../history"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router  history={history} >
        <Redirect to="/login" />
          <Switch>
            <Route path="/user"> <User /> </Route>
            <Route path="/login"> <Login /> </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
