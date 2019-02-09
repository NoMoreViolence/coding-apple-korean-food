import React, { Component } from 'react';
import './App.scss';
import koreaFoodData from './food-data';
import FoodCardList from './food-card-list';

import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import FoodSpecific from './food-specific';

class App extends Component {
  state = {
    foodData: koreaFoodData
  };

  pickData = foodData => {
    return foodData.filter(food => {
      if (food.name === this.props.location.pathname.split('/')[2]) {
        return true;
      }
      return false;
    })[0];
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goToMain = () => {
    this.props.history.push('/foods');
  };

  go = () => {
    this.props.history.go(1);
  };

  render() {
    return (
      <div id="app-container">
        <div id="app">
          <div id="app-header">
            <span>한국의 전통 음식</span>
          </div>

          <Switch>
            <Route path="/foods/:foodName" render={() => <FoodSpecific foodSpecific={this.pickData(this.state.foodData)} />} />
            <Route path="/foods" render={() => <FoodCardList foodData={this.state.foodData} />} />
            <Redirect to="/foods" />
          </Switch>

          <div id="app-history-button">
            <button onClick={this.goBack}>뒤로</button>
            <button onClick={this.goToMain}>메인 페이지로</button>
            <button onClick={this.go}>앞으로</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
