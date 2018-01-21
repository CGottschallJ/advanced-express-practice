import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ContactContainer from "./containers/ContactContainer";
import CommentContainer from "./containers/CommentContainer";
//import VehicleContainer from "./containers/CommentContainer";
//import ProductContainer from "./containers/CommentContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }
  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/comment/:id" component={CommentContainer} />
            <Route path="/contact/:id" component={ContactContainer} />
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);
