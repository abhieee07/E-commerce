import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import { Switch, Route } from 'react-router-dom'
import MyCart from './Components/Toolbar/MyCart';
import Details from './Components/Toolbar/Details';
import ProductsList from './Components/Content/ProductsList';
import Modal from './Components/Content/Modal'
import Address from './Components/BuyNowPage/Sucess';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <Switch>
          <Route path="/" exact component={ProductsList} />
          <Route path="/cart" component={MyCart} />
          <Route path="/details" component={Details} />
          <Route path="/Sucess" component={Address} />
        </Switch>
        <Modal />

      </React.Fragment>
    );
  }
}

export default App;
