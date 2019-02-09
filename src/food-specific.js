import React, { Component } from 'react';
import './food-specific.scss';
import styled from 'styled-components';

const ImageCard = styled.div`
  height: 400px;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-color: #f5f5f5;
  /* styled-components 모듈에 특정 값을 주입하면 그 값을 이용해서 스타일을 수정할 수 있습니다. */
  background-image: ${p => (p.photo ? `url('${p.photo}')` : '')};
  background-position: 50% 50%;
  background-size: cover;
`;

class FoodSpecific extends Component {
  static defaultProps = {
    foodSpecific: {
      name: 'Traditional-food-not-found',
      photo: '',
      subIntro: 'There is no food data',
      mainIntro: 'There is no food data',
      cookingMethod: 'There is no food data',
      spec: 'There is no food data'
    }
  };

  render() {
    const renderText = text => {
      const textArray = text.split('\n');
      return textArray.map((sentence, idx) => {
        return <p key={idx}>{sentence}</p>;
      });
    };

    return (
      <div className="food-specific-container">
        <ImageCard photo={this.props.foodSpecific.photo} />

        <div className="food-specific-header">
          <div>
            <span>{this.props.foodSpecific.name}</span>
          </div>
          <div>
            <span>재료</span>
            <span>{this.props.foodSpecific.spec}</span>
          </div>
        </div>

        <div className="food-specific-content">
          <div>
            <span>정보</span>
          </div>
          <div>{renderText(this.props.foodSpecific.mainIntro)}</div>
        </div>
        <div className="food-specific-content">
          <div>
            <span>조리 방법</span>
          </div>
          <div>{renderText(this.props.foodSpecific.cookingMethod)}</div>
        </div>
      </div>
    );
  }
}

export default FoodSpecific;
