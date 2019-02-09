import React, { Component } from 'react';
import FoodCard from './food-card';

class App extends Component {
  static defaultProps = {
    foodData: []
  };

  render() {
    // 음식의 배열을 받아, 각각의 음식을 미리 만들어 두었던 FoodCard 컴포넌트로 출력해 줍니다.
    const renderFoodCard = foods => {
      return foods.map((food, idx) => {
        return <FoodCard key={idx} photo={food.photo} name={food.name} subIntro={food.subIntro} />;
      });
    };

    return <div id="app-food-card-container">{renderFoodCard(this.props.foodData)}</div>;
  }
}

export default App;
